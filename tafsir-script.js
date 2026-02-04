/* ==========================================
   SIJJEEN TAFSIR - Vanilla JavaScript
   ========================================== */

// ==========================================
// DATA - 27 Tafsirs
// ==========================================
var TAFSIRS = [
    { id: 'ar-tafseer-al-saddi', name: 'Tafseer Al Saddi', author: 'Saddi', language: 'arabic', language_name: 'arabic' },
    { id: 'ar-tafsir-ibn-kathir', name: 'Tafsir Ibn Kathir', author: 'Hafiz Ibn Kathir', language: 'arabic', language_name: 'arabic' },
    { id: 'ar-tafsir-al-baghawi', name: 'Tafseer Al-Baghawi', author: 'Baghawy', language: 'arabic', language_name: 'arabic' },
    { id: 'ar-tafseer-tanwir-al-miqbas', name: 'Tafseer Tanwir al-Miqbas', author: 'Tanweer', language: 'arabic', language_name: 'arabic' },
    { id: 'ar-tafsir-al-wasit', name: 'Tafsir Al Wasit', author: 'Waseet', language: 'arabic', language_name: 'arabic' },
    { id: 'ar-tafsir-al-tabari', name: 'Tafsir al-Tabari', author: 'Tabari', language: 'arabic', language_name: 'arabic' },
    { id: 'ar-tafsir-muyassar', name: 'Tafsir Muyassar', author: 'Al Muyassar', language: 'arabic', language_name: 'arabic' },
    { id: 'ar-tafseer-al-qurtubi', name: 'Tafseer Al Qurtubi', author: 'Qurtubi', language: 'arabic', language_name: 'arabic' },
    { id: 'bn-tafisr-fathul-majid', name: 'Tafsir Fathul Majid', author: 'AbdulRahman Bin Hasan', language: 'bengali', language_name: 'bengali' },
    { id: 'bn-tafseer-ibn-e-kaseer', name: 'Tafseer ibn Kathir', author: 'Tawheed Publication', language: 'bengali', language_name: 'bengali' },
    { id: 'bn-tafsir-ahsanul-bayaan', name: 'Tafsir Ahsanul Bayaan', author: 'Bayaan Foundation', language: 'bengali', language_name: 'bengali' },
    { id: 'bn-tafsir-abu-bakr-zakaria', name: 'Tafsir Abu Bakr Zakaria', author: 'King Fahd Complex', language: 'bengali', language_name: 'bengali' },
    { id: 'en-tafisr-ibn-kathir', name: 'Tafsir Ibn Kathir (abridged)', author: 'Hafiz Ibn Kathir', language: 'english', language_name: 'english' },
    { id: 'en-tazkirul-quran', name: 'Tazkirul Quran', author: 'Maulana Wahid Uddin Khan', language: 'english', language_name: 'english' },
    { id: 'en-kashf-al-asrar-tafsir', name: 'Kashf Al-Asrar Tafsir', author: 'Kashf Al-Asrar', language: 'english', language_name: 'english' },
    { id: 'en-al-qushairi-tafsir', name: 'Al Qushairi Tafsir', author: 'Al Qushairi', language: 'english', language_name: 'english' },
    { id: 'en-kashani-tafsir', name: 'Kashani Tafsir', author: 'Kashani', language: 'english', language_name: 'english' },
    { id: 'en-tafsir-al-tustari', name: 'Tafsir al-Tustari', author: 'Al-Tustari', language: 'english', language_name: 'english' },
    { id: 'en-asbab-al-nuzul-by-al-wahidi', name: 'Asbab Al-Nuzul by Al-Wahidi', author: 'Al-Wahidi', language: 'english', language_name: 'english' },
    { id: 'en-tafsir-ibn-abbas', name: 'Tanwîr al-Miqbâs (Ibn Abbas)', author: 'Ibn Abbas', language: 'english', language_name: 'english' },
    { id: 'en-al-jalalayn', name: 'Al-Jalalayn', author: 'Al-Jalalayn', language: 'english', language_name: 'english' },
    { id: 'en-tafsir-maarif-ul-quran', name: 'Maarif-ul-Quran', author: 'Mufti Muhammad Shafi', language: 'english', language_name: 'english' },
    { id: 'kurd-tafsir-rebar', name: 'Rebar Kurdish Tafsir', author: 'Rebar', language: 'kurdish', language_name: 'kurdish' },
    { id: 'ru-tafseer-al-saddi', name: 'Tafseer Al Saddi', author: 'Saddi', language: 'russian', language_name: 'russian' },
    { id: 'ur-tafseer-ibn-e-kaseer', name: 'Tafsir Ibn Kathir', author: 'Hafiz Ibn Kathir', language: 'urdu', language_name: 'urdu' },
    { id: 'ur-tafsir-bayan-ul-quran', name: 'Tafsir Bayan ul Quran', author: 'Dr. Israr Ahmad', language: 'urdu', language_name: 'urdu' },
    { id: 'ur-tazkirul-quran', name: 'Tazkirul Quran', author: 'Maulana Wahid Uddin Khan', language: 'urdu', language_name: 'urdu' }
];

// 114 Surahs Data
var SURAHS = [
    { number: 1, name: 'Al-Fatihah', arabic: 'الفاتحة', verses: 7, type: 'Meccan' },
    { number: 2, name: 'Al-Baqarah', arabic: 'البقرة', verses: 286, type: 'Medinan' },
    { number: 3, name: 'Ali \'Imran', arabic: 'آل عمران', verses: 200, type: 'Medinan' },
    { number: 4, name: 'An-Nisa', arabic: 'النساء', verses: 176, type: 'Medinan' },
    { number: 5, name: 'Al-Ma\'idah', arabic: 'المائدة', verses: 120, type: 'Medinan' },
    { number: 6, name: 'Al-An\'am', arabic: 'الأنعام', verses: 165, type: 'Meccan' },
    { number: 7, name: 'Al-A\'raf', arabic: 'الأعراف', verses: 206, type: 'Meccan' },
    { number: 8, name: 'Al-Anfal', arabic: 'الأنفال', verses: 75, type: 'Medinan' },
    { number: 9, name: 'At-Tawbah', arabic: 'التوبة', verses: 129, type: 'Medinan' },
    { number: 10, name: 'Yunus', arabic: 'يونس', verses: 109, type: 'Meccan' },
    { number: 11, name: 'Hud', arabic: 'هود', verses: 123, type: 'Meccan' },
    { number: 12, name: 'Yusuf', arabic: 'يوسف', verses: 111, type: 'Meccan' },
    { number: 13, name: 'Ar-Ra\'d', arabic: 'الرعد', verses: 43, type: 'Medinan' },
    { number: 14, name: 'Ibrahim', arabic: 'ابراهيم', verses: 52, type: 'Meccan' },
    { number: 15, name: 'Al-Hijr', arabic: 'الحجر', verses: 99, type: 'Meccan' },
    { number: 16, name: 'An-Nahl', arabic: 'النحل', verses: 128, type: 'Meccan' },
    { number: 17, name: 'Al-Isra', arabic: 'الإسراء', verses: 111, type: 'Meccan' },
    { number: 18, name: 'Al-Kahf', arabic: 'الكهف', verses: 110, type: 'Meccan' },
    { number: 19, name: 'Maryam', arabic: 'مريم', verses: 98, type: 'Meccan' },
    { number: 20, name: 'Taha', arabic: 'طه', verses: 135, type: 'Meccan' },
    { number: 21, name: 'Al-Anbya', arabic: 'الأنبياء', verses: 112, type: 'Meccan' },
    { number: 22, name: 'Al-Hajj', arabic: 'الحج', verses: 78, type: 'Medinan' },
    { number: 23, name: 'Al-Mu\'minun', arabic: 'المؤمنون', verses: 118, type: 'Meccan' },
    { number: 24, name: 'An-Nur', arabic: 'النور', verses: 64, type: 'Medinan' },
    { number: 25, name: 'Al-Furqan', arabic: 'الفرقان', verses: 77, type: 'Meccan' },
    { number: 26, name: 'Ash-Shu\'ara', arabic: 'الشعراء', verses: 227, type: 'Meccan' },
    { number: 27, name: 'An-Naml', arabic: 'النمل', verses: 93, type: 'Meccan' },
    { number: 28, name: 'Al-Qasas', arabic: 'القصص', verses: 88, type: 'Meccan' },
    { number: 29, name: 'Al-\'Ankabut', arabic: 'العنكبوت', verses: 69, type: 'Meccan' },
    { number: 30, name: 'Ar-Rum', arabic: 'الروم', verses: 60, type: 'Meccan' },
    { number: 31, name: 'Luqman', arabic: 'لقمان', verses: 34, type: 'Meccan' },
    { number: 32, name: 'As-Sajdah', arabic: 'السجدة', verses: 30, type: 'Meccan' },
    { number: 33, name: 'Al-Ahzab', arabic: 'الأحزاب', verses: 73, type: 'Medinan' },
    { number: 34, name: 'Saba', arabic: 'سبإ', verses: 54, type: 'Meccan' },
    { number: 35, name: 'Fatir', arabic: 'فاطر', verses: 45, type: 'Meccan' },
    { number: 36, name: 'Ya-Sin', arabic: 'يس', verses: 83, type: 'Meccan' },
    { number: 37, name: 'As-Saffat', arabic: 'الصافات', verses: 182, type: 'Meccan' },
    { number: 38, name: 'Sad', arabic: 'ص', verses: 88, type: 'Meccan' },
    { number: 39, name: 'Az-Zumar', arabic: 'الزمر', verses: 75, type: 'Meccan' },
    { number: 40, name: 'Ghafir', arabic: 'غافر', verses: 85, type: 'Meccan' },
    { number: 41, name: 'Fussilat', arabic: 'فصلت', verses: 54, type: 'Meccan' },
    { number: 42, name: 'Ash-Shuraa', arabic: 'الشورى', verses: 53, type: 'Meccan' },
    { number: 43, name: 'Az-Zukhruf', arabic: 'الزخرف', verses: 89, type: 'Meccan' },
    { number: 44, name: 'Ad-Dukhan', arabic: 'الدخان', verses: 59, type: 'Meccan' },
    { number: 45, name: 'Al-Jathiyah', arabic: 'الجاثية', verses: 37, type: 'Meccan' },
    { number: 46, name: 'Al-Ahqaf', arabic: 'الأحقاف', verses: 35, type: 'Meccan' },
    { number: 47, name: 'Muhammad', arabic: 'محمد', verses: 38, type: 'Medinan' },
    { number: 48, name: 'Al-Fath', arabic: 'الفتح', verses: 29, type: 'Medinan' },
    { number: 49, name: 'Al-Hujurat', arabic: 'الحجرات', verses: 18, type: 'Medinan' },
    { number: 50, name: 'Qaf', arabic: 'ق', verses: 45, type: 'Meccan' },
    { number: 51, name: 'Adh-Dhariyat', arabic: 'الذاريات', verses: 60, type: 'Meccan' },
    { number: 52, name: 'At-Tur', arabic: 'الطور', verses: 49, type: 'Meccan' },
    { number: 53, name: 'An-Najm', arabic: 'النجم', verses: 62, type: 'Meccan' },
    { number: 54, name: 'Al-Qamar', arabic: 'القمر', verses: 55, type: 'Meccan' },
    { number: 55, name: 'Ar-Rahman', arabic: 'الرحمن', verses: 78, type: 'Medinan' },
    { number: 56, name: 'Al-Waqi\'ah', arabic: 'الواقعة', verses: 96, type: 'Meccan' },
    { number: 57, name: 'Al-Hadid', arabic: 'الحديد', verses: 29, type: 'Medinan' },
    { number: 58, name: 'Al-Mujadila', arabic: 'المجادلة', verses: 22, type: 'Medinan' },
    { number: 59, name: 'Al-Hashr', arabic: 'الحشر', verses: 24, type: 'Medinan' },
    { number: 60, name: 'Al-Mumtahanah', arabic: 'الممتحنة', verses: 13, type: 'Medinan' },
    { number: 61, name: 'As-Saf', arabic: 'الصف', verses: 14, type: 'Medinan' },
    { number: 62, name: 'Al-Jumu\'ah', arabic: 'الجمعة', verses: 11, type: 'Medinan' },
    { number: 63, name: 'Al-Munafiqun', arabic: 'المنافقون', verses: 11, type: 'Medinan' },
    { number: 64, name: 'At-Taghabun', arabic: 'التغابن', verses: 18, type: 'Medinan' },
    { number: 65, name: 'At-Talaq', arabic: 'الطلاق', verses: 12, type: 'Medinan' },
    { number: 66, name: 'At-Tahrim', arabic: 'التحريم', verses: 12, type: 'Medinan' },
    { number: 67, name: 'Al-Mulk', arabic: 'الملك', verses: 30, type: 'Meccan' },
    { number: 68, name: 'Al-Qalam', arabic: 'القلم', verses: 52, type: 'Meccan' },
    { number: 69, name: 'Al-Haqqah', arabic: 'الحاقة', verses: 52, type: 'Meccan' },
    { number: 70, name: 'Al-Ma\'arij', arabic: 'المعارج', verses: 44, type: 'Meccan' },
    { number: 71, name: 'Nuh', arabic: 'نوح', verses: 28, type: 'Meccan' },
    { number: 72, name: 'Al-Jinn', arabic: 'الجن', verses: 28, type: 'Meccan' },
    { number: 73, name: 'Al-Muzzammil', arabic: 'المزمل', verses: 20, type: 'Meccan' },
    { number: 74, name: 'Al-Muddaththir', arabic: 'المدثر', verses: 56, type: 'Meccan' },
    { number: 75, name: 'Al-Qiyamah', arabic: 'القيامة', verses: 40, type: 'Meccan' },
    { number: 76, name: 'Al-Insan', arabic: 'الانسان', verses: 31, type: 'Medinan' },
    { number: 77, name: 'Al-Mursalat', arabic: 'المرسلات', verses: 50, type: 'Meccan' },
    { number: 78, name: 'An-Naba', arabic: 'النبإ', verses: 40, type: 'Meccan' },
    { number: 79, name: 'An-Nazi\'at', arabic: 'النازعات', verses: 46, type: 'Meccan' },
    { number: 80, name: '\'Abasa', arabic: 'عبس', verses: 42, type: 'Meccan' },
    { number: 81, name: 'At-Takwir', arabic: 'التكوير', verses: 29, type: 'Meccan' },
    { number: 82, name: 'Al-Infitar', arabic: 'الإنفطار', verses: 19, type: 'Meccan' },
    { number: 83, name: 'Al-Mutaffifin', arabic: 'المطففين', verses: 36, type: 'Meccan' },
    { number: 84, name: 'Al-Inshiqaq', arabic: 'الإنشقاق', verses: 25, type: 'Meccan' },
    { number: 85, name: 'Al-Buruj', arabic: 'البروج', verses: 22, type: 'Meccan' },
    { number: 86, name: 'At-Tariq', arabic: 'الطارق', verses: 17, type: 'Meccan' },
    { number: 87, name: 'Al-A\'la', arabic: 'الأعلى', verses: 19, type: 'Meccan' },
    { number: 88, name: 'Al-Ghashiyah', arabic: 'الغاشية', verses: 26, type: 'Meccan' },
    { number: 89, name: 'Al-Fajr', arabic: 'الفجر', verses: 30, type: 'Meccan' },
    { number: 90, name: 'Al-Balad', arabic: 'البلد', verses: 20, type: 'Meccan' },
    { number: 91, name: 'Ash-Shams', arabic: 'الشمس', verses: 15, type: 'Meccan' },
    { number: 92, name: 'Al-Layl', arabic: 'الليل', verses: 21, type: 'Meccan' },
    { number: 93, name: 'Ad-Duhaa', arabic: 'الضحى', verses: 11, type: 'Meccan' },
    { number: 94, name: 'Ash-Sharh', arabic: 'الشرح', verses: 8, type: 'Meccan' },
    { number: 95, name: 'At-Tin', arabic: 'التين', verses: 8, type: 'Meccan' },
    { number: 96, name: 'Al-\'Alaq', arabic: 'العلق', verses: 19, type: 'Meccan' },
    { number: 97, name: 'Al-Qadr', arabic: 'القدر', verses: 5, type: 'Meccan' },
    { number: 98, name: 'Al-Bayyinah', arabic: 'البينة', verses: 8, type: 'Medinan' },
    { number: 99, name: 'Az-Zalzalah', arabic: 'الزلزلة', verses: 8, type: 'Medinan' },
    { number: 100, name: 'Al-\'Adiyat', arabic: 'العاديات', verses: 11, type: 'Meccan' },
    { number: 101, name: 'Al-Qari\'ah', arabic: 'القارعة', verses: 11, type: 'Meccan' },
    { number: 102, name: 'At-Takathur', arabic: 'التكاثر', verses: 8, type: 'Meccan' },
    { number: 103, name: 'Al-\'Asr', arabic: 'العصر', verses: 3, type: 'Meccan' },
    { number: 104, name: 'Al-Humazah', arabic: 'الهمزة', verses: 9, type: 'Meccan' },
    { number: 105, name: 'Al-Fil', arabic: 'الفيل', verses: 5, type: 'Meccan' },
    { number: 106, name: 'Quraysh', arabic: 'قريش', verses: 4, type: 'Meccan' },
    { number: 107, name: 'Al-Ma\'un', arabic: 'الماعون', verses: 7, type: 'Meccan' },
    { number: 108, name: 'Al-Kawthar', arabic: 'الكوثر', verses: 3, type: 'Meccan' },
    { number: 109, name: 'Al-Kafirun', arabic: 'الكافرون', verses: 6, type: 'Meccan' },
    { number: 110, name: 'An-Nasr', arabic: 'النصر', verses: 3, type: 'Medinan' },
    { number: 111, name: 'Al-Masad', arabic: 'المسد', verses: 5, type: 'Meccan' },
    { number: 112, name: 'Al-Ikhlas', arabic: 'الإخلاص', verses: 4, type: 'Meccan' },
    { number: 113, name: 'Al-Falaq', arabic: 'الفلق', verses: 5, type: 'Meccan' },
    { number: 114, name: 'An-Nas', arabic: 'الناس', verses: 6, type: 'Meccan' }
];

// ==========================================
// STATE
// ==========================================
var currentLanguage = 'all';
var selectedTafsir = null;
var selectedSurah = null;
var selectedAyah = 1;
var currentSurahData = null;
var bookmarks = [];
var recentReads = [];
var currentFontSize = 16; // Base font size

// CDN Base URL
var CDN_BASE = 'https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir';

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    loadFromStorage();
    populateTafsirDropdown();
    populateSurahDropdown();
    renderRecentCards();
});

// ==========================================
// STORAGE
// ==========================================
function loadFromStorage() {
    try {
        bookmarks = JSON.parse(localStorage.getItem('tafsir_bookmarks') || '[]');
        recentReads = JSON.parse(localStorage.getItem('tafsir_recent') || '[]');
        currentFontSize = parseInt(localStorage.getItem('tafsir_font_size') || '16');
        updateFontSize();
    } catch (e) {
        bookmarks = [];
        recentReads = [];
        currentFontSize = 16;
    }
}

function saveBookmarks() {
    localStorage.setItem('tafsir_bookmarks', JSON.stringify(bookmarks));
}

function saveRecentReads() {
    localStorage.setItem('tafsir_recent', JSON.stringify(recentReads.slice(0, 10)));
}

function saveFontSize() {
    localStorage.setItem('tafsir_font_size', currentFontSize.toString());
}

function addToRecent(tafsirId, surahNum, ayahNum) {
    var tafsir = TAFSIRS.find(function(t) { return t.id === tafsirId; });
    var surah = SURAHS.find(function(s) { return s.number === surahNum; });
    if (!tafsir || !surah) return;

    var recent = {
        tafsirId: tafsirId,
        tafsirName: tafsir.name,
        surahNum: surahNum,
        surahName: surah.name,
        surahArabic: surah.arabic,
        ayahNum: ayahNum,
        timestamp: Date.now()
    };

    // Remove duplicate
    recentReads = recentReads.filter(function(r) {
        return !(r.tafsirId === tafsirId && r.surahNum === surahNum && r.ayahNum === ayahNum);
    });

    recentReads.unshift(recent);
    saveRecentReads();
}

function isBookmarked(surahNum, ayahNum) {
    return bookmarks.some(function(b) {
        return b.surahNum === surahNum && b.ayahNum === ayahNum;
    });
}

function toggleBookmark(surahNum, ayahNum) {
    var index = bookmarks.findIndex(function(b) {
        return b.surahNum === surahNum && b.ayahNum === ayahNum;
    });

    if (index !== -1) {
        bookmarks.splice(index, 1);
        toast('Bookmark removed');
    } else {
        var surah = SURAHS.find(function(s) { return s.number === surahNum; });
        bookmarks.push({
            surahNum: surahNum,
            surahName: surah ? surah.name : 'Surah ' + surahNum,
            ayahNum: ayahNum,
            timestamp: Date.now()
        });
        toast('⭐ Bookmarked!');
    }

    saveBookmarks();
}

// ==========================================
// LANGUAGE FILTER
// ==========================================
function filterByLanguage(lang) {
    currentLanguage = lang;
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    populateTafsirDropdown();
}

// ==========================================
// POPULATE DROPDOWNS
// ==========================================
function populateTafsirDropdown() {
    var select = document.getElementById('tafsirSelect');
    var filtered = currentLanguage === 'all' 
        ? TAFSIRS 
        : TAFSIRS.filter(function(t) { return t.language_name === currentLanguage; });

    var html = '<option value="">Select a Tafsir...</option>';
    filtered.forEach(function(tafsir) {
        html += '<option value="' + tafsir.id + '">' + tafsir.name + ' (' + tafsir.author + ')</option>';
    });

    select.innerHTML = html;
}

function populateSurahDropdown() {
    var select = document.getElementById('surahSelect');
    var html = '<option value="">Select a Surah...</option>';
    
    SURAHS.forEach(function(surah) {
        html += '<option value="' + surah.number + '">' + 
                surah.number + '. ' + surah.name + ' (' + surah.arabic + ')</option>';
    });

    select.innerHTML = html;
}

function populateAyahDropdown(verseCount) {
    var select = document.getElementById('ayahSelect');
    var html = '';
    
    for (var i = 1; i <= verseCount; i++) {
        html += '<option value="' + i + '">Ayah ' + i + '</option>';
    }

    select.innerHTML = html;
    select.value = '1';
}

// ==========================================
// DROPDOWN HANDLERS
// ==========================================
function onTafsirChange() {
    var select = document.getElementById('tafsirSelect');
    selectedTafsir = select.value;

    var surahSelect = document.getElementById('surahSelect');
    surahSelect.disabled = !selectedTafsir;

    if (selectedTafsir) {
        surahSelect.innerHTML = '<option value="">Select a Surah...</option>';
        SURAHS.forEach(function(surah) {
            surahSelect.innerHTML += '<option value="' + surah.number + '">' + 
                    surah.number + '. ' + surah.name + ' (' + surah.arabic + ')</option>';
        });
    }

    updateStartButton();
}

function onSurahChange() {
    var select = document.getElementById('surahSelect');
    selectedSurah = parseInt(select.value);

    var ayahSelect = document.getElementById('ayahSelect');
    ayahSelect.disabled = !selectedSurah;

    if (selectedSurah) {
        var surah = SURAHS.find(function(s) { return s.number === selectedSurah; });
        if (surah) {
            populateAyahDropdown(surah.verses);
        }
    }

    updateStartButton();
}

function updateStartButton() {
    var btn = document.getElementById('startBtn');
    btn.disabled = !selectedTafsir || !selectedSurah;
}

// ==========================================
// START READING
// ==========================================
function startReading() {
    var ayahSelect = document.getElementById('ayahSelect');
    selectedAyah = parseInt(ayahSelect.value);

    if (!selectedTafsir || !selectedSurah) {
        toast('Please select Tafsir and Surah');
        return;
    }

    // Update button to loading state
    var btn = document.getElementById('startBtn');
    var btnText = document.getElementById('startBtnText');
    btnText.textContent = 'Loading...';
    btn.disabled = true;

    // Add to recent reads
    addToRecent(selectedTafsir, selectedSurah, selectedAyah);

    // Fetch and display
    fetchTafsir(selectedTafsir, selectedSurah, selectedAyah);
}

// ==========================================
// FETCH TAFSIR FROM API
// ==========================================
function fetchTafsir(tafsirId, surahNum, ayahNum) {
    var url = CDN_BASE + '/' + tafsirId + '/' + surahNum + '.json';

    fetch(url)
        .then(function(response) {
            if (!response.ok) throw new Error('Failed to load');
            return response.json();
        })
        .then(function(data) {
            currentSurahData = data;
            displayReadingView(tafsirId, surahNum, ayahNum);
        })
        .catch(function(error) {
            console.error('Error:', error);
            toast('❌ Failed to load tafsir');
            
            // Reset button properly
            resetStartButton();
        });
}

function resetStartButton() {
    var btn = document.getElementById('startBtn');
    var btnText = document.getElementById('startBtnText');
    btnText.innerHTML = '<img src="assets/book.png" alt="" class="btn-icon">Start Reading';
    btn.disabled = !selectedTafsir || !selectedSurah;
}

// ==========================================
// DISPLAY READING VIEW
// ==========================================
function displayReadingView(tafsirId, surahNum, ayahNum) {
    var surah = SURAHS.find(function(s) { return s.number === surahNum; });
    if (!surah) return;

    // Update header
    document.getElementById('surahNumber').textContent = 'Surah ' + surah.number;
    document.getElementById('surahNameAr').textContent = surah.arabic;
    document.getElementById('surahNameEn').textContent = surah.name;
    document.getElementById('surahMeta').textContent = surah.verses + ' verses • ' + surah.type;

    // Populate tafsir switcher with language badges
    populateTafsirSwitcher(tafsirId);

    // Render ayahs
    renderAyahs(tafsirId, ayahNum);

    // Show reading view
    showView('reading');
    
    // Reset button (important!)
    resetStartButton();
}

// ==========================================
// POPULATE TAFSIR SWITCHER WITH BADGES
// ==========================================
function populateTafsirSwitcher(currentTafsirId) {
    var select = document.getElementById('tafsirSwitchSelect');
    select.innerHTML = '';
    
    TAFSIRS.forEach(function(t) {
        var option = document.createElement('option');
        option.value = t.id;
        
        // Add language badge
        var langBadge = ' [' + t.language_name.charAt(0).toUpperCase() + t.language_name.slice(1) + ']';
        option.textContent = t.name + langBadge;
        
        if (t.id === currentTafsirId) option.selected = true;
        select.appendChild(option);
    });
}

// ==========================================
// RENDER AYAHS (FIXED NUMERIC SORTING!)
// ==========================================
function renderAyahs(tafsirId, scrollToAyah) {
    var container = document.getElementById('ayahsContainer');
    
    if (!currentSurahData || !currentSurahData.ayahs) {
        container.innerHTML = '<div class="loading"><p>No data available</p></div>';
        return;
    }

    var tafsir = TAFSIRS.find(function(t) { return t.id === tafsirId; });
    var fontClass = '';
    if (tafsir && tafsir.language_name === 'urdu') {
        fontClass = ' urdu';
    }

    // FIXED: Convert keys to integers and sort numerically
    var ayahNumbers = Object.keys(currentSurahData.ayahs).map(function(key) {
        return parseInt(key);
    }).sort(function(a, b) {
        return a - b; // Numeric sort
    });

    var html = '';
    ayahNumbers.forEach(function(ayahNum) {
        var ayah = currentSurahData.ayahs[ayahNum];
        if (!ayah) return;
        
        var isHighlight = ayahNum === scrollToAyah;
        var isMarked = isBookmarked(selectedSurah, ayahNum);

        html += '<div class="ayah-card' + (isHighlight ? ' highlight' : '') + '" id="ayah-' + ayahNum + '">' +
            '<div class="ayah-header" onclick="toggleAyah(' + ayahNum + ')">' +
                '<span class="ayah-number">Ayah ' + ayahNum + '</span>' +
                '<div class="ayah-actions">' +
                    '<button class="action-btn' + (isMarked ? ' bookmarked' : '') + '" onclick="event.stopPropagation(); handleBookmark(' + ayahNum + ')\" title="Bookmark">' +
                        (isMarked ? '⭐' : '☆') +
                    '</button>' +
                    '<button class="action-btn" onclick="event.stopPropagation(); copyAyah(' + ayahNum + ')\" title="Copy">' +
                        '<img src="assets/copy.png" alt="Copy">' +
                    '</button>' +
                    '<span class="expand-icon">▼</span>' +
                '</div>' +
            '</div>' +
            '<div class="ayah-content">' +
                '<div class="ayah-text' + fontClass + '">' + ayah.text + '</div>' +
            '</div>' +
        '</div>';
    });

    container.innerHTML = html;

    // Auto-scroll to selected ayah
    if (scrollToAyah) {
        setTimeout(function() {
            var ayahCard = document.getElementById('ayah-' + scrollToAyah);
            if (ayahCard) {
                ayahCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                ayahCard.classList.add('expanded');
            }
        }, 100);
    }
}

// ==========================================
// TOGGLE AYAH EXPAND/COLLAPSE
// ==========================================
function toggleAyah(ayahNum) {
    var card = document.getElementById('ayah-' + ayahNum);
    if (card) {
        card.classList.toggle('expanded');
    }
}

// ==========================================
// BOOKMARK HANDLER
// ==========================================
function handleBookmark(ayahNum) {
    toggleBookmark(selectedSurah, ayahNum);
    
    // Update button
    var card = document.getElementById('ayah-' + ayahNum);
    if (card) {
        var btn = card.querySelector('.action-btn');
        var marked = isBookmarked(selectedSurah, ayahNum);
        btn.innerHTML = marked ? '⭐' : '☆';
        btn.classList.toggle('bookmarked', marked);
    }
}

// ==========================================
// COPY AYAH
// ==========================================
function copyAyah(ayahNum) {
    if (!currentSurahData || !currentSurahData.ayahs[ayahNum]) {
        toast('No data');
        return;
    }

    var ayah = currentSurahData.ayahs[ayahNum];
    var surah = SURAHS.find(function(s) { return s.number === selectedSurah; });
    var tafsir = TAFSIRS.find(function(t) { return t.id === selectedTafsir; });

    var text = ayah.text + '\n\n';
    text += '— ' + surah.name + ' (' + surah.arabic + ') ' + ayahNum + '\n';
    text += 'Tafsir: ' + tafsir.name;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(function() { toast('✓ Copied!'); })
            .catch(function() { fallbackCopy(text); });
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
    textarea.select();
    
    try {
        document.execCommand('copy');
        toast('✓ Copied!');
    } catch (err) {
        toast('❌ Copy failed');
    }
    
    document.body.removeChild(textarea);
}

// ==========================================
// SWITCH TAFSIR
// ==========================================
function switchTafsir() {
    var select = document.getElementById('tafsirSwitchSelect');
    var newTafsirId = select.value;

    if (newTafsirId === selectedTafsir) return;

    selectedTafsir = newTafsirId;

    // Show loading
    document.getElementById('ayahsContainer').innerHTML = 
        '<div class="loading"><div class="spinner"></div><p>Loading tafsir...</p></div>';

    // Fetch new tafsir
    fetchTafsir(newTafsirId, selectedSurah, selectedAyah);
}

// ==========================================
// FONT SIZE CONTROLS
// ==========================================
function increaseFontSize() {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        updateFontSize();
        saveFontSize();
        toast('Font size: ' + currentFontSize + 'px');
    }
}

function decreaseFontSize() {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        updateFontSize();
        saveFontSize();
        toast('Font size: ' + currentFontSize + 'px');
    }
}

function updateFontSize() {
    document.documentElement.style.setProperty('--ayah-font-size', currentFontSize + 'px');
}

// ==========================================
// RECENT CARDS
// ==========================================
function renderRecentCards() {
    var container = document.getElementById('recentCards');
    var section = document.getElementById('recentSection');

    if (!recentReads.length) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';

    var html = '';
    recentReads.slice(0, 5).forEach(function(recent) {
        var timeAgo = getTimeAgo(recent.timestamp);
        html += '<div class="recent-card" onclick="loadRecent(\'' + recent.tafsirId + '\', ' + recent.surahNum + ', ' + recent.ayahNum + ')">' +
            '<div class="recent-card-header">' +
                '<span class="recent-tafsir">' + recent.tafsirName + '</span>' +
                '<span class="recent-time">' + timeAgo + '</span>' +
            '</div>' +
            '<div class="recent-surah">' + recent.surahName + ' • ' + recent.surahArabic + '</div>' +
            '<div class="recent-ayah">Starting from Ayah ' + recent.ayahNum + '</div>' +
        '</div>';
    });

    container.innerHTML = html;
}

function loadRecent(tafsirId, surahNum, ayahNum) {
    selectedTafsir = tafsirId;
    selectedSurah = surahNum;
    selectedAyah = ayahNum;

    // Update dropdowns
    document.getElementById('tafsirSelect').value = tafsirId;
    document.getElementById('surahSelect').value = surahNum;
    onSurahChange();
    document.getElementById('ayahSelect').value = ayahNum;

    startReading();
}

function getTimeAgo(timestamp) {
    var seconds = Math.floor((Date.now() - timestamp) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
    if (seconds < 604800) return Math.floor(seconds / 86400) + 'd ago';
    return new Date(timestamp).toLocaleDateString();
}

// ==========================================
// VIEW MANAGEMENT
// ==========================================
function showView(view) {
    document.getElementById('selectorView').classList.toggle('hidden', view !== 'selector');
    document.getElementById('readingView').classList.toggle('hidden', view !== 'reading');
    
    document.getElementById('pageTitle').textContent = view === 'reading' ? 'Reading' : 'Tafsir';
}

function goBack() {
    var readingView = document.getElementById('readingView');
    if (!readingView.classList.contains('hidden')) {
        showView('selector');
        renderRecentCards(); // Refresh recent reads
        resetStartButton(); // Reset button state
    } else {
        window.location.href = 'library.html';
    }
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================
function toast(message) {
    var existing = document.getElementById('toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function() {
        toast.classList.add('hidden');
        setTimeout(function() { toast.remove(); }, 300);
    }, 2500);
}
