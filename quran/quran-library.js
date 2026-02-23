/* ==========================================
   SIJJEEN QURAN LIBRARY - COMPLETE VERSION
   With All Translations, Urdu Audio, Download Surah
   Fixed Lazy Loading & Reciters API
   ========================================== */

// ==========================================
// CONFIGURATION
// ==========================================
const AUDIO_BASE = 'https://everyayah.com/data';
const URDU_AUDIO_BASE = 'https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps';

// FIXED: Correct raw GitHub URL (no refs/heads/)
const SURAH_RECITERS_API = 'https://raw.githubusercontent.com/rn0x/Quran-Data/version-2.0/data/json/audio/audio_surah_';

// All Translations
const TRANSLATIONS = {
    // English
    'en.sahih': { file: 'data/en.sahih.txt', name: 'Saheeh International', language: 'English', dir: 'ltr' },
    'en.ahmedali': { file: 'data/en.ahmedali.txt', name: 'Ahmed Ali', language: 'English', dir: 'ltr' },
    'en.ahmedraza': { file: 'data/en.ahmedraza.txt', name: 'Ahmed Raza Khan', language: 'English', dir: 'ltr' },
    'en.arberry': { file: 'data/en.arberry.txt', name: 'Arberry', language: 'English', dir: 'ltr' },
    'en.daryabadi': { file: 'data/en.daryabadi.txt', name: 'Daryabadi', language: 'English', dir: 'ltr' },
    'en.hilali': { file: 'data/en.hilali.txt', name: 'Hilali & Khan', language: 'English', dir: 'ltr' },
    'en.itani': { file: 'data/en.itani.txt', name: 'Talal Itani', language: 'English', dir: 'ltr' },
    'en.maududi': { file: 'data/en.maududi.txt', name: 'Maududi', language: 'English', dir: 'ltr' },
    'en.mubarakpuri': { file: 'data/en.mubarakpuri.txt', name: 'Mubarakpuri', language: 'English', dir: 'ltr' },
    'en.pickthall': { file: 'data/en.pickthall.txt', name: 'Pickthall', language: 'English', dir: 'ltr' },
    'en.qarai': { file: 'data/en.qarai.txt', name: 'Ali Quli Qarai', language: 'English', dir: 'ltr' },
    'en.qaribullah': { file: 'data/en.qaribullah.txt', name: 'Qaribullah & Darwish', language: 'English', dir: 'ltr' },
    'en.sarwar': { file: 'data/en.sarwar.txt', name: 'Muhammad Sarwar', language: 'English', dir: 'ltr' },
    'en.shakir': { file: 'data/en.shakir.txt', name: 'Shakir', language: 'English', dir: 'ltr' },
    'en.transliteration': { file: 'data/en.transliteration.txt', name: 'Transliteration', language: 'English', dir: 'ltr' },
    'en.wahiduddin': { file: 'data/en.wahiduddin.txt', name: 'Wahiduddin Khan', language: 'English', dir: 'ltr' },
    'en.yusufali': { file: 'data/en.yusufali.txt', name: 'Yusuf Ali', language: 'English', dir: 'ltr' },
    
    // Urdu
    'ur.junagarhi': { file: 'data/ur.junagarhi.txt', name: 'محمد جوناگڑھی', language: 'اردو', dir: 'rtl' },
    'ur.jalandhry': { file: 'data/ur.jalandhry.txt', name: 'فتح محمد جالندھری', language: 'اردو', dir: 'rtl' },
    'ur.qadri': { file: 'data/ur.qadri.txt', name: 'طاہر القادری', language: 'اردو', dir: 'rtl' },
    'ur.maududi': { file: 'data/ur.maududi.txt', name: 'ابوالاعلی مودودی', language: 'اردو', dir: 'rtl' },
    'ur.kanzuliman': { file: 'data/ur.kanzuliman.txt', name: 'احمد رضا خان (کنز الایمان)', language: 'اردو', dir: 'rtl' },
    'ur.jawadi': { file: 'data/ur.jawadi.txt', name: 'علامہ جوادی', language: 'اردو', dir: 'rtl' },
    'ur.najafi': { file: 'data/ur.najafi.txt', name: 'محمد حسین نجفی', language: 'اردو', dir: 'rtl' },
    
    // Bengali
    'bn.bengali': { file: 'data/bn.bengali.txt', name: 'জহুরুল হক', language: 'Bengali', dir: 'ltr' },
    'bn.hoque': { file: 'data/bn.hoque.txt', name: 'মুহিউদ্দীন খান', language: 'Bengali', dir: 'ltr' },
    
    // German
    'de.aburida': { file: 'data/de.aburida.txt', name: 'Abu Rida', language: 'German', dir: 'ltr' },
    'de.bubenheim': { file: 'data/de.bubenheim.txt', name: 'Bubenheim & Elyas', language: 'German', dir: 'ltr' },
    'de.khoury': { file: 'data/de.khoury.txt', name: 'Khoury', language: 'German', dir: 'ltr' },
    'de.zaidan': { file: 'data/de.zaidan.txt', name: 'Zaidan', language: 'German', dir: 'ltr' },
    
    // Spanish
    'es.bornez': { file: 'data/es.bornez.txt', name: 'Raúl González Bórnez', language: 'Spanish', dir: 'ltr' },
    'es.cortes': { file: 'data/es.cortes.txt', name: 'Julio Cortes', language: 'Spanish', dir: 'ltr' },
    'es.garcia': { file: 'data/es.garcia.txt', name: 'Muhammad Isa García', language: 'Spanish', dir: 'ltr' },
    
    // French
    'fr.hamidullah': { file: 'data/fr.hamidullah.txt', name: 'Muhammad Hamidullah', language: 'French', dir: 'ltr' },
    
    // Persian
    'fa.ansarian': { file: 'data/fa.ansarian.txt', name: 'حسین انصاریان', language: 'فارسی', dir: 'rtl' },
    'fa.ayati': { file: 'data/fa.ayati.txt', name: 'آیتی', language: 'فارسی', dir: 'rtl' },
    'fa.bahrampour': { file: 'data/fa.bahrampour.txt', name: 'بهرام‌پور', language: 'فارسی', dir: 'rtl' },
    'fa.fooladvand': { file: 'data/fa.fooladvand.txt', name: 'فولادوند', language: 'فارسی', dir: 'rtl' },
    'fa.gharaati': { file: 'data/fa.gharaati.txt', name: 'قرائتی', language: 'فارسی', dir: 'rtl' },
    'fa.ghomshei': { file: 'data/fa.ghomshei.txt', name: 'الهی قمشه‌ای', language: 'فارسی', dir: 'rtl' },
    'fa.khorramdel': { file: 'data/fa.khorramdel.txt', name: 'خرمدل', language: 'فارسی', dir: 'rtl' },
    'fa.khorramshahi': { file: 'data/fa.khorramshahi.txt', name: 'خرمشاهی', language: 'فارسی', dir: 'rtl' },
    'fa.makarem': { file: 'data/fa.makarem.txt', name: 'مکارم شیرازی', language: 'فارسی', dir: 'rtl' },
    'fa.moezzi': { file: 'data/fa.moezzi.txt', name: 'معزی', language: 'فارسی', dir: 'rtl' },
    'fa.mojtabavi': { file: 'data/fa.mojtabavi.txt', name: 'مجتبوی', language: 'فارسی', dir: 'rtl' },
    'fa.sadeqi': { file: 'data/fa.sadeqi.txt', name: 'صادقی تهرانی', language: 'فارسی', dir: 'rtl' },
    'fa.safavi': { file: 'data/fa.safavi.txt', name: 'صفوی', language: 'فارسی', dir: 'rtl' },
    
    // Other Languages
    'am.sadiq': { file: 'data/am.sadiq.txt', name: 'ሳዲቅ & ሳኒ ሐቢብ', language: 'Amharic', dir: 'ltr' },
    'az.mammadaliyev': { file: 'data/az.mammadaliyev.txt', name: 'Məmmədəliyev & Bünyadov', language: 'Azerbaijani', dir: 'ltr' },
    'az.musayev': { file: 'data/az.musayev.txt', name: 'Musayev', language: 'Azerbaijani', dir: 'ltr' },
    'ber.mensur': { file: 'data/ber.mensur.txt', name: 'At Mensur', language: 'Amazigh', dir: 'ltr' },
    'bg.theophanov': { file: 'data/bg.theophanov.txt', name: 'Теофанов', language: 'Bulgarian', dir: 'ltr' },
    'bs.korkut': { file: 'data/bs.korkut.txt', name: 'Besim Korkut', language: 'Bosnian', dir: 'ltr' },
    'bs.mlivo': { file: 'data/bs.mlivo.txt', name: 'Mustafa Mlivo', language: 'Bosnian', dir: 'ltr' },
    'cs.hrbek': { file: 'data/cs.hrbek.txt', name: 'Hrbek', language: 'Czech', dir: 'ltr' },
    'cs.nykl': { file: 'data/cs.nykl.txt', name: 'Nykl', language: 'Czech', dir: 'ltr' },
    'dv.divehi': { file: 'data/dv.divehi.txt', name: 'ދިވެހި', language: 'Divehi', dir: 'rtl' }
};

const ARABIC_FILE = 'data/arabic.txt';

// Reciters for verse-by-verse
const RECITORS = [
    { id: 'Abdurrahmaan_As-Sudais_192kbps', name: 'Abdurrahmaan As-Sudais' },
    { id: 'Abdul_Basit_Murattal_192kbps', name: 'Abdul Basit (Murattal)' },
    { id: 'Abdul_Basit_Mujawwad_128kbps', name: 'Abdul Basit (Mujawwad)' },
    { id: 'Alafasy_128kbps', name: 'Mishary Rashid Alafasy' },
    { id: 'Abu_Bakr_Ash-Shaatree_128kbps', name: 'Abu Bakr Ash-Shaatree' },
    { id: 'Husary_128kbps', name: 'Mahmoud Khalil Al-Husary' },
    { id: 'Husary_Muallim_128kbps', name: 'Husary (Muallim)' },
    { id: 'MaherAlMuaiqly128kbps', name: 'Maher Al Muaiqly' },
    { id: 'Minshawy_Mujawwad_192kbps', name: 'Minshawy (Mujawwad)' },
    { id: 'Minshawy_Murattal_128kbps', name: 'Minshawy (Murattal)' },
    { id: 'Saood_ash-Shuraym_128kbps', name: 'Saood Ash-Shuraym' },
    { id: 'Muhammad_Ayyoub_128kbps', name: 'Muhammad Ayyoub' },
    { id: 'Hudhaify_128kbps', name: 'Ali Al-Hudhaify' },
    { id: 'Hani_Rifai_192kbps', name: 'Hani Ar-Rifai' },
    { id: 'Nasser_Alqatami_128kbps', name: 'Nasser Al Qatami' },
    { id: 'Yasser_Ad-Dussary_128kbps', name: 'Yasser Ad-Dussary' },
    { id: 'Fares_Abbad_64kbps', name: 'Fares Abbad' }
];

// Full Surah Reciters (loaded from API)
let SURAH_RECITERS = [];

const DEFAULT_SETTINGS = {
    translation: 'en.sahih',
    reciter: 'Abdurrahmaan_As-Sudais_192kbps',
    arabicFontSize: 20,
    transFontSize: 12,
    urduAudioMode: 'none' // 'after', 'only', 'none'
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

// Audio state
let audioPlayer = null;
let urduAudioPlayer = null;
let nextAudioPlayer = null;
let currentPlayingVerse = 0;
let isPlaying = false;
let isContinuousPlay = false;
let isRepeat = false;
let isPlayingUrdu = false;

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
    } catch (e) {
        console.warn('Failed to load settings');
    }
}

function saveSettingsToStorage() {
    try {
        localStorage.setItem('quranSettings', JSON.stringify(settings));
    } catch (e) {
        console.warn('Failed to save settings');
    }
}

// ==========================================
// CACHING
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
    renderSurahList();
    populateSettingsModal();
    hide('initialLoading');
    show('surahList');
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

async function preloadQuranData() {
    const cachedArabic = getFromCache('arabic');
    if (!cachedArabic) {
        try {
            const response = await fetch(ARABIC_FILE);
            const text = await response.text();
            arabicData = parseTxtFile(text);
            saveToCache('arabic', arabicData);
            console.log('✅ Arabic preloaded');
        } catch (e) {
            console.warn('Preload failed');
        }
    } else {
        arabicData = cachedArabic;
        console.log('📦 Arabic from cache');
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
    urduAudioPlayer = new Audio();
    nextAudioPlayer = new Audio();
    nextAudioPlayer.preload = 'auto';
    
    const surahNumber = parseInt(localStorage.getItem('currentSurahNumber') || '1');
    currentSurah = SURAHS.find(s => s.number === surahNumber) || SURAHS[0];
    
    setupSurahHeader();
    populateSettingsModal();
    populateTranslationDropdown();
    loadSurahData(); // This will now load all verses at once
    // REMOVED: setupScrollListener();
    setupAudioEvents();
    loadSurahReciters();
}

function setupSurahHeader() {
    setText('surahTitle', currentSurah.name_en);
    setText('surahSubtitle', currentSurah.name_ar);
    setText('surahNumberBadge', currentSurah.number);
    setText('surahVersesInfo', `${currentSurah.verses} verses`);
    setText('surahTypeInfo', currentSurah.type);
    setText('totalVerseNum', currentSurah.verses);
    
    const bismillah = document.getElementById('bismillahContainer');
    if (bismillah) {
        bismillah.classList.toggle('hidden', currentSurah.number === 9);
    }
    
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

function populateTranslationDropdown() {
    const select = document.getElementById('quickTranslation');
    if (!select) return;
    
    // Group by language
    const grouped = {};
    Object.entries(TRANSLATIONS).forEach(([id, trans]) => {
        if (!grouped[trans.language]) grouped[trans.language] = [];
        grouped[trans.language].push({ id, ...trans });
    });
    
    let html = '';
    Object.entries(grouped).forEach(([lang, items]) => {
        html += `<optgroup label="${lang}">`;
        items.forEach(item => {
            html += `<option value="${item.id}" ${item.id === settings.translation ? 'selected' : ''}>${item.name}</option>`;
        });
        html += '</optgroup>';
    });
    
    select.innerHTML = html;
}

function getTranslatorName() {
    return TRANSLATIONS[settings.translation]?.name || '';
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
// LOAD DATA
// ==========================================
async function loadSurahData() {
    show('loading');
    hide('versesContainer');
    hide('surahEnd');
    
    // Reset loading state
    loadedVerses = 0;
    allVersesLoaded = false;
    
    const container = document.getElementById('versesContainer');
    if (container) container.innerHTML = '';
    
    try {
        // Load Arabic
        let cachedArabic = getFromCache('arabic');
        if (cachedArabic) {
            arabicData = cachedArabic;
            console.log('📦 Arabic from cache');
        } else {
            const response = await fetch(ARABIC_FILE);
            const text = await response.text();
            arabicData = parseTxtFile(text);
            saveToCache('arabic', arabicData);
            console.log('✅ Arabic loaded');
        }
        
        // Load Translation
        let cachedTrans = getFromCache('trans_' + settings.translation);
        if (cachedTrans) {
            translationData = cachedTrans;
            currentTranslationId = settings.translation;
            console.log('📦 Translation from cache');
        } else {
            const trans = TRANSLATIONS[settings.translation];
            if (trans) {
                const response = await fetch(trans.file);
                const text = await response.text();
                translationData = parseTxtFile(text);
                currentTranslationId = settings.translation;
                saveToCache('trans_' + settings.translation, translationData);
                console.log('✅ Translation loaded');
            }
        }
        
        // Render ALL verses at once
        renderAllVerses();
        
        hide('loading');
        show('versesContainer');
        show('surahEnd'); // Show end immediately since all verses are loaded
        
    } catch (error) {
        console.error('Load error:', error);
        const container = document.getElementById('versesContainer');
        if (container) {
            container.innerHTML = `
                <div class="no-results">
                    <p>❌ Failed to load verses</p>
                    <p style="font-size:11px;color:#888">${error.message}</p>
                    <button onclick="loadSurahData()">Retry</button>
                </div>
            `;
        }
        hide('loading');
        show('versesContainer');
    }
}

// ==========================================
// RENDER VERSES - FIXED LAZY LOADING
// ==========================================
function renderAllVerses() {
    const container = document.getElementById('versesContainer');
    if (!container) return;
    
    const surahArabic = arabicData[currentSurah.number] || {};
    const surahTrans = translationData[currentSurah.number] || {};
    const isRtl = isRtlTranslation();
    const translatorName = getTranslatorName();
    
    let html = '';
    
    // Render ALL verses from 1 to total verses
    for (let verseNum = 1; verseNum <= currentSurah.verses; verseNum++) {
        const arabicText = surahArabic[verseNum] || '';
        const transText = surahTrans[verseNum] || '';
        
        html += `
            <div class="verse-item" id="verse-${verseNum}" data-verse="${verseNum}">
                <div class="verse-header">
                    <div class="verse-number">${verseNum}</div>
                    <div class="verse-actions">
                        <button class="verse-action-btn" onclick="playVerse(${verseNum})" title="Play">
                            <img src="../assets/icons/play.png" alt="Play">
                        </button>
                        <button class="verse-action-btn" onclick="downloadVerseAudio(${verseNum})" title="Download">
                            <img src="../assets/icons/download.png" alt="Download">
                        </button>
                        <button class="verse-action-btn" onclick="copyVerse(${verseNum})" title="Copy">
                            <img src="../assets/icons/copy.png" alt="Copy" onerror="this.parentElement.textContent='📋'">
                        </button>
                    </div>
                </div>
                <div class="verse-arabic" style="font-size:${settings.arabicFontSize}px">${arabicText}</div>
                <div class="verse-translation ${isRtl ? 'rtl' : ''}" style="font-size:${settings.transFontSize}px">${transText}</div>
                <div class="verse-translator ${isRtl ? 'rtl' : ''}">${translatorName}</div>
            </div>
        `;
    }
    
    container.innerHTML = html;
    loadedVerses = currentSurah.verses;
    allVersesLoaded = true;
    
    console.log(`✅ Loaded all ${currentSurah.verses} verses`);
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
        
        // Render all verses with new translation
        renderAllVerses();
        
        hide('loading');
        show('versesContainer');
        show('surahEnd');
        
    } catch (e) {
        console.error(e);
        toast('Failed to load translation');
        hide('loading');
        show('versesContainer');
    }
}	

// ==========================================
// AUDIO PLAYER
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
    audioPlayer.addEventListener('error', () => {
        isPlaying = false;
        updatePlayPauseButton();
        toast('Audio not available');
    });
    
    urduAudioPlayer.addEventListener('ended', onUrduAudioEnded);
}

function getAudioUrl(surah, verse) {
    const s = String(surah).padStart(3, '0');
    const v = String(verse).padStart(3, '0');
    return `${AUDIO_BASE}/${settings.reciter}/${s}${v}.mp3`;
}

function getUrduAudioUrl(surah, verse) {
    const s = String(surah).padStart(3, '0');
    const v = String(verse).padStart(3, '0');
    return `${URDU_AUDIO_BASE}/${s}${v}.mp3`;
}

function preloadNextVerse(verseNum) {
    if (verseNum > currentSurah.verses) return;
    
    if (settings.urduAudioMode === 'only') {
        nextAudioPlayer.src = getUrduAudioUrl(currentSurah.number, verseNum);
    } else {
        nextAudioPlayer.src = getAudioUrl(currentSurah.number, verseNum);
    }
    nextAudioPlayer.load();
    console.log('⏳ Preloading verse', verseNum);
}

function playBismillah() {
    audioPlayer.src = `${AUDIO_BASE}/bismillah.mp3`;
    audioPlayer.play().catch(() => playVerse(1));
}

function playVerse(verseNum) {
    currentPlayingVerse = verseNum;
    isPlayingUrdu = false;
    
    // Check mode
    if (settings.urduAudioMode === 'only') {
        audioPlayer.src = getUrduAudioUrl(currentSurah.number, verseNum);
    } else {
        if (nextAudioPlayer.src && nextAudioPlayer.src.includes(`${String(verseNum).padStart(3, '0')}.mp3`)) {
            audioPlayer.src = nextAudioPlayer.src;
        } else {
            audioPlayer.src = getAudioUrl(currentSurah.number, verseNum);
        }
    }
    
    audioPlayer.play().then(() => {
        highlightVerse(verseNum);
        scrollToVerse(verseNum);
        setText('currentVerseNum', verseNum);
        
        if (isContinuousPlay && verseNum < currentSurah.verses) {
            preloadNextVerse(verseNum + 1);
        }
    }).catch(e => {
        console.error('Play error:', e);
        toast('Failed to play');
    });
}

function onAudioEnded() {
    // Check if we should play Urdu after Arabic
    if (settings.urduAudioMode === 'after' && !isPlayingUrdu) {
        isPlayingUrdu = true;
        urduAudioPlayer.src = getUrduAudioUrl(currentSurah.number, currentPlayingVerse);
        urduAudioPlayer.play().catch(() => onUrduAudioEnded());
        return;
    }
    
    proceedToNextVerse();
}

function onUrduAudioEnded() {
    isPlayingUrdu = false;
    proceedToNextVerse();
}

function proceedToNextVerse() {
    if (isRepeat) {
        playVerse(currentPlayingVerse);
    } else if (isContinuousPlay && currentPlayingVerse < currentSurah.verses) {
        // REMOVED: if (currentPlayingVerse >= loadedVerses) { renderVersesBatch(); }
        playVerse(currentPlayingVerse + 1);
    } else {
        isPlaying = false;
        updatePlayPauseButton();
        clearHighlight();
    }
}

function onAudioTimeUpdate() {
    if (!audioPlayer.duration) return;
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    const bar = document.getElementById('audioProgress');
    if (bar) bar.style.width = `${progress}%`;
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
        icon.src = isPlaying ? '../assets/icons/pause.png' : '../assets/icons/play.png';
    }
}

function previousVerse() {
    if (currentPlayingVerse > 1) {
        playVerse(currentPlayingVerse - 1);
    }
}

function nextVerse() {
    if (currentPlayingVerse < currentSurah.verses) {
        playVerse(currentPlayingVerse + 1);
    }
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
// DOWNLOAD VERSE AUDIO
// ==========================================
function downloadVerseAudio(verseNum) {
    const url = getAudioUrl(currentSurah.number, verseNum);
    const filename = `${currentSurah.name_en.replace(/[^a-zA-Z0-9]/g, '_')}_${verseNum}.mp3`;
    
    toast('Starting download...');
    
    fetch(url)
        .then(r => r.blob())
        .then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = filename;
            a.click();
            URL.revokeObjectURL(a.href);
            toast('✓ Downloaded!');
        })
        .catch(() => {
            window.open(url, '_blank');
        });
}

// ==========================================
// DOWNLOAD SURAH MP3 (Full Surah)
// ==========================================
async function loadSurahReciters() {
    try {
        const url = `${SURAH_RECITERS_API}${currentSurah.number}.json`;
        console.log('🔊 Loading reciters from:', url);
        
        const response = await fetch(url);
        if (response.ok) {
            SURAH_RECITERS = await response.json();
            console.log('✅ Loaded', SURAH_RECITERS.length, 'reciters');
        } else {
            console.error('❌ Failed to load reciters:', response.status);
        }
    } catch (e) {
        console.error('❌ Error loading reciters:', e);
    }
}

function showDownloadSurahModal() {
    const modal = document.getElementById('downloadSurahModal');
    const list = document.getElementById('recitersList');
    
    if (!modal || !list) return;
    
    // Show loading
    list.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Loading reciters...</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
    
    // Load reciters if not already loaded
    if (SURAH_RECITERS.length === 0) {
        loadSurahReciters().then(() => {
            renderRecitersList();
        });
    } else {
        renderRecitersList();
    }
}

function renderRecitersList() {
    const list = document.getElementById('recitersList');
    if (!list) return;
    
    if (SURAH_RECITERS.length === 0) {
        list.innerHTML = '<p class="no-results">No reciters available. Try again later.</p>';
        return;
    }
    
    list.innerHTML = SURAH_RECITERS.map((r, i) => `
        <div class="reciter-item" onclick="downloadSurahFromReciter(${i})">
            <div class="reciter-info">
                <span class="reciter-name-en">${r.reciter.en}</span>
                <span class="reciter-name-ar">${r.reciter.ar}</span>
            </div>
            <button class="reciter-download-btn">
                <img src="../assets/icons/download.png" alt="Download">
            </button>
        </div>
    `).join('');
}

function downloadSurahFromReciter(index) {
    const reciter = SURAH_RECITERS[index];
    if (!reciter) return;
    
    const url = reciter.link;
    const filename = `${currentSurah.name_en.replace(/[^a-zA-Z0-9]/g, '_')}_${reciter.reciter.en.replace(/[^a-zA-Z0-9]/g, '_')}.mp3`;
    
    toast('Starting download...');
    
    fetch(url)
        .then(r => r.blob())
        .then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = filename;
            a.click();
            URL.revokeObjectURL(a.href);
            hideDownloadSurahModal();
            toast('✓ Downloaded!');
        })
        .catch(() => {
            window.open(url, '_blank');
            hideDownloadSurahModal();
        });
}

function hideDownloadSurahModal() {
    document.getElementById('downloadSurahModal')?.classList.add('hidden');
}

function filterReciters() {
    const query = (document.getElementById('reciterSearchInput')?.value || '').toLowerCase();
    document.querySelectorAll('.reciter-item').forEach(item => {
        const name = item.textContent.toLowerCase();
        item.style.display = name.includes(query) ? 'flex' : 'none';
    });
}

// ==========================================
// COPY VERSE
// ==========================================
function copyVerse(verseNum) {
    const arabic = arabicData[currentSurah.number]?.[verseNum] || '';
    const trans = translationData[currentSurah.number]?.[verseNum] || '';
    const translator = getTranslatorName();
    
    const text = `${arabic}\n\n${trans}\n\n— ${currentSurah.name_en} (${currentSurah.name_ar}) ${currentSurah.number}:${verseNum}\nTranslation: ${translator}`;
    
    navigator.clipboard?.writeText(text).then(() => toast('✓ Copied!')).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;left:-9999px';
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
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = '';
    }
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
// SETTINGS MODAL
// ==========================================
function showSettingsModal() {
    populateSettingsModal();
    document.getElementById('settingsModal')?.classList.remove('hidden');
}

function hideSettingsModal() {
    document.getElementById('settingsModal')?.classList.add('hidden');
}

function populateSettingsModal() {
    // Translation select
    const transSelect = document.getElementById('translationSelect');
    if (transSelect) {
        const grouped = {};
        Object.entries(TRANSLATIONS).forEach(([id, trans]) => {
            if (!grouped[trans.language]) grouped[trans.language] = [];
            grouped[trans.language].push({ id, ...trans });
        });
        
        let html = '';
        Object.entries(grouped).forEach(([lang, items]) => {
            html += `<optgroup label="${lang}">`;
            items.forEach(item => {
                html += `<option value="${item.id}" ${item.id === settings.translation ? 'selected' : ''}>${item.name}</option>`;
            });
            html += '</optgroup>';
        });
        transSelect.innerHTML = html;
    }
    
    // Reciter select
    const reciterSelect = document.getElementById('reciterSelect');
    if (reciterSelect) {
        reciterSelect.innerHTML = RECITORS.map(r => 
            `<option value="${r.id}" ${r.id === settings.reciter ? 'selected' : ''}>${r.name}</option>`
        ).join('');
    }
    
    // Urdu audio mode
    const urduAfter = document.getElementById('urduAudioAfter');
    const urduOnly = document.getElementById('urduAudioOnly');
    const urduNone = document.getElementById('urduAudioNone');
    
    if (urduAfter) urduAfter.checked = settings.urduAudioMode === 'after';
    if (urduOnly) urduOnly.checked = settings.urduAudioMode === 'only';
    if (urduNone) urduNone.checked = settings.urduAudioMode === 'none';
    
    // Font sizes
    const arabicSize = document.getElementById('arabicFontSize');
    const transSize = document.getElementById('transFontSize');
    
    if (arabicSize) arabicSize.value = settings.arabicFontSize;
    if (transSize) transSize.value = settings.transFontSize;
    
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
    
    // Urdu audio mode
    if (document.getElementById('urduAudioAfter')?.checked) {
        settings.urduAudioMode = 'after';
    } else if (document.getElementById('urduAudioOnly')?.checked) {
        settings.urduAudioMode = 'only';
    } else {
        settings.urduAudioMode = 'none';
    }
    
    saveSettingsToStorage();
    hideSettingsModal();
    
    // Apply font sizes
    document.querySelectorAll('.verse-arabic').forEach(el => {
        el.style.fontSize = `${settings.arabicFontSize}px`;
    });
    document.querySelectorAll('.verse-translation').forEach(el => {
        el.style.fontSize = `${settings.transFontSize}px`;
    });
    
    // Update quick translation dropdown
    const quickTrans = document.getElementById('quickTranslation');
    if (quickTrans) quickTrans.value = settings.translation;
    
    // Reload if translation changed
    if (currentTranslationId !== settings.translation) {
        onTranslationChange();
    }
    
    toast('✓ Settings saved');
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
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
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
// GLOBAL EXPORTS
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
window.showDownloadSurahModal = showDownloadSurahModal;
window.hideDownloadSurahModal = hideDownloadSurahModal;
window.downloadSurahFromReciter = downloadSurahFromReciter;
window.filterReciters = filterReciters;
window.handleModalClick = handleModalClick;
window.loadSurahData = loadSurahData;
