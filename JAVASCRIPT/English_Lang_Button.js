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
      Patents_Load_Content_En();
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
      console.log("Previous_Presidents_Load_Content_En called");
      break;

    case location.href.includes("/Institute_Branches") ||
      location.href.includes("/institute_branches"):
      Page_Title.innerHTML = "AERI Institute Branches Page";
      Institute_Branches_Load_Content_En();
      break;

    case location.href.includes("/Research_Projects") ||
      location.href.includes("/research_projects"):
      console.log("Heloo from Research Projects ENG");
      Page_Title.innerHTML = "AERI Research Projects Page";
      Research_Projects_Load_Content_En();
      break;

    case location.href.includes("/Overview") ||
      location.href.includes("/overview"):
      console.log("Heloo from Overview ENG");
      Page_Title.innerHTML = "AERI Overview Page";
      Overview_Load_Content_En();
      break;

    case location.href.includes("/Agricultural_Mechanization_OS") ||
      location.href.includes("/agricultural_mechanization_os"):
      console.log("Heloo from Agricultural_Mechanization_OS_Page ENG");
      Page_Title.innerHTML = "AERI AMOS Page";
      Agricultural_Mechanization_OS_Load_Content_En();
      break;

    case location.href.includes("/Agricultural_Power_Energy") ||
      location.href.includes("/agricultural_power_energy"):
      console.log(
        "Heloo from Agricultural_Power_Energy_Page En" +
          Agricultural_Power_Energy_Page_Title
      );
      Page_Title.innerHTML = "AERI Agricultural Power & Energy Page";
      Agricultural_Power_Energy_Load_Content_En();
      break;

    case location.href.includes("/Animal_Production_Mechanization") ||
      location.href.includes("/animal_production_mechanization"):
      console.log(
        "Heloo from Animal_Production_Mechanization En" +
          Animal_Production_Mechanization_Page_Title
      );
      Page_Title.innerHTML = "AERI Animal Production & Mechanization Page";
      Animal_Production_Mechanization_Load_Content_En();
      break;

    case location.href.includes("/Biological_Engineering") ||
      location.href.includes("/biological_engineering"):
      console.log(
        "Heloo from Biological_Engineering En" +
          Biological_Engineering_Page_Title
      );
      Page_Title.innerHTML = "AERI Biological Engineering";
      Biological_Engineering_Load_Content_En();
      break;

    case location.href.includes("/Handling_Processing_D") ||
      location.href.includes("/handling_processing_d"):
      console.log(
        "Heloo from Handling_Processing_D Ar" + Handling_Processing_D_Page_Title
      );
      Page_Title.innerHTML = "AERI Crop Handling & Processing Page";
      Handling_Processing_D_Load_Content_En();
      break;

    case location.href.includes("/Irrigation_Engineering_RD") ||
      location.href.includes("/irrigation_engineering_rd"):
      console.log(
        "Heloo from Irrigation Engineering RD En" +
          Irrigation_Engineering_RD_Page_Title
      );
      Page_Title.innerHTML = "AERI Irrigation Engineering Research Page";
      Irrigation_Engineering_RD_Load_Content_En();
      break;

    case location.href.includes("/Rice_Mechanization_Center") ||
      location.href.includes("/rice_mechanization_center"):
      console.log(
        "Heloo from Rice Mechanization Center En" +
          Rice_Mechanization_Center_Page_Title
      );
      Page_Title.innerHTML = "AERI Rice Mechanization Center Page";
      Rice_Mechanization_Center_Load_Content_En();
      break;

    case location.href.includes("/Testing_Reasearch_Station") ||
      location.href.includes("/testing_reasearch_station"):
      console.log(
        "Heloo from Testing Reasearch Station En" +
          Testing_Reasearch_Station_Page_Title
      );
      Page_Title.innerHTML =
        "AERI Testing & Reasearch Station For Tractor & Farm Machinery Page";
      Testing_Reasearch_Station_Load_Content_En();
      break;

    default:
      console.log("Heloo from Home ENG");
      Page_Title.innerHTML = "Home";
      Home_Load_Content_En();
      break;
  }
}
