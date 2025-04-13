function Switch_NavBar_Lang_En() {
//   Page_Title.setAttribute("lang", "en");
//   Ar_Nav.classList.add("D_None");
//   En_Nav.classList.remove("D_None");
  Navigation_Bar_Section.innerHTML = Navigation_Bar_Section_En;
}
function Switch_Footer_Lang_En() {
  Footer_Section.innerHTML = Footer_Section_En;
  // Main_Footer[0].innerHTML = En_FooterTemplate;
}
// async function Store_Encrypted_Lang_En() {
//   const EncryptedData = await encryptData(password, "English");
//   localStorage.setItem("Permenant_Language", JSON.stringify(EncryptedData));
// }
function LangBtnEnClick() {
  console.log("onclick=LangBtnEnClick()");

  localStorage.setItem("Permenant_Language", "English");
    if (
      location.href.includes("/Previous_Presidents") ||
      location.href.includes("/previous_presidents")
    ) {
      location.reload();
    }
  console.log(
    "The Language Now is :: " + localStorage.getItem("Permenant_Language")
  );
  // Store_Encrypted_Lang_En();
  Switch_Footer_Lang_En();
  Switch_NavBar_Lang_En();

  switch (true) {
    case location.href.includes("/Insights_Resources") ||
      location.href.includes("/insights_resources"):
      Page_Title.innerHTML = "Insights & Events";
      Insights_Resources_Load_Content_En();
      break;
    case location.href.includes("/Research_Departements") ||
      location.href.includes("/research_departements"):
      Page_Title.innerHTML = "Research Departements";
      Research_Departements_Load_Content_En();
      break;

    case location.href.includes("/Collaborations") ||
      location.href.includes("/collaborations"):
      Collaborations_Load_Content_En();
      Page_Title.innerHTML = "Collaborations";
      break;
    case location.href.includes("/Main_Services") ||
      location.href.includes("/main_services"):
      Page_Title.innerHTML = "Services";
      Services_Load_Content_En();
      break;

    case location.href.includes("/Services_Product_1") ||
      location.href.includes("/services_product_1"):
      Page_Title.innerHTML = "Product 1";
      Services_Product_1_Load_Content_En();
      break;

    case location.href.includes("/Services_Product_2") ||
      location.href.includes("/services_product_2"):
      Page_Title.innerHTML = "Product 2";
      Services_Product_2_Load_Content_En();
      break;

    case location.href.includes("/Previous_Presidents") ||
      location.href.includes("/previous_presidents"):
      Page_Title.innerHTML = "Previous Presidents";
      Previous_Presidents_Load_Content_En();
      break;

    case location.href.includes("/Soil_Fertility_Dep") ||
      location.href.includes("/soil_fertility_dep"):
      Page_Title.innerHTML = "Soil Fertility and Organic Plant Nutrition";
      Soil_Fertility_Dep_Load_Content_En();
      break;

    case location.href.includes("/Pest_Control_Dep") ||
      location.href.includes("/pest_control_dep"):
      Page_Title.innerHTML = "Pest Control and Organic Disease Resistance";
      Pest_Control_Dep_Load_Content_En();
      break;

    case location.href.includes("/Post_Harvest_Dep") ||
      location.href.includes("/post_harvest_dep"):
      Page_Title.innerHTML = "Post Harvest Treatment";
      Overview_Load_Content_En();
      break;

    case location.href.includes("/Agricultural_Practices_Dep") ||
      location.href.includes("/agricultural_practices_dep"):
      Page_Title.innerHTML = "Agricultural Practices for Organic Production and Plant Breeding";
      Agricultural_Mechanization_OS_Load_Content_En();
      break;

    case location.href.includes("/OA_Economics_Extension_Dep") ||
      location.href.includes("/oa_economics_extension_dep"):
      Page_Title.innerHTML = "Organic Agriculture Economics and Extension";
      OA_Economics_Extension_Dep_Load_Content_En();
      break;

    case location.href.includes("/OA_General_Administration") ||
      location.href.includes("/oa_general_administration"):
      Page_Title.innerHTML = "The General Administration of Organic Agriculture Research Department";
      Agricultural_Power_Energy_Load_Content_En();
      break;

    default:
      console.log("Heloo from Home ENG");
      Page_Title.innerHTML = "Home";
      Home_Load_Content_En();
      break;
  }
}
