var Department_Specializations_H2 = document.getElementById(
  "Department_Specializations_H2"
);
var Department_Specializations_Section = document.getElementById(
  "Department_Specializations_Section"
);
var Research_Publications_H2 = document.getElementById(
  "Research_Publications_H2"
);
var Research_Publications_Section = document.getElementById(
  "Research_Publications_Section"
);
var Departement_Hirarchy_H2 = document.getElementById(
  "Departement_Hirarchy_H2"
);
var Departement_Hirarchy_Section = document.getElementById(
  "Departement_Hirarchy_Section"
);

var Department_Specializations_H2_Ar = `
اخــتـصـاصــات القسم
`;
var Department_Specializations_H2_En = `
Department Specializations
`;
var Department_Specializations_Section_Ar = `
    <ul id="Department_Specializations_UL_Ar" style="direction: rtl;">
        <li style="--accent-color:#0B374D">
            <div class="title">١</div>
            <div class="descr">	القيام بأعمال دراسات الجدوى وتقييم المشروعات الزراعية العضوية .</div>
        </li>
        <li style="--accent-color:#1286A8">
            <div class="title">٢</div>
            <div class="descr">	إجراء الدراسات الخاصة اقتصاديات الإنتاج الزراعي العضوي . </div>
        </li>
        <li style="--accent-color:#D2B53B">
            <div class="title">٣</div>
            <div class="descr">	إجراء الدراسات عن تنمية الصادرات الزراعية العضوية المصرية عن طريق دراسة الأسواق المختلفة لهذه المنتجات والقدرة التنافسية لها والفرص المتاحة للتصدير.</div>
        </li>
        <li style="--accent-color:#DA611E">
            <div class="title">٤</div>
            <div class="descr">	إعداد نشرة اقتصادية سنوية تتضمن بيانات عن التوزيع الجغرافي للمساحات العضوية وإنتاجية وإنتاج هذه المحاصيل في مختلف محافظات الجمهورية .</div>
        </li>
        <li style="--accent-color:#AC2A1A">
            <div class="title">٥</div>
            <div class="descr">	إجراء التحيلات الإحصائية والتجارب البحوث الخاصة بالزراعة العضوية  . </div>
        </li>
        <li style="--accent-color:#AC2A1A">
            <div class="title">٦</div>
            <div class="descr">	إقامة الدراسة الحقلية في القري والمركاز والمحافظات .</div>
        </li>
        <li style="--accent-color:#DA611E">
            <div class="title">٧</div>
            <div class="descr">	عمل البحوث الخاصة بالزراعة العضوية ونشر الوعي بين المزراعيين.</div>
        </li>
        <li style="--accent-color:#D2B53B">
            <div class="title">٨</div>
            <div class="descr">	نقل الأفكار والطرق الجديدة للإنتاج العضوي للمزراعيين العضويين .</div>
        </li>
        <li style="--accent-color:#1286A8">
            <div class="title">٩</div>
            <div class="descr">	مساعدة المزراع على التعرف على المشاكل والمعوقات التي تواجهه وتزويده بالممارسات الجيدة للتقلب عليها .</div>
        </li>
        <li style="--accent-color:#0B374D">
            <div class="title">١٠</div>
            <div class="descr">	مساعدة المزراععلى الأستخادم الأصل للموارد المتاحة ( المياة – التربه – الطاقة ).</div>
        </li>
        <li style="--accent-color:#0B374D">
            <div class="title">١١</div>
            <div class="descr">	تطوير قدرة المزراع على الأستثمار وإيجاد مراحل تسويقية للمنتجات العضوية .</div>
        </li>
        <li style="--accent-color:#1286A8">
            <div class="title">١٢</div>
            <div class="descr">	رفع مستوي المعيشة لسكان الريف عن طريق زيادة الدخل من خلال الصناعات الريفية .</div>
        </li>
        <li style="--accent-color:#D2B53B">
            <div class="title">١٣</div>
            <div class="descr">	توعية المزراعيين للقوانين واللوائح والسياسيات الزراعية المنظمة للزراعة العضوية .</div>
        </li>
        <li style="--accent-color:#DA611E">
            <div class="title">١٤</div>
            <div class="descr">	المشاركة مع المؤسسات الأخري فى توعيه المجتمعات الريفية في المجغارت الصحية والفنية والتقليمية.</div>
        </li>
        <li style="--accent-color:#AC2A1A">
            <div class="title">١٥</div>
            <div class="descr">	تمثيل المعمل في مختلف اللجان والمشاركه المتلعقة بالارشاد الزراعي .</div>
        </li>
    </ul>
`;
var Department_Specializations_Section_En = `
    <ul id="Department_Specializations_UL_En" style="direction: ltr;">
        <li style="--accent-color:#0B374D">
            <div class="title">1</div>
            <div class="descr">Conducting feasibility studies and evaluating organic agricultural projects.</div>
        </li>
        <li style="--accent-color:#1286A8">
            <div class="title">2</div>
            <div class="descr">Carrying out studies on the economics of organic agricultural production.</div>
        </li>
        <li style="--accent-color:#D2B53B">
            <div class="title">3</div>
            <div class="descr">Conducting research on the development of Egyptian organic agricultural exports by studying various markets, assessing their competitiveness, and identifying available export opportunities.</div>
        </li>
        <li style="--accent-color:#DA611E">
            <div class="title">4</div>
            <div class="descr">Preparing an annual economic bulletin that includes data on the geographical distribution of organic farming areas, along with the productivity and production of these crops across different governorates of the country.</div>
        </li>
        <li style="--accent-color:#AC2A1A">
            <div class="title">5</div>
            <div class="descr">Performing statistical analyses and research experiments related to organic agriculture.</div>
        </li>
        <li style="--accent-color:#AC2A1A">
            <div class="title">6</div>
            <div class="descr">Conducting field studies in villages, districts, and governorates.</div>
        </li>
        <li style="--accent-color:#DA611E">
            <div class="title">7</div>
            <div class="descr">Conducting research on organic agriculture and promoting awareness among farmers.</div>
        </li>
        <li style="--accent-color:#D2B53B">
            <div class="title">8</div>
            <div class="descr">Transferring new ideas and methods of organic production to organic farmers.</div>
        </li>
        <li style="--accent-color:#1286A8">
            <div class="title">9</div>
            <div class="descr">Assisting farmers in identifying the problems and obstacles they face and providing them with best practices to overcome these challenges.</div>
        </li>
        <li style="--accent-color:#0B374D">
            <div class="title">10</div>
            <div class="descr">	Supporting farmers in the optimal use of available resources (water — soil — energy).</div>
        </li>
        <li style="--accent-color:#0B374D">
            <div class="title">11</div>
            <div class="descr">	Enhancing farmers’ investment capabilities and identifying marketing channels for organic products.</div>
        </li>
        <li style="--accent-color:#1286A8">
            <div class="title">12</div>
            <div class="descr">	Improving the living standards of rural populations by increasing income through rural industries.</div>
        </li>
        <li style="--accent-color:#D2B53B">
            <div class="title">13</div>
            <div class="descr">	Raising farmers’ awareness of the laws, regulations, and agricultural policies governing organic farming.</div>
        </li>
        <li style="--accent-color:#DA611E">
            <div class="title">14</div>
            <div class="descr">	Collaborating with other institutions to raise awareness in rural communities regarding health, technical, and educational issues.</div>
        </li>
        <li style="--accent-color:#AC2A1A">
            <div class="title">15</div>
            <div class="descr">	Representing the laboratory in various committees and participating in activities related to agricultural extension.</div>
        </li>
    </ul>
`;

var Research_Publications_H2_Ar = `
الأبحاث المنشورة خلال الفترة من ١/١/٢٠٢٠ حتي ٣١/١٢/٢٠٢٤
`;
var Research_Publications_H2_En = `
Published Research During the Period from 01/01/2020 to 31/12/2024
`;
var Research_Publications_Section_Ar = `
    <ul id="Research_Publications_UL_Ar" style="direction: rtl;">
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">١</div>
            <div class="descr">التحليل الاقتصادي للزراعة الذكية مناخياً في مصر</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٢</div>
            <div class="descr">الوضع التنافسي لصادرات البصل المصري العضوى والتقليدي بأهم اسواق الاتحاد الاوربي.</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٣</div>
            <div class="descr">التنبؤ بالمساحة والانتاج للمحاصيل العضوية في مصر ومحددات الطلب المحلي عليها .</div>
        </li>
    </ul>
`;
var Research_Publications_Section_En = `
    <ul id="Research_Publications_UL_En" style="direction: ltr;">
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">1</div>
            <div class="descr">Economic Analysis of Climate-Smart Agriculture in Egypt  </div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">2</div>
            <div class="descr">The Competitive Situation of Exports Egyptian Organic and Conventional Onion in the Most Important European Union Markets</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">3</div>
            <div class="descr">Forecasting Area and Production of Organic Crops and Determinants of Their Domestic Demand in Egypt.</div>
        </li>
    </ul>
`;

var Departement_Hirarchy_Section_Ar = `
<img style="width: 100%;" src="../Images/Research Departements/Arabic Hirarchy/Final/Enhanced/OA_Economics_Extension_Ar-Picsart-AiImageEnhancer.jpg" alt="">
`;
var Departement_Hirarchy_Section_En = `
<img style="width: 100%;" src="../Images/Research Departements/English Hirarchy/Final/Enhanced/OA_Economics_Extension_En-Picsart-AiImageEnhancer.png" alt="">
`;

function OA_Economics_Extension_Dep_Load_Content_Ar() {
  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });

  Department_Specializations_H2.innerHTML = Department_Specializations_H2_Ar;
  Department_Specializations_H2.style.direction = "rtl";

  Research_Publications_H2.innerHTML = Research_Publications_H2_Ar;
  Research_Publications_H2.style.direction = "rtl";

  Research_Publications_Section.innerHTML = Research_Publications_Section_Ar;
  Department_Specializations_Section.innerHTML = Department_Specializations_Section_Ar;
  Departement_Hirarchy_Section.innerHTML = Departement_Hirarchy_Section_Ar;
}
function OA_Economics_Extension_Dep_Load_Content_En() {
  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });

  Department_Specializations_H2.innerHTML = Department_Specializations_H2_En;
  Department_Specializations_H2.style.direction = "ltr";

  Research_Publications_H2.innerHTML = Research_Publications_H2_En;
  Research_Publications_H2.style.direction = "rtl";

  Research_Publications_Section.innerHTML = Research_Publications_Section_En;
  Department_Specializations_Section.innerHTML = Department_Specializations_Section_En;
  Departement_Hirarchy_Section.innerHTML = Departement_Hirarchy_Section_En;
}
if (localStorage.getItem("Permenant_Language") === "English") {
  OA_Economics_Extension_Dep_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  OA_Economics_Extension_Dep_Load_Content_Ar();
}
