var Department_Specializations_H2 = document.getElementById(
  "Department_Specializations_H2"
);
var Department_Specializations_Section = document.getElementById(
  "Department_Specializations_Section"
);
var Department_Components_H2 = document.getElementById(
  "Department_Components_H2"
);
var Department_Components_Section = document.getElementById(
  "Department_Components_Section"
);

var Department_Components_H2_Ar = `
    تشمل الإدارة العامة للزراعة العضوية
`;
var Department_Components_H2_En = `
The General Administration of Organic Agriculture comprises
`;

var Department_Components_Section_Ar = `
    <div id="Department_Components_Container_Div_Ar" style="direction: rtl;">
        <details>
            <summary>إدارة التسجيل</summary>
            <div class="content">
                <ul>
                    <li>فحص الملفات المقدمة للتسجيل إدارياً.</li>
                    <li> وضع التقارير المبدئية في حاله الملفات ومدي إمكانية التسجيل للشركة طبقاً للقانون واللائحة التنفيذية مع وضع أكود الملفات وتنسيقها وترتيبها.</li>
                    <li>إعداد الشهادات.</li>
                    <li>التنسيق مع باقي الأقسام فى الإدارة العامة للزراعة العضوية .</li>
                </ul>
            </div>
        </details>
        <details>
            <summary>إدارة المتابعة</summary>
            <div class="content">
                <ul>
                    <li>التنسيق مع إدارة التسجيل لمعرفه حاله الملفات أولاً بأول.</li>
                    <li>دراسة كيفية متابعة مدخلات الزراعة العضوية  وتوافقها مع المعايير العضوية .</li>
                    <li> مخاطبة الشركات والمزارع المسجلة لدى الإدارة للتذكير بمواعيد التجديد السنوى. </li>
                    <li>متابعة نقاط القوة والضعف فى الإجراءات الحالية للتأكد من فعاليتها ومدى تطبيقها لقوانين الزراعة العضوية.</li>
                    <li>تنظيم زيارات تفتيشية أو تدقيق داخلى للتحقق من التزام المسجلين بمعايير الزراعة العضوية. </li>
                    <li>رقمنه العمليات وتطوير نظام الكتروني لمتابعة مدخلات الزراعة العضوية المسجلة لدي الادارة.</li>
                    <li>متابعة جودة المدخلات وتوافقها مع المعايير العضوية.</li>
                    <li>اجراء فحوصات دورية على المدخلات لضمان جودتها وامتثالها لمعايير الزراعة العضوية وذلك بالتنسيق مع ادارة الجودة .</li>
                </ul>
            </div>
        </details>
        <details>
            <summary>إدارة مراقبة الجودة</summary>
            <div class="content">
                <ul>
                    <li>ربط الأنشطة ببعضها داخل الإدارة العامة مع عمل وصف للعمليات والمسئوليات وإعداد Quality Manual لإدارة الجودة بالكامل مع وصف للإدارة العامة وأهداف ومبادئ تنفيذها.</li>
                    <li>مراجعة دليل الجودة الخاص بالادارة ومطابقتها بحركة الملفات .</li>
                </ul>
            </div>
        </details>
        <details>
            <summary>إدارة تشريعات الزراعة العضوية</summary>
            <div class="content">
                <ul>
                    <li>متابعة القوانين الدولية والتشريعات الخاصة بالزراعة العضوية ومطابقتها بالقانون المصري ولائحتة التنفيذية ومخاطبة الجهات الدولية فيما يخص القانون وتشريعاته.</li>
                    <li>عمل حصر بأي تعديلات مقترحة مستقبلية لتعديل القانون ولائحتة التنفيذية.</li>
                    <li>معاونة الأقسام في إتساق جميع أعمال الإدارة مع نص القانون المصري ولائحتة التنفيذية. </li>
                    <li>التعاون مع الهيئات الحكومية أو المنظمات غير الحكومية لتحديث معايير الزراعة العضوية ودعم النظام الوطنى لتوثيق المدخلات العضوية.</li>
                </ul>
            </div>
        </details>
    </div>
`;
var Department_Components_Section_En = `
    <div id="Department_Components_Container_Div_En">
        <details>
            <summary>Registration Department</summary>
            <div class="content">
                <ul>
                    <li>Administrative review of submitted registration files.</li>
                    <li>Preparation of preliminary reports on the files and the potential eligibility of companies
                        for registration in accordance with the law and its executive regulations, including
                        assigning codes, organizing, and classifying files.</li>
                    <li>Preparation of certificates.</li>
                    <li>Coordination with other departments in the General Directorate of Organic Agriculture.</li>
                </ul>
            </div>
        </details>
        <details>
            <summary>Follow-Up Department</summary>
            <div class="content">
                <ul>
                    <li>Coordination with the Registration Department to stay updated on file statuses.</li>
                    <li>Studying methods of monitoring organic agricultural inputs and their compliance with organic
                        standards.</li>
                    <li>Communicating with registered companies and farms to remind them of annual renewal
                        deadlines.</li>
                    <li>Monitoring the strengths and weaknesses of current procedures to ensure their effectiveness
                        and adherence to organic agriculture laws.</li>
                    <li>Organizing inspection or internal audit visits to verify the compliance of registered
                        entities with organic agriculture standards.</li>
                    <li>Digitizing operations and developing an electronic system to track registered organic
                        agricultural inputs.</li>
                    <li>Monitoring the quality of inputs and their compliance with organic standards.</li>
                    <li>Conducting periodic testing on inputs to ensure their quality and compliance with organic
                        agriculture standards, in coordination with the Quality Department.</li>
                </ul>
            </div>
        </details>
        <details>
            <summary>Quality Control Department</summary>
            <div class="content">
                <ul>
                    <li>Linking activities within the General Directorate and creating process descriptions and
                        responsibilities, along with preparing a complete Quality Manual for the Quality Management
                        System, describing the General Directorate and outlining its objectives and implementation
                        principles.</li>
                    <li>Reviewing the department’s quality manual and ensuring consistency with file processing
                        workflows.</li>
                </ul>
            </div>
        </details>
        <details>
            <summary>Organic Agriculture Legislation Department</summary>
            <div class="content">
                <ul>
                    <li>Monitoring international laws and legislation related to organic agriculture and ensuring
                        their alignment with Egyptian law and its executive regulations, as well as communicating
                        with international bodies regarding laws and regulations.</li>
                    <li>Compiling any proposed future amendments to the law and its executive regulations.</li>
                    <li>Assisting departments in aligning all administrative activities with the provisions of
                        Egyptian law and its executive regulations.</li>
                    <li>Collaborating with governmental or non-governmental organizations to update organic
                        agriculture standards and support the national system for documenting organic inputs.</li>
                </ul>
            </div>
        </details>
    </div>
`;

var Department_Specializations_H2_Ar = `
اخــتـصـاصــات القسم
`;
var Department_Specializations_H2_En = `
Department Specializations
`;

var Department_Specializations_Section_Ar = `
    <ul class="rolldown-list" id="myList" style="direction: rtl;">
        <li>تنظيم وتطوير ورفع مستوي نشاط الزراعة العضوية ونشرها بين المزارعين المستهلكين .</li>
        <li>تطبيق قانون الزراعة العضوية ولائحتة التنفيذية على جميع وحدات الإنتاج العضوي .</li>
        <li>وضع الاستراتيجيات والتصورات العملية لتطوير الزراعة العضوية .</li>
        <li>إعداد المخططات التنموية للزراعة العضوية .</li>
        <li>تنفيذ الخطط التنموية وتنمية العلاقات التعاونية وتعزيز دور الزراعة العضوية .</li>
        <li>دعم المشاريع والأستثمارات التنموية في قطاع الزراعة العضوية ومتابعتها .</li>
        <li>التعاون الدولي وتمثيل الوزارة لدي الهيئات والمنظمات العالمية المختصه .</li>
        <li>برمجة وتنظيم ومتابعة المواسم للزراعات العضوية .</li>
        <li>دراسة وتطوير وتنمية الزراعات العضوية والحرص على إدخال التقنيات الجديدة منها .</li>
        <li>المتابعة والتنسيق على الجهات المعنية بغية تيسر إنتاج الزراعات الجديدة العضوية .</li>
        <li>المساهمة في نشر المعطيات التقنية وتنظيم برامج الإرشاد المتعلقة بالزراعات الجديدة العضوية .</li>
        <li>إبداء الرأي الفني حول مختلف الدراسات والتقارير الخاصة بالزراعة العضوية .</li>
        <li>وضع المواصفات الفنية والإقتصادية لتوفير إنتاج ذو نوعيه جيدة بالنسبة للزراعات العضوية </li>
    </ul>
`;
var Department_Specializations_Section_En = `
    <ul class="rolldown-list" id="myList" style="direction: ltr;">
        <li style= "font-size:20px !important;">Organizing, developing, and enhancing organic agriculture activities and promoting them among farmers
            and consumers.</li>
        <li style= "font-size:20px !important;">Enforcing the Organic Agriculture Law and its executive regulations on all organic production units.</li>
        <li style= "font-size:20px !important;">Develop practical strategies and visions for the advancement of organic agriculture.</li>
        <li style= "font-size:20px !important;">Prepare developmental plans for organic agriculture.</li>
        <li style= "font-size:20px !important;">Implement development strategies and foster cooperative relationships while enhancing the role of
            organic agriculture.</li>
        <li style= "font-size:20px !important;">Support and monitor developmental projects and investments in the organic agriculture sector.</li>
        <li style= "font-size:20px !important;">Facilitate international cooperation and represent the Ministry at specialized international
            organizations and bodies.</li>
        <li style= "font-size:20px !important;">Program, organize, and monitor the seasonal cycles of organic farming.</li>
        <li style= "font-size:20px !important;">Study, develop, and promote organic farming practices, while ensuring the integration of new
            technologies.</li>
        <li style= "font-size:20px !important;">Coordinate and liaise with relevant authorities to facilitate the production of new organic crops.</li>
        <li style= "font-size:20px !important;">Contribute to disseminating technical data and organizing extension programs related to new organic
            crops.</li>
        <li style= "font-size:20px !important;">Provide expert opinions on various studies and reports related to organic agriculture.</li>
        <li style= "font-size:20px !important;">Set technical and economic specifications to ensure the production of high-quality organic crops.</li>
    </ul>
`;

function OA_General_Administration_Dep_Load_Content_Ar() {
  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });

      // Increments the delay on each item.
    $('.rolldown-list li').each(function () {
    var delay = ($(this).index() / 4) + 's';
    $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
    });
    });

    $('#btnReload').click(function () {
    $('#myList').removeClass('rolldown-list');
    setTimeout(function () {
    $('#myList').addClass('rolldown-list');
    }, 1);
    });

    
  Department_Specializations_H2.innerHTML = Department_Specializations_H2_Ar;
  Department_Specializations_H2.style.direction = "rtl";

  Department_Components_H2.innerHTML = Department_Components_H2_Ar;
  Department_Components_H2.style.direction = "rtl";

  Department_Specializations_Section.innerHTML = Department_Specializations_Section_Ar;
  Department_Components_Section.innerHTML = Department_Components_Section_Ar;

          class Accordion {
            constructor(el) {
              // Store the <details> element
              this.el = el;
              // Store the <summary> element
              this.summary = el.querySelector("summary");
              // Store the <div class="content"> element
              this.content = el.querySelector(".content");

              // Store the animation object (so we can cancel it if needed)
              this.animation = null;
              // Store if the element is closing
              this.isClosing = false;
              // Store if the element is expanding
              this.isExpanding = false;
              // Detect user clicks on the summary element
              this.summary.addEventListener("click", (e) => this.onClick(e));
            }

            onClick(e) {
              // Stop default behaviour from the browser
              e.preventDefault();
              // Add an overflow on the <details> to avoid content overflowing
              this.el.style.overflow = "hidden";
              // Check if the element is being closed or is already closed
              if (this.isClosing || !this.el.open) {
                this.open();
                // Check if the element is being openned or is already open
              } else if (this.isExpanding || this.el.open) {
                this.shrink();
              }
            }

            shrink() {
              // Set the element as "being closed"
              this.isClosing = true;

              // Store the current height of the element
              const startHeight = `${this.el.offsetHeight}px`;
              // Calculate the height of the summary
              const endHeight = `${this.summary.offsetHeight}px`;

              // If there is already an animation running
              if (this.animation) {
                // Cancel the current animation
                this.animation.cancel();
              }

              // Start a WAAPI animation
              this.animation = this.el.animate(
                {
                  // Set the keyframes from the startHeight to endHeight
                  height: [startHeight, endHeight],
                },
                {
                  duration: 400,
                  easing: "ease-out",
                }
              );

              // When the animation is complete, call onAnimationFinish()
              this.animation.onfinish = () => this.onAnimationFinish(false);
              // If the animation is cancelled, isClosing variable is set to false
              this.animation.oncancel = () => (this.isClosing = false);
            }

            open() {
              // Apply a fixed height on the element
              this.el.style.height = `${this.el.offsetHeight}px`;
              // Force the [open] attribute on the details element
              this.el.open = true;
              // Wait for the next frame to call the expand function
              window.requestAnimationFrame(() => this.expand());
            }

            expand() {
              // Set the element as "being expanding"
              this.isExpanding = true;
              // Get the current fixed height of the element
              const startHeight = `${this.el.offsetHeight}px`;
              // Calculate the open height of the element (summary height + content height)
              const endHeight = `${
                this.summary.offsetHeight + this.content.offsetHeight
              }px`;

              // If there is already an animation running
              if (this.animation) {
                // Cancel the current animation
                this.animation.cancel();
              }

              // Start a WAAPI animation
              this.animation = this.el.animate(
                {
                  // Set the keyframes from the startHeight to endHeight
                  height: [startHeight, endHeight],
                },
                {
                  duration: 400,
                  easing: "ease-out",
                }
              );
              // When the animation is complete, call onAnimationFinish()
              this.animation.onfinish = () => this.onAnimationFinish(true);
              // If the animation is cancelled, isExpanding variable is set to false
              this.animation.oncancel = () => (this.isExpanding = false);
            }

            onAnimationFinish(open) {
              // Set the open attribute based on the parameter
              this.el.open = open;
              // Clear the stored animation
              this.animation = null;
              // Reset isClosing & isExpanding
              this.isClosing = false;
              this.isExpanding = false;
              // Remove the overflow hidden and the fixed height
              this.el.style.height = this.el.style.overflow = "";
            }
          }

          document.querySelectorAll("details").forEach((el) => {
            new Accordion(el);
          });

}
function OA_General_Administration_Dep_Load_Content_En() {
  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });

      // Increments the delay on each item.
    $('.rolldown-list li').each(function () {
    var delay = ($(this).index() / 4) + 's';
    $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
    });
    });

    $('#btnReload').click(function () {
    $('#myList').removeClass('rolldown-list');
    setTimeout(function () {
    $('#myList').addClass('rolldown-list');
    }, 1);
    });

    
  Department_Specializations_H2.innerHTML = Department_Specializations_H2_En;
  Department_Specializations_H2.style.direction = "ltr";

  Department_Components_H2.innerHTML = Department_Components_H2_En;
  Department_Components_H2.style.direction = "ltr";

  Department_Specializations_Section.innerHTML = Department_Specializations_Section_En;
  Department_Components_Section.innerHTML = Department_Components_Section_En;

          class Accordion {
            constructor(el) {
              // Store the <details> element
              this.el = el;
              // Store the <summary> element
              this.summary = el.querySelector("summary");
              // Store the <div class="content"> element
              this.content = el.querySelector(".content");

              // Store the animation object (so we can cancel it if needed)
              this.animation = null;
              // Store if the element is closing
              this.isClosing = false;
              // Store if the element is expanding
              this.isExpanding = false;
              // Detect user clicks on the summary element
              this.summary.addEventListener("click", (e) => this.onClick(e));
            }

            onClick(e) {
              // Stop default behaviour from the browser
              e.preventDefault();
              // Add an overflow on the <details> to avoid content overflowing
              this.el.style.overflow = "hidden";
              // Check if the element is being closed or is already closed
              if (this.isClosing || !this.el.open) {
                this.open();
                // Check if the element is being openned or is already open
              } else if (this.isExpanding || this.el.open) {
                this.shrink();
              }
            }

            shrink() {
              // Set the element as "being closed"
              this.isClosing = true;

              // Store the current height of the element
              const startHeight = `${this.el.offsetHeight}px`;
              // Calculate the height of the summary
              const endHeight = `${this.summary.offsetHeight}px`;

              // If there is already an animation running
              if (this.animation) {
                // Cancel the current animation
                this.animation.cancel();
              }

              // Start a WAAPI animation
              this.animation = this.el.animate(
                {
                  // Set the keyframes from the startHeight to endHeight
                  height: [startHeight, endHeight],
                },
                {
                  duration: 400,
                  easing: "ease-out",
                }
              );

              // When the animation is complete, call onAnimationFinish()
              this.animation.onfinish = () => this.onAnimationFinish(false);
              // If the animation is cancelled, isClosing variable is set to false
              this.animation.oncancel = () => (this.isClosing = false);
            }

            open() {
              // Apply a fixed height on the element
              this.el.style.height = `${this.el.offsetHeight}px`;
              // Force the [open] attribute on the details element
              this.el.open = true;
              // Wait for the next frame to call the expand function
              window.requestAnimationFrame(() => this.expand());
            }

            expand() {
              // Set the element as "being expanding"
              this.isExpanding = true;
              // Get the current fixed height of the element
              const startHeight = `${this.el.offsetHeight}px`;
              // Calculate the open height of the element (summary height + content height)
              const endHeight = `${
                this.summary.offsetHeight + this.content.offsetHeight
              }px`;

              // If there is already an animation running
              if (this.animation) {
                // Cancel the current animation
                this.animation.cancel();
              }

              // Start a WAAPI animation
              this.animation = this.el.animate(
                {
                  // Set the keyframes from the startHeight to endHeight
                  height: [startHeight, endHeight],
                },
                {
                  duration: 400,
                  easing: "ease-out",
                }
              );
              // When the animation is complete, call onAnimationFinish()
              this.animation.onfinish = () => this.onAnimationFinish(true);
              // If the animation is cancelled, isExpanding variable is set to false
              this.animation.oncancel = () => (this.isExpanding = false);
            }

            onAnimationFinish(open) {
              // Set the open attribute based on the parameter
              this.el.open = open;
              // Clear the stored animation
              this.animation = null;
              // Reset isClosing & isExpanding
              this.isClosing = false;
              this.isExpanding = false;
              // Remove the overflow hidden and the fixed height
              this.el.style.height = this.el.style.overflow = "";
            }
          }

          document.querySelectorAll("details").forEach((el) => {
            new Accordion(el);
          });
}
if (localStorage.getItem("Permenant_Language") === "English") {
  OA_General_Administration_Dep_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  OA_General_Administration_Dep_Load_Content_Ar();
}
