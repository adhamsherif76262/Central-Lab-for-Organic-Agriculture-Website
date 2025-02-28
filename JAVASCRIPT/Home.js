var Title_H1 = document.getElementById('Title_H1');
var First_p = document.getElementById('First_p');
var Second_p_H2 = document.getElementById("Second_p_H2");
var Second_p = document.getElementById("Second_p");
var Activities_Section = document.getElementById("Activities_Section");
var Current_Director_H2 = document.getElementById("Current_Director_H2");
var Current_Director_Speech_H2 = document.getElementById("Current_Director_Speech_H2");
var Current_Director_Speech = document.getElementById("Current_Director_Speech");
var Our_Mission_Section = document.getElementById("Our_Mission_Section");
var Our_Vision_Section = document.getElementById("Our_Vision_Section");

var Our_Mission_Section_Ar =`
  <img id="Mission_Img" src="./Images/Mission & Vision/Our Mission Ar .png" alt="">
`;
var Our_Mission_Section_En = `
  <img id="Mission_Img" src="./Images/Mission & Vision/Our Mission En.png" alt="">
`;
var Our_Vision_Section_Ar = `
  <img id="Vision_Img" src="./Images/Mission & Vision/Our Vision Ar .jpg" alt="">
`;
var Our_Vision_Section_En = `
  <img id="Vision_Img" src="./Images/Mission & Vision/Our Vision En.jpg" alt="">
`;

var Title_H1_Ar = `
نبذة تاريخية عن المعمل المركزي للزراعة العضوية
`;
var Title_H1_En = `
Historical Overview of the Central Laboratory for Organic Agriculture
`;

var First_p_Ar = `
شهدت الأسواق العالمية زيادة كبيرة في الطلب على المنتجات العضوية، مما دفع وزارة الزراعة واستصلاح الأراضي إلى تبني نهجٍ متكامل لنشر تكنولوجيا الزراعة العضوية بهدف إنتاج غذاء صحي وآمن وزيادة الصادرات الزراعية المصرية. استجابة لهذه الاحتياجات، صدر القرار الوزاري رقم ١٩٥٢ لسنة ٢٠٠٢، الذي أسس المعمل المركزي للزراعة العضوية كجزء من هيكل مركز البحوث الزراعية. يُعد المعمل الجهة الحكومية الوحيدة في مصر المختصة بنشر مفاهيم الزراعة العضوية، الإشراف العلمي والفني، وإجراء الأبحاث التطبيقية لحل مشكلات الإنتاج التي تواجه المزارع العضوية بما يتوافق مع القوانين الوطنية والدولية للزراعة العضوية.
من بين أبرز إنجازات المعمل، اعتماد المعايير المنظمة للزراعة العضوية بموجب القرارات الوزارية أرقام ١٤١١ و١٤١٢ في ديسمبر ٢٠٠٨، وتكليفه بإصدار شعاريّ اعتماد مميزين. الشعار الأول مخصص لمواد مدخلات الزراعة العضوية مثل الأسمدة، المخصبات الحيوية، العناصر الطبيعية، والمركبات الحيوية، شريطة تسجيلها رسميًا وفق القوانين المصرية. أما الشعار الثاني، فيُوضع على المنتجات العضوية النهائية المتداولة في الأسواق لضمان مطابقتها للمعايير العضوية.
كما لعب المعمل دورًا رياديًا في إجراء الأبحاث التطبيقية لاستخدام بدائل المبيدات في الزراعة العضوية، وتدريب الكوادر المحلية بالمحافظات على تقنيات الزراعة العضوية.
في عام ٢٠٢٠، صدر قانون الزراعة العضوية المصري ولائحته التنفيذية رقم ١٦٩ لسنة ٢٠٢١، مما وفر إطارًا قانونيًا شاملًا لتنظيم إنتاج، تداول، تصدير، واستيراد المدخلات والمنتجات العضوية. ومنذ ذلك الحين، يعمل المعمل على تنفيذ المهام الموكلة إليه وفقًا للقانون ولائحته التنفيذية، مما يُعزز من دور مصر في تحقيق التنمية المستدامة وتعزيز قدراتها التصديرية في مجال الزراعة العضوية.
`;
var First_p_En = `
Global markets have witnessed a significant increase in demand for organic products. In response, the Ministry of Agriculture and Land Reclamation adopted an integrated approach to promote organic agriculture technologies aimed at producing healthy and safe food while increasing Egypt's agricultural exports. To address these needs, Ministerial Decree No. 1952 of 2002 was issued, establishing the Central Laboratory for Organic Agriculture as part of the Agricultural Research Center. The laboratory serves as Egypt's sole governmental body dedicated to disseminating organic agriculture concepts, providing scientific and technical oversight, and conducting applied research to solve production challenges faced by organic farms in compliance with national and international organic agriculture regulations.
Among the laboratory's key achievements was the adoption of organic agriculture standards under Ministerial Decrees No. 1411 and 1412 in December 2008. Additionally, the laboratory was tasked with issuing two distinctive certification logos: the first for organic agriculture inputs, such as fertilizers, biofertilizers, natural elements, and biocontrol products, provided they are officially registered according to Egyptian laws; and the second for final organic products traded in markets, ensuring their compliance with organic standards.
The laboratory has also played a pioneering role in conducting applied research on the use of pesticide alternatives in organic agriculture and training local cadres across governorates on organic agriculture technologies.
In 2020, the Egyptian Organic Agriculture Law was issued, followed by its Executive Regulation No. 169 of 2021, providing a comprehensive legal framework for regulating the production, trade, export, and import of organic inputs and products. Since then, the laboratory has been actively implementing its assigned tasks at the applied level in alignment with the law and its executive regulations, strengthening Egypt's role in achieving sustainable development and enhancing its export capabilities in organic agriculture.
`;
var Activities_Section_Ar = `
<div class="container">
  <h2 class="center">مهام المعمل</h2>
  
  <article class="episode">
    <div class="episode__number episode__number_Ar"  >١.</div>
    <div class="episode__content">
      <div class="story">
      <p>إعداد وتدريب مهندسين زراعيين للإرشاد في مجال الزراعة العضوية</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٢.</div>
    <div class="episode__content">
      <div class="story">
      <p>إجراء البحوث لرفع خصوبة التربة وإدارة تغذية النبات لزيادة الإنتاجية في المزارع العضوية</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٣.</div>
    <div class="episode__content">
      <div class="story">
      <p>إجراء البحوث لتدوير المخلفات وإنتاج الأسمدة العضوية الخصبة والملائمة للزراعة العضوية</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٤.</div>
    <div class="episode__content">
      <div class="story">
      <p>إجراء البحوث لحل مشاكل الآفات والأمراض باستخدام الطرق الملائمة للزراعة العضوية للحصول على غذاء وفير صحي آمن</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٥.</div>
    <div class="episode__content">
      <div class="story">
      <p>البحث عن بدائل للمواد السامة المستخدمة في التعقيم والتخزين للمحافظة علي البيئة من التلوث</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٦.</div>
    <div class="episode__content">
      <div class="story">
      <p>تطوير طرق ما بعد الحصاد للمحافظة على المنتجات بما يتوافق مع قوانين الزراعة العضوية.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٧.</div>
    <div class="episode__content">
      <div class="story">
      <p>إعداد نشرات لإنتاج المحاصيل المختلفة بالطرق العضوية .</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٨.</div>
    <div class="episode__content">
      <div class="story">
      <p>إعداد نشرات متخصصه لقوانين الزراعة العضوية سواء كانت مخصبات أو لمكافحة الآفات والأمراض.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٩.</div>
    <div class="episode__content">
      <div class="story">
      <p>التسجيل والإشراف على مكاتب التسجيل العاملة في مصر</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >١٠</div>
    <div class="episode__content">
      <div class="story">
      <p>منح شعار الزراعة العضوية لمدخلات الزراعة العضوية وكذلك المنتجات .</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >١١</div>
    <div class="episode__content">
      <div class="story">
      <p>توفير قاعدة بيانات عن الزراعة العضوية ووضع الخطط المستقبلية .</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >١٢</div>
    <div class="episode__content episode__content_Last">
      <div class="story">
      <p>تطبيق القوانين والتشريعات حتي يمكن إصداد شهادة للزراعة العضوية معتمدة دولياُ .</p>
        <ul id = "UL_Ar">
            <li class = "LI_Ar">نشر طرق إنتاج المحاصيل المختلفة وخاصة الخضر والفاكهة والأعشاب الطبية بأساليب الزراعة العضوية المختلفة المعتمدة دولياً مما يؤدي لزيادة تصديرها بأسعار مميزة، ويؤدي استخدام هذا الأسلوب إلي خفض كميات المبيدات المستخدمة في البيئة المصرية.</li>
            <li class = "LI_Ar">عمل دورات تدريبية للقطاع الخاص والعام عن طريق إدارة المزارع بالطرق العضوية وخاصة تغذية النبات-خصوبة التربة-مكافحة النبات.</li>
            <li class = "LI_Ar">تسجيل مكاتب التفتيش وإصدار الشهادات العاملة في مصر لمراقبة أعمالها بما يضمن حسن إدارة الإنتاج العضوي والحفاظ علي سمعة مصر في الأسواق العالمية.</li>
            <li class = "LI_Ar">حل مشاكل الزراعة العضوية ذلك بتقديم بدائل المبيدات وبدائل للأسمدة الكيماوية تؤدي نفس الغرض وبنفس كفاءة هذه المركبات الكيماوية.</li>
            <li class = "LI_Ar">تسجيل جميع الشركات والمزارع العضوية المعتمدة بهدف حمايتها من الدخلاء وإمدادهم بالمعلومات اللازمة للاستمرارية وإصدار شهادات وشعار لمنتجاتهم التي تباع في الأسواق المحلية، وإعداد البيانات والإحصاءات اللازمة لوضع الخطط المستقبلية.</li>
            <li class = "LI_Ar">إعداد النشرات الإرشادية الخاصة بإنتاج المحاصيل المختلفة بالطرق العضوية.</li>
            <li class = "LI_Ar">ذلك للحصول علي الاعتماد من هذه الجهات وبعد ذلك يصبح للمعمل المركزي الحق في إصدار شهادات معتمدة دولياً للمنتجات العضوية</li>
            <li class = "LI_Ar">إعداد الكوادر اللازمة لتنفيذ الزراعة العضوية بهدف نشر مكاتب لزراعة العضوية حتي مستوي القرية في مصر.</li>
        </ul>
        </div>
    </d>
  </article>
</div>
`;
var Activities_Section_En = `
<div class="container">
  <h2 class="center">Institute Activities</h2>
  
  <article class="episode">
    <div class="episode__number episode__number_En"  >01</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Preparation and training of agricultural engineers for guidance in the field of organic agriculture.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >02</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Conducting research to improve soil fertility and manage plant nutrition in order to increase productivity in organic farms.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >03</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Conducting research on waste recycling and the production of organic fertilizers that are fertile and suitable for organic agriculture.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >04</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Conducting research to address pest and disease problems using methods suitable for organic agriculture in order to obtain abundant, healthy, and safe food.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >05</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Researching alternatives to toxic substances used in sterilization and storage to protect the environment from pollution.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >06</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Developing post-harvest methods to preserve products in compliance with organic agriculture regulations.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >07</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Preparing publications for the production of various crops using organic methods.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >08</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Preparing specialized publications on organic agriculture regulations, including those related to fertilizers and pest and disease control.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >09</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Registration and supervision of the registration offices operating in Egypt.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >10</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Granting the organic agriculture label to organic agriculture inputs as well as products.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >11</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Providing a database on organic agriculture and developing future plans.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >12</div>
    <div class="episode__content episode__content_Last">
      <div class="story">
        <p class = "En_P">Applying laws and regulations to issue internationally recognized organic agriculture certification.</p>
        <ul>
            <li class = "LI_En">Disseminating methods for producing various crops, especially vegetables, fruits, and medicinal herbs, using internationally recognized organic agriculture practices. This will lead to increased exports at competitive prices and reduce the amount of pesticides used in the Egyptian environment.</li>
            <li class = "LI_En">Conducting training courses for both the private and public sectors on managing farms using organic methods, particularly in plant nutrition, soil fertility, and pest control.</li>
            <li class = "LI_En">Registering inspection offices and issuing certificates for those operating in Egypt to monitor their activities, ensuring proper organic production management and maintaining Egypt's reputation in global markets.</li>
            <li class = "LI_En">Solving challenges in organic agriculture by offering alternatives to pesticides and chemical fertilizers that achieve the same results with the same effectiveness as these chemical compounds.</li>
            <li class = "LI_En">Registering all certified organic companies and farms to protect them from unauthorized entities, providing them with the necessary information to continue operations, and issuing certificates and labels for their products sold in local markets. Preparing the necessary data and statistics for future planning.</li>
            <li class = "LI_En">Preparing advisory publications related to the organic production of various crops.</li>
            <li class = "LI_En">Obtaining accreditation from relevant authorities, after which the Central Laboratory will have the authority to issue internationally recognized certificates for organic products.</li>
            <li class = "LI_En">Training the necessary workforce for the implementation of organic agriculture with the goal of establishing organic agriculture offices even at the village level in Egypt.</li>
        </ul>
        </div>
    </div>
  </article>
</div>
`;

var Current_Director_H2_Ar = `
مدير المعمل  الأستاذ الدكتور : سعد عبد الخالق جعفر
`;
var Current_Director_H2_En = `
Laboratory Director : <br> <br> Prof. Dr. Saad Abd El-Khalek Jaafar
`;
var Current_Director_Speech_H2_Ar = `
    كلمة مدير المعمل المركزى للزراعة العضوية 
`;
var Current_Director_Speech_H2_En = `
    Director's speech
`;

var Current_Director_Speech_Ar = `
تعرف الزراعة العضوية بانها نظام للانتاج الغذائى يتأثر بيئياً واجتماعياً قائم على التجارب العالمية والمحلية المختلفة، حيث يتم استخدام طرق صديقة للبيئة اثناء مراحل الانتاج ، وكذلك تداول المنتج العضوى النهائى.<br> وعلى المستوى العالمى، هناك مبدأين اساسيين لابد ان يتم تطبيقهم على الانتاج العضوى وهما :<br>
•	الأول: معايير  codex  للانتاج ، التصنيع ، التعبئة والتسويق ، حيث ان الانتاج الزراعى يحسن صحة النظم البيئية بما تشمله من دورات حيوية ونشاط التربة الحيوى .
<br>•	 الثانى: تقليل الاستخدام لمدخلات الانتاج من خارج المزرعة، وتجنب استخدام كل من الاسمدة والمبيدات الكيماوية، وبالتالى المساهمة فى تقليل التلوث البيئى، سواء كان تلوث الهواء او التربة او المياه، لأن الهدف الاسمى للزراعة العضوية هو تحسين صحة وانتاجية المجتمعات المتداخلة معها من تربة ، نبات ، حيوان وانسان .<br>
فى اطارهذا المفهوم،  تم انشاء المعمل المركزى للزراعة العضوية بالقرار الوزارى رقم ١٩٥ لسنة ٢٠٠٢، بهدف العمل على زيادة الوعى والنشر لمفهوم الزراعة العضوية وتطبيقاتها فى جمهورية مصر العربية، والمساهمة فى الوصول الى منتج عضوى مصرى يلبى احتياجات كل من السوق المحلى وكذلك التصديرى، ثم   تلى ذلك فى سنة ٢٠١٧ انشاء الادارة العامة للزراعة العضوية والتى خُولت من خلال تبعيتها لوزارة الزراعة المصرية لتسجيل جميع المزارع ومكاتب التسجيل والتفتيش وكذلك مدخلات الانتاج العضوى المصرى للمساهمة فى ضمان رفع جودة ومطابقة المنتج العضوى المصرى لنظيره الدولى، وبحلول سنة٢٠٢٠  تم صدور قانون الزراعة العضوية المصرى رقم ١٢  تأكيدا لوضع مصر على مصاف دول الانتاج العضوى، وكذلك كإحتياج وضرورة ملحة لضمان عدم الممانعة لإستيراد المنتجات العضوية المصرية من قبل دول الاتحاد الاوربى الذى أعلن عن قراره بمنع الاستيراد من اى دولة منتجة ليس لها قانون للزراعة العضوية متوافق مع نظيره فى دول الانتاج العضوى الاخرى. 
واخيرا، يهتم المعمل المركزى للزراعة العضوية بنشر تكنولوجيات الانتاج العضوى المطابقة للمعايير الدولية وكذلك يركز المعمل على تدريب وإعداد الكوادر البشرية المؤهلة لتنفيذ معايير الإنتاج العضوى، والمعمل المركزى للزراعة العضوية يضم عدد من التخصصات المختلفة ومنها علوم البستنة والمحاصيل الحقلية والإقتصاد الزراعى والتخصصات المساعدة لها مثل وقاية النباتات من الآفات والامراض ، وتغذية النبات و تحسين خواص التربة، والتى تهدف جميعها وبالتعاون مع جميع الجهات المعنية بالانتاج الزراعى العضوى إلى إجراء البحوث التطبيقية المتخصصة للمساهمة فى تعزيز الوصول الى المنتج العضوى من خلال نشر  النتائج والتوصيات التطبيقية المتوصل إليها لانتاج  محاصيل وخضروات وفواكه عضوية، بالإضافة إلى انتاج اسمدة عضوية ومخصبات حيوية وعناصر مكافحة للافات والأمراض متوافقة مع المعاييرالعضوية العالمية . لذلك يسعدنى اليوم أن نعلن عن انشاء هذه الدورية المتخصصة لنشر أحدث النتائج المتحصل عليها من التجارب التى قام بتنفيذها باحثى المعمل المركزى للزراعة العضوية وكذلك جميع السادة الزملاء الباحثين فى نفس المجال، والتابعين لجميع المؤسسات البحثية والكليات الزراعية المعنية بالانتاج الزراعى العضوى، وكذلك الزراعة النظيفة فى مصر والوطن العربى والعالم .
`;
var Current_Director_Speech_En = `
Organic farming is defined as a food production system that is environmentally and socially influenced, based on various global and local experiences. It involves using environmentally friendly methods during production stages, as well as the handling of the final organic product.<br> On a global scale, there are two fundamental principles that must be applied to organic production:<br>
• First: The Codex standards for production, manufacturing, packaging, and marketing, where agricultural production improves the health of ecosystems, including the cycles of nature and soil biological activity.<br>
• Second: Reducing the use of external inputs for production, and avoiding the use of chemical fertilizers and pesticides, thus contributing to the reduction of environmental pollution, whether it be air, soil, or water pollution. The ultimate goal of organic farming is to improve the health and productivity of the interconnected communities—soil, plants, animals, and humans.<br>
In this context, the Central Laboratory for Organic Farming was established by Ministerial Decree No. 195 of 2002, aiming to raise awareness and spread the concept of organic farming and its applications in the Arab Republic of Egypt. It also contributed to the development of an Egyptian organic product that meets the needs of both local and export markets. In 2017, the General Administration for Organic Farming was established, which, under the Ministry of Agriculture, is responsible for registering all farms, registration and inspection offices, as well as organic production inputs in Egypt, ensuring the enhancement of quality and compliance of Egyptian organic products with international standards. By 2020, the Egyptian Organic Farming Law No. 12 was issued, confirming Egypt’s position among organic producing countries, and addressing the urgent need to ensure that Egyptian organic products are accepted for export by the European Union, which announced its decision to stop imports from any producing country without an organic farming law that aligns with those in other organic production countries.<br>
Finally, the Central Laboratory for Organic Farming is dedicated to spreading organic production technologies that comply with international standards. The laboratory also focuses on training and preparing qualified human resources to implement organic production standards. It includes several specializations, such as horticulture, field crops, agricultural economics, and supporting fields like plant protection from pests and diseases, plant nutrition, and soil enhancement. All of these aim, in collaboration with relevant organic agricultural production authorities, to conduct specialized applied research contributing to the promotion of organic products. The results and practical recommendations derived from this research will aid in producing organic crops, vegetables, fruits, as well as organic fertilizers, bio-stimulants, and pest and disease control methods in line with global organic standards.<br>
Therefore, I am pleased to announce today the creation of this specialized journal to disseminate the latest findings obtained from experiments conducted by researchers at the Central Laboratory for Organic Farming, as well as all colleagues and researchers in this field from all research institutions and agricultural colleges related to organic agricultural production, clean farming in Egypt, the Arab world, and globally.
`;
var Second_p_H2_Ar = `
ملخص دور المعمل 
`;
var Second_p_H2_En = `
Summary of the Laboratory’s Role
`;
var Second_p_Ar = `
المعمل مسؤول عن تنفيذ قانون الزراعة العضوية، ومراقبة مدخلات الإنتاج، وتسجيل مكاتب التفتيش وإصدار الشهادات لضمان النزاهة وتعزيز تنافسية المنتجات المصرية. يجري أبحاثًا حول خصوبة التربة ومكافحة الآفات باستخدام البدائل الحديثة، ويطبق نظم المكافحة المتكاملة وفقًا للمعايير الدولية. كما ينتج الأسمدة والمبيدات الحيوية لدعم الزراعة العضوية وتقليل استخدام المبيدات. ينظم دورات تدريبية وإرشادية للمزارعين والعاملين في القطاع، ويوفر قاعدة بيانات للمزارع العضوية وشركات التصدير لدعم تطوير القطاع.
`;
var Second_p_En = `
  The laboratory is responsible for implementing the Organic Agriculture Law, monitoring production inputs, registering inspection offices, and issuing certificates to ensure integrity and enhance the competitiveness of Egyptian products. It conducts research on soil fertility and pest control using modern alternatives and implements integrated pest management systems in accordance with international standards. It also produces bio-fertilizers and bio-pesticides to support organic agriculture and reduce the use of chemical pesticides. Additionally, it organizes training and guidance courses for farmers and sector workers, and provides a database for organic farms and exporting companies to support sector development.
`;

    function Home_Load_Content_Ar() {
        jQuery("#waterdrop").raindrops({
          color: "#1c1f2f",
          canvasHeight: 150,
          density: 0.1,
          frequency: 10,
        });
        Title_H1.innerHTML = Title_H1_Ar;
        Title_H1.style.direction = "rtl";
        First_p.innerHTML = First_p_Ar;
        First_p.style.direction = "rtl";
        Activities_Section.innerHTML = Activities_Section_Ar;
        Activities_Section.style.direction = "rtl";
        Current_Director_Speech.innerHTML = Current_Director_Speech_Ar;
        Current_Director_Speech.style.direction = "rtl";
        Current_Director_Speech_H2.innerHTML = Current_Director_Speech_H2_Ar;
        Current_Director_Speech_H2.style.direction = "rtl";
        Current_Director_H2.innerHTML = Current_Director_H2_Ar;
        Current_Director_H2.style.direction = "rtl";
        Second_p_H2.innerHTML = Second_p_H2_Ar;
        Second_p.innerHTML = Second_p_Ar;
        Second_p.style.direction = "rtl";
        Our_Mission_Section.innerHTML = Our_Mission_Section_Ar;
        Our_Vision_Section.innerHTML = Our_Vision_Section_Ar;
    }
    function Home_Load_Content_En() {
        jQuery("#waterdrop").raindrops({
          color: "#1c1f2f",
          canvasHeight: 150,
          density: 0.1,
          frequency: 10,
        });
        Title_H1.innerHTML = Title_H1_En;
        Title_H1.style.direction = "ltr";
        First_p.innerHTML = First_p_En;
        First_p.style.direction = "ltr";
        Activities_Section.innerHTML = Activities_Section_En;
        Activities_Section.style.direction = "ltr";
        Current_Director_Speech.innerHTML = Current_Director_Speech_En;
        Current_Director_Speech.style.direction = "ltr";
        Current_Director_Speech_H2.innerHTML = Current_Director_Speech_H2_En;
        Current_Director_Speech_H2.style.direction = "ltr";
        Current_Director_H2.innerHTML = Current_Director_H2_En;
        Current_Director_H2.style.direction = "ltr";
        Second_p_H2.innerHTML = Second_p_H2_En;
        Second_p.innerHTML = Second_p_En;
        Second_p.style.direction = "ltr";
        Our_Mission_Section.innerHTML = Our_Mission_Section_En;
        Our_Vision_Section.innerHTML = Our_Vision_Section_En;
    }
    if (localStorage.getItem("Permenant_Language") === "English") {
      Home_Load_Content_En();
    }
    if (localStorage.getItem("Permenant_Language") === "عربي") {
      Home_Load_Content_Ar();
    }