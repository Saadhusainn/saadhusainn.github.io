// Books Index Database
const booksIndex = {
    // Single volume books (direct files)
    "single": [
        {
            name: "المسند للشافعي",
            file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/11.pdf",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            type: "single"
        },
        {
            name: "مسند ابن الجعد",
            file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/12.pdf",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            type: "single"
        },
    ],
    
    // Multi-volume books (with custom volume names)
    "multi": [
        { 
            name: "المصنف لعبد الرزاق - ت الأعظمي", 
            type: "multi",
            publisher: "المكتبة الإسلامي",
            language: "العربية",
            volumes: [
                { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar00.pdf" },
                { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar01.pdf" },
                { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar01p.pdf" },
                { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar02.pdf" },
                { name: "02p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar02p.pdf" },
                { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar03.pdf" },
                { name: "03p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar03p.pdf" },
                { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar04.pdf" },
                { name: "04p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar04p.pdf" },
                { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar05.pdf" },
                { name: "05p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar05p.pdf" },
                { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar06.pdf" },
                { name: "06p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar06p.pdf" },
                { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar07.pdf" },
                { name: "07p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar07p.pdf" },
                { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar08.pdf" },
                { name: "08p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar08p.pdf" },
                { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar09.pdf" },
                { name: "09p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar09p.pdf" },
                { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar10.pdf" },
                { name: "10p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar10p.pdf" },
                { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar11.pdf" },
                { name: "11p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar11p.pdf" },
                { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/miar12.pdf" },
                { name: "Missing Part", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/19/missing_part.pdf" }
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
            name: "مسند أبي يعلى الموصيلي", 
            type: "multi",
            publisher: "دار المامون للتراث",
            language: "العربية",
            volumes: [
                { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala00.pdf" },
                { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala01.pdf" },
                { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala01p.pdf" },
                { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala02.pdf" },
                { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala03.pdf" },
                { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala04.pdf" },
                { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala05.pdf" },
                { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala06.pdf" },
                { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala07.pdf" },
                { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala08.pdf" },
                { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala09.pdf" },
                { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala10.pdf" },
                { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala11.pdf" },
                { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala12.pdf" },
                { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala13.pdf" },
                { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/21/mayala014.pdf" }
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
                { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk00.pdf" },
                { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk01.pdf" },
                { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk02.pdf" },
                { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk03.pdf" },
                { name: "3p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk03p.pdf" },
                { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk04.pdf" },
                { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk05.pdf" },
                { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk06.pdf" },
                { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk08.pdf" },
                { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk09.pdf" },
                { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk09p.pdf" },
                { name: "9p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk09p.pdf" },
                { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk10.pdf" },
                { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk11.pdf" },
                { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk12.pdf" },
                { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk13.pdf" },
                { name: "13_1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk13_1.pdf" },
                { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk14.pdf" },
                { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk17.pdf" },
                { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk18.pdf" },
                { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk19.pdf" },
                { name: "19p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk019p.pdf" },
                { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk20.pdf" },
                { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk21.pdf" },
                { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk22.pdf" },
                { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk23.pdf" },
                { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk24.pdf" },
                { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/2/mtk25.pdf" },
            ],
            isDropdownOpen: false
        },
        { 
            name: "المصنف لابن أبي شيبة ت الشثري", 
            type: "multi",
            publisher: "دار كنوز",
            language: "العربية",
            volumes: [
                { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah00.pdf" },
                { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah01.pdf" },
                { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah02.pdf" },
                { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah03.pdf" },
                { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah04.pdf" },
                { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah05.pdf" },
                { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah06.pdf" },
                { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah07.pdf" },
                { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah08.pdf" },
                { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah09.pdf" },
                { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah10.pdf" },
                { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah11.pdf" },
                { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah12.pdf" },
                { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah13.pdf" },
                { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah14.pdf" },
                { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah15.pdf" },
                { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah16.pdf" },
                { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah17.pdf" },
                { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah18.pdf" },
                { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah19.pdf" },
                { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah20.pdf" },
                { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah21.pdf" },
                { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah22.pdf" },
                { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah23.pdf" },
                { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah24.pdf" },
                { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/7/shaybah25.pdf" }
            ],
            isDropdownOpen: false
        },
        { 
            name: "السنن الكبرى للنسائي", 
            type: "multi",
            publisher: "المكتبة الرسالة",
            language: "العربية",
           volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk01.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk02.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk03.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk04.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk05.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk06.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk07.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk08.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/4/snk12.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "المعجم الصغير للطبراني", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            volumes: [
                { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/3/mst0.pdf" },
                { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/3/mst1.pdf" },
                { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/3/mst2.pdf }
            ],
            isDropdownOpen: false
        },
        { 
            name: "المعجم الأوسط للطبراني", 
            type: "multi",
            publisher: "دار الحرمين",
            language: "العربية",
           volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat00.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat01.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat02.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat03.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat04.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat05.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat06.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat07.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat08.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/1/mat10.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "مسند أبي داود الطيالسي", 
            type: "multi",
            publisher: "دار هجر",
            language: "العربية",
            volumes: [
                { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/12/madt0.pdf" },
                { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/12/madt1.pdf" },
                { name: "1p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/12/madt1p.pdf" },
                { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/12/madt2.pdf" },
                { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/12/madt3.pdf" },
                { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/12/madt4.pdf" },
            ],
            isDropdownOpen: false
        },
        { 
            name: "مسند أحمد ت شاكر", 
            type: "multi",
            publisher: "دار الحديث",
            language: "العربية",
           volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda00.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda01.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda02.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda03.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda04.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda05.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda06.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda07.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda08.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda17.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/8/musnda18.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "البحر الزخار المعروف بمسند البزار", 
            type: "multi",
            publisher: "مكتبة العلوم",
            language: "العربية",
           volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz00.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz01.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz02.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz03.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz04.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz05.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz06.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz07.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz08.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/5/musbaz15.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "المستدرك على الصحيحين للحاكم", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/18/00.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/18/01.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/18/02.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/18/03.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/18/04.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/18/05.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "شعب الإيمان ت الزغلول", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
           volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/15/gshe_elmiya09.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "السنن الكبرى للبيهقى", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
           volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/17/skb11.pdf" }
],
            isDropdownOpen: false
        }
    ]
};
