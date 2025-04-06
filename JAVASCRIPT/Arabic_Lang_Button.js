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
      Patents_Load_Content_Ar();
      break;

    case location.href.includes("/Collaborations") ||
      location.href.includes("/collaborations"):
      Contact_Load_Content_Ar();
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
      console.log("Previous_Presidents_Load_Content_Ar called");
      break;

    case location.href.includes("/Institute_Branches") ||
      location.href.includes("/institute_branches"):
      console.log(
        "Heloo from Institute Branches AR" + Institute_Branches_Title
      );
      Page_Title.innerHTML = "فروع المعهد";
      Institute_Branches_Load_Content_Ar();
      break;

    case location.href.includes("/Research_Projects") ||
      location.href.includes("/research_projects"):
      console.log("Heloo from Research Projects AR" + Research_ProjectsTitle);
      Page_Title.innerHTML = "مشاريع بحثية";
      Research_Projects_Load_Content_Ar();
      break;

    case location.href.includes("/Overview") ||
      location.href.includes("/overview"):
      console.log("Heloo from Overview AR" + Overview_Title);
      Page_Title.innerHTML = "نبذة";
      Overview_Load_Content_Ar();
      break;

    case location.href.includes("/Agricultural_Mechanization_OS") ||
      location.href.includes("/agricultural_mechanization_os"):
      console.log(
        "Heloo from Agricultural_Mechanization_OS_Page AR" +
          Agricultural_Mechanization_OS_Page_Title
      );
      Page_Title.innerHTML = "نظم ميكنة العمليات الزراعية";
      Agricultural_Mechanization_OS_Load_Content_Ar();
      break;

    case location.href.includes("/Agricultural_Power_Energy") ||
      location.href.includes("/agricultural_power_energy"):
      console.log(
        "Heloo from Agricultural_Power_Energy_Page AR" +
          Agricultural_Power_Energy_Page_Title
      );
      Page_Title.innerHTML = "القوى والطاقة";
      Agricultural_Power_Energy_Load_Content_Ar();
      break;

    case location.href.includes("/Animal_Production_Mechanization") ||
      location.href.includes("/animal_production_mechanization"):
      console.log(
        "Heloo from Animal_Production_Mechanization AR" +
          Animal_Production_Mechanization_Page_Title
      );
      Page_Title.innerHTML = "الانتاج الحيوانى والسمكي والداجنى";
      Animal_Production_Mechanization_Load_Content_Ar();
      break;

    case location.href.includes("/Biological_Engineering") ||
      location.href.includes("/biological_engineering"):
      console.log(
        "Heloo from Biological_Engineering Ar" +
          Biological_Engineering_Page_Title
      );
      Page_Title.innerHTML = "نظم الهندسة الحيوية الزراعية";
      Biological_Engineering_Load_Content_Ar();
      break;

    case location.href.includes("/Handling_Processing_D") ||
      location.href.includes("/handling_processing_d"):
      console.log(
        "Heloo from Handling_Processing_D Ar" + Handling_Processing_D_Page_Title
      );
      Page_Title.innerHTML = "تصنيع وتداول المنتجات الزراعية";
      Handling_Processing_D_Load_Content_Ar();
      break;

    case location.href.includes("/Irrigation_Engineering_RD") ||
      location.href.includes("/irrigation_engineering_rd"):
      console.log(
        "Heloo from Irrigation Engineering RD Ar" +
          Irrigation_Engineering_RD_Page_Title
      );
      Page_Title.innerHTML = "هندسة الرى والصرف الحقلى";
      Irrigation_Engineering_RD_Load_Content_Ar();
      break;

    case location.href.includes("/Rice_Mechanization_Center") ||
      location.href.includes("/rice_mechanization_center"):
      console.log(
        "Heloo from Rice Mechanization Center En" +
          Rice_Mechanization_Center_Page_Title
      );
      Page_Title.innerHTML = "نبذه عن مركز ميكنة الارز";
      Rice_Mechanization_Center_Load_Content_Ar();
      break;

    case location.href.includes("/Testing_Reasearch_Station") ||
      location.href.includes("/testing_reasearch_station"):
      console.log(
        "Heloo from Testing Reasearch Station En" +
          Testing_Reasearch_Station_Page_Title
      );
      Page_Title.innerHTML = "محطة أبحاث و أختبار الجرارات و الالات الزراعية";
      Testing_Reasearch_Station_Load_Content_Ar();
      break;

    default:
      console.log("Heloo from Home AR");
      Page_Title.innerHTML = "الرئيسية";
      Home_Load_Content_Ar();
      break;
  }
}
