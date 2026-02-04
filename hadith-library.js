/* ==========================================
   SIJJEEN HADITH LIBRARY - ULTRA FAST VERSION
   - CDN Support for instant loading
   - Grader fields display
   - HD Image Generation (3x resolution)
   ========================================== */

// ==========================================
// CONFIGURATION - USE CDN URLs!
// ==========================================
const BOOKS_MANIFEST = [
    {
        id: "bukhari",
        // USE CDN URL for fast loading!
        file: "https://cdn.jsdelivr.net/gh/saadhusainn/saadhusainn.github.io@main/hadiths/bukhari.json",
        // Fallback local file
        localFile: "hadiths/bukhari.json",
        name_en: "Ṣaḥīḥ al-Bukhārī",
        name_ar: "صحيح البخاري",
        icon: "assets/sahihalbukhari.png",
        count: 7563,
        version: 1
    },
    {
        id: "muslim",
        file: "https://cdn.jsdelivr.net/gh/saadhusainn/saadhusainn.github.io@main/hadiths/muslim.json",
        localFile: "hadiths/muslim.json",
        name_en: "Ṣaḥīḥ Muslim",
        name_ar: "صحيح مسلم",
        icon: "assets/sahihmuslim.png",
        count: 7500,
        version: 1
    },
   {
        id: "abudawud",
        file: "https://cdn.jsdelivr.net/gh/saadhusainn/saadhusainn.github.io@main/hadiths/abudawud.json",
        localFile: "hadiths/abudawud.json",
        name_en: "Sunan Abū Dāwūd",
        name_ar: "سُنَنُ أَبِي دَاوُد",
        icon: "assets/abudawud.png",
        count: 5274,
        version: 1
   }
    // Add more books with CDN URLs
];

// Image quality multiplier (3 = 3x resolution for HD)
const IMAGE_SCALE = 3;

// Cache settings
const CACHE_EXPIRY_DAYS = 30;

// ==========================================
// STATE
// ==========================================
var currentBook = null;
var currentBookData = [];
var chapters = [];
var currentChapter = null;
var hadiths = [];
var searchResults = [];
var currentView = 'books';

var imageCanvas = null;
var imageCtx = null;

// ==========================================
// CACHE FUNCTIONS (IndexedDB for larger storage)
// ==========================================
var dbPromise = null;

function openDB() {
    if (dbPromise) return dbPromise;
    
    dbPromise = new Promise(function(resolve, reject) {
        var request = indexedDB.open('SijjeenHadithDB', 1);
        
        request.onerror = function() {
            console.warn('IndexedDB not available, using localStorage');
            resolve(null);
        };
        
        request.onsuccess = function() {
            resolve(request.result);
        };
        
        request.onupgradeneeded = function(e) {
            var db = e.target.result;
            if (!db.objectStoreNames.contains('books')) {
                db.createObjectStore('books', { keyPath: 'id' });
            }
        };
    });
    
    return dbPromise;
}

async function saveToCache(bookId, data, version) {
    try {
        var db = await openDB();
        
        if (db) {
            // Use IndexedDB
            return new Promise(function(resolve) {
                var tx = db.transaction('books', 'readwrite');
                var store = tx.objectStore('books');
                store.put({
                    id: bookId,
                    data: data,
                    version: version,
                    timestamp: Date.now()
                });
                tx.oncomplete = function() {
                    console.log('✅ Saved to IndexedDB:', bookId);
                    resolve(true);
                };
                tx.onerror = function() { resolve(false); };
            });
        } else {
            // Fallback to localStorage
            try {
                localStorage.setItem('hadith_' + bookId, JSON.stringify({
                    data: data,
                    version: version,
                    timestamp: Date.now()
                }));
                return true;
            } catch (e) {
                console.warn('localStorage full');
                return false;
            }
        }
    } catch (e) {
        return false;
    }
}

async function getFromCache(bookId, requiredVersion) {
    try {
        var db = await openDB();
        
        if (db) {
            return new Promise(function(resolve) {
                var tx = db.transaction('books', 'readonly');
                var store = tx.objectStore('books');
                var request = store.get(bookId);
                
                request.onsuccess = function() {
                    var result = request.result;
                    if (!result) { resolve(null); return; }
                    
                    // Check version
                    if (result.version !== requiredVersion) { resolve(null); return; }
                    
                    // Check expiry
                    var ageInDays = (Date.now() - result.timestamp) / (1000 * 60 * 60 * 24);
                    if (ageInDays > CACHE_EXPIRY_DAYS) { resolve(null); return; }
                    
                    console.log('📦 Loaded from IndexedDB:', bookId);
                    resolve(result.data);
                };
                
                request.onerror = function() { resolve(null); };
            });
        } else {
            // Fallback localStorage
            var stored = localStorage.getItem('hadith_' + bookId);
            if (!stored) return null;
            
            var parsed = JSON.parse(stored);
            if (parsed.version !== requiredVersion) return null;
            
            var ageInDays = (Date.now() - parsed.timestamp) / (1000 * 60 * 60 * 24);
            if (ageInDays > CACHE_EXPIRY_DAYS) return null;
            
            return parsed.data;
        }
    } catch (e) {
        return null;
    }
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sijjeen Hadith Library - Ultra Fast Version');
    
    if (document.getElementById('booksList')) {
        initBrowser();
    } else if (document.getElementById('hadithArticle')) {
        loadHadithView();
    }
});

function initBrowser() {
    renderBooks();
    setupEvents();
    // Pre-warm cache for faster subsequent loads
    preloadBooks();
}

function setupEvents() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') { e.preventDefault(); performSearch(); }
        });
    }
    
    var jumpInput = document.getElementById('jumpInput');
    if (jumpInput) {
        jumpInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') { e.preventDefault(); jumpToHadith(); }
        });
    }
}

// Pre-load books in background for instant access later
async function preloadBooks() {
    for (var i = 0; i < BOOKS_MANIFEST.length; i++) {
        var book = BOOKS_MANIFEST[i];
        var cached = await getFromCache(book.id, book.version || 1);
        if (!cached) {
            // Preload in background (low priority)
            setTimeout(function(b) {
                return function() {
                    preloadBook(b);
                };
            }(book), i * 2000); // Stagger preloads
        }
    }
}

async function preloadBook(book) {
    try {
        console.log('Preloading:', book.name_en);
        var response = await fetch(book.file);
        if (response.ok) {
            var data = await response.json();
            await saveToCache(book.id, data, book.version || 1);
            // Update UI to show cached
            renderBooks();
        }
    } catch (e) {
        console.log('Preload failed for', book.id);
    }
}

// ==========================================
// UTILITIES
// ==========================================
function extractNumFromRef(ref) {
    if (!ref) return null;
    var match = String(ref).match(/[:\s](\d+)/);
    return match ? parseInt(match[1]) : null;
}

function normalizeArabic(text) {
    if (!text) return '';
    return String(text)
        .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
        .replace(/[\u0671]/g, '\u0627')
        .replace(/[أإآ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .toLowerCase().trim();
}

function stripHtml(html) {
    if (!html) return '';
    return String(html)
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, ' ').trim();
}

function truncate(text, len) {
    if (!text) return '';
    return text.length > len ? text.substring(0, len) + '...' : text;
}

function getGradeClass(grade) {
    if (!grade) return '';
    var g = String(grade).toLowerCase();
    if (g.indexOf('sahih') !== -1 || g.indexOf('agreed') !== -1 || g.indexOf('sound') !== -1) return 'sahih';
    if (g.indexOf('hasan') !== -1 || g.indexOf('good') !== -1) return 'hasan';
    if (g.indexOf('daif') !== -1 || g.indexOf('weak') !== -1) return 'daif';
    return '';
}

function toArabicNumerals(num) {
    var arabicNums = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return String(num).replace(/[0-9]/g, function(d) { return arabicNums[parseInt(d)]; });
}

function toast(msg) {
    var existing = document.getElementById('toast');
    if (existing) existing.remove();
    
    var t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    
    setTimeout(function() {
        t.classList.add('hidden');
        setTimeout(function() { t.remove(); }, 300);
    }, 2500);
}

// ==========================================
// RENDER BOOKS
// ==========================================
async function renderBooks() {
    var list = document.getElementById('booksList');
    if (!list) return;

    var html = '';
    for (var i = 0; i < BOOKS_MANIFEST.length; i++) {
        var book = BOOKS_MANIFEST[i];
        var cached = await getFromCache(book.id, book.version || 1);
        var badge = cached ? ' <span class="cache-badge">⚡</span>' : '';
        var nameData = (book.name_en + ' ' + book.name_ar).toLowerCase();
        
        html += '<div class="book-item" data-book-id="' + book.id + '" data-name="' + nameData + '">' +
            '<div class="book-icon">' +
                '<img src="' + book.icon + '" alt="" onerror="this.style.display=\'none\'">' +
            '</div>' +
            '<div class="book-info">' +
                '<div class="book-name-en">' + book.name_en + badge + '</div>' +
                '<div class="book-name-ar">' + book.name_ar + '</div>' +
                '<div class="book-count">' + (book.count || '?').toLocaleString() + ' hadiths</div>' +
            '</div>' +
            '<span class="item-arrow">→</span>' +
        '</div>';
    }
    list.innerHTML = html;
    
    list.querySelectorAll('.book-item').forEach(function(item) {
        item.addEventListener('click', function() {
            openBook(this.dataset.bookId);
        });
    });
}

function filterBooks() {
    var query = normalizeArabic(document.getElementById('bookSearchInput')?.value || '');
    document.querySelectorAll('.book-item').forEach(function(item) {
        var name = normalizeArabic(item.dataset.name || '');
        item.style.display = (!query || name.indexOf(query) !== -1) ? 'flex' : 'none';
    });
}

// ==========================================
// OPEN BOOK (FAST!)
// ==========================================
async function openBook(bookId) {
    var book = BOOKS_MANIFEST.find(function(b) { return b.id === bookId; });
    if (!book) { toast('Book not found'); return; }

    currentBook = book;
    
    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = book.name_en;
    
    showView('chapters');
    var chaptersList = document.getElementById('chaptersList');
    
    var bookSearch = document.getElementById('bookSearch');
    if (bookSearch) bookSearch.style.display = 'none';

    // Show loading
    if (chaptersList) {
        chaptersList.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading...</p></div>';
    }

    // Try cache first (instant!)
    var cachedData = await getFromCache(bookId, book.version || 1);
    
    if (cachedData) {
        console.log('⚡ Instant load from cache!');
        currentBookData = cachedData;
        processBookData();
        toast('⚡ Loaded instantly!');
        return;
    }

    // Not cached, download from CDN
    console.log('Downloading from CDN:', book.file);
    var startTime = Date.now();

    try {
        // Try CDN first, then local fallback
        var response = await fetch(book.file);
        
        if (!response.ok) {
            // Try local fallback
            if (book.localFile) {
                response = await fetch(book.localFile);
            }
        }
        
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }
        
        var data = await response.json();
        var elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log('Downloaded in', elapsed, 's');
        
        // Save to cache for next time
        saveToCache(bookId, data, book.version || 1);
        
        currentBookData = data;
        processBookData();
        toast('✅ Loaded & cached for next time!');
        
        // Update books list to show cache badge
        renderBooks();
        
    } catch (err) {
        console.error('Load error:', err);
        if (chaptersList) {
            chaptersList.innerHTML = '<div class="no-results">' +
                '<p>❌ Failed to load</p>' +
                '<p style="font-size:12px;color:#888">' + err.message + '</p>' +
                '<button onclick="openBook(\'' + bookId + '\')" class="retry-btn">Retry</button>' +
            '</div>';
        }
    }
}

function processBookData() {
    extractChapters();
    
    var bookTitle = document.getElementById('bookTitle');
    var bookMeta = document.getElementById('bookMeta');
    
    if (bookTitle && currentBook) bookTitle.textContent = currentBook.name_en;
    if (bookMeta) bookMeta.textContent = chapters.length + ' chapters • ' + currentBookData.length.toLocaleString() + ' hadiths';
    
    renderChapters();
    showBottomNav();
}

// ==========================================
// CHAPTERS
// ==========================================
function extractChapters() {
    var map = {};
    var order = [];
    
    currentBookData.forEach(function(h, i) {
        var chId = h.h1 || ('ch_' + i);
        var num = h.num || extractNumFromRef(h.ref) || (i + 1);
        
        if (!map[chId]) {
            map[chId] = {
                id: chId,
                num: h.h1 || '?',
                title_ar: h.h1_title || '',
                title_en: h.h1_title_en || '',
                start: h.h1_start ? parseInt(h.h1_start) : num,
                hadiths: [],
                startNum: Infinity,
                endNum: -Infinity
            };
            order.push(chId);
        }
        
        var ch = map[chId];
        ch.hadiths.push(h);
        if (num < ch.startNum) ch.startNum = num;
        if (num > ch.endNum) ch.endNum = num;
    });
    
    chapters = order.map(function(id) {
        var ch = map[id];
        if (ch.startNum === Infinity) ch.startNum = ch.start || 1;
        if (ch.endNum === -Infinity) ch.endNum = ch.startNum + ch.hadiths.length - 1;
        return ch;
    });
}

function renderChapters() {
    var list = document.getElementById('chaptersList');
    if (!list) return;

    if (!chapters.length) {
        list.innerHTML = '<div class="no-results"><p>No chapters found</p></div>';
        return;
    }

    list.innerHTML = chapters.map(function(ch) {
        return '<div class="chapter-item" data-id="' + ch.id + '">' +
            '<div class="chapter-num">Chapter ' + ch.num + '</div>' +
            '<div class="chapter-title-ar">' + (ch.title_ar || 'بدون عنوان') + '</div>' +
            '<div class="chapter-title-en">' + (ch.title_en || '') + '</div>' +
            '<div class="chapter-meta">' + ch.hadiths.length + ' hadiths <span class="range">(' + ch.startNum + ' - ' + ch.endNum + ')</span></div>' +
        '</div>';
    }).join('');
    
    list.querySelectorAll('.chapter-item').forEach(function(item) {
        item.addEventListener('click', function() { openChapter(this.dataset.id); });
    });
}

function openChapter(chapterId) {
    var chapter = chapters.find(function(c) { return String(c.id) === String(chapterId); });
    if (!chapter) { toast('Chapter not found'); return; }

    currentChapter = chapter;
    hadiths = chapter.hadiths;

    var pageTitle = document.getElementById('pageTitle');
    var chapterNumber = document.getElementById('chapterNumber');
    var chapterTitle = document.getElementById('chapterTitle');
    var chapterMeta = document.getElementById('chapterMeta');

    if (pageTitle) pageTitle.textContent = 'Ch. ' + chapter.num;
    if (chapterNumber) chapterNumber.textContent = 'Chapter ' + chapter.num;
    if (chapterTitle) chapterTitle.textContent = chapter.title_en || chapter.title_ar || 'Chapter';
    if (chapterMeta) chapterMeta.textContent = chapter.hadiths.length + ' hadiths (' + chapter.startNum + ' - ' + chapter.endNum + ')';

    showView('hadiths');
    renderHadiths(hadiths, 'hadithsList');
}

// ==========================================
// HADITHS LIST
// ==========================================
function renderHadiths(arr, containerId) {
    var list = document.getElementById(containerId);
    if (!list) return;

    if (!arr || !arr.length) {
        list.innerHTML = '<div class="no-results"><p>No hadiths found</p></div>';
        return;
    }

    list.innerHTML = arr.map(function(h, i) {
        var num = h.num || extractNumFromRef(h.ref) || (i + 1);
        var grade = h.grade_grade_en || '';
        
        return '<div class="hadith-item" data-index="' + i + '" data-container="' + containerId + '">' +
            '<div class="hadith-item-header">' +
                '<span class="hadith-item-num">#' + num + '</span>' +
                '<span class="hadith-item-grade ' + getGradeClass(grade) + '">' + (grade || '?') + '</span>' +
            '</div>' +
            '<div class="hadith-preview-ar">' + truncate(stripHtml(h.body), 80) + '</div>' +
            '<div class="hadith-preview-en">' + truncate(stripHtml(h.body_en), 100) + '</div>' +
        '</div>';
    }).join('');
    
    list.querySelectorAll('.hadith-item').forEach(function(item) {
        item.addEventListener('click', function() {
            openHadith(parseInt(this.dataset.index), this.dataset.container);
        });
    });
}

function openHadith(index, source) {
    var arr = source === 'searchResultsList' ? searchResults : hadiths;
    if (!arr || !arr[index]) { toast('Hadith not found'); return; }

    var h = arr[index];
    h._num = h.num || extractNumFromRef(h.ref) || (index + 1);

    localStorage.setItem('currentHadith', JSON.stringify(h));
    localStorage.setItem('currentBookId', currentBook?.id || '');
    localStorage.setItem('currentBookName', currentBook?.name_en || h.book_name_en || 'Unknown');
    localStorage.setItem('currentBookNameAr', currentBook?.name_ar || h.book_name || '');
    localStorage.setItem('hadithIndex', String(index));
    localStorage.setItem('hadithsList', JSON.stringify(arr));

    window.location.href = 'hadith-view.html';
}

// ==========================================
// HADITH VIEW PAGE (With Grader Info)
// ==========================================
function loadHadithView() {
    var data = localStorage.getItem('currentHadith');
    if (!data) {
        document.getElementById('loading').innerHTML = '<p>No hadith</p><a href="hadith.html">Go back</a>';
        return;
    }

    try {
        var h = JSON.parse(data);
        var bookName = localStorage.getItem('currentBookName') || h.book_name_en || 'Unknown';
        var bookNameAr = localStorage.getItem('currentBookNameAr') || h.book_name || '';
        var index = parseInt(localStorage.getItem('hadithIndex') || '0');
        var list = JSON.parse(localStorage.getItem('hadithsList') || '[]');

        populateHadithView(h, bookName, bookNameAr, index, list.length);
    } catch (e) {
        console.error(e);
        toast('Error loading');
    }
}

function populateHadithView(h, bookName, bookNameAr, index, total) {
    var num = h._num || h.num || extractNumFromRef(h.ref) || (index + 1);
    
    // Header
    setText('hadithRef', '#' + num);
    setText('bookName', bookName);
    setText('hadithNum', '#' + num);

    // Chapter
    var chapterBox = document.getElementById('chapterBox');
    if (h.h1_title || h.h1_title_en) {
        setText('chapterAr', h.h1_title || '');
        setText('chapterEn', h.h1_title_en || '');
    } else if (chapterBox) {
        chapterBox.style.display = 'none';
    }

    // Chain & Body
    setHtml('chainAr', h.chain || '<em style="color:#999">—</em>');
    setHtml('bodyAr', h.body || '<em style="color:#999">No text</em>');
    setHtml('chainEn', h.chain_en || '<em style="color:#999">—</em>');
    setHtml('bodyEn', h.body_en || '<em style="color:#999">No translation</em>');

    // Footnotes (NEW!)
    var footnoteBox = document.getElementById('footnoteBox');
    var footnoteAr = document.getElementById('footnoteAr');
    var footnoteEn = document.getElementById('footnoteEn');

    var hasFootnoteAr = h.footnote && 
                        h.footnote.toLowerCase() !== 'none' && 
                        h.footnote.toLowerCase() !== 'null' &&
                        h.footnote.trim() !== '';
    var hasFootnoteEn = h.footnote_en && 
                        h.footnote_en.toLowerCase() !== 'none' && 
                        h.footnote_en.toLowerCase() !== 'null' &&
                        h.footnote_en.trim() !== '';

    if (hasFootnoteAr || hasFootnoteEn) {
        if (footnoteBox) footnoteBox.classList.remove('hidden');
        if (footnoteAr) footnoteAr.innerHTML = hasFootnoteAr ? h.footnote : '';
        if (footnoteEn) footnoteEn.innerHTML = hasFootnoteEn ? h.footnote_en : '';
        
        // Hide individual elements if empty
        if (footnoteAr) footnoteAr.style.display = hasFootnoteAr ? 'block' : 'none';
        if (footnoteEn) footnoteEn.style.display = hasFootnoteEn ? 'block' : 'none';
    } else {
        if (footnoteBox) footnoteBox.classList.add('hidden');
    }

    // Reference
    setText('refValue', h.ref || (bookName + ': ' + num));
    if (bookNameAr) setText('refArabic', bookNameAr + ': ' + toArabicNumerals(num));

    // Grade
    setText('gradeValue', h.grade_grade_en || 'Unknown');
    setText('gradeArabic', h.grade_grade || '');
    
    // Grade details
    var gradeDetails = document.getElementById('gradeDetails');
    if (gradeDetails && h.grade_grades) {
        gradeDetails.textContent = h.grade_grades;
        gradeDetails.style.display = 'inline';
    }

    // Grader
    var graderBox = document.getElementById('graderBox');
    var graderValue = document.getElementById('graderValue');
    var graderArabic = document.getElementById('graderArabic');
    
    if (h.grader_shortName_en || h.grader_shortName) {
        if (graderBox) graderBox.style.display = 'flex';
        if (graderValue) graderValue.textContent = h.grader_shortName_en || '';
        if (graderArabic) graderArabic.textContent = h.grader_shortName || '';
    } else if (graderBox) {
        graderBox.style.display = 'none';
    }

    // Navigation
    setText('navCount', (index + 1) + ' / ' + total);
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= total - 1;

    // Show content
    hide('loading');
    show('hadithArticle');
    show('readingNav');
}
function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setHtml(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

function show(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
}

function hide(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

// Navigation
function goPrev() {
    var index = parseInt(localStorage.getItem('hadithIndex') || '0');
    if (index > 0) navigateTo(index - 1);
}

function goNext() {
    var index = parseInt(localStorage.getItem('hadithIndex') || '0');
    var list = JSON.parse(localStorage.getItem('hadithsList') || '[]');
    if (index < list.length - 1) navigateTo(index + 1);
}

function navigateTo(newIndex) {
    var list = JSON.parse(localStorage.getItem('hadithsList') || '[]');
    if (list[newIndex]) {
        list[newIndex]._num = list[newIndex].num || extractNumFromRef(list[newIndex].ref) || (newIndex + 1);
        localStorage.setItem('currentHadith', JSON.stringify(list[newIndex]));
        localStorage.setItem('hadithIndex', String(newIndex));
        location.reload();
    }
}

function goBack() { history.back(); }

// ==========================================
// SEARCH
// ==========================================
function toggleSearch() {
    var bar = document.getElementById('searchBar');
    if (!bar) return;
    bar.classList.toggle('hidden');
    if (!bar.classList.contains('hidden')) {
        var input = document.getElementById('searchInput');
        if (input) { input.value = ''; input.focus(); }
    }
}

function performSearch() {
    var query = (document.getElementById('searchInput')?.value || '').trim();
    if (query.length < 2) { toast('Enter 2+ characters'); return; }
    if (!currentBookData.length) { toast('Select a book first'); return; }

    var nq = normalizeArabic(query);
    var ql = query.toLowerCase();
    
    searchResults = currentBookData.filter(function(h) {
        return normalizeArabic(h.body || '').indexOf(nq) !== -1 ||
               (h.body_en || '').toLowerCase().indexOf(ql) !== -1 ||
               normalizeArabic(h.chain || '').indexOf(nq) !== -1 ||
               (h.chain_en || '').toLowerCase().indexOf(ql) !== -1;
    });

    hadiths = searchResults;
    setText('searchMeta', searchResults.length + ' results');
    showView('search');
    renderHadiths(searchResults, 'searchResultsList');
    toast('Found ' + searchResults.length);
}

// ==========================================
// COPY
// ==========================================
function showCopyModal() { document.getElementById('copyModal')?.classList.remove('hidden'); }
function hideCopyModal() { document.getElementById('copyModal')?.classList.add('hidden'); }

function copyWithOptions() {
    var h = JSON.parse(localStorage.getItem('currentHadith') || '{}');
    var bookName = localStorage.getItem('currentBookName') || '';
    var bookNameAr = localStorage.getItem('currentBookNameAr') || '';
    var num = h._num || h.num || '?';
    var text = '';
    
    // Arabic text
    if (document.getElementById('copyArabicMatan')?.checked) {
        text += stripHtml(h.body || '') + '\n\n';
    }
    
    // English text
    if (document.getElementById('copyEnglishMatan')?.checked) {
        text += stripHtml(h.body_en || '') + '\n\n';
    }
    
    // Arabic chain
    if (document.getElementById('copyArabicChain')?.checked) {
        text += 'السند: ' + stripHtml(h.chain || '') + '\n\n';
    }
    
    // English chain
    if (document.getElementById('copyEnglishChain')?.checked) {
        text += 'Chain: ' + stripHtml(h.chain_en || '') + '\n\n';
    }
    
    // Footnotes (NEW!)
    if (document.getElementById('copyFootnote')?.checked) {
        var fnAr = h.footnote && 
                   h.footnote.toLowerCase() !== 'none' && 
                   h.footnote.toLowerCase() !== 'null' &&
                   h.footnote.trim() !== '' ? h.footnote : '';
        var fnEn = h.footnote_en && 
                   h.footnote_en.toLowerCase() !== 'none' && 
                   h.footnote_en.toLowerCase() !== 'null' &&
                   h.footnote_en.trim() !== '' ? h.footnote_en : '';
        
        if (fnAr) text += 'حاشية: ' + stripHtml(fnAr) + '\n\n';
        if (fnEn) text += 'Footnote: ' + stripHtml(fnEn) + '\n\n';
    }
    
    // English reference
    if (document.getElementById('copyRefEnglish')?.checked) {
        text += 'Reference: ' + (h.ref || bookName + ': ' + num) + '\n';
    }
    
    // Arabic reference
    if (document.getElementById('copyRefArabic')?.checked) {
        text += 'المرجع: ' + bookNameAr + ': ' + toArabicNumerals(num) + '\n';
    }
    
    // Grade
    if (document.getElementById('copyGrade')?.checked) {
        text += 'Grade: ' + (h.grade_grade_en || '');
        if (h.grade_grade) text += ' (' + h.grade_grade + ')';
        if (h.grader_shortName_en) text += ' - ' + h.grader_shortName_en;
        text += '\n';
    }
    
    // Copy to clipboard
    navigator.clipboard?.writeText(text.trim()).then(function() {
        toast('✓ Copied!'); 
        hideCopyModal();
    }).catch(function() {
        var ta = document.createElement('textarea');
        ta.value = text.trim();
        ta.style.cssText = 'position:fixed;left:-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        toast('✓ Copied!'); 
        hideCopyModal();
    });
}
function shareHadith() {
    var h = JSON.parse(localStorage.getItem('currentHadith') || '{}');
    var text = stripHtml(h.body_en || h.body || '') + '\n\n— ' + (h.ref || '');
    
    if (navigator.share) {
        navigator.share({ title: 'Hadith', text: text, url: location.href });
    } else {
        navigator.clipboard?.writeText(location.href).then(function() { toast('Link copied!'); });
    }
}

// ==========================================
// IMAGE GENERATOR (HD Quality!)
// ==========================================
function showImageModal() {
    var modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('hidden');
        imageCanvas = document.getElementById('imagePreviewCanvas');
        if (imageCanvas) imageCtx = imageCanvas.getContext('2d');
        setTimeout(updateImagePreview, 50);
    }
}

function hideImageModal() { document.getElementById('imageModal')?.classList.add('hidden'); }

function updateImagePreview() {
    if (!imageCanvas || !imageCtx) return;
    
    var h = JSON.parse(localStorage.getItem('currentHadith') || '{}');
    var bookName = localStorage.getItem('currentBookName') || '';
    var num = h._num || h.num || extractNumFromRef(h.ref) || '?';
    
    // Options
    var showArabic = document.getElementById('imgArabicMatan')?.checked ?? true;
    var showEnglish = document.getElementById('imgEnglishMatan')?.checked ?? true;
    var showRef = document.getElementById('imgReference')?.checked ?? true;
    var showGrade = document.getElementById('imgGrade')?.checked ?? false;
    var showFootnote = document.getElementById('imgFootnote')?.checked ?? false;
    
    var ratio = 'fit';
    document.querySelectorAll('input[name="imgRatio"]').forEach(function(r) {
        if (r.checked) ratio = r.value;
    });
    
    var bgColor = document.getElementById('imgBgColor')?.value || '#ffffff';
    var arabicColor = document.getElementById('imgArabicColor')?.value || '#666666';
    var englishColor = document.getElementById('imgEnglishColor')?.value || '#1a1a1a';
    
    var arabicSize = parseInt(document.getElementById('imgArabicSize')?.value || 28);
    var englishSize = parseInt(document.getElementById('imgEnglishSize')?.value || 18);
    
    // Update displays
    if (document.getElementById('arabicSizeVal')) document.getElementById('arabicSizeVal').textContent = arabicSize;
    if (document.getElementById('englishSizeVal')) document.getElementById('englishSizeVal').textContent = englishSize;
    
    // Prepare text
    var arabicText = showArabic ? stripHtml(h.body || '') : '';
    var englishText = showEnglish ? stripHtml(h.body_en || '') : '';
    var refText = showRef ? (h.ref || bookName + ': ' + num) : '';
    var gradeText = showGrade ? ((h.grade_grade_en || '') + (h.grader_shortName_en ? ' - ' + h.grader_shortName_en : '')) : '';
    
    // Footnote text (only if not "none")
    var footnoteText = '';
    if (showFootnote) {
        var fnEn = h.footnote_en && 
                   h.footnote_en.toLowerCase() !== 'none' && 
                   h.footnote_en.toLowerCase() !== 'null' &&
                   h.footnote_en.trim() !== '' ? stripHtml(h.footnote_en) : '';
        var fnAr = h.footnote && 
                   h.footnote.toLowerCase() !== 'none' && 
                   h.footnote.toLowerCase() !== 'null' &&
                   h.footnote.trim() !== '' ? stripHtml(h.footnote) : '';
        footnoteText = fnEn || fnAr; // Prefer English
    }
    
    // HD Scale
    var scale = IMAGE_SCALE;
    var padding = 60 * scale;
    var lineHeight = 1.8;
    var baseWidth = 800;
    
    var arSize = arabicSize * scale;
    var enSize = englishSize * scale;
    
    // Calculate dimensions
    imageCtx.font = arSize + 'px Amiri, serif';
    var arabicLines = wrapText(imageCtx, arabicText, baseWidth * scale - padding * 2);
    
    imageCtx.font = enSize + 'px Inter, sans-serif';
    var englishLines = wrapText(imageCtx, englishText, baseWidth * scale - padding * 2);
    
    // Footnote lines
    imageCtx.font = (enSize * 0.75) + 'px Inter, sans-serif';
    var footnoteLines = footnoteText ? wrapText(imageCtx, '* ' + footnoteText, baseWidth * scale - padding * 2) : [];
    
    var contentHeight = padding * 2;
    if (arabicLines.length) contentHeight += arabicLines.length * arSize * lineHeight + 40 * scale;
    if (englishLines.length) contentHeight += englishLines.length * enSize * lineHeight + 40 * scale;
    if (footnoteLines.length) contentHeight += footnoteLines.length * (enSize * 0.75) * lineHeight + 30 * scale;
    if (showRef) contentHeight += enSize * lineHeight + 30 * scale;
    if (showGrade && gradeText) contentHeight += enSize * lineHeight + 20 * scale;
    
    // Canvas size based on ratio
    var width = baseWidth * scale;
    var height = contentHeight;
    
    if (ratio === '1:1') { height = Math.max(width, contentHeight); width = height; }
    else if (ratio === '4:5') height = Math.max(width * 1.25, contentHeight);
    else if (ratio === '9:16') height = Math.max(width * (16/9), contentHeight);
    else if (ratio === '16:9') height = Math.max(width * (9/16), contentHeight);
    
    imageCanvas.width = width;
    imageCanvas.height = height;
    
    // Scale for display
    imageCanvas.style.width = (width / scale) + 'px';
    imageCanvas.style.height = (height / scale) + 'px';
    
    // Draw background
    imageCtx.fillStyle = bgColor;
    imageCtx.fillRect(0, 0, width, height);
    
    // Draw content
    var y = padding + arSize;
    var extraSpace = height - contentHeight;
    if (extraSpace > 0) y += extraSpace / 2;
    
    // Arabic text
    if (arabicLines.length) {
        imageCtx.font = arSize + 'px Amiri, serif';
        imageCtx.fillStyle = arabicColor;
        imageCtx.textAlign = 'right';
        
        arabicLines.forEach(function(line) {
            imageCtx.fillText(line, width - padding, y);
            y += arSize * lineHeight;
        });
        y += 30 * scale;
    }
    
    // English text
    if (englishLines.length) {
        imageCtx.font = enSize + 'px Inter, sans-serif';
        imageCtx.fillStyle = englishColor;
        imageCtx.textAlign = 'left';
        
        englishLines.forEach(function(line) {
            imageCtx.fillText(line, padding, y);
            y += enSize * lineHeight;
        });
        y += 30 * scale;
    }
    
    // Footnote (NEW!)
    if (footnoteLines.length) {
        imageCtx.font = (enSize * 0.75) + 'px Inter, sans-serif';
        imageCtx.fillStyle = '#888888';
        imageCtx.textAlign = 'left';
        
        footnoteLines.forEach(function(line) {
            imageCtx.fillText(line, padding, y);
            y += (enSize * 0.75) * lineHeight;
        });
        y += 20 * scale;
    }
    
    // Reference
    if (showRef && refText) {
        imageCtx.font = (enSize * 0.85) + 'px Inter, sans-serif';
        imageCtx.fillStyle = englishColor;
        imageCtx.textAlign = 'center';
        imageCtx.fillText('— ' + refText + ' —', width / 2, y);
        y += enSize * lineHeight + 15 * scale;
    }
    
    // Grade
    if (showGrade && gradeText) {
        imageCtx.font = (enSize * 0.8) + 'px Inter, sans-serif';
        imageCtx.fillStyle = arabicColor;
        imageCtx.textAlign = 'center';
        imageCtx.fillText(gradeText, width / 2, y);
    }
}
function wrapText(ctx, text, maxWidth) {
    if (!text) return [];
    var words = text.split(/\s+/);
    var lines = [];
    var line = '';
    
    words.forEach(function(word) {
        var test = line ? line + ' ' + word : word;
        if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = word;
        } else {
            line = test;
        }
    });
    if (line) lines.push(line);
    return lines;
}

function setColor(id, color) {
    var el = document.getElementById(id);
    if (el) { el.value = color; updateImagePreview(); }
}

function downloadHadithImage() {
    if (!imageCanvas) { toast('Wait...'); return; }
    
    var h = JSON.parse(localStorage.getItem('currentHadith') || '{}');
    var name = (localStorage.getItem('currentBookName') || 'hadith').replace(/\s+/g, '_');
    var num = h._num || h.num || extractNumFromRef(h.ref) || 'x';
    
    // Create high quality PNG
    var link = document.createElement('a');
    link.download = name + '_' + num + '_HD.png';
    link.href = imageCanvas.toDataURL('image/png', 1.0);
    link.click();
    
    toast('✓ HD Image saved!');
    hideImageModal();
}

// ==========================================
// VIEW MANAGEMENT
// ==========================================
function showView(view) {
    currentView = view;
    ['booksView', 'chaptersView', 'hadithsView', 'searchView'].forEach(function(v) {
        var el = document.getElementById(v);
        if (el) el.classList.toggle('hidden', v !== view + 'View');
    });
    var bs = document.getElementById('bookSearch');
    if (bs) bs.style.display = view === 'books' ? 'block' : 'none';
}

function showBottomNav() { document.getElementById('bottomNav')?.classList.remove('hidden'); }

function handleBack() {
    var pt = document.getElementById('pageTitle');
    if (currentView === 'search' || currentView === 'hadiths') {
        showView('chapters');
        if (pt && currentBook) pt.textContent = currentBook.name_en;
    } else if (currentView === 'chapters') {
        showView('books');
        if (pt) pt.textContent = 'Hadith Books';
        document.getElementById('bottomNav')?.classList.add('hidden');
        currentBook = null; currentBookData = []; chapters = [];
    } else {
        location.href = 'library.html';
    }
}

function showJumpModal() {
    document.getElementById('jumpModal')?.classList.remove('hidden');
    document.getElementById('jumpInput')?.focus();
}

function hideJumpModal() { document.getElementById('jumpModal')?.classList.add('hidden'); }

function handleModalClick(e) {
    if (e.target.classList.contains('modal')) e.target.classList.add('hidden');
}

function jumpToHadith() {
    var num = parseInt(document.getElementById('jumpInput')?.value);
    if (!num) { toast('Enter number'); return; }
    if (!currentBookData.length) { toast('Select book first'); hideJumpModal(); return; }
    
    for (var i = 0; i < currentBookData.length; i++) {
        var h = currentBookData[i];
        var hNum = h.num || extractNumFromRef(h.ref);
        if (parseInt(hNum) === num) {
            hadiths = currentBookData;
            openHadith(i, 'hadithsList');
            hideJumpModal();
            return;
        }
    }
    toast('Hadith #' + num + ' not found');
    hideJumpModal();
}

// ==========================================
// GLOBAL EXPORTS
// ==========================================
window.openBook = openBook;
window.openChapter = openChapter;
window.openHadith = openHadith;
window.filterBooks = filterBooks;
window.handleBack = handleBack;
window.toggleSearch = toggleSearch;
window.performSearch = performSearch;
window.showJumpModal = showJumpModal;
window.hideJumpModal = hideJumpModal;
window.jumpToHadith = jumpToHadith;
window.handleModalClick = handleModalClick;
window.goPrev = goPrev;
window.goNext = goNext;
window.goBack = goBack;
window.showCopyModal = showCopyModal;
window.hideCopyModal = hideCopyModal;
window.copyWithOptions = copyWithOptions;
window.shareHadith = shareHadith;
window.showImageModal = showImageModal;
window.hideImageModal = hideImageModal;
window.updateImagePreview = updateImagePreview;
window.setColor = setColor;
window.downloadHadithImage = downloadHadithImage;
window.toast = toast;
