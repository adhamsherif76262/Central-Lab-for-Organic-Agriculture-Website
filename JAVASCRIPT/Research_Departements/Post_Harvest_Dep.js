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
    <article id="Department_Specializations_Container_Article_Ar">
        <div id="Department_Specializations_Container_Div_Ar_Wide">
            <ul class="ul-circles">
                <li style="--accent-color:#D3302C; padding-top: 110px; margin-bottom: 100px;">إيجاد بدائل
                    للغازات التي تستخدم في تطهير المخازن لاستخدامها في الزراعة العضوية </li>
                <li style="--accent-color:#F3A22D; padding-top: 75px;">إيجاد بدائل للمركبات الكيماوية
                    والغازات مثل ثاني أكسيد الكبريت والذي يستخدم في المحاصيل العادية لحامية المحاصيل العضوية
                    بعد الحصاد </li>
                <li style="--accent-color:#495460; padding-top: 110px; margin-bottom: 100px;">عمل النشرات
                    الدورية لإرشاد المزارعين والشركات عن الطرق لمتبعة لحماية المحاصيل ما بعد الحصاد </li>
                <li style="--accent-color:#D3302C; padding-top: 125px;">العمليات الحقلية التي تساعد في حماية
                    المنتجات الزراعية بعد الحصاد</li>
                <li style="--accent-color:#F3A22D; padding-top: 125px;">مكافحة آفات المخازن بالطرق الغير
                    كيماوية </li>
                <li style="--accent-color:#495460; padding-top: 125px;">دراسات على الجو المعدل ودرجات حرارة
                    التخزين لا طالة عمر المحاصيل بعد الحصاد </li>
            </ul>
        </div>
        <div id="Department_Specializations_Container_Div_Ar_Narrow">
            <ul class="ul-circles ul-circles-vertical">
                <li class="Padd_Top_110" style="--accent-color:#D3302C;">إيجاد بدائل للغازات التي تستخدم في
                    تطهير المخازن لاستخدامها في الزراعة العضوية </li>
                <li class="Padd_Top_75" style="--accent-color:#F3A22D;">إيجاد بدائل للمركبات الكيماوية
                    والغازات مثل ثاني أكسيد الكبريت والذي يستخدم في المحاصيل العادية لحامية المحاصيل العضوية
                    بعد الحصاد </li>
                <li class="Padd_Top_110" style="--accent-color:#495460;">عمل النشرات الدورية لإرشاد
                    المزارعين والشركات عن الطرق لمتبعة لحماية المحاصيل ما بعد الحصاد </li>
                <li class="Padd_Top_125" style="--accent-color:#D3302C;">العمليات الحقلية التي تساعد في
                    حماية المنتجات الزراعية بعد الحصاد</li>
                <li class="Padd_Top_125" style="--accent-color:#F3A22D;">مكافحة آفات المخازن بالطرق الغير
                    كيماوية </li>
                <li class="Padd_Top_125" style="--accent-color:#495460;">دراسات على الجو المعدل ودرجات حرارة
                    التخزين لا طالة عمر المحاصيل بعد الحصاد </li>
            </ul>
        </div>
    </article>
`;
var Department_Specializations_Section_En = `
    <article id="Department_Specializations_Container_Article_En">
        <div id="Department_Specializations_Container_Div_En_Wide">
            <ul class="ul-circles">
                <li style="--accent-color:#D3302C; padding-top: 100px; margin-bottom: 50px;">Identify alternatives to gases used in warehouse fumigation that
                    are suitable for organic agriculture.</li>
                <li style="--accent-color:#F3A22D; padding-top: 50px;">Find substitutes for chemical compounds and gases such as sulfur
                    dioxide, which are commonly used in conventional crops, to protect organic crops after harvest.
                </li>
                <li style="--accent-color:#495460; padding-top: 100px; margin-bottom: 50px;">Prepare periodic bulletins to guide farmers and companies on
                    proper post-harvest protection methods.</li>
                <li style="--accent-color:#D3302C; padding-top: 75px;">Implement field operations that contribute to the protection of
                    agricultural products after harvest.</li>
                <li style="--accent-color:#F3A22D; padding-top: 125px;">Control storage pests using non-chemical methods.</li>
                <li style="--accent-color:#495460; padding-top: 75px;">Conduct studies on modified atmosphere and storage temperatures
                    to extend the shelf life of crops after harvest.</li>
            </ul>
        </div>
        <div id="Department_Specializations_Container_Div_En_Narrow">
            <ul class="ul-circles ul-circles-vertical">
                <li class="Padd_Top_100" style="--accent-color:#D3302C">Identify alternatives to gases used in warehouse fumigation that
                    are suitable for organic agriculture.</li>
                <li class="Padd_Top_50" style="--accent-color:#F3A22D">Find substitutes for chemical compounds and gases such as sulfur
                    dioxide, which are commonly used in conventional crops, to protect organic crops after harvest.</li>
                <li class="Padd_Top_100" style="--accent-color:#495460">Prepare periodic bulletins to guide farmers and companies on
                    proper post-harvest protection methods.</li>
                <li class="Padd_Top_75" style="--accent-color:#D3302C">Implement field operations that contribute to the protection of
                    agricultural products after harvest.</li>
                <li class="Padd_Top_125" style="--accent-color:#F3A22D">Control storage pests using non-chemical methods.</li>
                <li class="Padd_Top_75" style="--accent-color:#495460">Conduct studies on modified atmosphere and storage temperatures
                    to extend the shelf life of crops after harvest.</li>
            </ul>
        </div>
    </article>
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
            <div class="descr">	تحسين الانتاجية والانتاجية المائية لليمون بإستخدام التجفيف الجزئي للجذور وإضافة البيوشار</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٢</div>
            <div class="descr">	تأثيربعض المنشطات الحيوية على تساقط وجودة ثمارالمانجو</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٣</div>
            <div class="descr">	دراسات كيموحيوية وجزيئية على بعض العزلات الميكروبية المحللة للكيتين فى مقاومة نوع الميليدوجين فى نبات الفلفل  (رسالة دكتوراة)</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٤</div>
            <div class="descr">	تحسين خصائص الجودة والقدرة على مقاومة مرض العفن الرمادي المسبب لعفن ثمار الفراوله باستخدام عوامل غير حيوية.</div>
        </li>
    </ul>
`;
var Research_Publications_Section_En = `
    <ul id="Research_Publications_UL_En" style="direction: ltr;">
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">1</div>
            <div class="descr">Enhancing the Productivity and Water Productivity of Lemon Using Partial Root Drying and Adding Biochar</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">2</div>
            <div class="descr">Effect of Some Biostimulants on Mango Fruit Drop and Quality</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">3</div>
            <div class="descr">Biochemical and Molecular Studies on Some Chitinolytic Microbial Isolates in Controlling Meloidogyne sp. in Pepper Plan</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">4</div>
            <div class="descr">Enhancing Quality Characteristics and Controlling Gray Mold Disease Caused by Botrytis cinerea In Strawberries Fruits Using Various Edible Abiotic Coatings</div>
        </li>
    </ul>
`;

var Departement_Hirarchy_Section_Ar = `
<img style="width: 100%;" src="../Images/Research Departements/Arabic Hirarchy/Final/Enhanced/Post_Harvest_Hirarchy_Ar-Picsart-AiImageEnhancer.jpg" alt="">
`;
var Departement_Hirarchy_Section_En = `
<img style="width: 100%;" src="../Images/Research Departements/English Hirarchy/Final/Enhanced/Post_Harvest_Hirarchy_En-Picsart-AiImageEnhancer.jpg" alt="">
`;

function Post_Harvest_Dep_Load_Content_Ar() {
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
function Post_Harvest_Dep_Load_Content_En() {
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
  Post_Harvest_Dep_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Post_Harvest_Dep_Load_Content_Ar();
}
