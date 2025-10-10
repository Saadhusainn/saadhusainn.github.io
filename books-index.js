// Books Index Database
const booksIndex = {
    // Single volume books (direct files)
    "single": [
        {
            name: "المسند للشافعي",
            file: "https://raw.githubusercontent.com/saadhusainn/sijjeen1/main/almusannaf/Mus.pdf",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            type: "single"
        },
        {
            name: "موطأ الإمام مالك برواية يحيى ت عبد الباقي",
            file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Muwatta%20bi-riwayat%20Yahya%20T%20abd%20al-baqi.pdf",
            publisher: "دار احياء التراث للعربي",
            language: "العربية",
            type: "single"
        },
    ],
    
    // Multi-volume books (with custom volume names)
    "multi": [
        { 
            name: "المصنف لعبد الرزاق - دار التأصيل", 
            type: "multi",
            publisher: "دار التأصيل",
            language: "العربية",
            volumes: [
                { name: "المقدمة", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/01-6836.pdf" },
                { name: "الجزء الأول", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/02-6836.pdf" },
                { name: "الجزء الثاني", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/03-6836.pdf" },
                { name: "الجزء الثالث", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/04-6836.pdf" },
                { name: "الجزء الرابع", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/05-6836.pdf" },
                { name: "الجزء الخامس", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/06-6836.pdf" },
                { name: "الجزء السادس", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/07-6836.pdf" },
                { name: "الجزء السابع", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/08-6836.pdf" },
                { name: "الجزء الثامن", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/09-6836.pdf" },
                { name: "الجزء التاسع", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/10-6836.pdf" },
                { name: "الفهارس", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20dar%20al-ta'sil/11-6836.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "مسند الحميدي", 
            type: "multi",
            publisher: "دار المامون للتراث",
            language: "العربية",
            volumes: [
                { name: "الجزء الأول", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20humaydi/mh1.pdf" },
                { name: "الجزء الثاني", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20humaydi/mh2.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "المصنف لعبد الرزاق - مكتبة الإسلامي", 
            type: "multi",
            publisher: "مكتبة الإسلامي",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar10.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar11.pdf" },
                { name: "الجزء 12", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar12.pdf" },
                { name: "الجزء 13", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20abd%20al-razzaq%20maktabah%20al%20islami/miar13.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "مسند أبي يعلى الموصيلي", 
            type: "multi",
            publisher: "دار المامون للتراث",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala10.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala11.pdf" },
                { name: "الجزء 12", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala12.pdf" },
                { name: "الجزء 13", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala13.pdf" },
                { name: "الجزء 14", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20ya'la%20dar%20al-ma'mun/mayala14.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "الطبقات الكبرى لابن سعد", 
            type: "multi",
            publisher: "مكتبة الخانجي",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_10.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Tabaqat%20ibn%20sa'd%20maktabah%20al-khanji/A66aba9at_11.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "المعجم الكبير للطبراني", 
            type: "multi",
            publisher: "مكتبة ابن تيمية",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk10.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk11.pdf" },
                { name: "الجزء 12", file: "https://jkzrxmubfuyhuwlbpfoj.sup
