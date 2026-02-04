/* ==========================================
   SIJJEEN TAFSIR - JAVASCRIPT
   ========================================== */

// API Configuration
const BASE_URL = 'https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir';

// 114 Surahs Data
const SURAHS = [
    { number: 1, name: "الفاتحة", englishName: "Al-Fatihah", englishNameTranslation: "The Opening", numberOfAyahs: 7, revelationType: "Meccan" },
    { number: 2, name: "البقرة", englishName: "Al-Baqarah", englishNameTranslation: "The Cow", numberOfAyahs: 286, revelationType: "Medinan" },
    { number: 3, name: "آل عمران", englishName: "Ali 'Imran", englishNameTranslation: "Family of Imran", numberOfAyahs: 200, revelationType: "Medinan" },
    { number: 4, name: "النساء", englishName: "An-Nisa", englishNameTranslation: "The Women", numberOfAyahs: 176, revelationType: "Medinan" },
    { number: 5, name: "المائدة", englishName: "Al-Ma'idah", englishNameTranslation: "The Table Spread", numberOfAyahs: 120, revelationType: "Medinan" },
    { number: 6, name: "الأنعام", englishName: "Al-An'am", englishNameTranslation: "The Cattle", numberOfAyahs: 165, revelationType: "Meccan" },
    { number: 7, name: "الأعراف", englishName: "Al-A'raf", englishNameTranslation: "The Heights", numberOfAyahs: 206, revelationType: "Meccan" },
    { number: 8, name: "الأنفال", englishName: "Al-Anfal", englishNameTranslation: "The Spoils of War", numberOfAyahs: 75, revelationType: "Medinan" },
    { number: 9, name: "التوبة", englishName: "At-Tawbah", englishNameTranslation: "The Repentance", numberOfAyahs: 129, revelationType: "Medinan" },
    { number: 10, name: "يونس", englishName: "Yunus", englishNameTranslation: "Jonah", numberOfAyahs: 109, revelationType: "Meccan" },
    { number: 11, name: "هود", englishName: "Hud", englishNameTranslation: "Hud", numberOfAyahs: 123, revelationType: "Meccan" },
    { number: 12, name: "يوسف", englishName: "Yusuf", englishNameTranslation: "Joseph", numberOfAyahs: 111, revelationType: "Meccan" },
    { number: 13, name: "الرعد", englishName: "Ar-Ra'd", englishNameTranslation: "The Thunder", numberOfAyahs: 43, revelationType: "Medinan" },
    { number: 14, name: "إبراهيم", englishName: "Ibrahim", englishNameTranslation: "Abraham", numberOfAyahs: 52, revelationType: "Meccan" },
    { number: 15, name: "الحجر", englishName: "Al-Hijr", englishNameTranslation: "The Rocky Tract", numberOfAyahs: 99, revelationType: "Meccan" },
    { number: 16, name: "النحل", englishName: "An-Nahl", englishNameTranslation: "The Bee", numberOfAyahs: 128, revelationType: "Meccan" },
    { number: 17, name: "الإسراء", englishName: "Al-Isra", englishNameTranslation: "The Night Journey", numberOfAyahs: 111, revelationType: "Meccan" },
    { number: 18, name: "الكهف", englishName: "Al-Kahf", englishNameTranslation: "The Cave", numberOfAyahs: 110, revelationType: "Meccan" },
    { number: 19, name: "مريم", englishName: "Maryam", englishNameTranslation: "Mary", numberOfAyahs: 98, revelationType: "Meccan" },
    { number: 20, name: "طه", englishName: "Taha", englishNameTranslation: "Ta-Ha", numberOfAyahs: 135, revelationType: "Meccan" },
    { number: 21, name: "الأنبياء", englishName: "Al-Anbya", englishNameTranslation: "The Prophets", numberOfAyahs: 112, revelationType: "Meccan" },
    { number: 22, name: "الحج", englishName: "Al-Hajj", englishNameTranslation: "The Pilgrimage", numberOfAyahs: 78, revelationType: "Medinan" },
    { number: 23, name: "المؤمنون", englishName: "Al-Mu'minun", englishNameTranslation: "The Believers", numberOfAyahs: 118, revelationType: "Meccan" },
    { number: 24, name: "النور", englishName: "An-Nur", englishNameTranslation: "The Light", numberOfAyahs: 64, revelationType: "Medinan" },
    { number: 25, name: "الفرقان", englishName: "Al-Furqan", englishNameTranslation: "The Criterion", numberOfAyahs: 77, revelationType: "Meccan" },
    { number: 26, name: "الشعراء", englishName: "Ash-Shu'ara", englishNameTranslation: "The Poets", numberOfAyahs: 227, revelationType: "Meccan" },
    { number: 27, name: "النمل", englishName: "An-Naml", englishNameTranslation: "The Ant", numberOfAyahs: 93, revelationType: "Meccan" },
    { number: 28, name: "القصص", englishName: "Al-Qasas", englishNameTranslation: "The Stories", numberOfAyahs: 88, revelationType: "Meccan" },
    { number: 29, name: "العنكبوت", englishName: "Al-'Ankabut", englishNameTranslation: "The Spider", numberOfAyahs: 69, revelationType: "Meccan" },
    { number: 30, name: "الروم", englishName: "Ar-Rum", englishNameTranslation: "The Romans", numberOfAyahs: 60, revelationType: "Meccan" },
    { number: 31, name: "لقمان", englishName: "Luqman", englishNameTranslation: "Luqman", numberOfAyahs: 34, revelationType: "Meccan" },
    { number: 32, name: "السجدة", englishName: "As-Sajdah", englishNameTranslation: "The Prostration", numberOfAyahs: 30, revelationType: "Meccan" },
    { number: 33, name: "الأحزاب", englishName: "Al-Ahzab", englishNameTranslation: "The Combined Forces", numberOfAyahs: 73, revelationType: "Medinan" },
    { number: 34, name: "سبأ", englishName: "Saba", englishNameTranslation: "Sheba", numberOfAyahs: 54, revelationType: "Meccan" },
    { number: 35, name: "فاطر", englishName: "Fatir", englishNameTranslation: "Originator", numberOfAyahs: 45, revelationType: "Meccan" },
    { number: 36, name: "يس", englishName: "Ya-Sin", englishNameTranslation: "Ya Sin", numberOfAyahs: 83, revelationType: "Meccan" },
    { number: 37, name: "الصافات", englishName: "As-Saffat", englishNameTranslation: "Those who set the Ranks", numberOfAyahs: 182, revelationType: "Meccan" },
    { number: 38, name: "ص", englishName: "Sad", englishNameTranslation: "The Letter Saad", numberOfAyahs: 88, revelationType: "Meccan" },
    { number: 39, name: "الزمر", englishName: "Az-Zumar", englishNameTranslation: "The Troops", numberOfAyahs: 75, revelationType: "Meccan" },
    { number: 40, name: "غافر", englishName: "Ghafir", englishNameTranslation: "The Forgiver", numberOfAyahs: 85, revelationType: "Meccan" },
    { number: 41, name: "فصلت", englishName: "Fussilat", englishNameTranslation: "Explained in Detail", numberOfAyahs: 54, revelationType: "Meccan" },
    { number: 42, name: "الشورى", englishName: "Ash-Shuraa", englishNameTranslation: "The Consultation", numberOfAyahs: 53, revelationType: "Meccan" },
    { number: 43, name: "الزخرف", englishName: "Az-Zukhruf", englishNameTranslation: "The Ornaments of Gold", numberOfAyahs: 89, revelationType: "Meccan" },
    { number: 44, name: "الدخان", englishName: "Ad-Dukhan", englishNameTranslation: "The Smoke", numberOfAyahs: 59, revelationType: "Meccan" },
    { number: 45, name: "الجاثية", englishName: "Al-Jathiyah", englishNameTranslation: "The Crouching", numberOfAyahs: 37, revelationType: "Meccan" },
    { number: 46, name: "الأحقاف", englishName: "Al-Ahqaf", englishNameTranslation: "The Wind-Curved Sandhills", numberOfAyahs: 35, revelationType: "Meccan" },
    { number: 47, name: "محمد", englishName: "Muhammad", englishNameTranslation: "Muhammad", numberOfAyahs: 38, revelationType: "Medinan" },
    { number: 48, name: "الفتح", englishName: "Al-Fath", englishNameTranslation: "The Victory", numberOfAyahs: 29, revelationType: "Medinan" },
    { number: 49, name: "الحجرات", englishName: "Al-Hujurat", englishNameTranslation: "The Rooms", numberOfAyahs: 18, revelationType: "Medinan" },
    { number: 50, name: "ق", englishName: "Qaf", englishNameTranslation: "The Letter Qaf", numberOfAyahs: 45, revelationType: "Meccan" },
    { number: 51, name: "الذاريات", englishName: "Adh-Dhariyat", englishNameTranslation: "The Winnowing Winds", numberOfAyahs: 60, revelationType: "Meccan" },
    { number: 52, name: "الطور", englishName: "At-Tur", englishNameTranslation: "The Mount", numberOfAyahs: 49, revelationType: "Meccan" },
    { number: 53, name: "النجم", englishName: "An-Najm", englishNameTranslation: "The Star", numberOfAyahs: 62, revelationType: "Meccan" },
    { number: 54, name: "القمر", englishName: "Al-Qamar", englishNameTranslation: "The Moon", numberOfAyahs: 55, revelationType: "Meccan" },
    { number: 55, name: "الرحمن", englishName: "Ar-Rahman", englishNameTranslation: "The Beneficent", numberOfAyahs: 78, revelationType: "Medinan" },
    { number: 56, name: "الواقعة", englishName: "Al-Waqi'ah", englishNameTranslation: "The Inevitable", numberOfAyahs: 96, revelationType: "Meccan" },
    { number: 57, name: "الحديد", englishName: "Al-Hadid", englishNameTranslation: "The Iron", numberOfAyahs: 29, revelationType: "Medinan" },
    { number: 58, name: "المجادلة", englishName: "Al-Mujadila", englishNameTranslation: "The Pleading Woman", numberOfAyahs: 22, revelationType: "Medinan" },
    { number: 59, name: "الحشر", englishName: "Al-Hashr", englishNameTranslation: "The Exile", numberOfAyahs: 24, revelationType: "Medinan" },
    { number: 60, name: "الممتحنة", englishName: "Al-Mumtahanah", englishNameTranslation: "She that is to be examined", numberOfAyahs: 13, revelationType: "Medinan" },
    { number: 61, name: "الصف", englishName: "As-Saf", englishNameTranslation: "The Ranks", numberOfAyahs: 14, revelationType: "Medinan" },
    { number: 62, name: "الجمعة", englishName: "Al-Jumu'ah", englishNameTranslation: "Friday", numberOfAyahs: 11, revelationType: "Medinan" },
    { number: 63, name: "المنافقون", englishName: "Al-Munafiqun", englishNameTranslation: "The Hypocrites", numberOfAyahs: 11, revelationType: "Medinan" },
    { number: 64, name: "التغابن", englishName: "At-Taghabun", englishNameTranslation: "The Mutual Disillusion", numberOfAyahs: 18, revelationType: "Medinan" },
    { number: 65, name: "الطلاق", englishName: "At-Talaq", englishNameTranslation: "The Divorce", numberOfAyahs: 12, revelationType: "Medinan" },
    { number: 66, name: "التحريم", englishName: "At-Tahrim", englishNameTranslation: "The Prohibition", numberOfAyahs: 12, revelationType: "Medinan" },
    { number: 67, name: "الملك", englishName: "Al-Mulk", englishNameTranslation: "The Sovereignty", numberOfAyahs: 30, revelationType: "Meccan" },
    { number: 68, name: "القلم", englishName: "Al-Qalam", englishNameTranslation: "The Pen", numberOfAyahs: 52, revelationType: "Meccan" },
    { number: 69, name: "الحاقة", englishName: "Al-Haqqah", englishNameTranslation: "The Reality", numberOfAyahs: 52, revelationType: "Meccan" },
    { number: 70, name: "المعارج", englishName: "Al-Ma'arij", englishNameTranslation: "The Ascending Stairways", numberOfAyahs: 44, revelationType: "Meccan" },
    { number: 71, name: "نوح", englishName: "Nuh", englishNameTranslation: "Noah", numberOfAyahs: 28, revelationType: "Meccan" },
    { number: 72, name: "الجن", englishName: "Al-Jinn", englishNameTranslation: "The Jinn", numberOfAyahs: 28, revelationType: "Meccan" },
    { number: 73, name: "المزمل", englishName: "Al-Muzzammil", englishNameTranslation: "The Enshrouded One", numberOfAyahs: 20, revelationType: "Meccan" },
    { number: 74, name: "المدثر", englishName: "Al-Muddaththir", englishNameTranslation: "The Cloaked One", numberOfAyahs: 56, revelationType: "Meccan" },
    { number: 75, name: "القيامة", englishName: "Al-Qiyamah", englishNameTranslation: "The Resurrection", numberOfAyahs: 40, revelationType: "Meccan" },
    { number: 76, name: "الإنسان", englishName: "Al-Insan", englishNameTranslation: "The Man", numberOfAyahs: 31, revelationType: "Medinan" },
    { number: 77, name: "المرسلات", englishName: "Al-Mursalat", englishNameTranslation: "The Emissaries", numberOfAyahs: 50, revelationType: "Meccan" },
    { number: 78, name: "النبأ", englishName: "An-Naba", englishNameTranslation: "The Tidings", numberOfAyahs: 40, revelationType: "Meccan" },
    { number: 79, name: "النازعات", englishName: "An-Nazi'at", englishNameTranslation: "Those who drag forth", numberOfAyahs: 46, revelationType: "Meccan" },
    { number: 80, name: "عبس", englishName: "'Abasa", englishNameTranslation: "He Frowned", numberOfAyahs: 42, revelationType: "Meccan" },
    { number: 81, name: "التكوير", englishName: "At-Takwir", englishNameTranslation: "The Overthrowing", numberOfAyahs: 29, revelationType: "Meccan" },
    { number: 82, name: "الإنفطار", englishName: "Al-Infitar", englishNameTranslation: "The Cleaving", numberOfAyahs: 19, revelationType: "Meccan" },
    { number: 83, name: "المطففين", englishName: "Al-Mutaffifin", englishNameTranslation: "The Defrauding", numberOfAyahs: 36, revelationType: "Meccan" },
    { number: 84, name: "الإنشقاق", englishName: "Al-Inshiqaq", englishNameTranslation: "The Sundering", numberOfAyahs: 25, revelationType: "Meccan" },
    { number: 85, name: "البروج", englishName: "Al-Buruj", englishNameTranslation: "The Mansions of the Stars", numberOfAyahs: 22, revelationType: "Meccan" },
    { number: 86, name: "الطارق", englishName: "At-Tariq", englishNameTranslation: "The Nightcommer", numberOfAyahs: 17, revelationType: "Meccan" },
    { number: 87, name: "الأعلى", englishName: "Al-A'la", englishNameTranslation: "The Most High", numberOfAyahs: 19, revelationType: "Meccan" },
    { number: 88, name: "الغاشية", englishName: "Al-Ghashiyah", englishNameTranslation: "The Overwhelming", numberOfAyahs: 26, revelationType: "Meccan" },
    { number: 89, name: "الفجر", englishName: "Al-Fajr", englishNameTranslation: "The Dawn", numberOfAyahs: 30, revelationType: "Meccan" },
    { number: 90, name: "البلد", englishName: "Al-Balad", englishNameTranslation: "The City", numberOfAyahs: 20, revelationType: "Meccan" },
    { number: 91, name: "الشمس", englishName: "Ash-Shams", englishNameTranslation: "The Sun", numberOfAyahs: 15, revelationType: "Meccan" },
    { number: 92, name: "الليل", englishName: "Al-Layl", englishNameTranslation: "The Night", numberOfAyahs: 21, revelationType: "Meccan" },
    { number: 93, name: "الضحى", englishName: "Ad-Duhaa", englishNameTranslation: "The Morning Hours", numberOfAyahs: 11, revelationType: "Meccan" },
    { number: 94, name: "الشرح", englishName: "Ash-Sharh", englishNameTranslation: "The Relief", numberOfAyahs: 8, revelationType: "Meccan" },
    { number: 95, name: "التين", englishName: "At-Tin", englishNameTranslation: "The Fig", numberOfAyahs: 8, revelationType: "Meccan" },
    { number: 96, name: "العلق", englishName: "Al-'Alaq", englishNameTranslation: "The Clot", numberOfAyahs: 19, revelationType: "Meccan" },
    { number: 97, name: "القدر", englishName: "Al-Qadr", englishNameTranslation: "The Power", numberOfAyahs: 5, revelationType: "Meccan" },
    { number: 98, name: "البينة", englishName: "Al-Bayyinah", englishNameTranslation: "The Clear Proof", numberOfAyahs: 8, revelationType: "Medinan" },
    { number: 99, name: "الزلزلة", englishName: "Az-Zalzalah", englishNameTranslation: "The Earthquake", numberOfAyahs: 8, revelationType: "Medinan" },
    { number: 100, name: "العاديات", englishName: "Al-'Adiyat", englishNameTranslation: "The Courser", numberOfAyahs: 11, revelationType: "Meccan" },
    { number: 101, name: "القارعة", englishName: "Al-Qari'ah", englishNameTranslation: "The Calamity", numberOfAyahs: 11, revelationType: "Meccan" },
    { number: 102, name: "التكاثر", englishName: "At-Takathur", englishNameTranslation: "The Rivalry in world increase", numberOfAyahs: 8, revelationType: "Meccan" },
    { number: 103, name: "العصر", englishName: "Al-'Asr", englishNameTranslation: "The Declining Day", numberOfAyahs: 3, revelationType: "Meccan" },
    { number: 104, name: "الهمزة", englishName: "Al-Humazah", englishNameTranslation: "The Traducer", numberOfAyahs: 9, revelationType: "Meccan" },
    { number: 105, name: "الفيل", englishName: "Al-Fil", englishNameTranslation: "The Elephant", numberOfAyahs: 5, revelationType: "Meccan" },
    { number: 106, name: "قريش", englishName: "Quraysh", englishNameTranslation: "Quraysh", numberOfAyahs: 4, revelationType: "Meccan" },
    { number: 107, name: "الماعون", englishName: "Al-Ma'un", englishNameTranslation: "The Small kindnesses", numberOfAyahs: 7, revelationType: "Meccan" },
    { number: 108, name: "الكوثر", englishName: "Al-Kawthar", englishNameTranslation: "The Abundance", numberOfAyahs: 3, revelationType: "Meccan" },
    { number: 109, name: "الكافرون", englishName: "Al-Kafirun", englishNameTranslation: "The Disbelievers", numberOfAyahs: 6, revelationType: "Meccan" },
    { number: 110, name: "النصر", englishName: "An-Nasr", englishNameTranslation: "The Divine Support", numberOfAyahs: 3, revelationType: "Medinan" },
    { number: 111, name: "المسد", englishName: "Al-Masad", englishNameTranslation: "The Palm Fiber", numberOfAyahs: 5, revelationType: "Meccan" },
    { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", englishNameTranslation: "The Sincerity", numberOfAyahs: 4, revelationType: "Meccan" },
    { number: 113, name: "الفلق", englishName: "Al-Falaq", englishNameTranslation: "The Daybreak", numberOfAyahs: 5, revelationType: "Meccan" },
    { number: 114, name: "الناس", englishName: "An-Nas", englishNameTranslation: "Mankind", numberOfAyahs: 6, revelationType: "Meccan" }
];

// 27 Tafsir Editions
const TAFSIR_EDITIONS = [
    { id: 169, author_name: "Hafiz Ibn Kathir", language_name: "english", name: "Tafsir Ibn Kathir (abridged)", slug: "en-tafisr-ibn-kathir" },
    { id: 74, author_name: "Al-Jalalayn", language_name: "english", name: "Al-Jalalayn", slug: "en-al-jalalayn" },
    { id: 168, author_name: "Mufti Muhammad Shafi", language_name: "english", name: "Maarif-ul-Quran", slug: "en-tafsir-maarif-ul-quran" },
    { id: 817, author_name: "Maulana Wahid Uddin Khan", language_name: "english", name: "Tazkirul Quran", slug: "en-tazkirul-quran" },
    { id: 73, author_name: "Ibn Abbas", language_name: "english", name: "Tanwîr al-Miqbâs min Tafsîr Ibn 'Abbâs", slug: "en-tafsir-ibn-abbas" },
    { id: 86, author_name: "Al-Wahidi", language_name: "english", name: "Asbab Al-Nuzul by Al-Wahidi", slug: "en-asbab-al-nuzul-by-al-wahidi" },
    { id: 93, author_name: "Al-Tustari", language_name: "english", name: "Tafsir al-Tustari", slug: "en-tafsir-al-tustari" },
    { id: 107, author_name: "Kashani", language_name: "english", name: "Kashani Tafsir", slug: "en-kashani-tafsir" },
    { id: 108, author_name: "Al Qushairi", language_name: "english", name: "Al Qushairi Tafsir", slug: "en-al-qushairi-tafsir" },
    { id: 109, author_name: "Kashf Al-Asrar", language_name: "english", name: "Kashf Al-Asrar Tafsir", slug: "en-kashf-al-asrar-tafsir" },
    { id: 14, author_name: "Hafiz Ibn Kathir", language_name: "arabic", name: "Tafsir Ibn Kathir", slug: "ar-tafsir-ibn-kathir" },
    { id: 15, author_name: "Tabari", language_name: "arabic", name: "Tafsir al-Tabari", slug: "ar-tafsir-al-tabari" },
    { id: 16, author_name: "Al Muyassar", language_name: "arabic", name: "Tafsir Muyassar", slug: "ar-tafsir-muyassar" },
    { id: 90, author_name: "Qurtubi", language_name: "arabic", name: "Tafseer Al Qurtubi", slug: "ar-tafseer-al-qurtubi" },
    { id: 91, author_name: "Saddi", language_name: "arabic", name: "Tafseer Al Saddi", slug: "ar-tafseer-al-saddi" },
    { id: 92, author_name: "Tanweer", language_name: "arabic", name: "Tafseer Tanwir al-Miqbas", slug: "ar-tafseer-tanwir-al-miqbas" },
    { id: 93, author_name: "Waseet", language_name: "arabic", name: "Tafsir Al Wasit", slug: "ar-tafsir-al-wasit" },
    { id: 94, author_name: "Baghawy", language_name: "arabic", name: "Tafseer Al-Baghawi", slug: "ar-tafsir-al-baghawi" },
    { id: 164, author_name: "Tawheed Publication", language_name: "bengali", name: "Tafseer ibn Kathir", slug: "bn-tafseer-ibn-e-kaseer" },
    { id: 165, author_name: "Bayaan Foundation", language_name: "bengali", name: "Tafsir Ahsanul Bayaan", slug: "bn-tafsir-ahsanul-bayaan" },
    { id: 166, author_name: "King Fahd Quran Printing Complex", language_name: "bengali", name: "Tafsir Abu Bakr Zakaria", slug: "bn-tafsir-abu-bakr-zakaria" },
    { id: 381, author_name: "AbdulRahman Bin Hasan Al-Alshaikh", language_name: "bengali", name: "Tafsir Fathul Majid", slug: "bn-tafisr-fathul-majid" },
    { id: 159, author_name: "Dr. Israr Ahmad", language_name: "urdu", name: "Tafsir Bayan ul Quran", slug: "ur-tafsir-bayan-ul-quran" },
    { id: 160, author_name: "Hafiz Ibn Kathir", language_name: "urdu", name: "Tafsir Ibn Kathir", slug: "ur-tafseer-ibn-e-kaseer" },
    { id: 818, author_name: "Maulana Wahid Uddin Khan", language_name: "urdu", name: "Tazkirul Quran", slug: "ur-tazkirul-quran" },
    { id: 170, author_name: "Saddi", language_name: "russian", name: "Tafseer Al Saddi", slug: "ru-tafseer-al-saddi" },
    { id: 804, author_name: "Rebar", language_name: "kurdish", name: "Rebar Kurdish Tafsir", slug: "kurd-tafsir-rebar" }
];

// State
var currentView = 'selector';
var selectedLanguage = 'english';
var selectedTafsir = TAFSIR_EDITIONS[0].slug;
var selectedSurah = 1;
var selectedAyah = 1;
var currentSurahData = null;
var expandedAyahs = new Set();

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sijjeen Tafsir - Initialized');
    initSelectors();
    loadRecentReads();
});

function initSelectors() {
    // Language buttons
    var languages = [...new Set(TAFSIR_EDITIONS.map(t => t.language_name))];
    var langButtons = document.getElementById('languageButtons');
    langButtons.innerHTML = '';
    
    languages.forEach(function(lang) {
        var btn = document.createElement('button');
        btn.className = 'language-btn' + (lang === selectedLanguage ? ' active' : '');
        btn.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
        btn.onclick = function() { selectLanguage(lang); };
        langButtons.appendChild(btn);
    });
    
    // Initial population
    populateTafsirSelect();
    populateSurahSelect();
    populateAyahSelect();
}

function selectLanguage(lang) {
    selectedLanguage = lang;
    
    // Update button states
    document.querySelectorAll('.language-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
    
    populateTafsirSelect();
}

function populateTafsirSelect() {
    var select = document.getElementById('tafsirSelect');
    var filtered = TAFSIR_EDITIONS.filter(function(t) { return t.language_name === selectedLanguage; });
    
    select.innerHTML = '';
    filtered.forEach(function(edition) {
        var option = document.createElement('option');
        option.value = edition.slug;
        option.textContent = edition.name + ' - ' + edition.author_name;
        select.appendChild(option);
    });
    
    selectedTafsir = filtered[0].slug;
    select.value = selectedTafsir;
    
    select.onchange = function() { selectedTafsir = this.value; };
}

function populateSurahSelect() {
    var select = document.getElementById('surahSelect');
    select.innerHTML = '';
    
    SURAHS.forEach(function(surah) {
        var option = document.createElement('option');
        option.value = surah.number;
        option.textContent = surah.number + '. ' + surah.name + ' (' + surah.englishName + ') - ' + surah.numberOfAyahs + ' ayahs';
        select.appendChild(option);
    });
    
    select.value = selectedSurah;
    select.onchange = function() {
        selectedSurah = parseInt(this.value);
        selectedAyah = 1;
        populateAyahSelect();
    };
}

function populateAyahSelect() {
    var select = document.getElementById('ayahSelect');
    var surah = SURAHS.find(function(s) { return s.number === selectedSurah; });
    var maxAyah = surah ? surah.numberOfAyahs : 7;
    
    select.innerHTML = '';
    for (var i = 1; i <= maxAyah; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = 'Ayah ' + i;
        select.appendChild(option);
    }
    
    select.value = selectedAyah;
    select.onchange = function() { selectedAyah = parseInt(this.value); };
}

// ==========================================
// START READING
// ==========================================
function startReading() {
    var btn = document.getElementById('startBtn');
    btn.disabled = true;
    btn.innerHTML = '<div class="spinner" style="width:20px;height:20px;border-width:2px;margin:0 auto;"></div>';
    
    fetchSurahTafsir(selectedTafsir, selectedSurah)
        .then(function(data) {
            currentSurahData = data;
            expandedAyahs = new Set([selectedAyah]);
            saveRecentRead(selectedTafsir, selectedSurah, selectedAyah);
            showReadingView();
        })
        .catch(function(err) {
            console.error('Failed to load tafsir:', err);
            toast('Failed to load tafsir. Please try again.');
        })
        .finally(function() {
            btn.disabled = false;
            btn.innerHTML = '📖 Start Reading';
        });
}

function fetchSurahTafsir(tafsirSlug, surahNumber) {
    var url = BASE_URL + '/' + tafsirSlug + '/' + surahNumber + '.json';
    return fetch(url).then(function(res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
    });
}

// ==========================================
// READING VIEW
// ==========================================
function showReadingView() {
    currentView = 'reading';
    document.getElementById('selectorView').classList.add('hidden');
    document.getElementById('readingView').classList.remove('hidden');
    document.getElementById('loadingState').classList.add('hidden');
    
    var surah = SURAHS.find(function(s) { return s.number === selectedSurah; });
    var tafsir = TAFSIR_EDITIONS.find(function(t) { return t.slug === selectedTafsir; });
    
    document.getElementById('pageTitle').textContent = surah.name + ' (' + surah.englishName + ')';
    
    var html = '';
    
    // Surah Header
    html += '<div class="surah-header">';
    html += '<div class="surah-name-ar">' + surah.name + '</div>';
    html += '<div class="surah-name-en">' + surah.englishName + '</div>';
    html += '<div class="surah-meta">' + surah.englishNameTranslation + ' • ' + surah.revelationType + ' • ' + surah.numberOfAyahs + ' Ayahs</div>';
    html += '</div>';
    
    // Tafsir Switcher
    html += '<div class="tafsir-switcher">';
    html += '<label>Switch Tafsir:</label>';
    html += '<select id="tafsirSwitcher" class="selector-dropdown" onchange="switchTafsir(this.value)">';
    TAFSIR_EDITIONS.forEach(function(edition) {
        var selected = edition.slug === selectedTafsir ? ' selected' : '';
        html += '<option value="' + edition.slug + '"' + selected + '>' + edition.name + '</option>';
    });
    html += '</select>';
    html += '</div>';
    
    // Ayah List
    html += '<div class="ayah-list">';
    if (currentSurahData && currentSurahData.ayahs) {
        currentSurahData.ayahs.forEach(function(ayah, index) {
            var ayahNum = ayah.ayah || (index + 1);
            var isExpanded = expandedAyahs.has(ayahNum);
            var isHighlighted = ayahNum === selectedAyah;
            var isBookmarked = checkBookmark(selectedTafsir, selectedSurah, ayahNum);
            
            html += '<div class="ayah-card' + (isHighlighted ? ' highlighted' : '') + '" id="ayah-' + ayahNum + '">';
            html += '<div class="ayah-header" onclick="toggleAyah(' + ayahNum + ')">';
            html += '<div class="ayah-number">' + ayahNum + '</div>';
            html += '<div class="ayah-preview">' + (ayah.text || '').substring(0, 100) + '...</div>';
            html += '<div class="ayah-toggle">' + (isExpanded ? '−' : '+') + '</div>';
            html += '</div>';
            
            html += '<div class="ayah-content' + (isExpanded ? ' expanded' : '') + '" id="ayah-content-' + ayahNum + '">';
            html += '<div class="ayah-text">' + (ayah.text || 'No tafsir available for this ayah.') + '</div>';
            html += '<div class="ayah-actions">';
            html += '<button class="ayah-action-btn" onclick="copyAyah(' + ayahNum + ', ' + JSON.stringify(ayah.text || '').replace(/"/g, '&quot;') + ')">';
            html += '<img src="assets/copy.png" alt="Copy"> Copy';
            html += '</button>';
            html += '<button class="ayah-action-btn' + (isBookmarked ? ' bookmarked' : '') + '" onclick="toggleBookmark(' + ayahNum + ')">';
            html += '<span>' + (isBookmarked ? '⭐' : '☆') + '</span> ' + (isBookmarked ? 'Saved' : 'Save');
            html += '</button>';
            html += '</div>';
            html += '</div>';
            
            html += '</div>';
        });
    }
    html += '</div>';
    
    document.getElementById('readingContent').innerHTML = html;
    document.getElementById('readingContent').classList.remove('hidden');
    
    // Scroll to initial ayah
    setTimeout(function() {
        var elem = document.getElementById('ayah-' + selectedAyah);
        if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function toggleAyah(ayahNum) {
    if (expandedAyahs.has(ayahNum)) {
        expandedAyahs.delete(ayahNum);
    } else {
        expandedAyahs.add(ayahNum);
    }
    
    var content = document.getElementById('ayah-content-' + ayahNum);
    var toggle = content.previousElementSibling.querySelector('.ayah-toggle');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggle.textContent = '+';
    } else {
        content.classList.add('expanded');
        toggle.textContent = '−';
    }
}

function switchTafsir(newTafsirSlug) {
    selectedTafsir = newTafsirSlug;
    
    var switcher = document.getElementById('tafsirSwitcher');
    switcher.disabled = true;
    
    var loading = document.getElementById('loadingState');
    loading.classList.remove('hidden');
    document.getElementById('readingContent').classList.add('hidden');
    
    fetchSurahTafsir(newTafsirSlug, selectedSurah)
        .then(function(data) {
            currentSurahData = data;
            showReadingView();
        })
        .catch(function(err) {
            console.error('Failed to switch tafsir:', err);
            toast('Failed to switch tafsir.');
        })
        .finally(function() {
            switcher.disabled = false;
            loading.classList.add('hidden');
        });
}

function copyAyah(ayahNum, text) {
    var surah = SURAHS.find(function(s) { return s.number === selectedSurah; });
    var tafsir = TAFSIR_EDITIONS.find(function(t) { return t.slug === selectedTafsir; });
    
    var copyText = surah.name + ' (' + surah.englishName + ') ' + selectedSurah + ':' + ayahNum + '\n\n' + 
                   text + '\n\n— ' + tafsir.name;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(copyText).then(function() {
            toast('✓ Copied to clipboard!');
        });
    } else {
        // Fallback
        var ta = document.createElement('textarea');
        ta.value = copyText;
        ta.style.cssText = 'position:fixed;left:-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        toast('✓ Copied to clipboard!');
    }
}

// ==========================================
// BOOKMARKS
// ==========================================
function toggleBookmark(ayahNum) {
    var key = 'tafsir_bookmarks';
    var bookmarks = JSON.parse(localStorage.getItem(key) || '[]');
    var index = bookmarks.findIndex(function(b) {
        return b.tafsirSlug === selectedTafsir && b.surahNumber === selectedSurah && b.ayahNumber === ayahNum;
    });
    
    if (index !== -1) {
        bookmarks.splice(index, 1);
        toast('Bookmark removed');
    } else {
        bookmarks.unshift({
            tafsirSlug: selectedTafsir,
            surahNumber: selectedSurah,
            ayahNumber: ayahNum,
            timestamp: Date.now()
        });
        toast('⭐ Bookmarked!');
    }
    
    localStorage.setItem(key, JSON.stringify(bookmarks));
    
    // Update button
    showReadingView();
}

function checkBookmark(tafsirSlug, surahNumber, ayahNumber) {
    var bookmarks = JSON.parse(localStorage.getItem('tafsir_bookmarks') || '[]');
    return bookmarks.some(function(b) {
        return b.tafsirSlug === tafsirSlug && b.surahNumber === surahNumber && b.ayahNumber === ayahNumber;
    });
}

// ==========================================
// RECENT READS
// ==========================================
function saveRecentRead(tafsirSlug, surahNumber, ayahNumber) {
    var key = 'tafsir_recent';
    var recent = JSON.parse(localStorage.getItem(key) || '[]');
    
    var filtered = recent.filter(function(r) {
        return !(r.tafsirSlug === tafsirSlug && r.surahNumber === surahNumber && r.ayahNumber === ayahNumber);
    });
    
    filtered.unshift({
        tafsirSlug: tafsirSlug,
        surahNumber: surahNumber,
        ayahNumber: ayahNumber,
        timestamp: Date.now()
    });
    
    localStorage.setItem(key, JSON.stringify(filtered.slice(0, 10)));
    loadRecentReads();
}

function loadRecentReads() {
    var recent = JSON.parse(localStorage.getItem('tafsir_recent') || '[]');
    var container = document.getElementById('recentReads');
    
    if (recent.length === 0) {
        container.classList.add('hidden');
        return;
    }
    
    container.classList.remove('hidden');
    
    var html = '<h3 class="recent-title">Recent Reads</h3>';
    
    recent.slice(0, 5).forEach(function(read) {
        var tafsir = TAFSIR_EDITIONS.find(function(t) { return t.slug === read.tafsirSlug; });
        var surah = SURAHS.find(function(s) { return s.number === read.surahNumber; });
        
        if (!tafsir || !surah) return;
        
        html += '<div class="recent-card" onclick="loadRecentRead(\'' + read.tafsirSlug + '\', ' + read.surahNumber + ', ' + read.ayahNumber + ')">';
        html += '<div class="recent-card-content">';
        html += '<div class="recent-card-title">' + surah.name + ' (' + surah.englishName + ')</div>';
        html += '<div class="recent-card-meta">' + tafsir.name + ' • Ayah ' + read.ayahNumber + '</div>';
        html += '</div>';
        html += '<div class="recent-card-arrow">→</div>';
        html += '</div>';
    });
    
    container.innerHTML = html;
}

function loadRecentRead(tafsirSlug, surahNumber, ayahNumber) {
    selectedTafsir = tafsirSlug;
    selectedSurah = surahNumber;
    selectedAyah = ayahNumber;
    
    document.getElementById('startBtn').disabled = true;
    document.getElementById('startBtn').innerHTML = '<div class="spinner" style="width:20px;height:20px;border-width:2px;margin:0 auto;"></div>';
    
    fetchSurahTafsir(tafsirSlug, surahNumber)
        .then(function(data) {
            currentSurahData = data;
            expandedAyahs = new Set([ayahNumber]);
            saveRecentRead(tafsirSlug, surahNumber, ayahNumber);
            showReadingView();
        })
        .catch(function(err) {
            console.error('Failed to load:', err);
            toast('Failed to load tafsir.');
        })
        .finally(function() {
            document.getElementById('startBtn').disabled = false;
            document.getElementById('startBtn').innerHTML = '📖 Start Reading';
        });
}

// ==========================================
// NAVIGATION
// ==========================================
function goBack() {
    if (currentView === 'reading') {
        currentView = 'selector';
        document.getElementById('readingView').classList.add('hidden');
        document.getElementById('selectorView').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Tafsir';
    } else {
        window.history.back();
    }
}

// ==========================================
// TOAST
// ==========================================
function toast(msg) {
    var existing = document.getElementById('toast');
    existing.textContent = msg;
    existing.classList.remove('hidden');
    
    setTimeout(function() {
        existing.classList.add('hidden');
    }, 2500);
}
