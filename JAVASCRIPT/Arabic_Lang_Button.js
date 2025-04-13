function Switch_NavBar_Lang_Ar() {
//   Page_Title.setAttribute("lang", "ar");
//   En_Nav.classList.add("D_None");
//   Ar_Nav.classList.remove("D_None");
  Navigation_Bar_Section.innerHTML = Navigation_Bar_Section_Ar;
}
function Switch_Footer_Lang_Ar() {
  Footer_Section.innerHTML = Footer_Section_Ar;
  // Main_Footer[0].innerHTML = Ar_FooterTemplate;
}
// async function Store_Encrypted_Lang_Ar() {
//   const EncryptedData = await encryptData(password, "عربي");
//   localStorage.setItem("Permenant_Language", JSON.stringify(EncryptedData));
// }
function LangBtnArClick() {
  console.log("onclick=LangBtnArClick()");
  // Store_Encrypted_Lang_Ar();
  localStorage.setItem("Permenant_Language", "عربي");
  if(location.href.includes("/Previous_Presidents") ||
      location.href.includes("/previous_presidents")){
        location.reload();
  }
  console.log(
    "The Language Now is :: " + localStorage.getItem("Permenant_Language")
  );

  // Get_Decrypted_Language().then(Decrypted_Lang_Value=>{
  //   console.log("The Language Now is :: " + Decrypted_Lang_Value);

  //   });

  Switch_NavBar_Lang_Ar();
  Switch_Footer_Lang_Ar();

  switch (true) {
    case location.href.includes("/Insights_Resources") ||
      location.href.includes("/insights_resources"):
      Page_Title.innerHTML = "رؤي و أحداث";
      Insights_Resources_Load_Content_Ar();
      break;

    case location.href.includes("/Research_Departements") ||
      location.href.includes("/research_departements"):
      Page_Title.innerHTML = "الأقسام البحثية";
      Research_Departements_Load_Content_Ar();
      break;

    case location.href.includes("/Collaborations") ||
      location.href.includes("/collaborations"):
      Collaborations_Load_Content_Ar();
      Page_Title.innerHTML = "التعاونات";
      break;

    case location.href.includes("/Main_Services") ||
      location.href.includes("/main_services"):
      Page_Title.innerHTML = "الخدمات";
      Services_Load_Content_Ar();
      break;

    case location.href.includes("/Services_Product_1") ||
      location.href.includes("/services_product_1"):
      Page_Title.innerHTML = "منتج 1";
      Services_Product_1_Load_Content_Ar();
      break;

    case location.href.includes("/Services_Product_2") ||
      location.href.includes("/services_product_2"):
      Page_Title.innerHTML = "منتج 2";
      Services_Product_2_Load_Content_Ar();
      break;

    case location.href.includes("/Previous_Presidents") ||
      location.href.includes("/previous_presidents"):
      Page_Title.innerHTML = "المديرين السابقين";
      Previous_Presidents_Load_Content_Ar();
      break;

    case location.href.includes("/Soil_Fertility_Dep") ||
      location.href.includes("/soil_fertility_dep"):
      Page_Title.innerHTML = "بحوث خصوبة التربة وتغذية النباتات العضوية";
      Soil_Fertility_Dep_Load_Content_Ar();
      break;

    case location.href.includes("/Pest_Control_Dep") ||
      location.href.includes("/pest_control_dep"):
      Page_Title.innerHTML = "مـكـافـحـة الآفـات و بـحـوث مـقاومـة الأمـراض العضويـة";
      Pest_Control_Dep_Load_Content_Ar();
      break;

    case location.href.includes("/Post_Harvest_Dep") ||
      location.href.includes("/post_harvest_dep"):
      Page_Title.innerHTML = "بحوث معاملات ما بعد الحصاد";
      Post_Harvest_Dep_Load_Content_Ar();
      break;

    case location.href.includes("/Agricultural_Practices_Dep") ||
      location.href.includes("/agricultural_practices_dep"):
      Page_Title.innerHTML = "بحوث المعاملات الزراعية للإنتاج العضوي وتربية النباتات";
      Agricultural_Mechanization_OS_Load_Content_Ar();
      break;

    case location.href.includes("/OA_Economics_Extension_Dep") ||
      location.href.includes("/oa_economics_extension_dep"):
      Page_Title.innerHTML = "بحوث الاقتصاد والإرشاد الزراعة العضوية";
      OA_Economics_Extension_Dep_Load_Content_Ar();
      break;

    case location.href.includes("/OA_General_Administration") ||
      location.href.includes("/oa_general_administration"):
      Page_Title.innerHTML = "الإدارة العامة للزراعة العضوية";
      Agricultural_Power_Energy_Load_Content_Ar();
      break;

    default:
      console.log("Heloo from Home AR");
      Page_Title.innerHTML = "الرئيسية";
      Home_Load_Content_Ar();
      break;
  }
}
