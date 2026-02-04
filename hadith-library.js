/* ==========================================
   SIJJEEN HADITH LIBRARY - Lite Version
   Optimized for your trimmed JSON fields
   ========================================== */

// ==========================================
// CONFIGURATION - ADD YOUR BOOKS HERE
// ==========================================
const BOOKS_MANIFEST = [
    {
        id: "bukhari",
        file: "hadiths/bukhari.json",
        name_en: "Ṣaḥīḥ al-Bukhārī",
        name_ar: "صحيح البخاري",
        icon: "assets/sahihalbukhari.png",
        count: 7563
    },
    {
        id: "muslim",
        file: "hadiths/muslim.json",
        name_en: "Ṣaḥīḥ Muslim",
        name_ar: "صحيح مسلم",
        icon: "assets/sahihmuslim.png",
        count: 7500
    },
    {
        id: "abudawud",
        file: "hadiths/abudawud.json",
        name_en:"Sunan Abū Dāwūd",
        name_ar:"سُنَنُ أَبِي دَاوُد",
        icon:"assets/abudawud.png",
        count:5274
    }
    // Add more books...
];

// ==========================================
// STATE VARIABLES
// ==========================================
var currentBook = null;
var currentBookData = [];
var chapters = [];
var currentChapter = null;
var hadiths = [];
var searchResults = [];
var currentView = 'books';
var cache = {};

var imageCanvas = null;
var imageCtx = null;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Sijjeen Hadith Library (Lite)...');
    
    if (document.getElementById('booksList')) {
        initBrowser();
    } else if (document.getElementById('hadithArticle')) {
        loadHadithView();
    }
});

function initBrowser() {
    renderBooks();
    setupBrowserEvents();
}

function setupBrowserEvents() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }
    
    var jumpInput = document.getElementById('jumpInput');
    if (jumpInput) {
        jumpInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                jumpToHadith();
            }
        });
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Extract hadith number from ref field like "bukhari:1" or "Bukhari: 123"
function extractNumFromRef(ref) {
    if (!ref) return null;
    var match = String(ref).match(/[:\s](\d+)/);
    return match ? parseInt(match[1]) : null;
}

// Get hadith number from various possible fields
function getHadithNum(h, index) {
    // Try num field first
    if (h.num) return parseInt(h.num);
    
    // Try extracting from ref
    var fromRef = extractNumFromRef(h.ref);
    if (fromRef) return fromRef;
    
    // Fallback to index + 1
    return index + 1;
}

function normalizeArabic(text) {
    if (!text) return '';
    return String(text)
        .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
        .replace(/[\u0671]/g, '\u0627')
        .replace(/[أإآ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .toLowerCase()
        .trim();
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
        .replace(/\s+/g, ' ')
        .trim();
}

function truncate(text, len) {
    if (!text) return '';
    text = String(text);
    return text.length > len ? text.substring(0, len) + '...' : text;
}

function getGradeClass(grade) {
    if (!grade) return '';
    var g = String(grade).toLowerCase();
    if (g.indexOf('sahih') !== -1 || g.indexOf('agreed') !== -1 || g.indexOf('authentic') !== -1) return 'sahih';
    if (g.indexOf('hasan') !== -1 || g.indexOf('good') !== -1) return 'hasan';
    if (g.indexOf('daif') !== -1 || g.indexOf('weak') !== -1) return 'daif';
    return '';
}

function toArabicNumerals(num) {
    var arabicNums = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return String(num).replace(/[0-9]/g, function(d) {
        return arabicNums[parseInt(d)];
    });
}

function toast(msg) {
    var existing = document.getElementById('toast');
    if (existing) existing.parentNode.removeChild(existing);
    
    var t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    
    setTimeout(function() {
        t.className = 'toast hidden';
        setTimeout(function() {
            if (t.parentNode) t.parentNode.removeChild(t);
        }, 300);
    }, 2500);
}

// ==========================================
// RENDER BOOKS
// ==========================================
function renderBooks() {
    var list = document.getElementById('booksList');
    if (!list) return;

    if (BOOKS_MANIFEST.length === 0) {
        list.innerHTML = '<div class="no-results"><p>No books available</p></div>';
        return;
    }

    var html = '';
    for (var i = 0; i < BOOKS_MANIFEST.length; i++) {
        var book = BOOKS_MANIFEST[i];
        var nameData = (book.name_en + ' ' + book.name_ar).toLowerCase();
        html += '<div class="book-item" data-book-id="' + book.id + '" data-name="' + nameData + '">' +
            '<div class="book-icon">' +
                '<img src="' + book.icon + '" alt="' + book.name_en + '" onerror="this.style.display=\'none\'">' +
            '</div>' +
            '<div class="book-info">' +
                '<div class="book-name-en">' + book.name_en + '</div>' +
                '<div class="book-name-ar">' + book.name_ar + '</div>' +
                '<div class="book-count">' + (book.count ? book.count.toLocaleString() : '?') + ' hadiths</div>' +
            '</div>' +
            '<span class="item-arrow">→</span>' +
        '</div>';
    }
    list.innerHTML = html;
    
    var items = list.querySelectorAll('.book-item');
    for (var j = 0; j < items.length; j++) {
        items[j].addEventListener('click', function() {
            var bookId = this.getAttribute('data-book-id');
            openBook(bookId);
        });
    }
}

function filterBooks() {
    var input = document.getElementById('bookSearchInput');
    if (!input) return;
    
    var query = normalizeArabic(input.value);
    var items = document.querySelectorAll('.book-item');
    
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var name = item.getAttribute('data-name') || '';
        var normalizedName = normalizeArabic(name);
        
        if (!query || normalizedName.indexOf(query) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    }
}

// ==========================================
// OPEN BOOK
// ==========================================
function openBook(bookId) {
    var book = null;
    for (var i = 0; i < BOOKS_MANIFEST.length; i++) {
        if (BOOKS_MANIFEST[i].id === bookId) {
            book = BOOKS_MANIFEST[i];
            break;
        }
    }
    
    if (!book) {
        toast('Book not found');
        return;
    }

    currentBook = book;
    
    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = book.name_en;
    
    showView('chapters');
    var chaptersList = document.getElementById('chaptersList');
    if (chaptersList) {
        chaptersList.innerHTML = '<div class="loading">' +
            '<div class="spinner"></div>' +
            '<p>Loading ' + book.name_en + '...</p>' +
            '<p class="loading-hint">Please wait...</p>' +
        '</div>';
    }
    
    var bookSearch = document.getElementById('bookSearch');
    if (bookSearch) bookSearch.style.display = 'none';
    
    // Check cache
    if (cache[bookId]) {
        console.log('Loading from cache');
        currentBookData = cache[bookId];
        processBookData();
        return;
    }
    
    console.log('Fetching:', book.file);
    
    fetch(book.file)
        .then(function(response) {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.json();
        })
        .then(function(data) {
            console.log('Loaded', data.length, 'hadiths');
            
            // Add index-based num if missing
            for (var i = 0; i < data.length; i++) {
                if (!data[i].num) {
                    data[i]._index = i;
                    data[i]._num = getHadithNum(data[i], i);
                }
            }
            
            currentBookData = data;
            cache[bookId] = data;
            processBookData();
        })
        .catch(function(err) {
            console.error('Error:', err);
            if (chaptersList) {
                chaptersList.innerHTML = '<div class="no-results">' +
                    '<p>❌ Failed to load book</p>' +
                    '<p style="font-size:12px;color:#888;margin-top:8px">' + err.message + '</p>' +
                    '<button onclick="openBook(\'' + bookId + '\')">Retry</button>' +
                '</div>';
            }
        });
}

function processBookData() {
    extractChapters();
    
    var bookTitle = document.getElementById('bookTitle');
    var bookMeta = document.getElementById('bookMeta');
    
    if (bookTitle && currentBook) bookTitle.textContent = currentBook.name_en;
    if (bookMeta) {
        bookMeta.textContent = chapters.length + ' chapters • ' + currentBookData.length.toLocaleString() + ' hadiths';
    }
    
    renderChapters();
    showBottomNav();
}

// ==========================================
// EXTRACT CHAPTERS (Using your fields: h1, h1_title, h1_title_en, h1_start, h1_count)
// ==========================================
function extractChapters() {
    var map = {};
    var order = [];
    
    for (var i = 0; i < currentBookData.length; i++) {
        var h = currentBookData[i];
        var chapterId = h.h1 || ('ch_' + i);
        var hadithNum = h._num || h.num || getHadithNum(h, i);
        
        if (!map[chapterId]) {
            map[chapterId] = {
                id: chapterId,
                num: h.h1 || '?',
                title_ar: h.h1_title || '',
                title_en: h.h1_title_en || '',
                start: h.h1_start ? parseInt(h.h1_start) : hadithNum,
                count: h.h1_count ? parseInt(h.h1_count) : 0,
                hadiths: [],
                startNum: 999999,
                endNum: 0
            };
            order.push(chapterId);
        }
        
        var chapter = map[chapterId];
        chapter.hadiths.push(h);
        
        if (hadithNum < chapter.startNum) chapter.startNum = hadithNum;
        if (hadithNum > chapter.endNum) chapter.endNum = hadithNum;
    }
    
    chapters = [];
    for (var j = 0; j < order.length; j++) {
        var ch = map[order[j]];
        
        // Use h1_start if available, otherwise use calculated
        if (ch.start && ch.startNum === 999999) {
            ch.startNum = ch.start;
        }
        if (ch.startNum === 999999) ch.startNum = 1;
        
        // Calculate end from start + count if available
        if (ch.count > 0 && ch.endNum === 0) {
            ch.endNum = ch.startNum + ch.count - 1;
        }
        if (ch.endNum === 0) ch.endNum = ch.startNum + ch.hadiths.length - 1;
        
        chapters.push(ch);
    }
    
    console.log('Extracted', chapters.length, 'chapters');
}

function renderChapters() {
    var list = document.getElementById('chaptersList');
    if (!list) return;

    if (chapters.length === 0) {
        list.innerHTML = '<div class="no-results"><p>No chapters found</p></div>';
        return;
    }

    var html = '';
    for (var i = 0; i < chapters.length; i++) {
        var ch = chapters[i];
        var count = ch.hadiths.length;
        var rangeText = count > 0 ? ' (' + ch.startNum + ' - ' + ch.endNum + ')' : '';
        
        html += '<div class="chapter-item" data-chapter-id="' + ch.id + '">' +
            '<div class="chapter-num">Chapter ' + ch.num + '</div>' +
            '<div class="chapter-title-ar">' + (ch.title_ar || 'بدون عنوان') + '</div>' +
            '<div class="chapter-title-en">' + (ch.title_en || '') + '</div>' +
            '<div class="chapter-meta">' + count + ' hadith' + (count !== 1 ? 's' : '') + 
                '<span class="range">' + rangeText + '</span></div>' +
        '</div>';
    }
    list.innerHTML = html;
    
    var items = list.querySelectorAll('.chapter-item');
    for (var j = 0; j < items.length; j++) {
        items[j].addEventListener('click', function() {
            var chapterId = this.getAttribute('data-chapter-id');
            openChapter(chapterId);
        });
    }
}

// ==========================================
// OPEN CHAPTER
// ==========================================
function openChapter(chapterId) {
    var chapter = null;
    for (var i = 0; i < chapters.length; i++) {
        if (String(chapters[i].id) === String(chapterId)) {
            chapter = chapters[i];
            break;
        }
    }
    
    if (!chapter) {
        toast('Chapter not found');
        return;
    }

    currentChapter = chapter;
    hadiths = chapter.hadiths;

    var pageTitle = document.getElementById('pageTitle');
    var chapterNumber = document.getElementById('chapterNumber');
    var chapterTitle = document.getElementById('chapterTitle');
    var chapterMeta = document.getElementById('chapterMeta');

    if (pageTitle) pageTitle.textContent = 'Ch. ' + chapter.num;
    if (chapterNumber) chapterNumber.textContent = 'Chapter ' + chapter.num;
    if (chapterTitle) chapterTitle.textContent = chapter.title_en || chapter.title_ar || 'Chapter';
    if (chapterMeta) {
        var count = chapter.hadiths.length;
        var range = count > 0 ? ' (' + chapter.startNum + ' - ' + chapter.endNum + ')' : '';
        chapterMeta.textContent = count + ' hadith' + (count !== 1 ? 's' : '') + range;
    }

    showView('hadiths');
    renderHadiths(hadiths, 'hadithsList');
}

// ==========================================
// RENDER HADITHS
// ==========================================
function renderHadiths(hadithsArray, containerId) {
    var list = document.getElementById(containerId);
    if (!list) return;

    if (!hadithsArray || hadithsArray.length === 0) {
        list.innerHTML = '<div class="no-results"><p>No hadiths found</p></div>';
        return;
    }

    var html = '';
    for (var i = 0; i < hadithsArray.length; i++) {
        var h = hadithsArray[i];
        
        // Get hadith number from various sources
        var num = h.num || h._num || extractNumFromRef(h.ref) || (i + 1);
        
        var grade = h.grade_grade_en || '';
        var gradeClass = getGradeClass(grade);
        var bodyAr = truncate(stripHtml(h.body), 80);
        var bodyEn = truncate(stripHtml(h.body_en), 100);
        
        html += '<div class="hadith-item" data-index="' + i + '" data-container="' + containerId + '">' +
            '<div class="hadith-item-header">' +
                '<span class="hadith-item-num">#' + num + '</span>' +
                '<span class="hadith-item-grade ' + gradeClass + '">' + (grade || '?') + '</span>' +
            '</div>' +
            '<div class="hadith-preview-ar">' + bodyAr + '</div>' +
            '<div class="hadith-preview-en">' + bodyEn + '</div>' +
        '</div>';
    }
    list.innerHTML = html;
    
    var items = list.querySelectorAll('.hadith-item');
    for (var j = 0; j < items.length; j++) {
        items[j].addEventListener('click', function() {
            var index = parseInt(this.getAttribute('data-index'));
            var container = this.getAttribute('data-container');
            openHadith(index, container);
        });
    }
}

// ==========================================
// OPEN HADITH
// ==========================================
function openHadith(index, source) {
    var hadithsSource = source === 'searchResultsList' ? searchResults : hadiths;
    
    if (!hadithsSource || !hadithsSource[index]) {
        toast('Hadith not found');
        return;
    }

    var hadith = hadithsSource[index];
    
    // Add computed num if missing
    hadith._computedNum = hadith.num || hadith._num || extractNumFromRef(hadith.ref) || (index + 1);

    localStorage.setItem('currentHadith', JSON.stringify(hadith));
    localStorage.setItem('currentBookId', currentBook ? currentBook.id : '');
    localStorage.setItem('currentBookName', currentBook ? currentBook.name_en : (hadith.book_name_en || 'Unknown'));
    localStorage.setItem('currentBookNameAr', currentBook ? currentBook.name_ar : (hadith.book_name || ''));
    localStorage.setItem('hadithIndex', String(index));
    localStorage.setItem('hadithsList', JSON.stringify(hadithsSource));

    window.location.href = 'hadith-view.html';
}

// ==========================================
// HADITH VIEW PAGE
// ==========================================
function loadHadithView() {
    var data = localStorage.getItem('currentHadith');
    
    if (!data) {
        var loading = document.getElementById('loading');
        if (loading) {
            loading.innerHTML = '<p>No hadith found</p>' +
                '<a href="hadith.html" style="color:var(--accent);margin-top:10px;display:inline-block;">Go to Library</a>';
        }
        return;
    }

    try {
        var h = JSON.parse(data);
        var bookName = localStorage.getItem('currentBookName') || h.book_name_en || 'Unknown';
        var bookNameAr = localStorage.getItem('currentBookNameAr') || h.book_name || '';
        var index = parseInt(localStorage.getItem('hadithIndex') || '0');
        var listData = localStorage.getItem('hadithsList');
        var total = listData ? JSON.parse(listData).length : 0;

        populateHadithView(h, bookName, bookNameAr, index, total);
    } catch (e) {
        console.error('Error:', e);
        toast('Error loading hadith');
    }
}

function populateHadithView(h, bookName, bookNameAr, index, total) {
    // Get hadith number
    var hadithNum = h._computedNum || h.num || h._num || extractNumFromRef(h.ref) || (index + 1);
    
    // Header
    var hadithRef = document.getElementById('hadithRef');
    if (hadithRef) hadithRef.textContent = '#' + hadithNum;
    
    // Meta
    var bookNameEl = document.getElementById('bookName');
    var hadithNumEl = document.getElementById('hadithNum');
    if (bookNameEl) bookNameEl.textContent = bookName;
    if (hadithNumEl) hadithNumEl.textContent = '#' + hadithNum;

    // Chapter
    var chapterBox = document.getElementById('chapterBox');
    var chapterAr = document.getElementById('chapterAr');
    var chapterEn = document.getElementById('chapterEn');
    
    if (h.h1_title || h.h1_title_en) {
        if (chapterAr) chapterAr.textContent = h.h1_title || '';
        if (chapterEn) chapterEn.textContent = h.h1_title_en || '';
    } else if (chapterBox) {
        chapterBox.style.display = 'none';
    }

    // Chain & Body
    var chainAr = document.getElementById('chainAr');
    var bodyAr = document.getElementById('bodyAr');
    var chainEn = document.getElementById('chainEn');
    var bodyEn = document.getElementById('bodyEn');
    
    if (chainAr) chainAr.innerHTML = h.chain || '<em style="color:#999">—</em>';
    if (bodyAr) bodyAr.innerHTML = h.body || '<em style="color:#999">No text available</em>';
    if (chainEn) chainEn.innerHTML = h.chain_en || '<em style="color:#999">—</em>';
    if (bodyEn) bodyEn.innerHTML = h.body_en || '<em style="color:#999">No translation available</em>';

    // Reference
    var refValue = document.getElementById('refValue');
    var refArabic = document.getElementById('refArabic');
    var ref = h.ref || (bookName + ': ' + hadithNum);
    
    if (refValue) refValue.textContent = ref;
    if (refArabic && bookNameAr) {
        refArabic.textContent = bookNameAr + ': ' + toArabicNumerals(hadithNum);
    }

    // Grade
    var gradeValue = document.getElementById('gradeValue');
    var gradeArabic = document.getElementById('gradeArabic');
    if (gradeValue) gradeValue.textContent = h.grade_grade_en || h.grade_grades || 'Unknown';
    if (gradeArabic) gradeArabic.textContent = h.grade_grade || '';

    // Grader - hide since we don't have this field
    var graderBox = document.getElementById('graderBox');
    if (graderBox) graderBox.style.display = 'none';

    // Navigation
    var navCount = document.getElementById('navCount');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    
    if (navCount) navCount.textContent = (index + 1) + ' / ' + total;
    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= total - 1;

    // Show content
    var loading = document.getElementById('loading');
    var hadithArticle = document.getElementById('hadithArticle');
    var readingNav = document.getElementById('readingNav');
    
    if (loading) loading.style.display = 'none';
    if (hadithArticle) hadithArticle.classList.remove('hidden');
    if (readingNav) readingNav.classList.remove('hidden');
}

// Navigation
function goPrev() {
    var index = parseInt(localStorage.getItem('hadithIndex') || '0');
    if (index > 0) navigateToHadith(index - 1);
}

function goNext() {
    var index = parseInt(localStorage.getItem('hadithIndex') || '0');
    var listData = localStorage.getItem('hadithsList');
    var total = listData ? JSON.parse(listData).length : 0;
    if (index < total - 1) navigateToHadith(index + 1);
}

function navigateToHadith(newIndex) {
    try {
        var listData = localStorage.getItem('hadithsList');
        if (!listData) return;
        
        var list = JSON.parse(listData);
        if (list[newIndex]) {
            list[newIndex]._computedNum = list[newIndex].num || extractNumFromRef(list[newIndex].ref) || (newIndex + 1);
            localStorage.setItem('currentHadith', JSON.stringify(list[newIndex]));
            localStorage.setItem('hadithIndex', String(newIndex));
            location.reload();
        }
    } catch (e) {
        console.error('Navigation error:', e);
    }
}

function goBack() {
    window.history.back();
}

// ==========================================
// SEARCH
// ==========================================
function toggleSearch() {
    var bar = document.getElementById('searchBar');
    if (!bar) return;
    
    if (bar.classList.contains('hidden')) {
        bar.classList.remove('hidden');
        var input = document.getElementById('searchInput');
        if (input) {
            input.value = '';
            input.focus();
        }
    } else {
        bar.classList.add('hidden');
    }
}

function performSearch() {
    var input = document.getElementById('searchInput');
    if (!input) return;
    
    var query = input.value.trim();
    var normalizedQuery = normalizeArabic(query);
    
    if (query.length < 2) {
        toast('Enter at least 2 characters');
        return;
    }

    if (!currentBookData || currentBookData.length === 0) {
        toast('Please select a book first');
        return;
    }

    console.log('Searching for:', query);
    
    searchResults = [];
    for (var i = 0; i < currentBookData.length; i++) {
        var h = currentBookData[i];
        
        var bodyAr = normalizeArabic(h.body || '');
        var bodyEn = (h.body_en || '').toLowerCase();
        var chainAr = normalizeArabic(h.chain || '');
        var chainEn = (h.chain_en || '').toLowerCase();
        
        if (bodyAr.indexOf(normalizedQuery) !== -1 ||
            bodyEn.indexOf(query.toLowerCase()) !== -1 ||
            chainAr.indexOf(normalizedQuery) !== -1 ||
            chainEn.indexOf(query.toLowerCase()) !== -1) {
            searchResults.push(h);
        }
    }

    console.log('Found', searchResults.length, 'results');
    
    hadiths = searchResults;
    
    var searchMeta = document.getElementById('searchMeta');
    if (searchMeta) searchMeta.textContent = searchResults.length + ' result' + (searchResults.length !== 1 ? 's' : '');
    
    showView('search');
    renderHadiths(searchResults, 'searchResultsList');
    
    toast('Found ' + searchResults.length + ' results');
}

// ==========================================
// COPY FUNCTIONS
// ==========================================
function showCopyModal() {
    var modal = document.getElementById('copyModal');
    if (modal) modal.classList.remove('hidden');
}

function hideCopyModal() {
    var modal = document.getElementById('copyModal');
    if (modal) modal.classList.add('hidden');
}

function copyWithOptions() {
    var data = localStorage.getItem('currentHadith');
    if (!data) {
        toast('No hadith to copy');
        return;
    }
    
    var h = JSON.parse(data);
    var bookName = localStorage.getItem('currentBookName') || h.book_name_en || '';
    var bookNameAr = localStorage.getItem('currentBookNameAr') || h.book_name || '';
    var hadithNum = h._computedNum || h.num || extractNumFromRef(h.ref) || '?';
    var text = '';
    
    var copyArabicMatan = document.getElementById('copyArabicMatan');
    var copyEnglishMatan = document.getElementById('copyEnglishMatan');
    var copyArabicChain = document.getElementById('copyArabicChain');
    var copyEnglishChain = document.getElementById('copyEnglishChain');
    var copyRefEnglish = document.getElementById('copyRefEnglish');
    var copyRefArabic = document.getElementById('copyRefArabic');
    var copyGrade = document.getElementById('copyGrade');
    
    if (copyArabicMatan && copyArabicMatan.checked) {
        text += stripHtml(h.body || '') + '\n\n';
    }
    if (copyEnglishMatan && copyEnglishMatan.checked) {
        text += stripHtml(h.body_en || '') + '\n\n';
    }
    if (copyArabicChain && copyArabicChain.checked) {
        text += 'السند: ' + stripHtml(h.chain || '') + '\n\n';
    }
    if (copyEnglishChain && copyEnglishChain.checked) {
        text += 'Chain: ' + stripHtml(h.chain_en || '') + '\n\n';
    }
    if (copyRefEnglish && copyRefEnglish.checked) {
        text += 'Reference: ' + (h.ref || (bookName + ': ' + hadithNum)) + '\n';
    }
    if (copyRefArabic && copyRefArabic.checked) {
        text += 'المرجع: ' + bookNameAr + ': ' + toArabicNumerals(hadithNum) + '\n';
    }
    if (copyGrade && copyGrade.checked) {
        text += 'Grade: ' + (h.grade_grade_en || '') + ' (' + (h.grade_grade || '') + ')\n';
    }
    
    copyToClipboard(text.trim());
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(function() {
                toast('✓ Copied!');
                hideCopyModal();
            })
            .catch(function() {
                fallbackCopy(text);
            });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    try {
        document.execCommand('copy');
        toast('✓ Copied!');
        hideCopyModal();
    } catch (e) {
        toast('Failed to copy');
    }
    
    document.body.removeChild(textarea);
}

function shareHadith() {
    var data = localStorage.getItem('currentHadith');
    if (!data) return;
    
    var h = JSON.parse(data);
    var text = stripHtml(h.body_en || h.body || '') + '\n\n— ' + (h.ref || '');
    
    if (navigator.share) {
        navigator.share({
            title: 'Hadith',
            text: text,
            url: location.href
        }).catch(function() {});
    } else {
        copyToClipboard(location.href);
        toast('Link copied!');
    }
}

// ==========================================
// IMAGE GENERATOR
// ==========================================
function showImageModal() {
    var modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('hidden');
        
        imageCanvas = document.getElementById('imagePreviewCanvas');
        if (imageCanvas) {
            imageCtx = imageCanvas.getContext('2d');
        }
        
        setTimeout(function() {
            updateImagePreview();
        }, 100);
    }
}

function hideImageModal() {
    var modal = document.getElementById('imageModal');
    if (modal) modal.classList.add('hidden');
}

function updateImagePreview() {
    if (!imageCanvas || !imageCtx) return;
    
    var data = localStorage.getItem('currentHadith');
    if (!data) return;
    
    var h = JSON.parse(data);
    var bookName = localStorage.getItem('currentBookName') || h.book_name_en || '';
    var hadithNum = h._computedNum || h.num || extractNumFromRef(h.ref) || '?';
    
    // Get options
    var imgArabicMatan = document.getElementById('imgArabicMatan');
    var imgEnglishMatan = document.getElementById('imgEnglishMatan');
    var imgReference = document.getElementById('imgReference');
    var imgGrade = document.getElementById('imgGrade');
    
    var showArabic = imgArabicMatan ? imgArabicMatan.checked : true;
    var showEnglish = imgEnglishMatan ? imgEnglishMatan.checked : true;
    var showRef = imgReference ? imgReference.checked : true;
    var showGrade = imgGrade ? imgGrade.checked : false;
    
    // Get ratio
    var ratioInputs = document.querySelectorAll('input[name="imgRatio"]');
    var ratio = 'fit';
    for (var i = 0; i < ratioInputs.length; i++) {
        if (ratioInputs[i].checked) {
            ratio = ratioInputs[i].value;
            break;
        }
    }
    
    // Get colors
    var imgBgColor = document.getElementById('imgBgColor');
    var imgArabicColor = document.getElementById('imgArabicColor');
    var imgEnglishColor = document.getElementById('imgEnglishColor');
    
    var bgColor = imgBgColor ? imgBgColor.value : '#ffffff';
    var arabicColor = imgArabicColor ? imgArabicColor.value : '#666666';
    var englishColor = imgEnglishColor ? imgEnglishColor.value : '#1a1a1a';
    
    // Get sizes
    var imgArabicSize = document.getElementById('imgArabicSize');
    var imgEnglishSize = document.getElementById('imgEnglishSize');
    
    var arabicSize = imgArabicSize ? parseInt(imgArabicSize.value) : 28;
    var englishSize = imgEnglishSize ? parseInt(imgEnglishSize.value) : 18;
    
    // Update displays
    var arabicSizeVal = document.getElementById('arabicSizeVal');
    var englishSizeVal = document.getElementById('englishSizeVal');
    if (arabicSizeVal) arabicSizeVal.textContent = arabicSize;
    if (englishSizeVal) englishSizeVal.textContent = englishSize;
    
    // Prepare text
    var arabicText = showArabic ? stripHtml(h.body || '') : '';
    var englishText = showEnglish ? stripHtml(h.body_en || '') : '';
    var refText = showRef ? (h.ref || (bookName + ': ' + hadithNum)) : '';
    var gradeText = showGrade ? ((h.grade_grade_en || '') + (h.grade_grade ? ' - ' + h.grade_grade : '')) : '';
    
    // Canvas dimensions
    var padding = 40;
    var lineHeight = 1.7;
    var baseWidth = 600;
    
    // Wrap text
    imageCtx.font = arabicSize + 'px Amiri, serif';
    var arabicLines = wrapText(imageCtx, arabicText, baseWidth - padding * 2);
    
    imageCtx.font = englishSize + 'px Inter, sans-serif';
    var englishLines = wrapText(imageCtx, englishText, baseWidth - padding * 2);
    
    // Calculate height
    var contentHeight = padding * 2 + 20;
    if (showArabic && arabicLines.length > 0) {
        contentHeight += arabicLines.length * arabicSize * lineHeight + 30;
    }
    if (showEnglish && englishLines.length > 0) {
        contentHeight += englishLines.length * englishSize * lineHeight + 30;
    }
    if (showRef) contentHeight += englishSize * lineHeight + 20;
    if (showGrade && gradeText) contentHeight += englishSize * lineHeight + 20;
    
    // Set dimensions
    var width = baseWidth;
    var height = contentHeight;
    
    if (ratio === '1:1') {
        height = Math.max(width, contentHeight);
        width = height;
    } else if (ratio === '4:5') {
        height = Math.max(width * 1.25, contentHeight);
    } else if (ratio === '9:16') {
        height = Math.max(width * (16/9), contentHeight);
    } else if (ratio === '16:9') {
        height = Math.max(width * (9/16), contentHeight);
    }
    
    imageCanvas.width = width;
    imageCanvas.height = height;
    
    // Draw background
    imageCtx.fillStyle = bgColor;
    imageCtx.fillRect(0, 0, width, height);
    
    // Draw content
    var y = padding + arabicSize;
    var extraSpace = height - contentHeight;
    if (extraSpace > 0) y += extraSpace / 2;
    
    // Arabic
    if (showArabic && arabicLines.length > 0) {
        imageCtx.font = arabicSize + 'px Amiri, serif';
        imageCtx.fillStyle = arabicColor;
        imageCtx.textAlign = 'right';
        
        for (var j = 0; j < arabicLines.length; j++) {
            imageCtx.fillText(arabicLines[j], width - padding, y);
            y += arabicSize * lineHeight;
        }
        y += 20;
    }
    
    // English
    if (showEnglish && englishLines.length > 0) {
        imageCtx.font = englishSize + 'px Inter, sans-serif';
        imageCtx.fillStyle = englishColor;
        imageCtx.textAlign = 'left';
        
        for (var k = 0; k < englishLines.length; k++) {
            imageCtx.fillText(englishLines[k], padding, y);
            y += englishSize * lineHeight;
        }
        y += 20;
    }
    
    // Reference
    if (showRef && refText) {
        imageCtx.font = (englishSize * 0.85) + 'px Inter, sans-serif';
        imageCtx.fillStyle = englishColor;
        imageCtx.textAlign = 'center';
        imageCtx.fillText('— ' + refText + ' —', width / 2, y);
        y += englishSize * lineHeight + 10;
    }
    
    // Grade
    if (showGrade && gradeText) {
        imageCtx.font = (englishSize * 0.8) + 'px Inter, sans-serif';
        imageCtx.fillStyle = arabicColor;
        imageCtx.textAlign = 'center';
        imageCtx.fillText(gradeText, width / 2, y);
    }
}

function wrapText(ctx, text, maxWidth) {
    if (!text) return [];
    
    var words = text.split(/\s+/);
    var lines = [];
    var currentLine = '';
    
    for (var i = 0; i < words.length; i++) {
        var testLine = currentLine ? currentLine + ' ' + words[i] : words[i];
        var metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = words[i];
        } else {
            currentLine = testLine;
        }
    }
    
    if (currentLine) lines.push(currentLine);
    return lines;
}

function setColor(inputId, color) {
    var input = document.getElementById(inputId);
    if (input) {
        input.value = color;
        updateImagePreview();
    }
}

function downloadHadithImage() {
    if (!imageCanvas) {
        toast('Please wait for preview');
        return;
    }
    
    try {
        var data = localStorage.getItem('currentHadith');
        var h = data ? JSON.parse(data) : {};
        var bookName = localStorage.getItem('currentBookName') || h.book_name_en || 'hadith';
        var num = h._computedNum || h.num || extractNumFromRef(h.ref) || 'unknown';
        
        var link = document.createElement('a');
        link.download = bookName.replace(/\s+/g, '_') + '_' + num + '.png';
        link.href = imageCanvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast('✓ Image downloaded!');
        hideImageModal();
    } catch (e) {
        console.error('Download error:', e);
        toast('Failed to download');
    }
}

// ==========================================
// VIEW MANAGEMENT
// ==========================================
function showView(view) {
    currentView = view;
    
    var views = ['booksView', 'chaptersView', 'hadithsView', 'searchView'];
    for (var i = 0; i < views.length; i++) {
        var el = document.getElementById(views[i]);
        if (el) {
            if (views[i] === view + 'View') {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }
    }
    
    var bookSearch = document.getElementById('bookSearch');
    if (bookSearch) {
        bookSearch.style.display = view === 'books' ? 'block' : 'none';
    }
}

function showBottomNav() {
    var nav = document.getElementById('bottomNav');
    if (nav) nav.classList.remove('hidden');
}

function handleBack() {
    if (currentView === 'search') {
        showView('chapters');
        var pageTitle = document.getElementById('pageTitle');
        if (pageTitle && currentBook) pageTitle.textContent = currentBook.name_en;
    } else if (currentView === 'hadiths') {
        showView('chapters');
        var pageTitle2 = document.getElementById('pageTitle');
        if (pageTitle2 && currentBook) pageTitle2.textContent = currentBook.name_en;
    } else if (currentView === 'chapters') {
        showView('books');
        var pageTitle3 = document.getElementById('pageTitle');
        if (pageTitle3) pageTitle3.textContent = 'Hadith Books';
        
        var bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.add('hidden');
        
        currentBook = null;
        currentBookData = [];
        chapters = [];
        
        var bookSearch = document.getElementById('bookSearch');
        if (bookSearch) bookSearch.style.display = 'block';
    } else {
        window.location.href = 'library.html';
    }
}

// ==========================================
// JUMP MODAL
// ==========================================
function showJumpModal() {
    var modal = document.getElementById('jumpModal');
    if (modal) {
        modal.classList.remove('hidden');
        var input = document.getElementById('jumpInput');
        if (input) {
            input.value = '';
            input.focus();
        }
    }
}

function hideJumpModal() {
    var modal = document.getElementById('jumpModal');
    if (modal) modal.classList.add('hidden');
}

function handleModalClick(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
}

function jumpToHadith() {
    var input = document.getElementById('jumpInput');
    if (!input) return;
    
    var num = parseInt(input.value);
    if (!num || num < 1) {
        toast('Enter a valid number');
        return;
    }

    if (!currentBookData || currentBookData.length === 0) {
        toast('Select a book first');
        hideJumpModal();
        return;
    }

    var hadith = null;
    var index = -1;
    
    for (var i = 0; i < currentBookData.length; i++) {
        var h = currentBookData[i];
        var hNum = h.num || extractNumFromRef(h.ref);
        
        if (parseInt(hNum) === num) {
            hadith = h;
            index = i;
            break;
        }
    }
    
    if (hadith) {
        hadiths = currentBookData;
        openHadith(index, 'hadithsList');
    } else {
        toast('Hadith #' + num + ' not found');
    }
    
    hideJumpModal();
}

// ==========================================
// EXPOSE FUNCTIONS GLOBALLY
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
