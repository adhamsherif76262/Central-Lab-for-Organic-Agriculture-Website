var Department_Specializations_H2 = document.getElementById("Department_Specializations_H2");
var Department_Specializations_Section = document.getElementById("Department_Specializations_Section");
var Research_Publications_H2 = document.getElementById("Research_Publications_H2");
var Research_Publications_Section = document.getElementById("Research_Publications_Section");
var Departement_Hirarchy_H2 = document.getElementById("Departement_Hirarchy_H2");
var Departement_Hirarchy_Section = document.getElementById("Departement_Hirarchy_Section");

var Department_Specializations_H2_Ar = `
اخــتـصـاصــات القسم
`;
var Department_Specializations_H2_En = `
Department Specializations
`;
var Department_Specializations_Section_Ar = `
    <ol id="Department_Specializations_OL_Ar">
        <li style="--accent-color:#0D6EFD">
            <div class="icon"></div>
            <div class="descr">	إجراء أبحاث لحل مشاكل خصوبة التربة وتغذية النباتات بالطرق المسموح بها في الزراعات العضوية.</div>
        </li>
        <li style="--accent-color:#6710F5">
            <div class="icon"></div>
            <div class="descr">	عمل تحليل وتقييم لمواد خصوبة التربة والأسمدة الموجودة بالأسواق وإعطائها شهادة إجازة للاستخدام في المزارع العضوية مع ذكر نسب المادة المغذية في كل مركب حتى يمكن حساب احتياجات المحاصيل المختلفة من العناصر المختلفة.</div>
        </li>
        <li style="--accent-color:#6F42C1">
            <div class="icon"></div>
            <div class="descr">	عمل النشرات اللازمة عن الاحتياجات السمادية للمحاصيل المختلفة من المصادر العضوية.</div>
        </li>
        <li style="--accent-color:#D63384">
            <div class="icon"></div>
            <div class="descr">	عمل نشرات لعمل الكمبوست وتدوير المخلفات .</div>
        </li>
        <li style="--accent-color:#DC3545">
            <div class="icon"></div>
            <div class="descr">	عمل الأبحاث اللازمة لحل أي مشكلات قد تظهر في مجال خصوبة التربة وتغذية النباتات في المزارع العضوية.</div>
        </li>
        <li style="--accent-color:#0D6EFD">
            <div class="icon"></div>
            <div class="descr">	إجراء الأبحاث الخاصة بتدوير المخلفات الزراعية وإنتاج الكمبوست والفيرميكمبوست .</div>
        </li>
        <li style="--accent-color:#6710F5">
            <div class="icon"></div>
            <div class="descr">	أجراء دراسات علي الكمبوست الميكروبي الموجه .</div>
        </li>
        <li style="--accent-color:#6F42C1">
            <div class="icon"></div>
            <div class="descr">	دراسات وبحوث لحل مشاكل وإنتاج وتصنيع الكمبوست والفيرميكمبوست .</div>
        </li>
        <li style="--accent-color:#D63384">
            <div class="icon"></div>
            <div class="descr">	دراسات علي معدلات إضافة الكمبوست .</div>
        </li>
        <li style="--accent-color:#DC3545">
            <div class="icon"></div>
            <div class="descr">	دراسات على أنواع الكمبوست سواء كان ( حيواني – نباتي – حيواني نباتي ) ومعدلات استخدامه حسب نوع الأرض والنبات وتحليل الكمبوست .</div>
        </li>
        <li style="--accent-color:#0D6EFD">
            <div class="icon"></div>
            <div class="descr">	عمل نشرات إرشادية لطرق تصنيع الكمبوست .</div>
        </li>
    </ol>
`;
var Department_Specializations_Section_En = `
    <ol id="Department_Specializations_OL_En">
                <li style="--accent-color:#0D6EFD">
                    <div class="icon"></div>
                    <div class="descr">Conduct research to solve soil fertility and plant nutrition problems using
                        methods permitted in organic farming.</div>
                </li>
                <li style="--accent-color:#6710F5">
                    <div class="icon"></div>
                    <div class="descr">Analyze and evaluate soil fertility materials and fertilizers available in
                        the market, and issue approval certificates for their use in organic farms, specifying the
                        nutrient content in each compound to help calculate crop requirements for various nutrients.</div>
                </li>
                <li style="--accent-color:#6F42C1">
                    <div class="icon"></div>
                    <div class="descr">Prepare bulletins on the fertilization requirements of different crops from
                        organic sources.</div>
                </li>
                <li style="--accent-color:#D63384">
                    <div class="icon"></div>
                    <div class="descr">Prepare guides on compost production and waste recycling.</div>
                </li>
                <li style="--accent-color:#DC3545">
                    <div class="icon"></div>
                    <div class="descr">Conduct necessary research to solve any problems that may arise in the field
                        of soil fertility and plant nutrition in organic farms.</div>
                </li>
                <li style="--accent-color:#0D6EFD">
                    <div class="icon"></div>
                    <div class="descr">Conduct research on agricultural waste recycling and the production of
                        compost and vermicompost.</div>
                </li>
                <li style="--accent-color:#6710F5">
                    <div class="icon"></div>
                    <div class="descr">Conduct studies on targeted microbial compost.</div>
                </li>
                <li style="--accent-color:#6F42C1">
                    <div class="icon"></div>
                    <div class="descr">Research and studies to address issues related to the production and
                        processing of compost and vermicompost.</div>
                </li>
                <li style="--accent-color:#D63384">
                    <div class="icon"></div>
                    <div class="descr">Studies on compost application rates.</div>
                </li>
                <li style="--accent-color:#DC3545">
                    <div class="icon"></div>
                    <div class="descr">Studies on compost types (animal – plant – mixed) and their usage rates based
                        on soil and plant type, including compost analysis.</div>
                </li>
                <li style="--accent-color:#0D6EFD">
                    <div class="icon"></div>
                    <div class="descr">Prepare extension bulletins on compost production methods.</div>
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
            <div class="descr"> تكامل بعض المركبات الحيوية مع شاى الكمبوست لانتاج الذرة السكرية بدون اسمدة معدنية
            </div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٢</div>
            <div class="descr"> تأثير ميعاد الزراعة وبعض المستخلصات العضوية على الانتاج العضوى للذرة السكرية</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٣</div>
            <div class="descr"> كفاءة مركبات البوتاسيوم والكالسيوم فى تركيبة الجل على مكافحة اللفحة المبكرة وتحسين
                إنتاجية نباتات البطاطس</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٤</div>
            <div class="descr"> إنتاج البسلة بدون إستخدام الأسمدة الكيماوية عن طريق تكامل المخصبات الحيوية مع راشح
                الفيرميكمبوست</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٥</div>
            <div class="descr"> تحسين الإنتاج العضوى لأبوركبة باستخدام مستخلص الطحالب والتسميد الحيوى</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٦</div>
            <div class="descr"> تطبيقات الزراعة العضوية لزيادة إنتاجية بعض المحاصيل الخضر (رسالة دكتوراة)</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٧</div>
            <div class="descr"> الاستفادة من الميكورهيزا والخميرة لإنتاج الكرنب الأحمر.</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٨</div>
            <div class="descr"> دراسة حول استخدام بعض المركبات لتقليل الاثار الضارة لملوحة التربة علي نخيل البلح
                السكوتى تحت ظروف مصر العليا</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">٩</div>
            <div class="descr"> استجابة اشجار الرمان المنفلوطى للرش بمصادر مختلفة من الكالسيوم</div>
        </li>
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">١٠</div>
            <div class="descr"> تقليل التأثير الضار لمستويات مختلفة من الملوحه باستخدام بعض الطرق العضوية على شتلات
                الرمان صنف الوندرفل</div>
        </li>
    </ul>
`;
var Research_Publications_Section_En = `
    <ul id="Research_Publications_UL_En" style="direction: ltr;">
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">1</div>
            <div class="descr">Integration of some bio compounds with compost tea to produce sweet corn without
                mineral fertilizers</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">2</div>
            <div class="descr">Effect of sowing date and some organic extracts on organic production of sweet corn
            </div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">3</div>
            <div class="descr">Efficiency of potassium and calcium compounds in gel formula to control early blight
                disease, improve productivity, and shelf life of potato</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">4</div>
            <div class="descr">Production of pea without chemical fertilizers via integrating biofertilizers with
                vermiwash</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">5</div>
            <div class="descr">Enhancing the organic production of kohlrabi using algae extract and biofertilizer
            </div>
        </li>
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">6</div>
            <div class="descr">Applications of organic farming for increasing of some vegetable crops productivity
            </div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">7</div>
            <div class="descr">Utilization of mycorrhiza and yeast for producing red cabbage</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">8</div>
            <div class="descr">Study on using some composites to reduce the adverse effects of soil salinity on
                Sakkoti date palms under Upper Egypt conditions</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">9</div>
            <div class="descr">Response of Manfalouty pomegranate trees to foliar spray with different sources of
                calcium</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">10</div>
            <div class="descr">Alleviating the harmful impact of salinity stress with different levels by using some
                organic techniques on vegetative growth characteristics of Wonderful cv. Pomegranate transplants
            </div>
        </li>
    </ul>
`;

var Departement_Hirarchy_Section_Ar = `
<img style="width: 100%;" src="../Images/Research Departements/Arabic Hirarchy/Soil_Fertility_Hirarchy.jpeg" alt="">
`;
var Departement_Hirarchy_Section_En = `
<img style="width: 100%;" src="../Images/Research Departements/English Hirarchy/Soil_Fertility_Hirarchy-Picsart-AiImageEnhancer.png" alt="">
`;


function Soil_Fertility_Dep_Load_Content_Ar() {
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
function Soil_Fertility_Dep_Load_Content_En() {
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
  Soil_Fertility_Dep_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Soil_Fertility_Dep_Load_Content_Ar();
}
