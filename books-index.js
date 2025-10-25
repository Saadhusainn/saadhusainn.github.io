// Books Index Database
const booksIndex = {
    // Single volume books (direct files)
    "single": [
        {
            name: "المسند للشافعي",
            file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/11.pdf",
            publisher: "دار الكتب العلمية",
            language: "Arabic",
            type: "single"
        },
        {
    name: "العلل لابن الجوزي - ط العلمية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlIlalLiIbnAlJawzi_AlIlmiyyah.pdf",
    publisher: "دار الكتب العلمية",
    language: "Arabic",
    type: "single"
},
{
    name: "الكفاية في علم الرواية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlKifayahFiIlmAlRiwayah.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"
},
{
    name: "الموضوعات لابن الجوزي - ط محمد عبد المحسن",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlMawduatLiIbnAlJawzi_MuhammadAbdAlMuhsin.pdf",
    publisher: "محمد عبد المحسن",
    language: "Arabic",
    type: "single"
},
        {
    name: "الفقه الأكبر - مكتبة الفرقان",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlFiqhAlAkbar_MaktabahAlFurqan.pdf",
    publisher: "مكتبة الفرقان",
    language: "العربية",
    type: "single"
},
{
    name: "العلل لابن المديني - المكتب الإسلامي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlIlalLiIbnAlMadainiTahqiqAlAazami_AlMaktabahAlIslami.pdf",
    publisher: "المكتب الإسلامي",
    language: "العربية",
    type: "single"
},
{
    name: "الاعتقاد والهداية إلى سبيل الرشاد للبيهقي - دار الآفاق",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlItiqadWaAlHidayahIlaSabilAlRashadLiAlBayhaqi_DarAlAfaq.pdf",
    publisher: "دار الآفاق",
    language: "العربية",
    type: "single"
},
{
    name: "المدلسين لأبي زرعة المعروف بابن العراقي - دار الوفاء",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlMudallisinLiAbiZurraahAlMarufBiIbnAlIraqi_DarAlWafa.pdf",
    publisher: "دار الوفاء",
    language: "العربية",
    type: "single"
},
{
    name: "المقبزة في علم مصطلح الحديث للذهبي - مكتبة المطبوعات الإسلامية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlMuqizahFiIlmMustalahAlHadithLiAlDhahabi_MaktabahAlMatbuatAlIslamiyyah.pdf",
    publisher: "مكتبة المطبوعات الإسلامية",
    language: "العربية",
    type: "single"
},
{
    name: "النكت على كتاب ابن الصلاح لابن حجر العسقلاني - دار الراية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlNukatAlaKitabIbnAlSalahLiIbnHajarAlAsqalani_DarAlRayah.pdf",
    publisher: "دار الراية",
    language: "العربية",
    type: "single"
},
{
    name: "النكت على كتاب ابن الصلاح لابن حجر العسقلاني - دار اليمن",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlNukatAlaKitabIbnAlSalahLiIbnHajarAlAsqalani_DarAlYaman.pdf",
    publisher: "دار اليمن",
    language: "العربية",
    type: "single"
},
{
    name: "النور المبين في قصص الأنبياء والمرسلين للسيّد نعمة الله الجزائري",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlNurAlMubinFiQasasAlAnbiyaWaAlMursalin_LiAlSayidNimatAllahAlJazairi.pdf",
    publisher: "",
    language: "العربية",
    type: "single"
},
{
    name: "الشريعة للأجري - دار الصديق",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlShariahLiAlAjurri_DarAlSiddiq.pdf",
    publisher: "دار الصديق",
    language: "العربية",
    type: "single"
},
{
    name: "الشريعة للجري - الوطن",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlShariahLiAlJurri_AlWatan.pdf",
    publisher: "الوطن",
    language: "العربية",
    type: "single"
},
{
    name: "التعليق والبيان على كتاب الفرقان بين أولياء الرحمن وأولياء الشيطان لابن تيمية - المكتبة الأسدية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlTaliqWaAlBayanAlaKitabAlFurqanBaynaAwliyaAlRahmanWaAwliyaAlShaytanLiIbnTaymiyyah_AlMaktabahAlAsadiyyah.pdf",
    publisher: "المكتبة الأسدية",
    language: "العربية",
    type: "single"
},
{
    name: "كتاب الفتن لنعيم بن حماد - مكتبة التوحيد",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/KitabAlFitanLiNuaymIbnHammad_MaktabahAlTawhid01_02.pdf",
    publisher: "مكتبة التوحيد",
    language: "العربية",
    type: "single"
},
{
    name: "كتاب الأثر للإمام محمد بن الحسن الشيباني - دار الكنوز",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/KitabAlAtharLiAlImamMuhammadIbnAlHasanAlShaybani_DarAlKunuz.pdf",
    publisher: "دار الكنوز",
    language: "العربية",
    type: "single"
},
{
    name: "طبقات المدلسين تعريف أهل التقديس بمراتب الموصوفين بالتدليس - دار الكتب العلمية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TabqatAlMudallisinTarifAhlAlTaqdisBimuratibAlMawsufinBiAlTadlis_DarAlKutubAlIlmiyyah.pdf",
    publisher: "دار الكتب العلمية",
    language: "العربية",
    type: "single"
},
{
    name: "تذكرة الموضوعات لمحمد الهندي الفطاني - إدارة الطباعة",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TadhkirahAlMawduatLiMuhammadAlHindiAlFattani_IdarahAlTibaah.pdf",
    publisher: "إدارة الطباعة",
    language: "العربية",
    type: "single"
},
{
    name: "تاريخ الخلفاء للسيوطي - دار المنهاج",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TarikhAlKhulafaLiAlSuyuti_DarAlMinhaj.pdf",
    publisher: "دار المنهاج",
    language: "العربية",
    type: "single"
},
{
    name: "تاريخ الخلفاء للسيوطي - دار ابن حزم",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TarikhAlKhulafaLiAlSuyuti_DarIbnHazam.pdf",
    publisher: "دار ابن حزم",
    language: "العربية",
    type: "single"
},
{
    name: "تحفة التحصيل في ذكر روات المراسيل للعراقي - مكتبة الرشد",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TuhfahAlTahsilFiDhikrRuwatAlMarasilLiAlIraqi_MaktabahAlRushd.pdf",
    publisher: "مكتبة الرشد",
    language: "العربية",
    type: "single"
},
{
    name: "علوم الحديث مقدمة ابن الصلاح - دار الفكر ودار الفكر المعاصر",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/UlumAlHadithMuqaddimahIbnAlSalah_DarAlFikrWaDarAlFikrAlMuasir.pdf",
    publisher: "دار الفكر ودار الفكر المعاصر",
    language: "العربية",
    type: "single"
},
{
    name: "وقعة صفين - دار الجيل",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/WaqahAlSifin_DarAlJil.pdf",
    publisher: "دار الجيل",
    language: "العربية",
    type: "single"
},
{
    name: "الصارم المسلول على شاتم الرسول - ط الحرس الوطني السعودي",
    type: "multi",
    publisher: "الحرس الوطني السعودي",
    language: "Arabic",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSarimAlMaslul_AlHarsAlWatniAlSaudi00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSarimAlMaslul_AlHarsAlWatniAlSaudi01.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "السنة للمروزي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunnahLiAlMarwazi.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"
},
{
    name: "السنة للمروزي - ط دار العاصمة",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunnahLiAlMarwazi_DarAlAsimah.pdf",
    publisher: "دار العاصمة",
    language: "Arabic",
    type: "single"
},
{
    name: "السنة لابن أبي عاصم",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunnahLiIbnAbiAsim.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"
},

{
    name: "مصباح اللغات",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MisbahAlLughat.pdf",
    publisher: "",
    language: "Urdu",
    type: "single"
},
{
    name: "صحيح مسلم - ط بيت الأفكار",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SahihMuslim_BaytAlAfkar.pdf",
    publisher: "بيت الأفكار",
    language: "Arabic",
    type: "single"
},
{
    name: "شرح السنة للبربهاري - ط دار السلف",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhAlSunnahLiAlBarbahari_DarAlSalaf.pdf",
    publisher: "دار السلف",
    language: "Arabic",
    type: "single"
},
{
    name: "سنن النسائي -ط دار التويفيق",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SunanAlNasai_DarAlTuwayiq.pdf",
    publisher: "دار التويفيق",
    language: "Arabic",
    type: "single"
},
    {
            name: "الأدب المفرد - ت عبد الباقي", 
            file: "https://raw.githubusercontent.com/Saadhusainn/sijjeen04/main/33.pdf",
            publisher: "دار البشائر الإسلامية",
            language: "Arabic",
            type: "single"
        },
        {
    name: "الأمالي للصدوق",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlAmaliLiAlSuduq.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"
},
{
    name: "الاختصاص للمفيد",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIkhtisasLiAlMufid.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"
},
{
    name: "عيون أخبار الرضا",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/UyunAkhbarAlRida01-02.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"

},
{
    name: "خلاصة الأقوال للعلامة الحلي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/KulasahAlAqwalLiAlHilli.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"
},
{
    name: "قرب الإسناد",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/QurbAlIsnad.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"
},
{
    name: "رجال النجاشي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RijalAlNajjashi.pdf",
    publisher: "",
    language: "Arabic",
    type: "single"
},
        {
            name:"مسند الدارمي - ت الزهراني",
            file:"https://raw.githubusercontent.com/Saadhusainn/sijjeen04/main/36.pdf",
            publisher:"N/A",
            language:"Arabic",
            type:"single"
        },
        {
            name: "مسند ابن الجعد",
            file: "https://raw.githubusercontent.com/saadhusainn/sijjeen02/main/10.pdf",
            publisher: "دار الكتب العلمية",
            language: "Arabic",
            type: "single"
        },
        {
            name:"موطأ مالك رواية يحيى - ت عبد الباقي",
            file:"https://raw.githubusercontent.com/Saadhusainn/sijjeen04/main/37.pdf",
            publisher:"دار أحياء التراث العربي",
            language:"Arabic",
            type:"single"
        },
        {
            name:"شرح صحيح البخاري لابن بطال",
            file:"https://raw.githubusercontent.com/Saadhusainn/sijjeen06.1/main/49.pdf",
            publisher:"مكتبة الرشد",
            language:"Arabic",
            type:"single"
        },
        {
            name:"صحيح البخاري",
            file:"https://raw.githubusercontent.com/Saadhusainn/sijjeen06.1/main/24.pdf",
            publisher:"دار ابن كثير",
            language:"Arabic",
            type:"single"
        },
        {
            name:"الضعفاء والمتروكين للنسأئي",
            file:"https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/60.pdf",
            publisher:"مؤسسة الكتب الثقافية",
            language:"Arabic",
            type:"single"
        },
        {
            name:"التاريخ الصغير للبخاري",
            file:"https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/61.pdf",
            publisher:"مكتبة المعارف، دار المعرفة",
            language:"Arabic",
            type:"single"
        },
        {
            name:"كتاب الضعفاء الصغير للبخاري - ت زايد",
            file:"https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/62.pdf",
            publisher:"دار المعرفة",
            language:"Arabic",
            type:"single"
        },
        {
            name:"علل الترمذي الكبير",
            file:"https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/35.pdf",
            publisher:"مكتبة النهضة Arabic",
            language:"Arabic",
            type:"single"
        },
        {
    name: "الأمالي للطوسي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlAmaliLiAlTusi.pdf",
    publisher: "N/A",
    language: "Arabic",
    type: "single"
},
{
    name: "رجال الكشي للكشي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RijalAlKashiLiAlKashi.pdf",
    publisher: "N/A",
    language: "Arabic",
    type: "single"
},
{
    name: "رجال الطوسي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RijalAlTusi.pdf",
    publisher: "N/A",
    language: "Arabic",
    type: "single"
}
    ],
    
    // Multi-volume books (with custom volume names)
    "multi": [
        { 
            name: "المصنف لعبد الرزاق - ت الأعظمي", 
            type: "multi",
            publisher: "المكتبة الإسلامي",
            language: "Arabic",
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
    name: "الفصل للوصل المدرج في النقل - دار الهجرة",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlFaslLilWaslAlMudrajFiAlNaql_DarAlHijrah.pdf",
    publisher: "دار الهجرة",
    language: "العربية",
    type: "single"
},
{
    name: "الغنية للطالبي - دار الكتب العلمية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlGhuniyahLiAlTalibi_DarAlKutubAlIlmiyyah.pdf",
    publisher: "دار الكتب العلمية",
    language: "العربية",
    type: "single"
},
{
    name: "الانتقاء في فضائل الثلاثة الأئمة الفقهاء",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIntiqaFiFadailAlThalathahAlAimmahAlFuqaha.pdf",
    publisher: "",
    language: "العربية",
    type: "single"
},
{
    name: "الإعتصام للشاطبي - دار ابن عفان",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlItisamLiAlShatibi_DarIbnAffan.pdf",
    publisher: "دار ابن عفان",
    language: "العربية",
    type: "single"
},
{
    name: "المراسيل لأبي داود - مؤسسة الرسالة",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMarasilLiAbiDawud_MuassasahAlRisalah.pdf",
    publisher: "مؤسسة الرسالة",
    language: "العربية",
    type: "single"
},
{
    name: "القاموس المحيط للفيروزآبادي - مؤسسة الرسالة",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlQamusAlMuhitLiAlFiruzabadi_MuassasahAlRisalah.pdf",
    publisher: "مؤسسة الرسالة",
    language: "العربية",
    type: "single"
},
{
    name: "الرد على الجهمية لعثمان بن سعيد - دار السلفية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlRaddAlaAlJahmiyyahLiUthmanIbnSaid_DarAlSalafiyyah.pdf",
    publisher: "دار السلفية",
    language: "العربية",
    type: "single"
},
{
    name: "الرسالة للشافعي - مطبعة مصطفى البابي الحلبي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlRisalahLiAlShafi_MatbaahMustafaAlBabiAlHalbi.pdf",
    publisher: "مطبعة مصطفى البابي الحلبي",
    language: "العربية",
    type: "single"
},
{
    name: "السنة لعبد الله بن أحمد بن حنبل",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlSunnahLiAbdAllahIbnAhmadIbnHanbal.pdf",
    publisher: "",
    language: "العربية",
    type: "single"
},
{
    name: "التبيان لأسماء المدلسين لبرهان الدين الحلبي - دار الكتب العلمية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlTibyanLiAsmaAlMudallisinLiBurhanAlDinAlHalbi_DarAlKutubAlIlmiyyah.pdf",
    publisher: "دار الكتب العلمية",
    language: "العربية",
    type: "single"
},
{
    name: "العلو للعلي الغفار للذهبي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlUluwwLilaliAlGhaffar.pdf",
    publisher: "",
    language: "العربية",
    type: "single"
},
{
    name: "الزهد لأبي داود السجستاني - دار المشكاة",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlZuhdLiAbiDawudAlSijistani_DarAlMishkat.pdf",
    publisher: "دار المشكاة",
    language: "العربية",
    type: "single"
},
{
    name: "أسماء المدلسين للسيوطي - دار الجيل",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AsmaAlMudallisinLiAlSuyuti_DarAlJil.pdf",
    publisher: "دار الجيل",
    language: "العربية",
    type: "single"
},
{
    name: "فضائل الصحابة لأحمد بن حنبل - مؤسسة الرسالة",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/FadailAlSahabahLiAhmadIbnHanbal_MuassasahAlRisalah.pdf",
    publisher: "مؤسسة الرسالة",
    language: "العربية",
    type: "single"
},
{
    name: "إبطال التأويلات - غراس",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/IbtalAlTawilat_Ghuras.pdf",
    publisher: "غراس",
    language: "العربية",
    type: "single"
},
{
    name: "جامع التحصيل في أحكام المراسيل للعلائي - عالم الكتب",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/JamiAlTahsilFiAhkamAlMarasilLiAlAlai_AlamAlKutub.pdf",
    publisher: "عالم الكتب",
    language: "العربية",
    type: "single"
},
{
    name: "خلق أفعال العباد للبخاري",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/KhalqAfalAlIbad.pdf",
    publisher: "",
    language: "العربية",
    type: "single"
},
{
    name: "معرفة علوم الحديث - دار الكتب العلمية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/MaarfahUlumAlHadith_DarAlKutubAlIlmiyyah.pdf",
    publisher: "دار الكتب العلمية",
    language: "العربية",
    type: "single"
},
{
    name: "معرفة علوم الحديث - دار ابن حزم",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/MaarfahUlumAlHadith_DarIbnHazam.pdf",
    publisher: "دار ابن حزم",
    language: "العربية",
    type: "single"
},
{
    name: "معرفة علوم الحديث - جامعة دائرة المعارف العثمانية",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/MaarfahUlumAlHadith_JamiahDairahAlMaarifAlUthmaniyah.pdf",
    publisher: "جامعة دائرة المعارف العثمانية",
    language: "العربية",
    type: "single"
},
{
    name: "تأويل مختلف الحديث - المكتب الإسلامي",
    file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/TawilMukhtalifAlHadith_AlMaktabAlIslami.pdf",
    publisher: "المكتب الإسلامي",
    language: "العربية",
    type: "single"
},
        { 
            name: "مسند أبي يعلى الموصيلي", 
            type: "multi",
            publisher: "دار المامون للتراث",
            language: "Arabic",
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
            language: "Arabic",
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
            name: "الإستيعاب في معرفة الأصحاب لابن عبد البر", 
            type: "multi",
            publisher: "دار الجيل",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/68/Isteeab01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/68/Isteeab02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/68/Isteeab03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/68/Isteeab04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/68/Isteeab05.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "الكامل في الضعفاء الرجال لإبن عدي", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "Arabic",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra6.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra7.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra8.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/69/kdra9.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "معرفة الثقات للعجلي", 
            type: "multi",
            publisher: "N/A",
            language: "Arabic",
            volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/70/معرفة الثقات العجيلي ج1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/70/معرفة الثقات العجيلي ج2.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "لسان الميزان لإبن حجر", 
            type: "multi",
            publisher: "مكتب المطبوعات الإسلامية",
            language: "Arabic",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/74/lisanm0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/74/lisanm1.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "ميزان الإعتدال في نقد الرجال للذهبي", 
            type: "multi",
            publisher: "N/A",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/76/00_15344.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/76/01_153444.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/76/02_15345.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/76/03_15346.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/76/04_15347.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "تذكرة الحفاظ للذهبي", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/77/00_72574.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/77/01_72574.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/77/02_72574.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/77/03_72575.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/77/04_72575.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/77/05_72576.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "كتاب التميز للإمام مسلم بن الحجاج", 
            type: "multi",
            publisher: "شركة الطباعة Arabic السعودية",
            language: "Arabic",
            volumes: [
                { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/78/Tamyizp.pdf" },
                { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/78/Tamyiz.pdf" },
            ],
            isDropdownOpen: false
        },
        { 
            name: "تاريخ الطبري، تاريخ الرسال والملوك - ط دار المعارف بمصر", 
            type: "multi",
            publisher: "دار المعارف بمصر",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/79/trm11.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "تاريخ بغداد، تاريخ مدينة السلام", 
            type: "multi",
            publisher: "دار الكتب العلمية ",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (01).pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (02).pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (03).pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (04).pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (05).pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (06).pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (07).pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (08).pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (09).pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (10).pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (11).pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (12).pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (13).pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (14).pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (15).pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (16).pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (17).pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (18).pdf" },
    { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (19).pdf" },
    { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (20).pdf" },
    { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (21).pdf" },
    { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (22).pdf" },
    { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (23).pdf" },
    { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen08/main/80/تاريخ بغداد (24).pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "كتاب الثقات لإبن حبان", 
            type: "multi",
            publisher: "n/a",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/01_3910.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/02_3911.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/03_3912.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/04_3913.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/05_3914.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/06_3915.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/07_3916.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/08_3917.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/09_3918.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/81/10_3919.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "أسد الغابة في معرفة الصحابة", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "Arabic",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh6.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh7.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/82/asdghsh8.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "إكمال تهذيب الكمال في أسماء الرجال", 
            type: "multi",
            publisher: "الفاروق الحديثة للطباعة والنشر",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/01.pdf" },
    { name: "01A", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/01 A.pdf"},
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/83/12.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "الإصابة في تمييز الصحابة لإبن حجر ", 
            type: "multi",
            publisher: "دار الكتب العلمية ",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/84/08.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "تحرير تقريب التهذيب", 
            type: "multi",
            publisher: "مؤسسة الرسالة",
            language: "Arabic",
            volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/89/تحرير تقريب التهذيب احمد بن علي ابن حجر العسقلاني ج1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/89/تحرير تقريب التهذيب احمد بن علي ابن حجر العسقلاني ج2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/89/تحرير تقريب التهذيب احمد بن علي ابن حجر العسقلاني ج3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/89/تحرير تقريب التهذيب احمد بن علي ابن حجر العسقلاني ج4.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "الضعفاء الكبير للعقيلي", 
            type: "multi",
            publisher: "دار التأصيل",
            language: "Arabic",
            volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/85/الضعفاء رواية يوسف بن أحمد الدخيل الصيدلاني دار التأصيل جلد 1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/85/الضعفاء رواية يوسف بن أحمد الدخيل الصيدلاني دار التأصيل جلد 2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/85/الضعفاء رواية يوسف بن أحمد الدخيل الصيدلاني دار التأصيل جلد 3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/85/الضعفاء رواية يوسف بن أحمد الدخيل الصيدلاني دار التأصيل جلد 4.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "الضعفاء والمتروكين لإبن الجوزي", 
            type: "multi",
            publisher: "دار الكتب العلمية ",
            language: "Arabic",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/86/dmga0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/86/dmga1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/86/dmga2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/86/dmga3.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "المنتظم في تاريخ الملوك والأمم", 
            type: "multi",
            publisher: "دار الكتب العلمية ",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo17.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo18.pdf" },
    { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/87/mtmo19.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "تاريخ الإسلام ووفيات المشاهير والأعلام", 
            type: "multi",
            publisher: "دار الغرب الإسلامي",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen09/main/88/17.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "المصنف لابن أبي شيبة ت الشثري", 
            type: "multi",
            publisher: "دار كنوز",
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            type: "multi",
            publisher: "دار الكتب العلمية ",
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/01_23895.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/02_23895.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/03_23896.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/04_23896.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/05_23897.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/06_23897.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/07_23898.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/08_23898.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/09_23899.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/10_23899.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/11_23900.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/12_23900.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/13_23901.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/14_23901.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/15_23902.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/39/16_23902.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "فيض الباري على صحيح البخاري", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "Arabic",
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
            language: "Arabic",
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
            language: "Arabic",
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
        { 
            name: "فتح الباري لابن رجب الحنبلي", 
            type: "multi",
            publisher: "مكتبة الغرباء الأثرية",
            language: "Arabic",
           volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/45/fbir10.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "إرشاد الساري شرح صحيح البخاري - ط دار الكتب العلمية", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "Arabic",
           volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 4.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 5.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 6.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 7.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 8.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 9.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/47/إرشاد الساري لشرح صحيح البخاري ، الجز 15.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "التمهيد لما في الموطأ من المعاني في الأسانيد في حديث رسول الله - ط مؤسسة الفرقان", 
            type: "multi",
            publisher: "مؤسسة الفرقان",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.1/main/52/17.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "فتح الباري - ط دار السلام", 
            type: "multi",
            publisher: "دار السلام",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/44/فتح الباري شرح صحيح البخاري – دار السلام، الرياض – جلد 15.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "المعلم بفوائد مسلم", 
            type: "multi",
            publisher: "N/A",
            language: "Arabic",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/46/mfm0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/46/mfm1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/46/mfm2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/46/mfm3.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "تحفة الأحوذي", 
            type: "multi",
            publisher: "دار الفكر",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/54/tasgt10.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "فتح الباري - ط دار طيبة", 
            type: "multi",
            publisher: "دار طيبة",
            language: "Arabic",
            volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (1).pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (2).pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (3).pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (4).pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (5).pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (6).pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (7).pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/8فتح الباری شرح صحیح بخاری.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (9).pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/فتح الباری شرح صحیح بخاری (10).pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen05.2/main/55/11_2032.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "التمهيد لما في الموطأ من المعاني في الأسانيد في حديث رسول الله", 
            type: "multi",
            publisher: "N/A",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar17.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar18.pdf" },
    { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar19.pdf" },
    { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar20.pdf" },
    { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar21.pdf" },
    { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar22.pdf" },
    { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar23.pdf" },
    { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar24.pdf" },
    { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar25.pdf" },
    { name: "26", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/53/ta_bar26.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "إرشاد الساري شرح صحيح البخاري - ط ابن حزم", 
            type: "multi",
            publisher: "دار ابن حزم",
            language: "Arabic",
            volumes: [
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج1_غير_ملون.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج2_غير_ملون.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج3_غير_ملون.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج4_غير_ملون.pdf" },
    { name: "5", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج5_غير_ملون.pdf" },
    { name: "6", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج6_غير_ملون.pdf" },
    { name: "7", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج7_غير_ملون.pdf" },
    { name: "8", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج8_غير_ملون.pdf" },
    { name: "9", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج9_غير_ملون.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج10_غير_ملون.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج11_غير_ملون.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج12_غير_ملون.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج13_غير_ملون.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج14_غير_ملون.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج15_غير_ملون.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج16_غير_ملون.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج17_غير_ملون.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج18_غير_ملون.pdf" },
    { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج19_غير_ملون.pdf" },
    { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.2/main/51/إرشاد_الساري_ط_عطاءات_العلم_ج20_غير_ملون.pdf" }
],
            isDropdownOpen: false
        },
        {
            name:"مرقاة المفاتيح شرح مشكاة المصابيح ",
            type:"multi",
            punlisher:"دار الفكر",
            language:"Arabic",
           volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/01_67436.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/02_67437.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/03_67438.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/04_67439.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/05_67440.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/06_67441.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/07_67442.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/08_67443.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/09_67444.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/10_67445.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen04/main/43/11_67446.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "تاريخ مدينة دمشق، تاريخ ابن عساكر", 
            type: "multi",
            publisher: "دار الفكر",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/01.pdf" },
    { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/01p.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/17.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/18.pdf" },
    { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/19.pdf" },
    { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/20.pdf" },
    { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/21.pdf" },
    { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/22.pdf" },
    { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/23.pdf" },
    { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/24.pdf" },
    { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/25.pdf" },
    { name: "26", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/26.pdf" },
    { name: "27", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/27.pdf" },
    { name: "28", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/28.pdf" },
    { name: "29", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/29.pdf" },
    { name: "30", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/30.pdf" },
    { name: "31", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/31.pdf" },
    { name: "32", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/32.pdf" },
    { name: "33", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/33.pdf" },
    { name: "34", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/34.pdf" },
    { name: "35", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/35.pdf" },
    { name: "36", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/36.pdf" },
    { name: "37", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/37.pdf" },
    { name: "38", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/38.pdf" },
    { name: "39", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/39.pdf" },
    { name: "40", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/40.pdf" },
    { name: "41", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/41.pdf" },
    { name: "42", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/42.pdf" },
    { name: "43", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/43.pdf" },
    { name: "44", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/44.pdf" },
    { name: "45", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/45.pdf" },
    { name: "46", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/46.pdf" },
    { name: "47", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/47.pdf" },
    { name: "48", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/48.pdf" },
    { name: "49", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/49.pdf" },
    { name: "50", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/50.pdf" },
    { name: "51", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/51.pdf" },
    { name: "52", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/52.pdf" },
    { name: "53", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/53.pdf" },
    { name: "54", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/54.pdf" },
    { name: "55", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/55.pdf" },
    { name: "56", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/56.pdf" },
    { name: "57", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/57.pdf" },
    { name: "58", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/58.pdf" },
    { name: "59", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/59.pdf" },
    { name: "60", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/60.pdf" },
    { name: "61", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/61.pdf" },
    { name: "62", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/62.pdf" },
    { name: "63", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/63.pdf" },
    { name: "64", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/64.pdf" },
    { name: "65", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/65.pdf" },
    { name: "66", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/66.pdf" },
    { name: "67", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/67.pdf" },
    { name: "68", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/68.pdf" },
    { name: "69", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/69.pdf" },
    { name: "70", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/70.pdf" },
    { name: "71", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/71.pdf" },
    { name: "72", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/72.pdf" },
    { name: "73", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/73.pdf" },
    { name: "74", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/74.pdf" },
    { name: "75", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/75.pdf" },
    { name: "76", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/76.pdf" },
    { name: "77-78", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/77-78.pdf" },
    { name: "79p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/79p.pdf" },
    { name: "79-80", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/65/79-80.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "تهذيب الكمال في أسماء الرجال", 
            type: "multi",
            publisher: "مؤسسة الرسالة",
            language: "Arabic",
           volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar17.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar18.pdf" },
    { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar19.pdf" },
    { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar20.pdf" },
    { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar21.pdf" },
    { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar22.pdf" },
    { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar23.pdf" },
    { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar24.pdf" },
    { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar25.pdf" },
    { name: "26", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar26.pdf" },
    { name: "27", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar27.pdf" },
    { name: "28", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar28.pdf" },
    { name: "29", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar29.pdf" },
    { name: "30", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar30.pdf" },
    { name: "31", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar31.pdf" },
    { name: "32", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar32.pdf" },
    { name: "33", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar33.pdf" },
    { name: "34", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar34.pdf" },
    { name: "35", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen07/main/66/tkar35.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "المنهاج شرح صحيح ملسم للنووي", 
            type: "multi",
            publisher: "دار أحياء التارث العربي",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm17.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/48/shsm18.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "عمدة القاري شرح صحيح البخاري", 
            type: "multi",
            publisher: "دار الفكر",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/00.pdf" },
    { name: "01a", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/01a.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/17.pdf" },
    { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/18.pdf" },
    { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/19.pdf" },
    { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/20.pdf" },
    { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/21.pdf" },
    { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/22.pdf" },
    { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/23.pdf" },
    { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/24.pdf" },
    { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/25.pdf" },
    { name: "1b", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/50/1.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "سبل السلام الموصلة الى بلوغ المرام.", 
            type: "multi",
            publisher: "دار ابن الجوزي ",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/56/01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/56/02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/56/03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/56/04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/56/05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/56/06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/56/07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/56/08.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "كتاب العلل ومعرفة الرجال", 
            type: "multi",
            publisher: "دار الخاني",
            language: "Arabic",
            volumes: [
    { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/57/emra0.pdf" },
    { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/57/emra1.pdf" },
    { name: "2", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/57/emra2.pdf" },
    { name: "3", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/57/emra3.pdf" },
    { name: "4", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/57/emra4.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "التاريخ الكبير للبخاري", 
            type: "multi",
            publisher: "دار الكتب العلمية",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/58/التاريخ الكبير - أبو عبد الله محمد بن إسماعيل البخاري (المتوفى 256هـ) دار الكتب العلمية، بیروت – جلد 09.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "كتاب المجروحين لابن حبان", 
            type: "multi",
            publisher: "N/A",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/59/01_44014.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/59/02_44015.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "الجرح والتعديل لابن أبي حاتم", 
            type: "multi",
            publisher: "مطبعة مجلس دائرة المعارف العثمانية، بحيدر آباد الدكن - الهند",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/63/الجرح والتعديل - أبو محمد عبد الرحمن بن محمد، ابن أبي حاتم الرازي – جلد 09.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "تاريخ بغداد، تاريخ مدينة السلام", 
            type: "multi",
            publisher: "دار الغرب الإسلامي",
            language: "Arabic",
            volumes: [
    { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba00.pdf" },
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba08.pdf" },
    { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba09.pdf" },
    { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba10.pdf" },
    { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba11.pdf" },
    { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba12.pdf" },
    { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba13.pdf" },
    { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba14.pdf" },
    { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba15.pdf" },
    { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba16.pdf" },
    { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen06.1/main/64/taba17.pdf" }
],
            isDropdownOpen: false
        },
        { 
            name: "الكافي للكلينيي", 
            type: "multi",
            publisher: "المكتبة الإسلامي",
            language: "Arabic",
            volumes: [
    { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi01.pdf" },
    { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi02.pdf" },
    { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi03.pdf" },
    { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi04.pdf" },
    { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi05.pdf" },
    { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi06.pdf" },
    { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi07.pdf" },
    { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi08.pdf" }
],
            isDropdownOpen: false
        },
        {
    name: "الكافي",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/alkafi08.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الاستبصار",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIstibsar01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIstibsar02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIstibsar03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIstibsar04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "من لا يحضره الفقيه",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/ManLaYahduru01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/ManLaYahduru02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/ManLaYahduru03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/ManLaYahduru04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تهذيب الأحكام",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TahdhibAlAhkam10.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "وسائل الشيعة",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah20.pdf" },
        { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah21.pdf" },
        { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah22.pdf" },
        { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah23.pdf" },
        { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah24.pdf" },
        { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah25.pdf" },
        { name: "26", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah26.pdf" },
        { name: "27", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah27.pdf" },
        { name: "28", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah28.pdf" },
        { name: "29", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah29.pdf" },
        { name: "30", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/WasailAlShiah30.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الإحتجاج",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIhtijajAlTabrisi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIhtijajAlTabrisi02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "العدة",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIddah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIddah02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تلخيص الشافي",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TalkhisAlShafi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TalkhisAlShafi02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TalkhisAlShafi03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TalkhisAlShafi04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "صحيح الكافي",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/SahihAlKafi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/SahihAlKafi02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/SahihAlKafi03.pdf" }
    ],
    isDropdownOpen: false
},
        {
    name: "البرهان في تفسير القرآن",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlBurhanFiTafsirAlQuran01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlBurhanFiTafsirAlQuran02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlBurhanFiTafsirAlQuran03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlBurhanFiTafsirAlQuran04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlBurhanFiTafsirAlQuran05.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الميزان في تفسير القرآن",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran13.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran15.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlMizanFiTafsirAlQuran20.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "أنوار النعمانية",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AnwarAlNumaniyyah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AnwarAlNumaniyyah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AnwarAlNumaniyyah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AnwarAlNumaniyyah04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "بصائر الدرجات الكبرى",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/BasairAlDarajatAlKubra01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/BasairAlDarajatAlKubra02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "ملاذ الأخيار",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MaladhAlAkhyar16.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "مرآة العقول",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul20.pdf" },
        { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul21.pdf" },
        { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul22.pdf" },
        { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul23.pdf" },
        { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul24.pdf" },
        { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul25.pdf" },
        { name: "26", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MiratAlUqul26.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "معجم رجال الحديث",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith17.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith20.pdf" },
        { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith21.pdf" },
        { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith22.pdf" },
        { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith23.pdf" },
        { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/MujamRijalAlHadith24.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "نقد الرجال",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/NaqdAlRijal01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/NaqdAlRijal02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/NaqdAlRijal03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/NaqdAlRijal04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/NaqdAlRijal05.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "روضة الجنان",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RawdatAlJannat01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RawdatAlJannat02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RawdatAlJannat03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RawdatAlJannat04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RawdatAlJannat05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RawdatAlJannat06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RawdatAlJannat07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/RawdatAlJannat08.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "شرح فروع الكافي",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/SharhFuruAlKafi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/SharhFuruAlKafi02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/SharhFuruAlKafi03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/SharhFuruAlKafi04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/SharhFuruAlKafi05.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تفسير العياشي",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlAyyashi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlAyyashi02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlAyyashi03.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تفسير القمي",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlQummi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlQummi02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تفسير الصافي",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlSafi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlSafi02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlSafi03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlSafi04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/TafsirAlSafi05.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الإرشاد للمفيد",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIrshadLiAlMufid01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen99/main/pdfs/AlIrshadLiAlMufid02.pdf" }
    ],
    isDropdownOpen: false
},
        {
    name: "العلل لابن الجوزي - ط المكتب الإسلامي",
    type: "multi",
    publisher: "المكتب الإسلامي",
    language: "Arabic",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlIlalLiIbnAlJawzi_AlKitabAlIslami00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlIlalLiIbnAlJawzi_AlKitabAlIslami01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlIlalLiIbnAlJawzi_AlKitabAlIslami01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlIlalLiIbnAlJawzi_AlKitabAlIslami02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الموضوعات لابن الجوزي - أصوا السلف",
    type: "multi",
    publisher: "أصوا السلف",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlMawduatLiIbnAlJawzi_AswaAlSalaf01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlMawduatLiIbnAlJawzi_AswaAlSalaf02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlMawduatLiIbnAlJawzi_AswaAlSalaf03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlMawduatLiIbnAlJawzi_AswaAlSalaf04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "السنن الكبرى للبيهقي - ط مؤسسة الرسالة",
    type: "multi",
    publisher: "مؤسسة الرسالة",
    language: "Arabic",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah02.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah09.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlSunanAlKubraLiAlBayhaqi_MuassahAlRisalah12.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الطبقات الكبرى لإبن سعد - دار الكتب العلمية",
    type: "multi",
    publisher: "دار الكتب العلمية",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyah04.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyah09.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الطبقات الكبرى لابن سعد - ط دار الكتب العلمية) (قديم)",
    type: "multi",
    publisher: "دار الكتب العلمية (قديم)",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_AlIlmiyyahQadeem09.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الطبقات الكبرى  لإبن سعد - ط دار صادر",
    type: "multi",
    publisher: "دار صادر",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_DarSadir01.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_DarSadir03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_DarSadir04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_DarSadir05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_DarSadir06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_DarSadir07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_DarSadir08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/AlTabaqatAlKubra_DarSadir09.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "فتح المغيث بشرح ألفية الحديث",
    type: "multi",
    publisher: "مكتبة دار المنهاج",
    language: "Arabic",
    volumes: [
        { name: "00p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/FathAlMughith_MaktabahDarAlMinhaj00p.pdf" },
        { name: "01s", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/FathAlMughith_MaktabahDarAlMinhaj01s.pdf" },
        { name: "02s", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/FathAlMughith_MaktabahDarAlMinhaj02s.pdf" },
        { name: "03s", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/FathAlMughith_MaktabahDarAlMinhaj03s.pdf" },
        { name: "04s", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/FathAlMughith_MaktabahDarAlMinhaj04s.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/FathAlMughith_MaktabahDarAlMinhaj05.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "كنز العمال",
    type: "multi",
    publisher: "مؤسسة الرسالة",
    language: "Arabic",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah15.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KanzAlUmmal_AlRisalah18.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "كتاب المعرفة والتاريخ، تاريخ يعقوب الفسوي",
    type: "multi",
    publisher: "بيت الأفكار",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KitabAlMaarfahWaAlTarikh_BaytAlAfkar01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KitabAlMaarfahWaAlTarikh_BaytAlAfkar02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KitabAlMaarfahWaAlTarikh_BaytAlAfkar03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/KitabAlMaarfahWaAlTarikh_BaytAlAfkar04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "مجموع الفتاوى لابن تيمية",
    type: "multi",
    publisher: "",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah03.pdf" },
        { name: "03-a", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah03-a.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah20.pdf" },
        { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah21.pdf" },
        { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah22.pdf" },
        { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah23.pdf" },
        { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah24.pdf" },
        { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah25.pdf" },
        { name: "26", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah26.pdf" },
        { name: "27", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah27.pdf" },
        { name: "29", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah29.pdf" },
        { name: "30", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah30.pdf" },
        { name: "31", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah31.pdf" },
        { name: "32", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah32.pdf" },
        { name: "33", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah33.pdf" },
        { name: "34", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah34.pdf" },
        { name: "35", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah35.pdf" },
        { name: "36", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah36.pdf" },
        { name: "36p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah36p.pdf" },
        { name: "37", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/MajmuAlFatawaLiIbnTaymiyyah37.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "شرح معاني الآثار",
    type: "multi",
    publisher: "علم الكتب",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhMaaniAlAtharAlimAlKutub01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhMaaniAlAtharAlimAlKutub02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhMaaniAlAtharAlimAlKutub03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhMaaniAlAtharAlimAlKutub04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhMaaniAlAtharAlimAlKutub05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhMaaniAlAtharAlimAlKutub06.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "شرح أصول اعتقاد أهل السنة",
    type: "multi",
    publisher: "المكتبة الإسلامية",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhUsulItiqad_AlMaktabahAlIslamiyyah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhUsulItiqad_AlMaktabahAlIslamiyyah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhUsulItiqad_AlMaktabahAlIslamiyyah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SharhUsulItiqad_AlMaktabahAlIslamiyyah04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "سلسلة الأحاديث الصحيحة للألباني",
    type: "multi",
    publisher: "مكتبة المعارف",
    language: "Arabic",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif03.pdf" },
        { name: "03p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif03p.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif04.pdf" },
        { name: "04p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif04p.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif07.pdf" }
    ],
    isDropdownOpen: false
},
        {
    name: "الداء والدواء - دار ابن حزم",
    type: "multi",
    publisher: "دار ابن حزم",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AddaWaAlDawa_DarIbnHazam01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AddaWaAlDawa_DarIbnHazam01p.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الإبانة الكبرى",
    type: "multi",
    publisher: "",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlIbanahAlKubra09.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "جامع العلوم للإمام أحمد بن حنبل - دار الفلاح",
    type: "multi",
    publisher: "دار الفلاح",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah09.pdf" },
        { name: "1", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah1.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah20.pdf" },
        { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah21.pdf" },
        { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlJamiAlUlumAlImamAhmadIbnHanbal_DarAlFalah22.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "المغني لابن قدامة - دار عالم الكتب",
    type: "multi",
    publisher: "دار عالم الكتب",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub10.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlMughniLiIbnQudamah_DarAlamAlKutub15.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "التبصرة لابن الجوزي - دار الكتب العلمية",
    type: "multi",
    publisher: "دار الكتب العلمية",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlTabsirahLiIbnAlJawzi_DarAlKutubAlIlmiyyah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlTabsirahLiIbnAlJawzi_DarAlKutubAlIlmiyyah01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlTabsirahLiIbnAlJawzi_DarAlKutubAlIlmiyyah01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/AlTabsirahLiIbnAlJawzi_DarAlKutubAlIlmiyyah02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "بدائع الصنائع - دار الكتب العلمية",
    type: "multi",
    publisher: "دار الكتب العلمية",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/BadaiAlSanai_DarAlKutubAlIlmiyyah10.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "ذيل طبقات الحنابلة لابن رجب - مطبعة السنة",
    type: "multi",
    publisher: "مطبعة السنة",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/DhaylTabaqatAlHanabilahLiIbnRajab_MatbaahAlSunnah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/DhaylTabaqatAlHanabilahLiIbnRajab_MatbaahAlSunnah02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "كتاب العين - دار الكتب العلمية",
    type: "multi",
    publisher: "دار الكتب العلمية",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/KitabAlAyn_DarAlKutubAlIlmiyyah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/KitabAlAyn_DarAlKutubAlIlmiyyah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/KitabAlAyn_DarAlKutubAlIlmiyyah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/KitabAlAyn_DarAlKutubAlIlmiyyah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/KitabAlAyn_DarAlKutubAlIlmiyyah04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "كتاب التوحيد لابن خزيمة - دار الرشد",
    type: "multi",
    publisher: "دار الرشد",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/KitabAlTawhidLiIbnKhuzaymah_DarAlRushd00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/KitabAlTawhidLiIbnKhuzaymah_DarAlRushd01.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "لسان العرب لإبن منظور - دار صادر",
    type: "multi",
    publisher: "دار صادر",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir09.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir11.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/LisanAlArab_DarSadir15.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "مناقب الإمام أحمد بن حنبل لابن الجوزي - دار حجر",
    type: "multi",
    publisher: "دار حجر",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/ManaqinAlImamAhmadIbnHanbalLiIbnAlJawzi_DarHijr00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/ManaqinAlImamAhmadIbnHanbalLiIbnAlJawzi_DarHijr01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/ManaqinAlImamAhmadIbnHanbalLiIbnAlJawzi_DarHijr01p.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "مسائل الإمام أحمد بن حنبل رواية إسحاق بن إبراهيم بن هاني النيسابوري",
    type: "multi",
    publisher: "",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/MasailAlImamAhmadIbnHanbalRiwayahIshaqIbnIbrahimIbnHaniAlNisaburi00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/MasailAlImamAhmadIbnHanbalRiwayahIshaqIbnIbrahimIbnHaniAlNisaburi01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/MasailAlImamAhmadIbnHanbalRiwayahIshaqIbnIbrahimIbnHaniAlNisaburi01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/MasailAlImamAhmadIbnHanbalRiwayahIshaqIbnIbrahimIbnHaniAlNisaburi02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "نصب الراية لأحاديث الهداية للزيلعي - مؤسسة الريان",
    type: "multi",
    publisher: "مؤسسة الريان",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NasbAlRayahAlAhadithAlHidayahLiAlZaylai_MuassasahAlRayyan00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NasbAlRayahAlAhadithAlHidayahLiAlZaylai_MuassasahAlRayyan01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NasbAlRayahAlAhadithAlHidayahLiAlZaylai_MuassasahAlRayyan01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NasbAlRayahAlAhadithAlHidayahLiAlZaylai_MuassasahAlRayyan02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NasbAlRayahAlAhadithAlHidayahLiAlZaylai_MuassasahAlRayyan03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NasbAlRayahAlAhadithAlHidayahLiAlZaylai_MuassasahAlRayyan04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NasbAlRayahAlAhadithAlHidayahLiAlZaylai_MuassasahAlRayyan05.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "نتائج الأفكار في تخريج أحاديث الأذكار لابن حجر - دار ابن كثير",
    type: "multi",
    publisher: "دار ابن كثير",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NataijAlAfkarFiTakhrijAhadithAlAzkarLiIbnHajar_DarIbnKathir00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NataijAlAfkarFiTakhrijAhadithAlAzkarLiIbnHajar_DarIbnKathir01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NataijAlAfkarFiTakhrijAhadithAlAzkarLiIbnHajar_DarIbnKathir02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NataijAlAfkarFiTakhrijAhadithAlAzkarLiIbnHajar_DarIbnKathir03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NataijAlAfkarFiTakhrijAhadithAlAzkarLiIbnHajar_DarIbnKathir04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NataijAlAfkarFiTakhrijAhadithAlAzkarLiIbnHajar_DarIbnKathir05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/NataijAlAfkarFiTakhrijAhadithAlAzkarLiIbnHajar_DarIbnKathir06.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "شرح سنن أبي داود للعيني - مكتبة الرشد",
    type: "multi",
    publisher: "مكتبة الرشد",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SharhSunanAbiDawudLiAlAyni_MaktabahAlRushd00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SharhSunanAbiDawudLiAlAyni_MaktabahAlRushd01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SharhSunanAbiDawudLiAlAyni_MaktabahAlRushd02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SharhSunanAbiDawudLiAlAyni_MaktabahAlRushd03.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SharhSunanAbiDawudLiAlAyni_MaktabahAlRushd05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SharhSunanAbiDawudLiAlAyni_MaktabahAlRushd06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SharhSunanAbiDawudLiAlAyni_MaktabahAlRushd07.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "سلسلة الأحاديث الضعيفة - مكتبة المعارف",
    type: "multi",
    publisher: "مكتبة المعارف",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif02.pdf" },
        { name: "02A", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif02A.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif14.pdf" },
        { name: "14A", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif14A.pdf" },
        { name: "مقدمة", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/SilsilahAlAhadithAlSahihah_MaktabahAlMaarif_Muqaddimah.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "طبقات الحنابلة - ت الفقي - مطبعة السنة",
    type: "multi",
    publisher: "مطبعة السنة",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/TabaqatAlHanabilahTahqeeqAlFaq_MatbaahAlSunnah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/TabaqatAlHanabilahTahqeeqAlFaq_MatbaahAlSunnah02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "طبقات الحنابلة - ت ابن عثيمين",
    type: "multi",
    publisher: "",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/TabaqatAlHanabilahTahqeeqIbnUthaymin00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/TabaqatAlHanabilahTahqeeqIbnUthaymin01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/TabaqatAlHanabilahTahqeeqIbnUthaymin01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/TabaqatAlHanabilahTahqeeqIbnUthaymin02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen97/main/pdfs/TabaqatAlHanabilahTahqeeqIbnUthaymin03.pdf" }
    ],
    isDropdownOpen: false
},
        {
    name: "الآحاد والمثاني لابن أبي عاصم - دار الراية",
    type: "multi",
    publisher: "دار الراية",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlAhadWaAlMathaniLiIbnAbiAsim_DarAlRayah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlAhadWaAlMathaniLiIbnAbiAsim_DarAlRayah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlAhadWaAlMathaniLiIbnAbiAsim_DarAlRayah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlAhadWaAlMathaniLiIbnAbiAsim_DarAlRayah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlAhadWaAlMathaniLiIbnAbiAsim_DarAlRayah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlAhadWaAlMathaniLiIbnAbiAsim_DarAlRayah06.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "البداية والنهاية تاريخ ابن كثير - دار ابن كثير",
    type: "multi",
    publisher: "دار ابن كثير",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir09.pdf" },
        { name: "0a", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir0a.pdf" },
        { name: "0b", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir0b.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlBidayahWaAlNihayahTarikhIbnKathir_DarIbnKathir20.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الديباج على صحيح مسلم بن الحجاج للسيوطي - دار ابن عفان",
    type: "multi",
    publisher: "دار ابن عفان",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlDibajAlaSahihMuslimIbnAlHajjajLiAlSuyuti_DarIbnAffan00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlDibajAlaSahihMuslimIbnAlHajjajLiAlSuyuti_DarIbnAffan01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlDibajAlaSahihMuslimIbnAlHajjajLiAlSuyuti_DarIbnAffan01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlDibajAlaSahihMuslimIbnAlHajjajLiAlSuyuti_DarIbnAffan02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlDibajAlaSahihMuslimIbnAlHajjajLiAlSuyuti_DarIbnAffan03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlDibajAlaSahihMuslimIbnAlHajjajLiAlSuyuti_DarIbnAffan04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlDibajAlaSahihMuslimIbnAlHajjajLiAlSuyuti_DarIbnAffan05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlDibajAlaSahihMuslimIbnAlHajjajLiAlSuyuti_DarIbnAffan06.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الفقيه والمتفقه للخطيب البغدادي - دار ابن الجوزي",
    type: "multi",
    publisher: "دار ابن الجوزي",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlFaqihWaAlMutafaqqihLiAlKhatibAlBaghdadi_DarIbnAlJawzi01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlFaqihWaAlMutafaqqihLiAlKhatibAlBaghdadi_DarIbnAlJawzi02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الجمع بين الصحيحين - دار الكمال",
    type: "multi",
    publisher: "دار الكمال",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlJamBaynAlSahihayn_DarAlKamal01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlJamBaynAlSahihayn_DarAlKamal02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlJamBaynAlSahihayn_DarAlKamal03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlJamBaynAlSahihayn_DarAlKamal04.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الكامل في التاريخ لابن الأثير - دار الكتب العربي",
    type: "multi",
    publisher: "دار الكتب العربي",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlKamilFiAlTarikhLiIbnAlAthir_DarAlKutubAlArabi11.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "المراسيل لابن أبي حاتم الرازي - مؤسسة الرسالة",
    type: "multi",
    publisher: "مؤسسة الرسالة",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlMarasilLiIbnAbiHatimAlRaziTahqiqAlArnaut_MuassasahAlRisalah01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlMarasilLiIbnAbiHatimAlRaziTahqiqAlArnaut_MuassasahAlRisalah01p.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الشافي في شرح مسند الشافعي - مكتبة الرشد",
    type: "multi",
    publisher: "مكتبة الرشد",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlShafiFiSharhMusnadAlShafii_MaktabahAlRushd_01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlShafiFiSharhMusnadAlShafii_MaktabahAlRushd_02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlShafiFiSharhMusnadAlShafii_MaktabahAlRushd_03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlShafiFiSharhMusnadAlShafii_MaktabahAlRushd_04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlShafiFiSharhMusnadAlShafii_MaktabahAlRushd_05.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "الزهد والرقائق لعبد الله بن المبارك - تحقيق الأعظمي",
    type: "multi",
    publisher: "",
    language: "العربية",
    volumes: [
        { name: "00A", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlZuhdWaAlRaqaiqLiAbdAllahIbnAlMubarakTahqiqAlAazami00A.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlZuhdWaAlRaqaiqLiAbdAllahIbnAlMubarakTahqiqAlAazami01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AlZuhdWaAlRaqaiqLiAbdAllahIbnAlMubarakTahqiqAlAazami01p.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "أنساب الأشراف للبلاذري - دار الفكر",
    type: "multi",
    publisher: "دار الفكر",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/AnsabAlAshrafLiAlBaladhuri_DarAlFikr13.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "فوائد المجموعة في الأحاديث الموضوعة للشوكاني",
    type: "multi",
    publisher: "",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/FawaidAlMajmuahFiAlAhadithAlMawduahLiAlShawkani01.pdf" },
        { name: "مقدمة", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/FawaidAlMajmuahFiAlAhadithAlMawduahLiAlShawkani_Muqaddimah.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "كتاب الفتن لنعيم بن حماد - دار اللؤلؤ",
    type: "multi",
    publisher: "دار اللؤلؤ",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/KitabAlFitanLiNuaymIbnHammad_DarAlLuLuh01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/KitabAlFitanLiNuaymIbnHammad_DarAlLuLuh02.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "مناقب الشافعي للبيهقي - مكتبة دار التراث",
    type: "multi",
    publisher: "مكتبة دار التراث",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ManaqibAlShafiiLiAlBayhaqi_MaktabahDarAlTurath00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ManaqibAlShafiiLiAlBayhaqi_MaktabahDarAlTurath01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ManaqibAlShafiiLiAlBayhaqi_MaktabahDarAlTurath01p.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "محاضرات تاريخ الأمم الإسلامية",
    type: "multi",
    publisher: "",
    language: "العربية",
    volumes: [
        { name: "0w", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/MuhadaratTarikhAlUmamAlIslamiyyah0w.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/MuhadaratTarikhAlUmamAlIslamiyyah01.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "معجم الصحابة لابن قانع - مكتبة الغرباء الأثرية",
    type: "multi",
    publisher: "مكتبة الغرباء الأثرية",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/MujamAlSahabahLiIbnQani_MaktabahAlGhurabaAlAthariyyah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/MujamAlSahabahLiIbnQani_MaktabahAlGhurabaAlAthariyyah01.pdf" },
        { name: "01A", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/MujamAlSahabahLiIbnQani_MaktabahAlGhurabaAlAthariyyah01A.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/MujamAlSahabahLiIbnQani_MaktabahAlGhurabaAlAthariyyah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/MujamAlSahabahLiIbnQani_MaktabahAlGhurabaAlAthariyyah03.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "نيل الأوطار من أسرار منتقى الأخبار - دار ابن الجوزي",
    type: "multi",
    publisher: "دار ابن الجوزي",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi10.pdf" },
        { name: "10p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi10p.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi11.pdf" },
        { name: "11p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi11p.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/NaylAlAwtarMinAsrarMuntaqaAlAkhbar_DarIbnAlJawzi16.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "شرح علل الترمذي لابن رجب - مكتبة المنار",
    type: "multi",
    publisher: "مكتبة المنار",
    language: "العربية",
    volumes: [
        { name: "01-02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/SharhIlalAlTirmidhiLiIbnRajab_MaktabahAlMinar01-02.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/SharhIlalAlTirmidhiLiIbnRajab_MaktabahAlMinar01p.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تخريج أحاديث إحياء علوم الدين للعراقي والسبكي والزبيدي - دار العاصمة",
    type: "multi",
    publisher: "دار العاصمة",
    language: "العربية",
    volumes: [
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TakhrijAhadithIhyaUlumAlDinLiAlIraqiWaAlSubkiWaAlZabidi_DarAlAsimah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TakhrijAhadithIhyaUlumAlDinLiAlIraqiWaAlSubkiWaAlZabidi_DarAlAsimah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TakhrijAhadithIhyaUlumAlDinLiAlIraqiWaAlSubkiWaAlZabidi_DarAlAsimah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TakhrijAhadithIhyaUlumAlDinLiAlIraqiWaAlSubkiWaAlZabidi_DarAlAsimah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TakhrijAhadithIhyaUlumAlDinLiAlIraqiWaAlSubkiWaAlZabidi_DarAlAsimah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/TakhrijAhadithIhyaUlumAlDinLiAlIraqiWaAlSubkiWaAlZabidi_DarAlAsimah06.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "زاد المعاد في هدي خير العباد لابن القيم - مؤسسة الرسالة",
    type: "multi",
    publisher: "مؤسسة الرسالة",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ZadAlMaadFiHadyKhayrAlIbadLiIbnAlJawziTahqiqAlArnaut_MuassasahAlRisalah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ZadAlMaadFiHadyKhayrAlIbadLiIbnAlJawziTahqiqAlArnaut_MuassasahAlRisalah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ZadAlMaadFiHadyKhayrAlIbadLiIbnAlJawziTahqiqAlArnaut_MuassasahAlRisalah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ZadAlMaadFiHadyKhayrAlIbadLiIbnAlJawziTahqiqAlArnaut_MuassasahAlRisalah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ZadAlMaadFiHadyKhayrAlIbadLiIbnAlJawziTahqiqAlArnaut_MuassasahAlRisalah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ZadAlMaadFiHadyKhayrAlIbadLiIbnAlJawziTahqiqAlArnaut_MuassasahAlRisalah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen96/main/pdfs/ZadAlMaadFiHadyKhayrAlIbadLiIbnAlJawziTahqiqAlArnaut_MuassasahAlRisalah06.pdf" }
    ],
    isDropdownOpen: false
},
        {
    name: "الجامع لأحكام القرآن تفسير القرطبي - مؤسسة الرسالة",
    type: "multi",
    publisher: "مؤسسة الرسالة",
    language: "العربية",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah20.pdf" },
        { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah21.pdf" },
        { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah22.pdf" },
        { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah23.pdf" },
        { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/AlJamiAlAhkamAlQuranTafsirAlQurtubi_MuassasahAlRisalah24.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "مسند الإمام أحمد بن حنبل - مؤسسة الرسالة",
    type: "multi",
    publisher: "مؤسسة الرسالة",
    language: "العربية",
    volumes: [
        { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah0.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah20.pdf" },
        { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah21.pdf" },
        { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah22.pdf" },
        { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah23.pdf" },
        { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah24.pdf" },
        { name: "25", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah25.pdf" },
        { name: "26", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah26.pdf" },
        { name: "27", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah27.pdf" },
        { name: "28", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah28.pdf" },
        { name: "29", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah29.pdf" },
        { name: "30", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah30.pdf" },
        { name: "31", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah31.pdf" },
        { name: "32", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah32.pdf" },
        { name: "33", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah33.pdf" },
        { name: "34", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah34.pdf" },
        { name: "35", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah35.pdf" },
        { name: "36", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah36.pdf" },
        { name: "37", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah37.pdf" },
        { name: "38", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah38.pdf" },
        { name: "39", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah39.pdf" },
        { name: "40", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah40.pdf" },
        { name: "41", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah41.pdf" },
        { name: "42", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah42.pdf" },
        { name: "43", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah43.pdf" },
        { name: "44", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah44.pdf" },
        { name: "45", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah45.pdf" },
        { name: "46", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah46.pdf" },
        { name: "47", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah47.pdf" },
        { name: "48", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah48.pdf" },
        { name: "49", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah49.pdf" },
        { name: "50", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/MusnadAlImamAhmadIbnHanbal_MuassasahAlRisalah50.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تفسير الطبري - دار حجر",
    type: "multi",
    publisher: "دار حجر",
    language: "العربية",
    volumes: [
        { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr0.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr01.pdf" },
        { name: "01p", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr01p.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr09.pdf" },
        { name: "10", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr10.pdf" },
        { name: "11", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr11.pdf" },
        { name: "12", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr12.pdf" },
        { name: "13", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr13.pdf" },
        { name: "14", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr14.pdf" },
        { name: "15", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr15.pdf" },
        { name: "16", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr16.pdf" },
        { name: "17", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr17.pdf" },
        { name: "18", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr18.pdf" },
        { name: "19", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr19.pdf" },
        { name: "20", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr20.pdf" },
        { name: "21", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr21.pdf" },
        { name: "22", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr22.pdf" },
        { name: "23", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr23.pdf" },
        { name: "24", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr24.pdf" },
        { name: "25_26", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirAlTabari_DarHijr25_26.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تفسير ابن كثير - دار الكتب العلمية",
    type: "multi",
    publisher: "دار الكتب العلمية",
    language: "العربية",
    volumes: [
        { name: "0", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah0.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah04.pdf" },
        { name: "05", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah05.pdf" },
        { name: "06", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah06.pdf" },
        { name: "07", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah07.pdf" },
        { name: "08", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah08.pdf" },
        { name: "09", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen95/main/pdfs/TafsirIbnKathir_DarAlKutubAlIlmiyyah09.pdf" }
    ],
    isDropdownOpen: false
},
{
    name: "تلخيص الحبير لإبن حجر",
    type: "multi",
    publisher: "مؤسسة قرطبة",
    language: "Arabic",
    volumes: [
        { name: "00", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/TalkhisAlHabir_MuassahAlQurtubah00.pdf" },
        { name: "01", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/TalkhisAlHabir_MuassahAlQurtubah01.pdf" },
        { name: "02", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/TalkhisAlHabir_MuassahAlQurtubah02.pdf" },
        { name: "03", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/TalkhisAlHabir_MuassahAlQurtubah03.pdf" },
        { name: "04", file: "https://raw.githubusercontent.com/saadhusainn/sijjeen98/main/pdfs/TalkhisAlHabir_MuassahAlQurtubah04.pdf" }
    ],
    isDropdownOpen: false
}
    ]
};
