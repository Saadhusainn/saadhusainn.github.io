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
                { name: "الجزء 12", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk12.pdf" },
                { name: "الجزء 13", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk13.pdf" },
                { name: "الجزء 14", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk14.pdf" },
                { name: "الجزء 15", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk15.pdf" },
                { name: "الجزء 16", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk16.pdf" },
                { name: "الجزء 17", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk17.pdf" },
                { name: "الجزء 18", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk18.pdf" },
                { name: "الجزء 19", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk19.pdf" },
                { name: "الجزء 20", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk20.pdf" },
                { name: "الجزء 21", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk21.pdf" },
                { name: "الجزء 22", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk22.pdf" },
                { name: "الجزء 23", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk23.pdf" },
                { name: "الجزء 24", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk24.pdf" },
                { name: "الجزء 25", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al%20Kabir%20maktabah%20Ibn%20tamiyah/mtk25.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "المصنف لابن أبي شيبة ت الشثري", 
            type: "multi",
            publisher: "دار كنوز",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/1_152371.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/2_152371.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/3_152371.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/4_152371.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/5_152371.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/6_152371.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/7_152371.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/8_152371.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/9_152371.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/10_152371.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/11_152371.pdf" },
                { name: "الجزء 12", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/12_152371.pdf" },
                { name: "الجزء 13", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/13_152371.pdf" },
                { name: "الجزء 14", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/14_152371.pdf" },
                { name: "الجزء 15", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/15_152371.pdf" },
                { name: "الجزء 16", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/16_152371.pdf" },
                { name: "الجزء 17", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/17_152371.pdf" },
                { name: "الجزء 18", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/18_152371.pdf" },
                { name: "الجزء 19", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/19_152371.pdf" },
                { name: "الجزء 20", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/20_152371.pdf" },
                { name: "الجزء 21", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/21_152371.pdf" },
                { name: "الجزء 22", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/22_152371.pdf" },
                { name: "الجزء 23", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/23_152371.pdf" },
                { name: "الجزء 24", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/24_152371.pdf" },
                { name: "الجزء 25", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musannaf%20Ibn%20abi%20shaybah%20dar%20kunoz/25_152371.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "السنن الكبرى للنسائي", 
            type: "multi",
            publisher: "المكتبة الرسالة",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk10.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk11.pdf" },
                { name: "الجزء 12", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20nasai%20al-risalah/snk12.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "المعجم الصغير للطبراني", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            volumes: [
                { name: "الجزء الأول", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-Saghir%20al-ilmiyyah/mst1.pdf" },
                { name: "الجزء الثاني", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-Saghir%20al-ilmiyyah/mst2.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "المعجم الأوسط للطبراني", 
            type: "multi",
            publisher: "دار الحرمين",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mujam%20al-awsat%20dar%20al-haramayn/mat10.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "مسند أبي داود الطيالسي", 
            type: "multi",
            publisher: "دار هجر",
            language: "العربية",
            volumes: [
                { name: "الجزء الأول", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20dawud%20al-tayalisi%20dar%20hijr/mad1.pdf" },
                { name: "الجزء الثاني", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20dawud%20al-tayalisi%20dar%20hijr/mad2.pdf" },
                { name: "الجزء الثالث", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20dawud%20al-tayalisi%20dar%20hijr/mad3.pdf" },
                { name: "الجزء الرابع", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20abi%20dawud%20al-tayalisi%20dar%20hijr/mad4.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "مسند أحمد ت شاكر", 
            type: "multi",
            publisher: "دار الحديث",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda10.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda11.pdf" },
                { name: "الجزء 12", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda12.pdf" },
                { name: "الجزء 13", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda13.pdf" },
                { name: "الجزء 14", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda14.pdf" },
                { name: "الجزء 15", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda15.pdf" },
                { name: "الجزء 16", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda16.pdf" },
                { name: "الجزء 17", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda17.pdf" },
                { name: "الجزء 18", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20ahmad%20T%20shakir%20dar%20al-hadith/musnda18.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "البحر الزخار المعروف بمسند البزار", 
            type: "multi",
            publisher: "مكتبة العلوم",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz10.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz11.pdf" },
                { name: "الجزء 12", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz12.pdf" },
                { name: "الجزء 13", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz13.pdf" },
                { name: "الجزء 14", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz14.pdf" },
                { name: "الجزء 15", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Musnad%20al-bazzar%20maktabah%20al-ulum/musbaz15.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "المستدرك على الصحيحين للحاكم", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            volumes: [
                { name: "الجزء الأول", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mustadrak%20al-hakim%20al-ilmiyyah/1.pdf" },
                { name: "الجزء الثاني", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mustadrak%20al-hakim%20al-ilmiyyah/2.pdf" },
                { name: "الجزء الثالث", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mustadrak%20al-hakim%20al-ilmiyyah/3.pdf" },
                { name: "الجزء الرابع", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mustadrak%20al-hakim%20al-ilmiyyah/4.pdf" },
                { name: "الجزء الخامس", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Mustadrak%20al-hakim%20al-ilmiyyah/5.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "موطأ الإمام مالك رواية أبي مصعب الزهري", 
            type: "multi",
            publisher: "دار التأصيل",
            language: "العربية",
            volumes: [
                { name: "الجزء الأول", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Muwatta%20malik%20bi-riwayat%20abi%20mus'ab%20al-zuhri%20dal%20ta'sil/mm1.pdf" },
                { name: "الجزء الثاني", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Muwatta%20malik%20bi-riwayat%20abi%20mus'ab%20al-zuhri%20dal%20ta'sil/mm2.pdf" },
                { name: "الجزء الثالث", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Muwatta%20malik%20bi-riwayat%20abi%20mus'ab%20al-zuhri%20dal%20ta'sil/mm3.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "شعب الإيمان ت الزغلول", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Shu'b%20al-iman%20T%20al-Zhughlul%20al-ilmiyyah/gshe_elmiya9.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "السنن الكبرى للبيهقى", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            volumes: [
                { name: "المقدمة والجزء 1", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb1.pdf" },
                { name: "الجزء 2", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb2.pdf" },
                { name: "الجزء 3", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb3.pdf" },
                { name: "الجزء 4", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb4.pdf" },
                { name: "الجزء 5", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb5.pdf" },
                { name: "الجزء 6", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb6.pdf" },
                { name: "الجزء 7", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb7.pdf" },
                { name: "الجزء 8", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb8.pdf" },
                { name: "الجزء 9", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb9.pdf" },
                { name: "الجزء 10", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb10.pdf" },
                { name: "الجزء 11", file: "https://jkzrxmubfuyhuwlbpfoj.supabase.co/storage/v1/object/public/sijjeen1/Sunan%20kubra%20al-bayhaqi%20al-ilmiyyah/skb11.pdf" }
            ],
            isDropdownOpen: false
        }
    ]
};
