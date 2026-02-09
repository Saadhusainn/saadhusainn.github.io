/* ==========================================
   SIJJEEN QURAN LIBRARY
   With Caching for Fast Loading
   ========================================== */

// ==========================================
// CONFIGURATION
// ==========================================
const AUDIO_BASE = 'https://everyayah.com/data';

const TRANSLATIONS = {
    'en.sahih': {
        file: 'quran/en.sahih.txt',
        name: 'Saheeh International',
        language: 'English',
        dir: 'ltr'
    },
    'ur.junagarhi': {
        file: 'quran/ur.junagarhi.txt',
        name: 'محمد جوناگڑھی',
        language: 'اردو',
        dir: 'rtl'
    }
};

const ARABIC_FILE = 'quran/arabic.txt';

const RECITORS = [
    { id: 'Abdurrahmaan_As-Sudais_192kbps', name: 'Abdurrahmaan As-Sudais', bitrate: '192kbps' },
    { id: 'Abdul_Basit_Murattal_192kbps', name: 'Abdul Basit (Murattal)', bitrate: '192kbps' },
    { id: 'Abdul_Basit_Mujawwad_128kbps', name: 'Abdul Basit (Mujawwad)', bitrate: '128kbps' },
    { id: 'Alafasy_128kbps', name: 'Mishary Rashid Alafasy', bitrate: '128kbps' },
    { id: 'Abu_Bakr_Ash-Shaatree_128kbps', name: 'Abu Bakr Ash-Shaatree', bitrate: '128kbps' },
    { id: 'Husary_128kbps', name: 'Mahmoud Khalil Al-Husary', bitrate: '128kbps' },
    { id: 'MaherAlMuaiqly128kbps', name: 'Maher Al Muaiqly', bitrate: '128kbps' },
    { id: 'Minshawy_Mujawwad_192kbps', name: 'Minshawy (Mujawwad)', bitrate: '192kbps' },
    { id: 'Saood_ash-Shuraym_128kbps', name: 'Saood Ash-Shuraym', bitrate: '128kbps' }
];

const DEFAULT_SETTINGS = {
    translation: 'en.sahih',
    reciter: 'Abdurrahmaan_As-Sudais_192kbps',
    arabicFontSize: 20,
    transFontSize: 12
};

const VERSES_PER_BATCH = 15;

// ==========================================
// SURAH DATA
// ==========================================
const SURAHS = [
    { number: 1, name_en: "Al-Fatihah", name_ar: "الفاتحة", verses: 7, type: "Meccan" },
    { number: 2, name_en: "Al-Baqarah", name_ar: "البقرة", verses: 286, type: "Medinan" },
    { number: 3, name_en: "Ali 'Imran", name_ar: "آل عمران", verses: 200, type: "Medinan" },
    { number: 4, name_en: "An-Nisa", name_ar: "النساء", verses: 176, type: "Medinan" },
    { number: 5, name_en: "Al-Ma'idah", name_ar: "المائدة", verses: 120, type: "Medinan" },
    { number: 6, name_en: "Al-An'am", name_ar: "الأنعام", verses: 165, type: "Meccan" },
    { number: 7, name_en: "Al-A'raf", name_ar: "الأعراف", verses: 206, type: "Meccan" },
    { number: 8, name_en: "Al-Anfal", name_ar: "الأنفال", verses: 75, type: "Medinan" },
    { number: 9, name_en: "At-Tawbah", name_ar: "التوبة", verses: 129, type: "Medinan" },
    { number: 10, name_en: "Yunus", name_ar: "يونس", verses: 109, type: "Meccan" },
    { number: 11, name_en: "Hud", name_ar: "هود", verses: 123, type: "Meccan" },
    { number: 12, name_en: "Yusuf", name_ar: "يوسف", verses: 111, type: "Meccan" },
    { number: 13, name_en: "Ar-Ra'd", name_ar: "الرعد", verses: 43, type: "Medinan" },
    { number: 14, name_en: "Ibrahim", name_ar: "إبراهيم", verses: 52, type: "Meccan" },
    { number: 15, name_en: "Al-Hijr", name_ar: "الحجر", verses: 99, type: "Meccan" },
    { number: 16, name_en: "An-Nahl", name_ar: "النحل", verses: 128, type: "Meccan" },
    { number: 17, name_en: "Al-Isra", name_ar: "الإسراء", verses: 111, type: "Meccan" },
    { number: 18, name_en: "Al-Kahf", name_ar: "الكهف", verses: 110, type: "Meccan" },
    { number: 19, name_en: "Maryam", name_ar: "مريم", verses: 98, type: "Meccan" },
    { number: 20, name_en: "Taha", name_ar: "طه", verses: 135, type: "Meccan" },
    { number: 21, name_en: "Al-Anbya", name_ar: "الأنبياء", verses: 112, type: "Meccan" },
    { number: 22, name_en: "Al-Hajj", name_ar: "الحج", verses: 78, type: "Medinan" },
    { number: 23, name_en: "Al-Mu'minun", name_ar: "المؤمنون", verses: 118, type: "Meccan" },
    { number: 24, name_en: "An-Nur", name_ar: "النور", verses: 64, type: "Medinan" },
    { number: 25, name_en: "Al-Furqan", name_ar: "الفرقان", verses: 77, type: "Meccan" },
    { number: 26, name_en: "Ash-Shu'ara", name_ar: "الشعراء", verses: 227, type: "Meccan" },
    { number: 27, name_en: "An-Naml", name_ar: "النمل", verses: 93, type: "Meccan" },
    { number: 28, name_en: "Al-Qasas", name_ar: "القصص", verses: 88, type: "Meccan" },
    { number: 29, name_en: "Al-'Ankabut", name_ar: "العنكبوت", verses: 69, type: "Meccan" },
    { number: 30, name_en: "Ar-Rum", name_ar: "الروم", verses: 60, type: "Meccan" },
    { number: 31, name_en: "Luqman", name_ar: "لقمان", verses: 34, type: "Meccan" },
    { number: 32, name_en: "As-Sajdah", name_ar: "السجدة", verses: 30, type: "Meccan" },
    { number: 33, name_en: "Al-Ahzab", name_ar: "الأحزاب", verses: 73, type: "Medinan" },
    { number: 34, name_en: "Saba", name_ar: "سبأ", verses: 54, type: "Meccan" },
    { number: 35, name_en: "Fatir", name_ar: "فاطر", verses: 45, type: "Meccan" },
    { number: 36, name_en: "Ya-Sin", name_ar: "يس", verses: 83, type: "Meccan" },
    { number: 37, name_en: "As-Saffat", name_ar: "الصافات", verses: 182, type: "Meccan" },
    { number: 38, name_en: "Sad", name_ar: "ص", verses: 88, type: "Meccan" },
    { number: 39, name_en: "Az-Zumar", name_ar: "الزمر", verses: 75, type: "Meccan" },
    { number: 40, name_en: "Ghafir", name_ar: "غافر", verses: 85, type: "Meccan" },
    { number: 41, name_en: "Fussilat", name_ar: "فصلت", verses: 54, type: "Meccan" },
    { number: 42, name_en: "Ash-Shura", name_ar: "الشورى", verses: 53, type: "Meccan" },
    { number: 43, name_en: "Az-Zukhruf", name_ar: "الزخرف", verses: 89, type: "Meccan" },
    { number: 44, name_en: "Ad-Dukhan", name_ar: "الدخان", verses: 59, type: "Meccan" },
    { number: 45, name_en: "Al-Jathiyah", name_ar: "الجاثية", verses: 37, type: "Meccan" },
    { number: 46, name_en: "Al-Ahqaf", name_ar: "الأحقاف", verses: 35, type: "Meccan" },
    { number: 47, name_en: "Muhammad", name_ar: "محمد", verses: 38, type: "Medinan" },
    { number: 48, name_en: "Al-Fath", name_ar: "الفتح", verses: 29, type: "Medinan" },
    { number: 49, name_en: "Al-Hujurat", name_ar: "الحجرات", verses: 18, type: "Medinan" },
    { number: 50, name_en: "Qaf", name_ar: "ق", verses: 45, type: "Meccan" },
    { number: 51, name_en: "Adh-Dhariyat", name_ar: "الذاريات", verses: 60, type: "Meccan" },
    { number: 52, name_en: "At-Tur", name_ar: "الطور", verses: 49, type: "Meccan" },
    { number: 53, name_en: "An-Najm", name_ar: "النجم", verses: 62, type: "Meccan" },
    { number: 54, name_en: "Al-Qamar", name_ar: "القمر", verses: 55, type: "Meccan" },
    { number: 55, name_en: "Ar-Rahman", name_ar: "الرحمن", verses: 78, type: "Medinan" },
    { number: 56, name_en: "Al-Waqi'ah", name_ar: "الواقعة", verses: 96, type: "Meccan" },
    { number: 57, name_en: "Al-Hadid", name_ar: "الحديد", verses: 29, type: "Medinan" },
    { number: 58, name_en: "Al-Mujadila", name_ar: "المجادلة", verses: 22, type: "Medinan" },
    { number: 59, name_en: "Al-Hashr", name_ar: "الحشر", verses: 24, type: "Medinan" },
    { number: 60, name_en: "Al-Mumtahanah", name_ar: "الممتحنة", verses: 13, type: "Medinan" },
    { number: 61, name_en: "As-Saf", name_ar: "الصف", verses: 14, type: "Medinan" },
    { number: 62, name_en: "Al-Jumu'ah", name_ar: "الجمعة", verses: 11, type: "Medinan" },
    { number: 63, name_en: "Al-Munafiqun", name_ar: "المنافقون", verses: 11, type: "Medinan" },
    { number: 64, name_en: "At-Taghabun", name_ar: "التغابن", verses: 18, type: "Medinan" },
    { number: 65, name_en: "At-Talaq", name_ar: "الطلاق", verses: 12, type: "Medinan" },
    { number: 66, name_en: "At-Tahrim", name_ar: "التحريم", verses: 12, type: "Medinan" },
    { number: 67, name_en: "Al-Mulk", name_ar: "الملك", verses: 30, type: "Meccan" },
    { number: 68, name_en: "Al-Qalam", name_ar: "القلم", verses: 52, type: "Meccan" },
    { number: 69, name_en: "Al-Haqqah", name_ar: "الحاقة", verses: 52, type: "Meccan" },
    { number: 70, name_en: "Al-Ma'arij", name_ar: "المعارج", verses: 44, type: "Meccan" },
    { number: 71, name_en: "Nuh", name_ar: "نوح", verses: 28, type: "Meccan" },
    { number: 72, name_en: "Al-Jinn", name_ar: "الجن", verses: 28, type: "Meccan" },
    { number: 73, name_en: "Al-Muzzammil", name_ar: "المزمل", verses: 20, type: "Meccan" },
    { number: 74, name_en: "Al-Muddaththir", name_ar: "المدثر", verses: 56, type: "Meccan" },
    { number: 75, name_en: "Al-Qiyamah", name_ar: "القيامة", verses: 40, type: "Meccan" },
    { number: 76, name_en: "Al-Insan", name_ar: "الإنسان", verses: 31, type: "Medinan" },
    { number: 77, name_en: "Al-Mursalat", name_ar: "المرسلات", verses: 50, type: "Meccan" },
    { number: 78, name_en: "An-Naba", name_ar: "النبأ", verses: 40, type: "Meccan" },
    { number: 79, name_en: "An-Nazi'at", name_ar: "النازعات", verses: 46, type: "Meccan" },
    { number: 80, name_en: "Abasa", name_ar: "عبس", verses: 42, type: "Meccan" },
    { number: 81, name_en: "At-Takwir", name_ar: "التكوير", verses: 29, type: "Meccan" },
    { number: 82, name_en: "Al-Infitar", name_ar: "الانفطار", verses: 19, type: "Meccan" },
    { number: 83, name_en: "Al-Mutaffifin", name_ar: "المطففين", verses: 36, type: "Meccan" },
    { number: 84, name_en: "Al-Inshiqaq", name_ar: "الانشقاق", verses: 25, type: "Meccan" },
    { number: 85, name_en: "Al-Buruj", name_ar: "البروج", verses: 22, type: "Meccan" },
    { number: 86, name_en: "At-Tariq", name_ar: "الطارق", verses: 17, type: "Meccan" },
    { number: 87, name_en: "Al-A'la", name_ar: "الأعلى", verses: 19, type: "Meccan" },
    { number: 88, name_en: "Al-Ghashiyah", name_ar: "الغاشية", verses: 26, type: "Meccan" },
    { number: 89, name_en: "Al-Fajr", name_ar: "الفجر", verses: 30, type: "Meccan" },
    { number: 90, name_en: "Al-Balad", name_ar: "البلد", verses: 20, type: "Meccan" },
    { number: 91, name_en: "Ash-Shams", name_ar: "الشمس", verses: 15, type: "Meccan" },
    { number: 92, name_en: "Al-Layl", name_ar: "الليل", verses: 21, type: "Meccan" },
    { number: 93, name_en: "Ad-Duhaa", name_ar: "الضحى", verses: 11, type: "Meccan" },
    { number: 94, name_en: "Ash-Sharh", name_ar: "الشرح", verses: 8, type: "Meccan" },
    { number: 95, name_en: "At-Tin", name_ar: "التين", verses: 8, type: "Meccan" },
    { number: 96, name_en: "Al-'Alaq", name_ar: "العلق", verses: 19, type: "Meccan" },
    { number: 97, name_en: "Al-Qadr", name_ar: "القدر", verses: 5, type: "Meccan" },
    { number: 98, name_en: "Al-Bayyinah", name_ar: "البينة", verses: 8, type: "Medinan" },
    { number: 99, name_en: "Az-Zalzalah", name_ar: "الزلزلة", verses: 8, type: "Medinan" },
    { number: 100, name_en: "Al-'Adiyat", name_ar: "العاديات", verses: 11, type: "Meccan" },
    { number: 101, name_en: "Al-Qari'ah", name_ar: "القارعة", verses: 11, type: "Meccan" },
    { number: 102, name_en: "At-Takathur", name_ar: "التكاثر", verses: 8, type: "Meccan" },
    { number: 103, name_en: "Al-'Asr", name_ar: "العصر", verses: 3, type: "Meccan" },
    { number: 104, name_en: "Al-Humazah", name_ar: "الهمزة", verses: 9, type: "Meccan" },
    { number: 105, name_en: "Al-Fil", name_ar: "الفيل", verses: 5, type: "Meccan" },
    { number: 106, name_en: "Quraysh", name_ar: "قريش", verses: 4, type: "Meccan" },
    { number: 107, name_en: "Al-Ma'un", name_ar: "الماعون", verses: 7, type: "Meccan" },
    { number: 108, name_en: "Al-Kawthar", name_ar: "الكوثر", verses: 3, type: "Meccan" },
    { number: 109, name_en: "Al-Kafirun", name_ar: "الكافرون", verses: 6, type: "Meccan" },
    { number: 110, name_en: "An-Nasr", name_ar: "النصر", verses: 3, type: "Medinan" },
    { number: 111, name_en: "Al-Masad", name_ar: "المسد", verses: 5, type: "Meccan" },
    { number: 112, name_en: "Al-Ikhlas", name_ar: "الإخلاص", verses: 4, type: "Meccan" },
    { number: 113, name_en: "Al-Falaq", name_ar: "الفلق", verses: 5, type: "Meccan" },
    { number: 114, name_en: "An-Nas", name_ar: "الناس", verses: 6, type: "Meccan" }
];

// ==========================================
// STATE
// ==========================================
let settings = { ...DEFAULT_SETTINGS };
let currentSurah = null;
let arabicData = {};
let translationData = {};
let currentTranslationId = null;
let loadedVerses = 0;
let isLoadingMore = false;
let allVersesLoaded = false;

// Audio
let audioPlayer = null;
let nextAudioPlayer = null;
let currentPlayingVerse = 0;
let isPlaying = false;
let isContinuousPlay = false;
let isRepeat = false;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    
    if (document.getElementById('surahList')) {
        initSurahList();
    } else if (document.getElementById('versesContainer')) {
        initSurahView();
    }
});

function loadSettings() {
    try {
        const saved = localStorage.getItem('quranSettings');
        if (saved) settings = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    } catch (e) {}
}

function saveSettingsToStorage() {
    try {
        localStorage.setItem('quranSettings', JSON.stringify(settings));
    } catch (e) {}
}

// ==========================================
// CACHING FUNCTIONS
// ==========================================
function saveToCache(key, data) {
    try {
        localStorage.setItem('quran_' + key, JSON.stringify(data));
    } catch (e) {
        console.warn('Cache save failed');
    }
}

function getFromCache(key) {
    try {
        const data = localStorage.getItem('quran_' + key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}

// ==========================================
// SURAH LIST PAGE
// ==========================================
function initSurahList() {
    // Render immediately
    renderSurahList();
    populateSettingsModal();
    
    // Hide loading, show list
    hide('initialLoading');
    show('surahList');
    
    // Preload data in background
    preloadQuranData();
}

function renderSurahList() {
    const list = document.getElementById('surahList');
    if (!list) return;

    list.innerHTML = SURAHS.map(surah => `
        <div class="surah-item" onclick="openSurah(${surah.number})">
            <div class="surah-item-number">${surah.number}</div>
            <div class="surah-item-info">
                <div class="surah-item-row">
                    <span class="surah-name-en">${surah.name_en}</span>
                    <span class="surah-name-ar">${surah.name_ar}</span>
                </div>
                <div class="surah-meta">
                    <span>${surah.verses} verses</span>
                    <span class="surah-meta-dot"></span>
                    <span class="surah-type-badge ${surah.type.toLowerCase()}">${surah.type}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Preload data in background for faster surah loading
async function preloadQuranData() {
    // Check if already cached
    const cachedArabic = getFromCache('arabic');
    const cachedTrans = getFromCache('trans_' + settings.translation);
    
    if (!cachedArabic) {
        try {
            const response = await fetch(ARABIC_FILE);
            const text = await response.text();
            const data = parseTxtFile(text);
            saveToCache('arabic', data);
            arabicData = data;
            console.log('✅ Arabic preloaded');
        } catch (e) {}
    } else {
        arabicData = cachedArabic;
    }
    
    if (!cachedTrans) {
        try {
            const trans = TRANSLATIONS[settings.translation];
            const response = await fetch(trans.file);
            const text = await response.text();
            const data = parseTxtFile(text);
            saveToCache('trans_' + settings.translation, data);
            translationData = data;
            currentTranslationId = settings.translation;
            console.log('✅ Translation preloaded');
        } catch (e) {}
    } else {
        translationData = cachedTrans;
        currentTranslationId = settings.translation;
    }
}

function filterSurahs() {
    const query = (document.getElementById('surahSearchInput')?.value || '').toLowerCase().trim();
    
    document.querySelectorAll('.surah-item').forEach((item, index) => {
        const surah = SURAHS[index];
        const matches = !query || 
            surah.name_en.toLowerCase().includes(query) ||
            surah.name_ar.includes(query) ||
            String(surah.number).includes(query);
        item.style.display = matches ? 'flex' : 'none';
    });
}

function openSurah(number) {
    localStorage.setItem('currentSurahNumber', String(number));
    window.location.href = 'quran-view.html';
}

// ==========================================
// SURAH VIEW PAGE
// ==========================================
function initSurahView() {
    audioPlayer = document.getElementById('audioPlayer');
    nextAudioPlayer = new Audio();
    nextAudioPlayer.preload = 'auto';
    
    const surahNumber = parseInt(localStorage.getItem('currentSurahNumber') || '1');
    currentSurah = SURAHS.find(s => s.number === surahNumber) || SURAHS[0];
    
    setupSurahHeader();
    populateSettingsModal();
    setupQuickTranslation();
    loadSurahData();
    setupScrollListener();
    setupAudioEvents();
}

function setupSurahHeader() {
    setText('surahTitle', currentSurah.name_en);
    setText('surahSubtitle', currentSurah.name_ar);
    setText('surahNumberBadge', currentSurah.number);
    setText('surahVersesInfo', `${currentSurah.verses} verses`);
    setText('surahTypeInfo', currentSurah.type);
    setText('totalVerseNum', currentSurah.verses);
    
    const bismillah = document.getElementById('bismillahContainer');
    if (bismillah) bismillah.classList.toggle('hidden', currentSurah.number === 9);
    
    updateSurahNavigation();
}

function updateSurahNavigation() {
    const prevSurah = SURAHS[currentSurah.number - 2];
    const nextSurah = SURAHS[currentSurah.number];
    
    const prevBtn = document.getElementById('prevSurahBtn');
    const nextBtn = document.getElementById('nextSurahBtn');
    
    if (prevBtn) prevBtn.disabled = !prevSurah;
    if (nextBtn) nextBtn.disabled = !nextSurah;
    
    setText('prevSurahName', prevSurah ? prevSurah.name_en : 'Previous');
    setText('nextSurahName', nextSurah ? nextSurah.name_en : 'Next');
}

function setupQuickTranslation() {
    const select = document.getElementById('quickTranslation');
    if (select) select.value = settings.translation;
}

function getTranslatorName() {
    const trans = TRANSLATIONS[settings.translation];
    return trans ? trans.name : '';
}

function isRtlTranslation() {
    return TRANSLATIONS[settings.translation]?.dir === 'rtl';
}

// ==========================================
// PARSE TXT FILES
// ==========================================
function parseTxtFile(text) {
    const data = {};
    const lines = text.split('\n');
    
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        
        const parts = trimmed.split('|');
        if (parts.length >= 3) {
            const surahNum = parseInt(parts[0]);
            const verseNum = parseInt(parts[1]);
            const verseText = parts.slice(2).join('|');
            
            if (!isNaN(surahNum) && !isNaN(verseNum)) {
                if (!data[surahNum]) data[surahNum] = {};
                data[surahNum][verseNum] = verseText;
            }
        }
    }
    return data;
}

// ==========================================
// LOAD DATA (WITH CACHE)
// ==========================================
async function loadSurahData() {
    show('loading');
    hide('versesContainer');
    hide('surahEnd');
    
    loadedVerses = 0;
    allVersesLoaded = false;
    
    const container = document.getElementById('versesContainer');
    if (container) container.innerHTML = '';
    
    try {
        // Try cache first
        let cachedArabic = getFromCache('arabic');
        let cachedTrans = getFromCache('trans_' + settings.translation);
        
        // Load Arabic
        if (cachedArabic) {
            arabicData = cachedArabic;
        } else {
            const response = await fetch(ARABIC_FILE);
            const text = await response.text();
            arabicData = parseTxtFile(text);
            saveToCache('arabic', arabicData);
        }
        
        // Load Translation
        if (cachedTrans && currentTranslationId === settings.translation) {
            translationData = cachedTrans;
        } else {
            const trans = TRANSLATIONS[settings.translation];
            const response = await fetch(trans.file);
            const text = await response.text();
            translationData = parseTxtFile(text);
            currentTranslationId = settings.translation;
            saveToCache('trans_' + settings.translation, translationData);
        }
        
        renderVersesBatch();
        hide('loading');
        show('versesContainer');
        
    } catch (error) {
        console.error('Failed to load:', error);
        if (container) {
            container.innerHTML = `
                <div class="no-results">
                    <p>❌ Failed to load</p>
                    <button onclick="loadSurahData()">Retry</button>
                </div>
            `;
        }
        hide('loading');
        show('versesContainer');
    }
}

// ==========================================
// RENDER VERSES
// ==========================================
function renderVersesBatch() {
    const container = document.getElementById('versesContainer');
    if (!container) return;
    
    const surahArabic = arabicData[currentSurah.number] || {};
    const surahTrans = translationData[currentSurah.number] || {};
    const isRtl = isRtlTranslation();
    const translatorName = getTranslatorName();
    
    const endIndex = Math.min(loadedVerses + VERSES_PER_BATCH, currentSurah.verses);
    
    let html = '';
    
    for (let i = loadedVerses; i < endIndex; i++) {
        const verseNum = i + 1;
        const arabicText = surahArabic[verseNum] || '';
        const transText = surahTrans[verseNum] || '';
        
        html += `
            <div class="verse-item" id="verse-${verseNum}" data-verse="${verseNum}">
                <div class="verse-header">
                    <div class="verse-number">${verseNum}</div>
                    <div class="verse-actions">
                        <button class="verse-action-btn" onclick="playVerse(${verseNum})" title="Play">
                            <img src="assets/play.png" alt="Play">
                        </button>
                        <button class="verse-action-btn" onclick="downloadVerseAudio(${verseNum})" title="Download">
                            <img src="assets/download.png" alt="Download">
                        </button>
                        <button class="verse-action-btn" onclick="copyVerse(${verseNum})" title="Copy">
                            <img src="assets/copy.png" alt="Copy" onerror="this.parentElement.textContent='📋'">
                        </button>
                    </div>
                </div>
                <div class="verse-arabic" style="font-size:${settings.arabicFontSize}px">${arabicText}</div>
                <div class="verse-translation ${isRtl ? 'rtl' : ''}" style="font-size:${settings.transFontSize}px">${transText}</div>
                <div class="verse-translator ${isRtl ? 'rtl' : ''}">${translatorName}</div>
            </div>
        `;
    }
    
    container.insertAdjacentHTML('beforeend', html);
    loadedVerses = endIndex;
    
    if (loadedVerses >= currentSurah.verses) {
        allVersesLoaded = true;
        show('surahEnd');
        hide('loadMore');
    }
}

// ==========================================
// SCROLL LISTENER - IMPROVED
// ==========================================
function setupScrollListener() {
    const content = document.getElementById('readingContent');
    if (!content) return;
    
    let ticking = false;
    
    content.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                checkScroll(content);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function checkScroll(content) {
    if (isLoadingMore || allVersesLoaded) return;
    
    const scrollTop = content.scrollTop;
    const scrollHeight = content.scrollHeight;
    const clientHeight = content.clientHeight;
    
    // Load more when near bottom
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMoreVerses();
    }
}

function loadMoreVerses() {
    if (isLoadingMore || allVersesLoaded) return;
    
    isLoadingMore = true;
    
    // Immediately render more verses
    renderVersesBatch();
    
    isLoadingMore = false;
}

// ==========================================
// TRANSLATION CHANGE
// ==========================================
async function onTranslationChange() {
    const select = document.getElementById('quickTranslation');
    if (!select) return;
    
    settings.translation = select.value;
    saveSettingsToStorage();
    
    show('loading');
    hide('versesContainer');
    
    try {
        // Check cache
        const cached = getFromCache('trans_' + settings.translation);
        
        if (cached) {
            translationData = cached;
        } else {
            const trans = TRANSLATIONS[settings.translation];
            const response = await fetch(trans.file);
            const text = await response.text();
            translationData = parseTxtFile(text);
            saveToCache('trans_' + settings.translation, translationData);
        }
        
        currentTranslationId = settings.translation;
        loadedVerses = 0;
        allVersesLoaded = false;
        document.getElementById('versesContainer').innerHTML = '';
        
        renderVersesBatch();
        hide('loading');
        show('versesContainer');
        
    } catch (e) {
        toast('Failed to load translation');
        hide('loading');
        show('versesContainer');
    }
}

// ==========================================
// AUDIO
// ==========================================
function setupAudioEvents() {
    if (!audioPlayer) return;
    
    audioPlayer.addEventListener('ended', onAudioEnded);
    audioPlayer.addEventListener('timeupdate', onAudioTimeUpdate);
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        updatePlayPauseButton();
    });
    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayPauseButton();
    });
    audioPlayer.addEventListener('canplay', () => {
        if (isContinuousPlay && currentPlayingVerse < currentSurah.verses) {
            preloadNextVerse(currentPlayingVerse + 1);
        }
    });
    audioPlayer.addEventListener('error', () => {
        isPlaying = false;
        updatePlayPauseButton();
        toast('Audio not available');
    });
}

function getAudioUrl(surah, verse) {
    const s = String(surah).padStart(3, '0');
    const v = String(verse).padStart(3, '0');
    return `${AUDIO_BASE}/${settings.reciter}/${s}${v}.mp3`;
}

function preloadNextVerse(verseNum) {
    if (verseNum > currentSurah.verses) return;
    nextAudioPlayer.src = getAudioUrl(currentSurah.number, verseNum);
    nextAudioPlayer.load();
}

function playBismillah() {
    audioPlayer.src = `${AUDIO_BASE}/bismillah.mp3`;
    audioPlayer.play().catch(() => playVerse(1));
}

function playVerse(verseNum) {
    currentPlayingVerse = verseNum;
    
    if (nextAudioPlayer.src.includes(`${String(verseNum).padStart(3, '0')}.mp3`)) {
        audioPlayer.src = nextAudioPlayer.src;
    } else {
        audioPlayer.src = getAudioUrl(currentSurah.number, verseNum);
    }
    
    audioPlayer.play().then(() => {
        highlightVerse(verseNum);
        scrollToVerse(verseNum);
        setText('currentVerseNum', verseNum);
        
        if (isContinuousPlay && verseNum < currentSurah.verses) {
            preloadNextVerse(verseNum + 1);
        }
    }).catch(e => toast('Failed to play'));
}

function togglePlayPause() {
    if (!audioPlayer.src || currentPlayingVerse === 0) {
        playVerse(1);
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
}

function updatePlayPauseButton() {
    const icon = document.getElementById('playPauseIcon');
    if (icon) {
        icon.src = isPlaying ? 'assets/pause.png' : 'assets/play.png';
    }
}

function previousVerse() {
    if (currentPlayingVerse > 1) playVerse(currentPlayingVerse - 1);
}

function nextVerse() {
    if (currentPlayingVerse < currentSurah.verses) playVerse(currentPlayingVerse + 1);
}

function onAudioEnded() {
    if (isRepeat) {
        playVerse(currentPlayingVerse);
    } else if (isContinuousPlay && currentPlayingVerse < currentSurah.verses) {
        if (currentPlayingVerse >= loadedVerses) renderVersesBatch();
        playVerse(currentPlayingVerse + 1);
    } else {
        clearHighlight();
    }
}

function onAudioTimeUpdate() {
    if (!audioPlayer.duration) return;
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    const bar = document.getElementById('audioProgress');
    if (bar) bar.style.width = `${progress}%`;
}

function seekAudio(event) {
    if (!audioPlayer.duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    audioPlayer.currentTime = (x / rect.width) * audioPlayer.duration;
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    document.getElementById('repeatBtn')?.classList.toggle('active', isRepeat);
    toast(isRepeat ? 'Repeat ON' : 'Repeat OFF');
}

function toggleContinuousPlay() {
    isContinuousPlay = !isContinuousPlay;
    document.getElementById('continuousBtn')?.classList.toggle('active', isContinuousPlay);
    
    if (isContinuousPlay && isPlaying && currentPlayingVerse < currentSurah.verses) {
        preloadNextVerse(currentPlayingVerse + 1);
    }
    
    toast(isContinuousPlay ? 'Continuous ON' : 'Continuous OFF');
}

function highlightVerse(verseNum) {
    clearHighlight();
    const el = document.getElementById(`verse-${verseNum}`);
    if (el) el.classList.add('playing');
}

function clearHighlight() {
    document.querySelectorAll('.verse-item.playing').forEach(el => el.classList.remove('playing'));
}

function scrollToVerse(verseNum) {
    const el = document.getElementById(`verse-${verseNum}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ==========================================
// DOWNLOAD AUDIO
// ==========================================
function downloadVerseAudio(verseNum) {
    const url = getAudioUrl(currentSurah.number, verseNum);
    const filename = `${currentSurah.name_en.replace(/[^a-zA-Z0-9]/g, '_')}_${verseNum}.mp3`;
    
    fetch(url)
        .then(r => r.blob())
        .then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = filename;
            a.click();
            URL.revokeObjectURL(a.href);
            toast('✓ Downloading...');
        })
        .catch(() => {
            window.open(url, '_blank');
        });
}

// ==========================================
// COPY
// ==========================================
function copyVerse(verseNum) {
    const arabic = arabicData[currentSurah.number]?.[verseNum] || '';
    const trans = translationData[currentSurah.number]?.[verseNum] || '';
    
    const text = `${arabic}\n\n${trans}\n\n— ${currentSurah.name_en} ${currentSurah.number}:${verseNum}\n${getTranslatorName()}`;
    
    navigator.clipboard?.writeText(text).then(() => toast('✓ Copied!')).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        toast('✓ Copied!');
    });
}

// ==========================================
// NAVIGATION
// ==========================================
function goBack() {
    if (audioPlayer) { audioPlayer.pause(); audioPlayer.src = ''; }
    window.location.href = 'quran.html';
}

function goToPrevSurah() {
    if (currentSurah.number > 1) {
        if (audioPlayer) audioPlayer.pause();
        localStorage.setItem('currentSurahNumber', String(currentSurah.number - 1));
        location.reload();
    }
}

function goToNextSurah() {
    if (currentSurah.number < 114) {
        if (audioPlayer) audioPlayer.pause();
        localStorage.setItem('currentSurahNumber', String(currentSurah.number + 1));
        location.reload();
    }
}

// ==========================================
// SETTINGS
// ==========================================
function showSettingsModal() {
    populateSettingsModal();
    document.getElementById('settingsModal')?.classList.remove('hidden');
}

function hideSettingsModal() {
    document.getElementById('settingsModal')?.classList.add('hidden');
}

function populateSettingsModal() {
    const transSelect = document.getElementById('translationSelect');
    if (transSelect) transSelect.value = settings.translation;
    
    const reciterSelect = document.getElementById('reciterSelect');
    if (reciterSelect) {
        reciterSelect.innerHTML = RECITORS.map(r => 
            `<option value="${r.id}" ${r.id === settings.reciter ? 'selected' : ''}>${r.name}</option>`
        ).join('');
    }
    
    if (document.getElementById('arabicFontSize')) {
        document.getElementById('arabicFontSize').value = settings.arabicFontSize;
    }
    if (document.getElementById('transFontSize')) {
        document.getElementById('transFontSize').value = settings.transFontSize;
    }
    
    updateFontSizePreview();
}

function updateFontSizePreview() {
    setText('arabicFontSizeVal', document.getElementById('arabicFontSize')?.value || 20);
    setText('transFontSizeVal', document.getElementById('transFontSize')?.value || 12);
}

function saveSettings() {
    settings.translation = document.getElementById('translationSelect')?.value || 'en.sahih';
    settings.reciter = document.getElementById('reciterSelect')?.value || RECITORS[0].id;
    settings.arabicFontSize = parseInt(document.getElementById('arabicFontSize')?.value || 20);
    settings.transFontSize = parseInt(document.getElementById('transFontSize')?.value || 12);
    
    saveSettingsToStorage();
    hideSettingsModal();
    
    document.querySelectorAll('.verse-arabic').forEach(el => el.style.fontSize = `${settings.arabicFontSize}px`);
    document.querySelectorAll('.verse-translation').forEach(el => el.style.fontSize = `${settings.transFontSize}px`);
    
    const quickTrans = document.getElementById('quickTranslation');
    if (quickTrans) quickTrans.value = settings.translation;
    
    if (currentTranslationId !== settings.translation) {
        onTranslationChange();
    }
    
    toast('✓ Saved');
}

// ==========================================
// UTILITIES
// ==========================================
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function show(id) {
    document.getElementById(id)?.classList.remove('hidden');
}

function hide(id) {
    document.getElementById(id)?.classList.add('hidden');
}

function handleModalClick(e) {
    if (e.target.classList.contains('modal')) e.target.classList.add('hidden');
}

function toast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'toast';
        t.className = 'toast';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.remove('hidden');
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => t.classList.add('hidden'), 2000);
}

// ==========================================
// EXPORTS
// ==========================================
window.openSurah = openSurah;
window.filterSurahs = filterSurahs;
window.goBack = goBack;
window.goToPrevSurah = goToPrevSurah;
window.goToNextSurah = goToNextSurah;
window.onTranslationChange = onTranslationChange;
window.showSettingsModal = showSettingsModal;
window.hideSettingsModal = hideSettingsModal;
window.saveSettings = saveSettings;
window.updateFontSizePreview = updateFontSizePreview;
window.playBismillah = playBismillah;
window.playVerse = playVerse;
window.togglePlayPause = togglePlayPause;
window.previousVerse = previousVerse;
window.nextVerse = nextVerse;
window.toggleRepeat = toggleRepeat;
window.toggleContinuousPlay = toggleContinuousPlay;
window.seekAudio = seekAudio;
window.copyVerse = copyVerse;
window.downloadVerseAudio = downloadVerseAudio;
window.handleModalClick = handleModalClick;
window.loadSurahData = loadSurahData;
