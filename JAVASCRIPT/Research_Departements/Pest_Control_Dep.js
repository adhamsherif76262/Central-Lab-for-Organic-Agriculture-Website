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
    <ol id="Department_Specializations_OL_Ar" style="direction: rtl;">
        <li>
            <div class="descr">	عمل أبحاث لحل مشكلات مكافحة الآفات التي تصيب المحاصيل المختلفة بالطرق المسموح بها في الزراعات العضوية حسب قوانين ( المحلية ) والدولية.</div>
        </li>
        <li>
            <div class="descr">	تقييم واختبار المركبات الحيوية المستخدمة في مكافحة الآفات لمعرفة مدي فعاليتها ومدي ملامتها .</div>
        </li>
        <li>
            <div class="descr">	عمل الأبحاث اللازمة لحماية المحاصيل العضوية من الآفات بعد الحصاد .</div>
        </li>
        <li>
            <div class="descr">	إيجاد البدائل المناسبة للمبيدات الكيماوية المستخدمة في الزراعة العادية .</div>
        </li>
        <li>
            <div class="descr">	إيجاد حلول تتماشي مع قانون الزراعة العضوية لان مشاكل آفات قد تظهر لأي من المحاصيل.</div>
        </li>
        <li>
            <div class="descr">	عمل أبحاث لحل مشكلات الأمراض التي تصيب المحاصيل المختلفة بالطرق المسموح بها في الزراعات العضوية حسب قوانين ( المحلية ) والدولية.</div>
        </li>
        <li>
            <div class="descr">	تقييم واختبار المركبات الحيوية المستخدمة في مقاومة الأمراض لمعرفة مدي فعاليتها ومدي ملامتها .</div>
        </li>
        <li>
            <div class="descr">	عمل الأبحاث اللازمة لحماية المحاصيل العضوية من الأمراض بعد الحصاد .</div>
        </li>
        <li>
            <div class="descr">	إيجاد البدائل المناسبة للمبيدات الكيماوية المستخدمة في الزراعة العادية .</div>
        </li>
        <li id="Department_Specializations_OL_Ar_Last_LI">
            <div class="descr">	إيجاد حلول تتماشي مع قانون الزراعة العضوية لان مشاكل آفات أو أمراض قد تظهر لأي من المحاصيل</div>
        </li>
    </ol>
`;
var Department_Specializations_Section_En = `
    <ol id="Department_Specializations_OL_En" style="direction: ltr;">
        <li>
            <div class="descr">Conduct research to solve pest control problems affecting various crops using methods
                permitted in organic farming according to national and international regulations.</div>
        </li>
        <li>
            <div class="descr">Evaluate and test biological compounds used in pest control to determine their
                effectiveness and suitability.</div>
        </li>
        <li>
            <div class="descr">Carry out necessary research to protect organic crops from pests after harvest.</div>
        </li>
        <li>
            <div class="descr">Identify suitable alternatives to chemical pesticides used in conventional
                agriculture.</div>
        </li>
        <li>
            <div class="descr">Develop solutions in line with organic agriculture laws to address potential pest
                problems in any crop.</div>
        </li>
        <li>
            <div class="descr">Conduct research to solve disease-related problems affecting various crops using
                methods permitted in organic farming according to national and international regulations.</div>
        </li>
        <li>
            <div class="descr">Evaluate and test biological compounds used in disease control to assess their
                effectiveness and compatibility.</div>
        </li>
        <li>
            <div class="descr">Carry out necessary research to protect organic crops from diseases after harvest.</div>
        </li>
        <li>
            <div class="descr">Identify appropriate alternatives to chemical pesticides used in conventional
                agriculture.</div>
        </li>
        <li id="Department_Specializations_OL_En_Last_LI">
            <div class="descr">Provide solutions consistent with organic agriculture regulations for pest or disease
                issues that may arise in any crop.</div>
        </li>
    </ol>
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
            <div class="descr">	إدارة مرض التبقع البنى الشيكولاتى في نباتات الفول باستخدام وسائل المكافحة البيولوجية</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٢</div>
            <div class="descr">	كفاءة بعض المعاملات الصديقة للبيئة في مكافحة نيماتودا تعقد الجذورعلى نباتات الموز.</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٣</div>
            <div class="descr">	زيادة فاعليه جزيئات أكسيد الزنك النانونية ZnONPs كمضــاد فطرى فى مقاومة مرض عفن جذور السمسم الناتج عن الإصابة بالفطرMacrophomina phaseolina (Tassi.) Goid. باستخدام مخلوط من فوق أكسيد الهيدروجين(H2O2) وحمض الخليك(AA).</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٤</div>
            <div class="descr">	فاعلية بعض المكافحة البيولوجية لمرض العفن الرمادي لثمار الفراوله</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٥</div>
            <div class="descr">	طرق ادارة مرض عفن جذور المريمية وانتاجيتها عن طريق المكافحة البيولوجية في ظل نظام الزراعة العضوية</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٦</div>
            <div class="descr">	التعرف على المورفولوجى الجزينى ومكافحة Erysiphe heraclei المسبب لمرض البياض الدقيقى فى الشبت باستخدام مبيد حيوى وزيوت عطرية واحماض عضوية</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٧</div>
            <div class="descr">	معاملات مابعد الحصاد بسوربات البوتاسيوم للسيطرة على أعفان فطرPenicillium spp. والحفاظ على جودة الرمان صنف "واندرفل" والتفاح صنف "آنا" أثناء التخزين البارد</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٨</div>
            <div class="descr">	النشاط المضاد للفطريات لمستحلبات الزيوت العطرية ومركباتها النشطة بيولوجيا والمكافحة البيولوجية لذبول الفيوزاريوم فى البردقوش</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٩</div>
            <div class="descr">	تثبيط مرض البياض الدقيقي عن طريق دمج عوامل المكافحة الحيوية وحمض الشيكيميك مع تعديل نظام الدفاع بمضاد للأكسدة ، والتوصيف التشريحي ، وتحسين إنتاجية نبات الكوسه</div>
        </li>
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">١٠</div>
            <div class="descr">	كفاءة المضادات الفطرية لثلاثة عزلات من الاستربتوميسس ضد مجموعة مختلفة من الفطريات الممرضة للنباتات</div>
        </li>
                <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">١١</div>
            <div class="descr">	تأثيربعض معاملات مابعدالحصاد على مرض الانثراكنوزالمصيب لثمارالمانجو</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">١٢</div>
            <div class="descr">	تأثير الرش بأملاح البوتاسيوم و بكتريا المكافحة الحيوية على النمو و المحصول وجودة الثمار كذلك مقاومة البياض الدقيقى فى الفلفل</div>
        </li>
    </ul>
`;
var Research_Publications_Section_En = `
    <ul id="Research_Publications_UL_En" style="direction: ltr;">
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">1</div>
            <div class="descr">Efficiency of Some Eco-Friendly Treatments for controlling Root-Knot Nematodes on Banana Plants</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">2</div>
            <div class="descr">Enhancement antifingal activitiy of zinc oxide nanoparticles (ZnONPs) and sesame resistance against root rot caused by Macrophomina phaseolina (tassi.) Goid., using mixture of hydrogen peroxide (H2O2) and acetic acid.</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">3</div>
            <div class="descr">Efficacy of Some Biological Control Treatments on Gery Mold Disease (Botrytis cinerea) Of Strawberry Fruits</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">4</div>
            <div class="descr">Management Approaches of Sage Root Rot Disease and Plant Productivity by Biological Control under Organic Farming System.</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">5</div>
            <div class="descr">Management Approaches of Sage Root Rot Disease and Plant Productivity by Biological Control under Organic Farming System.</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">6</div>
            <div class="descr">Management of Chocolate Spot Disease In Faba bean Plants by using Biological Control Means.</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">7</div>
            <div class="descr">Morpho – Molecular Identification And Management  Of Erysiphe heraclei Dill Powdery Mildew Using A Biocide, Essential Oils, And Organic Acids</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">8</div>
            <div class="descr">Antifungal Activity Of Essential Oils Emulsions, Their Bioactive Compounds, And Biological Control Of Fusarium wilt Of Majorana hortensis</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">9</div>
            <div class="descr">Mitigation Of Powdery Mildew Disease By Integrating Biocontrol Agents And Shikimic Acid With Modulation of Antioxidant Defense System, Anatomical Characterization, And Improvement of Squash Plant Productivity</div>
        </li>
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">10</div>
            <div class="descr">Efficacy of antifungal substances of three Streptomyces spp. against different plant pathogenic fungi.</div>
        </li>
                <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">11</div>
            <div class="descr">Effect of certain postharvest treatments on the anthracnose disease infecting mango fruit</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">12</div>
            <div class="descr">Impact of spraying potassium saltsand  bacterial  bioagents on growth, yield and fruit quality as well as  powdery mildew disease control of pepper.</div>
        </li>
    </ul>
`;

var Departement_Hirarchy_Section_Ar = `
<img style="width: 100%;" src="../Images/Research Departements/Arabic Hirarchy/Pest_Control_Hirarchy.jpeg" alt="">
`;
var Departement_Hirarchy_Section_En = `
<img style="width: 100%;" src="../Images/Research Departements/English Hirarchy/Pest_Control_Hirarchy-Picsart-AiImageEnhancer.png" alt="">
`;

function Pest_Control_Dep_Load_Content_Ar() {
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
function Pest_Control_Dep_Load_Content_En() {
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
  Pest_Control_Dep_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Pest_Control_Dep_Load_Content_Ar();
}
