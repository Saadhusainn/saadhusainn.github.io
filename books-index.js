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
            name:"صحيح البخاري",
            file:"https://raw.githubusercontent.com/Saadhusainn/sijjeen03.1/main/25.pdf",
            publisher:"دار ابن كثير",
            language:"العربية",
            type:"single"
        },
         { 
            name: "الأدب المفرد - ت عبد الباقي", 
            file: "https://raw.githubusercontent.com/Saadhusainn/sijjeen04/main/33.pdf",
            publisher: "دار البشائر الإسلامية",
            language: "العربية",
            type: "single"
        },
        {
            name:"مسند الدارمي - ت الزهراني",
            file:"https://raw.githubusercontent.com/Saadhusainn/sijjeen04/main/36.pdf",
            publisher:"N/A",
            language:"العربية",
            type:"single"
        },
        {
            name: "مسند ابن الجعد",
            file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/10.pdf",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            type: "single"
        },
        {
            name:"موطأ مالك رواية يحيى - ت عبد الباقي",
            file:"https://raw.githubusercontent.com/Saadhusainn/sijjeen04/main/37.pdf",
            publisher:"دار أحياء التراث العربي",
            language:"العربية",
            type:"single"
        },
        {
            name:"علل الترمذي الكبير",
            file:"https://github.com/Saadhusainn/sijjeen04/tree/main/35.pdf",
            publisher:"مكتبة النهضة العربية",
            language:"العربية",
            type:"single"
        }
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
                { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/3/mst2.pdf" }
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
        },
         { 
            name: "دلائل النبوة للذهبى", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
           volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/6/dalail0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/6/dalail1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/6/dalail2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/6/dalail3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/6/dalail4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/6/dalail5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen01/main/6/dalail6.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "صحيح ابن حبان", 
            type: "multi",
            publisher: "دار ابن حزم",
            language: "العربية",
            volumes: [
    { name: "المجلد 1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/13/المجلد 1.pdf" },
    { name: "المجلد 2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/13/المجلد 2.pdf" },
    { name: "المجلد 3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/13/المجلد 3.pdf" },
    { name: "المجلد 4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/13/المجلد 4.pdf" },
    { name: "المجلد 5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/13/المجلد 5.pdf" },
    { name: "المجلد 6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/13/المجلد 6.pdf" },
    { name: "المجلد 7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/13/المجلد 7.pdf" },
    { name: "المجلد 8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/13/المجلد 8.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "صحيح ابن خزيمة", 
            type: "multi",
            publisher: "مكتبة الإسلامي",
            language: "العربية",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/14/shuzaima0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/14/shuzaima1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/14/shuzaima2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/14/shuzaima3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/14/shuzaima4.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "مسند الروياني", 
            type: "multi",
            publisher: "مؤسسة القرطبه",
            language: "العربية",
           volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/9/Musnad_Ruyani00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/9/Musnad_Ruyani01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/9/Musnad_Ruyani02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/9/Musnad_Ruyani03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/9/Musnad_Ruyani04.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "سنن الدرقطني", 
            type: "multi",
            publisher: "مؤسسة الرسالة",
            language: "العربية",
           volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/16/sdark0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/16/sdark1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/16/sdark2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/16/sdark3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/16/sdark4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/16/sdark5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/16/sdark6.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "حلية الأولياء", 
            type: "multi",
            publisher: "دار فكر",
            language: "العربية",
         volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 6.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 7.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 8.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 9.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/20/حلية الأولياء وطبقات الأصفياء ـ الجز 10.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "سنن الترمذي", 
            type: "multi",
            publisher: "دار التأصيل",
            language: "العربية",
          volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/31/1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/31/2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/31/3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/31/4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/31/5.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "سنن الترمذي - شعيب الأرنؤوط", 
            type: "multi",
            publisher: "دار الرسالة العالمية",
            language: "العربية",
           volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/32/jt00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/32/jt01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/32/jt02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/32/jt03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/32/jt04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/32/jt05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/32/jt06.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "الطبقات الكبرى لابن سعد", 
            type: "multi",
            publisher: "مكتبة الخانجي",
            language: "العربية",
           volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/34/A66aba9at_11.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "سنن أبي داود - شعيب الأرنؤوط", 
            type: "multi",
            publisher: "دار الرسالة الاعلامية",
            language: "العربية",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/22/0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/22/1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/22/2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/22/3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/22/4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/22/5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/22/6.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/22/7.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "الترغيب الترهيب", 
            type: "",
            publisher: "دار الكتب العلمية ",
            language: "العربية",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/23/0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/23/1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/23/2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/23/3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/23/4.pdf" },
    { name: "مقدمة", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/23/مقدمة.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "سنن ابن ماجه", 
            type: "multi",
            publisher: "دار جيل",
            language: "العربية",
           volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/25/Sunan_Ibn_Majah_Bashar00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/25/Sunan_Ibn_Majah_Bashar01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/25/Sunan_Ibn_Majah_Bashar02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/25/Sunan_Ibn_Majah_Bashar03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/25/Sunan_Ibn_Majah_Bashar04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/25/Sunan_Ibn_Majah_Bashar05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/25/Sunan_Ibn_Majah_Bashar06.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "مسند إسحاق بن راهوايه", 
            type: "multi",
            publisher: "مكتبة الإيمان",
            language: "العربية",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/26/misaac0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/26/misaac1.pdf" },
    { name: "2 & 3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/26/misaac2-3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/26/misaac4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/26/misaac5.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "مستخرج أبي عوانة", 
            type: "multi",
            publisher: "الجامعة الإسلامية",
            language: "العربية",
            volumes: [
                { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/00_000000.pdf"},
                { name: "1-1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/00_146801-1.pdf"},
                { name: "1-2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/00_146801-2.pdf"},
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/01_146802.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/02_146803.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/03_146804.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/04_146805.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/05_146806.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/06_146807.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/07_146808.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/08_146809.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/09_146810.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/10_146811.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/11_146812.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/12_146813.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/13_146814.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/14_146815.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/15_146816.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/16_146817.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/17_146818.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/18_146819.pdf" },
    { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/19_146820.pdf" },
    { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/20_146821.pdf" },
    { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/21.pdf" },
    { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen03.1/main/28/22.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "مجمع الزوائد", 
            type: "multi",
            publisher: "دار الكتاب العربي",
            language: "العربية",
           volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج6.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج7.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج8.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج9.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/38/مجمع الزوائد نور الدين علي الهيثمي ج10.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "عون المعبود شرح سنن أبي داود", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "العربية",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/01_23895.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/02_23896.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/03_23897.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/04_23898.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/05_23899.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/06_23900.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/07_23901.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/08_23902.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/09_23903.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/10_23904.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/11_23905.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/12_23906.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/13_23907.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/14_23908.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/15_23909.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/16_23910.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "فيض الباري على صحيح البخاري", 
            type: "multi",
            publisher: ""دار الكتب العلمية ,
            language: "العربية",
            volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/40/فيض الباري على صحيح البخاري مع حاشية البدر الساري جلد 1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/40/فيض الباري على صحيح البخاري مع حاشية البدر الساري جلد 2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/40/فيض الباري على صحيح البخاري مع حاشية البدر الساري جلد 3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/40/فيض الباري على صحيح البخاري مع حاشية البدر الساري جلد 4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/40/فيض الباري على صحيح البخاري مع حاشية البدر الساري جلد 5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/40/فيض الباري على صحيح البخاري مع حاشية البدر الساري جلد 6.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "معالم السنن للخطابي", 
            type: "multi",
            publisher: "N/A",
            language: "العربية",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/41/ms0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/41/ms1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/41/ms2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/41/ms3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/41/ms4.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "مرقاة المفاتيح شرح مشكاة المصابيح ", 
            type: "multi",
            publisher: "دار الكتب العلمية ",
            language: "العربية",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/42/mmsmm12.pdf" }
],
            isDropdownOpen: false
        },
    ]
};
