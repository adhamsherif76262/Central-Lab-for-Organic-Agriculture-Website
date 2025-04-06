// Get the element to hide
const componentToHide = document.getElementById('componentToHide');

// Set the scroll threshold where you want to hide the component
const scrollThreshold = 100; // Adjust this value based on when you want to hide the component

// window.addEventListener('scroll', function() {
//     if (window.scrollY > scrollThreshold) {
//         // Hide the component
//         // componentToHide.classList.add('hide');
//         componentToHide.style.display = 'none';
//     } else {
//         // Show the component
//         // componentToHide.classList.remove('hide');
//         componentToHide.style.display = 'block';
//     }
// });







// var LangBtnEn = `<button  onclick="LangBtnEnClick()" type="button" id="LangBtnEn" title="Language Button">English</button>`;
// var LangBtnAr = `<button  onclick="LangBtnArClick()" type="button" id="LangBtnAr" title="Language Button">عربي</button>`;
var Page_Title = document.getElementById("Page_Title");
var HTMLpath = "";
var IMAGESpath = ".";

if (location.href.includes("/Home") || location.href.includes("/home")) {
//   alert(`I${HTMLpath}am${HTMLpath}Home`);
  HTMLpath = "./HTML/";
  IMAGESpath = "";
} else if (
  location.href.includes("/Departements") ||
  location.href.includes("/departements")
) {
//   alert(`I ${HTMLpath} am ${location.href}  Departement`);
  HTMLpath = "../";
  IMAGESpath = "./..";
}

var Language_Switch_Ar = `
    <div id="Language_Switch_Ar">
	    <div class="switch">
	        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox">
	        <label for="language-toggle"></label>
	        <button class="on"  onclick="LangBtnArClick()" id="LangBtnArs">AR</button>
	        <button class="off" onclick="LangBtnEnClick()" id="LangBtnEns">EN</button>
  	    </div>
    </div>
`;
var Language_Switch_En= `
    <div id="Language_Switch_En">
	    <div class="switch">
	        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox">
	        <label for="language-toggle"></label>
	        <button class="on"  onclick="LangBtnEnClick()"  id="LangBtnEns">EN</button>
	        <button class="off" onclick="LangBtnArClick()"  id="LangBtnArs">AR</button>
  	    </div>
    </div>
`;

var Footer_Language_Switch_Ar = `
    <div id="Footer_Language_Switch_Ar">
	    <div class="Footer_switch">
	        <input id="Footer_Language-toggle" class="Footer_check-toggle Footer_check-toggle-round-flat" type="checkbox">
	        <label for="Footer_Language-toggle"></label>
	        <button class="on"  onclick="LangBtnArClick()" id="LangBtnArs">AR</button>
	        <button class="off" onclick="LangBtnEnClick()" id="LangBtnEns">EN</button>
  	    </div>
    </div>
`;
var Footer_Language_Switch_En = `
    <div id="Footer_Language_Switch_En">
	    <div class="Footer_switch">
	        <input id="Footer_Language-toggle" class="Footer_check-toggle Footer_check-toggle-round-flat" type="checkbox">
	        <label for="Footer_Language-toggle"></label>
	        <button class="on"  onclick="LangBtnEnClick()"  id="LangBtnEns">EN</button>
	        <button class="off" onclick="LangBtnArClick()"  id="LangBtnArs">AR</button>
  	    </div>
    </div>
`;

var Navigation_Bar_Section = document.getElementById("Navigation_Bar_Section");
var Navigation_Bar_Section_Ar = `
  <div id="Nav_Container_Div">
        <div id="Logo_Div">
            <a href=".${IMAGESpath}/Home.html">
                <img id="Lab_Logo" src=".${IMAGESpath}/Images/Logos/LOGO-removebg-preview.png" alt="">
            </a>

            <h1 id="Title_H1_Ar" style="color: black; margin: 0;">المعمل المركزي للزراعة العضوية</h1>
        </div>
        <div id="Menu_Div">
            ${Language_Switch_Ar}
            <!---- Hidden Open / Close Toggles ---->
            <input type="radio" id="nav-close" name="nav-toggle" value="nav-close">
            <input type="radio" id="nav-toggle" name="nav-toggle" value="nav-toggle">
            <!---- END Hidden Toggles ---->
            <!---- Visual Open Menu Toggle ---->
            <a href="javascript:void(0);" class="nav-toggle" onclick="Hide_Overflow()" id="componentToHide">

                <label for="nav-toggle"></label>

                <figure></figure>
                <figure>
	        		<img id="Eagle_Img" src=".${IMAGESpath}/Images/Logos/National_Eagle_Logo.png" alt="">
	        	</figure>
                <figure></figure>

            </a>
            <!---- END Visual Open Menu Toggle ---->

            <!---- Visual Close Menu Toggle ----->
            <a href="javascript:void(0);" class="nav-close" onclick="Show_Overflow()">

                <label for="nav-close"></label>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>

            </a>
            <!---- END Visual Close Menu Toggle ---->

            <nav>
                    <ul>

                    <li><a href="./${HTMLpath}Collaborations.html" title="Home" rel="noopener">التعاون</a></li>
                    <li><a href="./${HTMLpath}Insights_Resources.html" title="Departments" rel="noopener">رؤي و أحداث</a></li>
                    <li><a href="./${HTMLpath}Previous_Presidents.html" title="Services" rel="noopener">المديرين</a></li>
                    <li><a href="./${HTMLpath}Main_Services.html" title="Portfolio" rel="noopener">الخدمات</a></li>
                    <li><a href="./${HTMLpath}Research_Departements.html" title="Insights_Events" rel="noopener">الأقسام</a></li>
                    <li><a href=".${IMAGESpath}/Home.html" title="Collaborations" rel="noopener">الرئيسية</a></li>

                </ul>
            </nav>
        </div>
    </div>
`;
var Navigation_Bar_Section_En = `
    <div id="Nav_Container_Div">
        <div id="Logo_Div">
            <a href=".${IMAGESpath}/Home.html">
                <img id="Lab_Logo" src=".${IMAGESpath}/Images/Logos/LOGO-removebg-preview.png" alt="">
            </a>
            <h1 id="Title_H1_En" style="color: black; margin: 0;">Central Lab for Organic Agriculture</h1>
        </div>
        
        <div id="Menu_Div">
            ${Language_Switch_En}
            <!---- Hidden Open / Close Toggles ---->
            <input type="radio" id="nav-close" name="nav-toggle" value="nav-close">
            <input type="radio" id="nav-toggle" name="nav-toggle" value="nav-toggle">
            <!---- END Hidden Toggles ---->
            <!---- Visual Open Menu Toggle ---->
            <a href="javascript:void(0);" class="nav-toggle" onclick="Hide_Overflow()">
    
                <label for="nav-toggle"></label>
                    <figure></figure>
                    <figure>
	        	    	<img id="Eagle_Img" src=".${IMAGESpath}/Images/Logos/National_Eagle_Logo.png" alt="">
	        	    </figure>
                    <figure></figure>
    
            </a>
            <!---- END Visual Open Menu Toggle ---->
    
            <!---- Visual Close Menu Toggle ----->
            <a href="javascript:void(0);" class="nav-close" onclick="Show_Overflow()">
    
                <label for="nav-close"></label>
    
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
    
            </a>
            <!---- END Visual Close Menu Toggle ---->
    
            <nav>
                <ul>
                    <li><a href=".${IMAGESpath}/Home.html" title="Home" rel="noopener">Home</a></li>
                    <li><a href="./${HTMLpath}Research_Departements.html" title="Departments" rel="noopener">Departments</a></li>
                    <li><a href="./${HTMLpath}Main_Services.html" title="Services" rel="noopener">Services</a></li>
                    <li><a href="./${HTMLpath}Previous_Presidents.html" title="Portfolio" rel="noopener">Directors</a></li>
                    <li><a href="./${HTMLpath}Insights_Resources.html" title="Insights_Events" rel="noopener">Insights & Events</a></li>
                    <li><a href="./${HTMLpath}Collaborations.html" title="Collaborations" rel="noopener">Collaborations</a></li>
                </ul>
            </nav>
        </div>
    </div>
`;
        // var TopBtnAr = `<button onclick="To_Top()" type="button" id="TopBtnAr"
        //     title="To Top Button">القمة</button>`;
        // var TopBtnEn = `<button onclick="To_Top()" type="button" id="TopBtnEn"
        //     title="To Top Button">Top</button>`;
var Footer_Section = document.getElementById("Footer_Section");
var Footer_Section_Ar = `
    <div class="page-wrapper Footer_Ar">
        <div id="waterdrop"></div>
        <footer>
            <div class="footer-top">
                <div class="pt-exebar">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 footer-col-3">
                            <div class="widget footer_widget">
                                <h5 class="footer-title-1_Ar">اتصل بنا</h5>
                                <div class="gem-contacts mt-0">
                                    <div class="gem-contacts-item gem-contacts-address">العنوان :<br><br> 
                                    ٩ شارع جامعة القاهرة، الجيزة ١٢٦١٩ – مصر
                                    </div>
                                    <div class="gem-contacts-item gem-contacts-address mt-3">البريد الالكتروني :<br><br>
                                        <a href="mailto:organic_agr@yahoo.com?&subject=Mail from xyz.com&body=Dear CLOA"
                                            target="_blank">organic_agr@yahoo.com</a><br><br>
                                        <a href="mailto:info@cloa.arc.gov.eg?&subject=Mail from xyz.com&body=Dear CLOA"
                                            target="_blank">info@cloa.arc.gov.eg</a><br>
                                    </div>
                                    <div class="gem-contacts-item gem-contacts-address mt-3">
                                        واتساب : + (٢٠٢) ٠١٠٢٠٧٦٠٠٦٥</div>
                                    <div class="gem-contacts-item gem-contacts-address mt-3">
                                        تليفون : + (٢٠٢) ٣٧٧٤٦٨١٦</div>
                                    <div class="gem-contacts-item gem-contacts-address mt-3">
                                        فاكس : + (٢٠٢) ٣٧٧٤٦٩٢٤
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-md-6 col-sm-12 mt-0">
                            <div class="row">
                                <div class="col-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="widget footer_widget">
                                        <h5 class="footer-title-2_Ar">الصفحات</h5>
                                        <ul class="posts  styled">
                                            <li class="clearfix gem-pp-posts">
                                                <div class="gem-pp-posts-text">
                                                    <div class="gem-pp-posts-item">
                                                        <a href="#">Want to start Your Own Play School.
                                                        </a>
                                                    </div>
                                                    <div class="gem-pp-posts-date">
                                                <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="clearfix gem-pp-posts">
                                                <div class="gem-pp-posts-text">
                                                    <div class="gem-pp-posts-item">
                                                        <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                        </a>
                                                    </div>
                                                    <div class="gem-pp-posts-date">
                                                <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="clearfix gem-pp-posts">
                                                <div class="gem-pp-posts-text">
                                                    <div class="gem-pp-posts-item">
                                                        <a href="#">Now we are in Ranchi, Admission open
                                                        </a>
                                                    </div>
                                                    <div class="gem-pp-posts-date">
                                                <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="clearfix gem-pp-posts">
                                                <div class="gem-pp-posts-text">
                                                    <div class="gem-pp-posts-item">
                                                        <a href="#">Now we are in Ranchi, Admission open
                                                        </a>
                                                    </div>
                                                    <div class="gem-pp-posts-date">
                                                <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="clearfix gem-pp-posts">
                                                <div class="gem-pp-posts-text">
                                                    <div class="gem-pp-posts-item">
                                                        <a href="#">Now we are in Ranchi, Admission open
                                                        </a>
                                                    </div>
                                                    <div class="gem-pp-posts-date">
                                                    <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                    </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5" id="Copyright_Div">
                            <div class="footer-site-info">٢٠٢٥ <span class="fa-copyright"></span>© <a href="#"
                                    target="_blank" rel="noopener">المعمل المركزي للزراعة العضوية </a></div>
                            </div>
                        <div class="col-md-2" id="Btns_Div">
                            ${Footer_Language_Switch_Ar}
                            <a href="#Navigation_Bar_Section" onclick="To_Top()" type="button" id="TopBtnAr" title="To Top Button">القمة</a>
                        </div>
                        <div class="col-md-5" id="Socials_Div">
                            <div id="footer-socials_Ar">
                                <div class="socials inline-inside socials-colored">
                                    <a href="#" target="_blank" title="Facebook" class="socials-item">
                                        <i class="fab fa-facebook-f facebook"></i>
                                    </a>
                                    <a href="#" target="_blank" title="Twitter" class="socials-item">
                                        <i class="fab fa-twitter twitter"></i>
                                    </a>
                                    <a href="#" target="_blank" title="Instagram" class="socials-item">
                                        <i class="fab fa-instagram instagram"></i>
                                    </a>
                                    <a href="#" target="_blank" title="YouTube" class="socials-item">
                                        <i class="fab fa-youtube youtube"></i>
                                    </a>
                                    <a href="#" target="_blank" title="Telegram" class="socials-item">
                                        <i class="fab fa-linkedin-in linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
`;
var Footer_Section_En = `
           <div class="page-wrapper">
            <div id="waterdrop"></div>
            <footer>
        <div class="footer-top">
            <div class="pt-exebar">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 footer-col-3">
                        <div class="widget footer_widget">
                            <h5 class="footer-title-1">Contact Us</h5>
                            <div class="gem-contacts mt-0">
                                <div class="gem-contacts-item gem-contacts-address">Address :<br><br> 9, Cairo
                                    University. st., Giza 12619, Egypt.
                                </div>
                                <div class="gem-contacts-item gem-contacts-address mt-3">Emails :<br><br>
                                    <a href="mailto:organic_agr@yahoo.com?&subject=Mail from xyz.com&body=Dear CLOA"
                                        target="_blank">organic_agr@yahoo.com</a><br><br>
                                    <a href="mailto:info@cloa.arc.gov.eg?&subject=Mail from xyz.com&body=Dear CLOA"
                                        target="_blank">info@cloa.arc.gov.eg</a><br>
                                </div>
                                <div class="gem-contacts-item gem-contacts-address mt-3">
                                    WhatsApp : + (202) 01020760065</div>
                                <div class="gem-contacts-item gem-contacts-address mt-3">
                                    Telephone : + (202) 37746816</div>
                                <div class="gem-contacts-item gem-contacts-address mt-3">
                                    Fax : + (202) 37746924
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-md-6 col-sm-12 mt-0">
                        <div class="row">
                            <div class="col-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="widget footer_widget">
                                    <h5 class="footer-title-2">Useful Links</h5>
                                    <ul class="posts  styled">
                                        <li class="clearfix gem-pp-posts">
                                            <div class="gem-pp-posts-text">
                                                <div class="gem-pp-posts-item">
                                                    <a href="#">Want to start Your Own Play School.
                                                    </a>
                                                </div>
                                                <div class="gem-pp-posts-date">
                                                  <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                  </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="clearfix gem-pp-posts">
                                            <div class="gem-pp-posts-text">
                                                <div class="gem-pp-posts-item">
                                                    <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                    </a>
                                                </div>
                                                <div class="gem-pp-posts-date">
                                                  <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                  </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="clearfix gem-pp-posts">
                                            <div class="gem-pp-posts-text">
                                                <div class="gem-pp-posts-item">
                                                    <a href="#">Now we are in Ranchi, Admission open
                                                    </a>
                                                </div>
                                                <div class="gem-pp-posts-date">
                                                  <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                  </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="clearfix gem-pp-posts">
                                            <div class="gem-pp-posts-text">
                                                <div class="gem-pp-posts-item">
                                                    <a href="#">Now we are in Ranchi, Admission open
                                                    </a>
                                                </div>
                                                <div class="gem-pp-posts-date">
                                                  <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                  </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="clearfix gem-pp-posts">
                                            <div class="gem-pp-posts-text">
                                                <div class="gem-pp-posts-item">
                                                    <a href="#">Now we are in Ranchi, Admission open
                                                    </a>
                                                </div>
                                                <div class="gem-pp-posts-date">
                                                  <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                  </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="clearfix gem-pp-posts">
                                            <div class="gem-pp-posts-text">
                                                <div class="gem-pp-posts-item">
                                                    <a href="#">Now we are in Ranchi, Admission open
                                                    </a>
                                                </div>
                                                <div class="gem-pp-posts-date">
                                                  <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                                                  </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-5" id="Copyright_Div">
                        <div class="footer-site-info">2025 <span class="fa-copyright"></span>© <a href="#"
                                target="_blank" rel="noopener">Central Lab Of Organic Agriculture</a></div>
                        </div>
                    <div class="col-md-2" id="Btns_Div">
                        ${Footer_Language_Switch_En}
                        <a href="#Navigation_Bar_Section" onclick="To_Top()" type="button" id="TopBtnEn" title="To Top Button">Top</a>
                    </div>
                    <div class="col-md-5" id="Socials_Div">
                        <div id="footer-socials">
                            <div class="socials inline-inside socials-colored">
                                <a href="#" target="_blank" title="Facebook" class="socials-item">
                                    <i class="fab fa-facebook-f facebook"></i>
                                </a>
                                <a href="#" target="_blank" title="Twitter" class="socials-item">
                                    <i class="fab fa-twitter twitter"></i>
                                </a>
                                <a href="#" target="_blank" title="Instagram" class="socials-item">
                                    <i class="fab fa-instagram instagram"></i>
                                </a>
                                <a href="#" target="_blank" title="YouTube" class="socials-item">
                                    <i class="fab fa-youtube youtube"></i>
                                </a>
                                <a href="#" target="_blank" title="Telegram" class="socials-item">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </footer>
        </div>
`;

var Title_H1 = document.getElementById("Title_H1");
var Lang_Btn = document.getElementById("Lang_Btn");
    function Load_Content_Ar() {
        Navigation_Bar_Section.innerHTML = Navigation_Bar_Section_Ar;
        Footer_Section.innerHTML = Footer_Section_Ar;
        // Get the element to hide
const componentToHide = document.getElementById('componentToHide');

// Set the scroll threshold where you want to hide the component
const scrollThreshold = 100; // Adjust this value based on when you want to hide the component

// window.onscroll = function() {
//     const currentScrollPosition = window.scrollY;
//             alert("Component is hidden");

//     if (currentScrollPosition > scrollThreshold) {
//         // Hide the component
//         // componentToHide.classList.add('hide');
//         componentToHide.style.display = 'none';
//     } else {
//         // Show the component
//         // componentToHide.classList.remove('hide');
//         componentToHide.style.display = 'block';
//         alert('Component is shown');
//     }
// }
// window.addEventListener('scroll', function() {
//     if (window.scrollY > scrollThreshold) {
//         // Hide the component
//         // componentToHide.classList.add('hide');
//         this.alert('Component is hidden');
//         componentToHide.style.display = 'none';
//     } else {
//         // Show the component
//         // componentToHide.classList.remove('hide');
//         componentToHide.style.display = 'block';
//         alert('Component is shown');
//     }
// });
    }
    function click() {
      alert(localStorage.getItem("Permenant_Language"));
      localStorage.setItem("Permenant_Language", "عربي");
      alert(localStorage.getItem("Permenant_Language"));
    }
    function Load_Content_En() {
        Navigation_Bar_Section.innerHTML = Navigation_Bar_Section_En;
        Footer_Section.innerHTML = Footer_Section_En;
        // Get the element to hide
const componentToHide = document.getElementById('componentToHide');

// Set the scroll threshold where you want to hide the component
const scrollThreshold = 100; // Adjust this value based on when you want to hide the component
// window.onscroll
// window.addEventListener('scroll', function() {
//     if (window.scrollY > scrollThreshold) {
//         // Hide the component
//         // componentToHide.classList.add('hide');
//         this.alert('Component is hidden');
//         componentToHide.style.display = 'none';
//     } else {
//         // Show the component
//         // componentToHide.classList.remove('hide');
//         componentToHide.style.display = 'block';
//         alert('Component is shown');
//     }
// });
    }
if (localStorage.getItem("Permenant_Language") === "English") {
  Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Load_Content_Ar();
}
