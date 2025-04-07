var Research_Departements_Section = document.getElementById("Research_Departements_Section");

var Research_Departements_Section_Ar = `
    <section id="Research_Departements_Section_Ar">
        <ul>
            <li class="card" style="--color:#ececec; --bg-color:#E98B43">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <a href="../HTML/Soil_Fertility_Dep.html">
                    <div class="title">قسم بحوث خصوبة التربة وتغذية النباتات العضوية </div>
                    <div class="content"></div> 
                </a>
            </li>
            <li class="card" style="--color:#ececec; --bg-color:#C23D2A">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <a href="../HTML/Pest_Control_Dep.html">
                    <div class="title">قسم مـكـافـحـة الآفــــات و بـحـوث مـقـاومـة الأمـراض العضويـة</div>
                    <div class="content"></div> 
                </a>
            </li>
            <li class="card" style="--color:#ececec; --bg-color:#842C2A">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <a href="../HTML/Post_Harvest_Dep.html">
                    <div class="title">قسم بحوث معاملات ما بعد الحصاد </div>
                    <div class="content"></div> 
                </a>
            </li>
            <li class="card" style="--color:#ececec; --bg-color:#022F46">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></i></div>
                <a href="../HTML/Agricultural_Practices_Dep.html">
                    <div class="title">قسم بحوث المعاملات الزراعية للإنتاج العضوي وتربية النباتات </div>
                    <div class="content"></div> 
                </a>
            </li>
            <li class="card" style="--color:#ececec; --bg-color:#032437">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <a href="../HTML/OA_Economics_Extension_Dep.html">
                    <div class="title"> قسم بحوث الاقتصاد والإرشاد الزراعة العضوية </div>
                    <div class="content"></div> 
                </a>
            </li>
        </ul>
    </section>
`;
var Research_Departements_Section_En = `
    <section id="Research_Departements_Section_En">
        <ul>
            <li class="card" style="--color:#ececec; --bg-color:#E98B43">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <a href="../HTML/Soil_Fertility_Dep.html">
                    <div class="title">Soil Fertility and Organic Plant Nutrition Research Department </div>
                    <div class="content"></div> 
                </a>
            </li>
            <li class="card" style="--color:#ececec; --bg-color:#C23D2A">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <a href="../HTML/Pest_Control_Dep.html">
                    <div class="title">Pest Control and Organic Disease Resistance Research Department </div>
                    <div class="content"></div> 
                </a>
            </li>
            <li class="card" style="--color:#ececec; --bg-color:#842C2A">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <a href="../HTML/Post_Harvest_Dep.html">
                    <div class="title">Post-Harvest Treatment Research Department </div>
                    <div class="content"></div>
                </a>
            </li>
            <li class="card" style="--color:#ececec; --bg-color:#022F46">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></i></div>
                <a href="../HTML/Agricultural_Practices_Dep.html">
                    <div class="title">Agricultural Practices for Organic Production and Plant Breeding Research Department </div>
                    <div class="content"></div>
                </a>
            </li>
            <li class="card" style="--color:#ececec; --bg-color:#032437">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <a href="../HTML/OA_Economics_Extension_Dep.html">
                    <div class="title">Organic Agriculture Economics and Extension Research Department </div>
                    <div class="content"></div> 
                </a>
            </li>
        </ul>
    </section> 
`;

function Research_Departements_Load_Content_Ar() {
  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });

  Research_Departements_Section.innerHTML = Research_Departements_Section_Ar;

}
function Research_Departements_Load_Content_En() {
  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });
    Research_Departements_Section.innerHTML = Research_Departements_Section_En;

}
if (localStorage.getItem("Permenant_Language") === "English") {
  Research_Departements_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Research_Departements_Load_Content_Ar();
}
