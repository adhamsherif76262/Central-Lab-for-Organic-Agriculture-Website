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

        <header id="Department_Specializations_Section_Ar" style="direction: rtl;" role="banner">
            <div class="nav" role="navigation">
                <ul class="nav__list">
                    <li>
                        <input id="group-1" type="checkbox" hidden />
                        <label for="group-1"><span class="fa fa-angle-right"></span> بحوث الإنـتـاج الـعـضـوي لـمـحـاصـيـل الـخـضـر </label>
                        <ul class="group-list">
                            <li>
                                <input id="sub-group-1-1" type="checkbox" hidden />
                                <label for="sub-group-1-1">	إنتاج التقاوي بالطرق العضوية لمحاصيل الخضر المختلفة.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-2" type="checkbox" hidden />
                                <label for="sub-group-1-2">	تحديد المصادر العضوية التي يمكن أن تفي بالاحتياجات الغذائية لمحاصيل الخضر.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-3" type="checkbox" hidden />
                                <label for="sub-group-1-3">	تحديد المعاملات الزراعية المختلفة المناسبة لإنتاج الخضر العضوية.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-4" type="checkbox" hidden />
                                <label for="sub-group-1-4">	تحديد كميات وأنواع الأسمدة اللازمة لإمداد الخضر المختلفة بالوحدات الغذائية.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-5" type="checkbox" hidden />
                                <label for="sub-group-1-5">	تحديد أحسن الأصناف التي يمكن إنتاجها عضوياً.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-6" type="checkbox" hidden />
                                <label for="sub-group-1-6">	إعداد برامج لتحسين أصناف الخضر العضوية.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-7" type="checkbox" hidden />
                                <label for="sub-group-1-7">	برامج التربية لإنتاج أصناف خضر عضوية جديدة عالية الإنتاج وتلاءم ظروف الإنتاج العضوي .</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input id="group-2" type="checkbox" hidden />
                        <label for="group-2"><span class="fa fa-angle-right"></span> بحوث الإنتاج العضوي لمحاصيل الفاكهة </label>
                        <ul class="group-list">
                            <li>
                                <input id="sub-group-2-1" type="checkbox" hidden />
                                <label for="sub-group-2-1">	تحديد المصادر العضوية التي يمكن أن تفي بالاحتياجات الغذائية لمحاصيل الفاكهة.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-2" type="checkbox" hidden />
                                <label for="sub-group-2-2">	تحديد كميات وأنواع الأسمدة اللازمة لإمداد الفاكهة المختلفة بالوحدات الغذائية.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-3" type="checkbox" hidden />
                                <label for="sub-group-2-3">	تحديد أحسن الأصناف التي يمكن إنتاجها عضوياً.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-4" type="checkbox" hidden />
                                <label for="sub-group-2-4">	تحديد أفضل الأصناف الموجودة والتي تتلاءم مع نظام الزراعة العضوية .</label>
                            </li>
                            <li>
                                <input id="sub-group-2-5" type="checkbox" hidden />
                                <label for="sub-group-2-5">	تحسين الأصناف بالطرق التي تسمح بها المعايير المنظمة للزراعة العضوية.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-6" type="checkbox" hidden />
                                <label for="sub-group-2-6">	إنتاج أصناف وهجن جديدة عالية الإنتاج والجودة وتتلاءم مع نظام الزراعة العضوية</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input id="group-3" type="checkbox" hidden />
                        <label for="group-3"><span class="fa fa-angle-right"></span> بحوث الإنتاج العضوي للمحاصيل الحقلية </label>
                        <ul class="group-list">
                            <li>
                                <input id="sub-group-3-1" type="checkbox" hidden />
                                <label for="sub-group-3-1">إعداد برامج لتحسين أصناف المحاصيل الحقلية.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-2" type="checkbox" hidden />
                                <label for="sub-group-3-2">برامج التربية لإنتاج أصناف محاصيل حقلية عضوية جديدة عالية الإنتاج وتلاءم ظروف  الإنتاج العضوي .</label>
                            </li>
                            <li>
                                <input id="sub-group-3-3" type="checkbox" hidden />
                                <label for="sub-group-3-3">العمليات الحقلية التي تساعد في حماية المنتجات الزراعية بعد الحصاد.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-4" type="checkbox" hidden />
                                <label for="sub-group-3-4">إيجاد حلول تتماشي مع قانون الزراعة العضوية لان مشاكل آفات أو أمراض قد تظهر لأي من المحاصيل.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-5" type="checkbox" hidden />
                                <label for="sub-group-3-5">عمل الأبحاث اللازمة لحماية المحاصيل العضوية من الآفات بعد الحصاد.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-6" type="checkbox" hidden />
                                <label for="sub-group-3-6">تقييم واختبار المركبات الحيوية المستخدمة في مكافحة الآفات والأمراض لمعرفة مدي فعاليتها ومدي ملامتها مع المحاصيل الحقلية المختلفة .</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input id="group-4" type="checkbox" hidden />
                        <label for="group-4"><span class="fa fa-angle-right"></span> بحوث الإنتاج العضوي للنباتات
                            الطبية والعطرية ونباتات الزينة</label>
                        <ul class="group-list">
                            <li>
                                <li><a style="line-height: 3rem;" href="#">النباتات الطبية والعطرية من المحاصيل غير
                                    التقليدية التى تدخل فى كثير من الصناعات خاصة الدوائية منها وسوف يشمل نشاط القسم عدد
                                    كبير من النباتات التى تزرع وتنتج فى مصر ومعظمها محاصيل اقتصادية تصديرية مثل
                                    :البابونج و البردقوش والريحان والعطر والنعناع والورد والياسمين والكراوية والكزبرة
                                    واليانسون والكمون والشمر وحبة البركة والزعتر وحصالبان وحشيشة الليمون والقطيفة
                                    العطرية والكركدية والحناء وغيرها.
                                    وتحتل النباتات الطبية والعطرية المرتبة الخامسة فى التصدير من الحاصلات الزراعية بعد
                                    القطن والأرز والموالح والبطاطس وبالرغم من ان مساحة النباتات الطبية والعطرية لا تزيد
                                    عن ٠.٥% من مساحة مصر المنزرعة إلا أن صادرات مصر منها تمثل ٦.٣% من قيمة الصادرات
                                    الزراعية
                                        .</a></li>
                                <input id="sub-group-4-1" type="checkbox" hidden />
                                <label for="sub-group-4-1"><span class="fa fa-angle-right"></span>أهداف اسراتيجية العمل فى القسم </label>
                                <ul class="sub-group-list">
                                    <li><a href="#">١- تحديد أهم العمليات الزراعية اللازمة لزيادة وتحسين جودة النباتات الطبية والعطرية ونباتات الزينة تحت نظم الزراعة العضوية.</a></li>
                                    <li><a href="#">٢- تحديد كميات وأنواع الأسمدة اللازمة لإنتاج النباتات الطبية والعطرية ونباتات الزينة المنتجة عضوياً.</a></li>
                                    <li><a href="#">٣- إنتاج التقاوي العضوية ذات إنتاج وجودة عالية.</a></li>
                                    <li><a href="#">٤- تحديد أفضل الأصناف الموجودة والتي تتلاءم مع نظام الزراعة العضوية.</a></li>
                                    <li><a href="#">٥- تحسين الأصناف بالطرق التي تسمح بها المعايير المنظمة للزراعة العضوية.</a></li>
                                    <li><a href="#">٦- إنتاج أصناف وهجن جديدة عالية الإنتاج والجودة وتتلاءم مع نظام الزراعة العضوية من النباتات الطبية والعطرية ونباتات الزينة.</a></li>
                                    <li><a href="#">٧- الحصول على اعلى انتاج من المحصول المنزرع (تعظيم الانتاج ) مع تحسين جودتة ليلائم احتياجات التصدير للاسواق العالمية </a></li>
                                    <li><a href="#">٨- تحقيق الحد الامثل من المكونات الفعالة فى النبات </a></li>
                                    <li><a href="#">٩- عدم استخدام الكيماويات والمبيدات الضارة فى الإنتاج مع استخدام البدائل الآمنه. </a></li>
                                    <li><a href="#">١٠- تقليل تكاليف الإنتاج وتقليل الفاقد من المحصول عن طريق استخدام النظم الآلية فى الزراعة والحصاد مع تحسين معاملات مابعد الحصاد </a></li>
                                </ul>
                            </li>
                            <li>
                                
                                <input id="sub-group-4-2" type="checkbox" hidden />
                                <label for="sub-group-4-2"><span class="fa fa-angle-right"></span>تعتمد الخطة على ثلاثة محاور  </label>
                                <ul class="sub-group-list">
                                    <li>
                                        <input id="sub-sub-group-4-1" type="checkbox"
                                            hidden />
                                        <label for="sub-sub-group-4-1"><span
                                                class="fa fa-angle-right"></span>
                                            ١- النشاط البحثى </label>
                                        <ul class="sub-sub-group-list">
                                            <li><a href="">•	إجراء البحوث التطبيقية للتوصية بأنسب المعاملات التى من شأنها زيادة الإنتاج العضوي وتحسين جودته وتقليل الفاقد منه مثل أبحاث التسميد والتغذية وكثافة وطرق ومواعيد الزراعة , معاملات ما بعد الحصاد وغيرها </a></li>
                                            <li><a href="">•	دراسات الانتخاب وبرامج التربية للأصناف المحلية عن طريق تحسينها او التهجين بينها وبين الأصناف المستوردة التى تحمل الصفات المطلوبة لانتاج سلالات وأصناف مقاومة للظروف المحلية وللآفات والأمراض .</a></li>
                                            <li><a href="">•	العمل على إنتاج تقاوي منتقاة وذلك بإنتاج تقاوي المربى والأساس وتوزيعها على شركات البذوز لانتاج التقاوي المعتمدة للمزارعين تحت رقابة وتفتيش المعمل المركزي للزراعة العضوية.</a></li>
                                            <li><a href="">•	تقييم بعض الأصناف المستوردة التى تتفق وظروف مصر المناخية ونشر زراعة المتفوق منها </a></li>
                                            <li><a href="">•	إجراء البحوث لمعرفة اثر الظروف البيئية والتغيرات المناخية على أصناف وسلالات النباتات الطبية والعطرية فى مناطق مصر المختلفة </a></li>
                                            <li><a href="">•	توجيه البحوث نحو دراسات الإجهاد المائي والملحي للنباتات الطبية والعطرية للتوسع فى زراعتها فى المناطق الجديدة والمستصلحة.</a></li>
                                            <li><a href="">•	العمل على تشجيع أجراء البحوث تحت نظم الرى الحديثة </a></li>
                                            <li><a href="">•	الاهتمام ببحوث التكثيف الزراعي سواء للنباتات الطبية والعطرية مع بعضها البعض أو النباتات الطبية والعطرية والمحاصيل الأخرى </a></li>
                                            <li><a href="">•	أجراء البحوث على الزراعات الجافة المطرية من النباتات الطبية والعطرية بمزرعة برج العرب أو المناطق الأخرى حيث توجد طرز مختلفة من النباتات الطبية والعطرية .</a></li>
                                            <li><a href="">•	التوسع في استخدام وإيجاد البدائل المناسبة للتغذية المعدنية وكذلك البدائل الآمنة لمقاومة الأمراض والآفات مثل استخدام مضادات الأكسدة والخمائر والزيوت العطرية وبعض المستخلصات من النباتات الطبية والعطرية والمركبات والأعداء الحيوية وغيرها وذلك بالتنسيق مع الأقسام ذات الصلة.</a></li>
                                            <li><a href="">•	كذلك إجراء البحوث في مجال اقتصاديات النباتات الطبية والعطرية لتحليل بعض معطياتها والتغلب على معوقات التصدير وفتح أسواق جديدة أمام الصادرات المصرية  بالتنسيق مع قسم بحوث الاقتصاد </a></li>
                                        </ul>
                                        <input id="sub-sub-group-4-2" type="checkbox"
                                            hidden />
                                        <label for="sub-sub-group-4-2"><span
                                                class="fa fa-angle-right"></span>
                                            ٢- النشاط الإرشادي</label>
                                        <ul class="sub-sub-group-list">
                                            <li><a href="">•	العمل على إصدار نشرات إرشادية وثقافية عن الإنتاج العضوي للمحاصيل الطبية والعطرية الهامة .</a></li>
                                            <li><a href="">•	الكتابة المنتظمة فى مجلات الإرشاد الزراعي والصحيفة الزراعية.</a></li>
                                            <li><a href="">•	المشاركة فى البرامج الإرشادية الحقلية </a></li>
                                            <li><a href="">•	الاشتراك فى البرامج الإذاعية والتلفزيونية ما أمكن .</a></li>
                                            <li><a href="">•	العمل على إنشاء مزرعة إرشادية للمعمل المركزي للزراعة العضوية فى محافظات مصر المختلفة تكون نموذجا يحتذى به الزرّاع في الإنتاج العضوي للنباتات الطبية والعطرية و المحاصيل المختلفة .</a></li>
                                            <li><a href="">•	العمل على إنشاء وحدة ذات طابع خاص للنباتات الطبية والعطرية بمحطات البحوث لتوفير شتلات وبذور احدث الأصناف والسلالات التي يوصى بها الباحثون للمزارعين والمنتجين بأسعار مناسبة.</a></li>
                                        </ul>
                                        <input id="sub-sub-group-4-3" type="checkbox"
                                            hidden />
                                        <label for="sub-sub-group-4-3"><span
                                                class="fa fa-angle-right"></span>
                                            ٣- النشاط التدريبي والعلمى</label>
                                        <ul class="sub-sub-group-list">
                                            <li><a href="">•	تنفيذ عدد من الدورات التدريبية عن الزراعات العضوية للنباتات الطبية والعطرية بمديريات الزراعة فى مختلف محافظات مصر و فى مواسم الزراعة المختلفة </a></li>
                                            <li><a href="">•	عمل حلقات مناقشة (سيمينار)شهرية منتظمة  </a></li>
                                            <li><a href="">•	محاولة المساهمة فى المشاريع المختلفة سواء كانت قومية أو إقليمية </a></li>
                                            <li><a href="">•	التمثيل فى الحملات القومية من اجل النهوض بتلك الحاصلات </a></li>
                                            <li><a href="">•	القيام بالزيارات والمهام العلمية الخارجية لأعضاء هيئة البحوث لإعداد جيل من الباحثين التكنولوجيين والفنيين القادرين على استيعاب ونقل التكنولوجيا الحديثة .</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
`;
var Department_Specializations_Section_En = `
        <header id="Department_Specializations_Section_En" style="direction: ltr;" role="banner">
            <div class="nav" role="navigation">
                <ul class="nav__list">
                    <li>
                        <input id="group-1" type="checkbox" hidden />
                        <label for="group-1"><span class="fa fa-angle-right"></span>Organic Agriculture Research in
                            Vegetable Crops</label>
                        <ul class="group-list">
                            <li>
                                <input id="sub-group-1-1" type="checkbox" hidden />
                                <label for="sub-group-1-1">Organic Seed Production Methods for Various Vegetable
                                    Crops.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-2" type="checkbox" hidden />
                                <label for="sub-group-1-2">Identifying Organic Sources to Meet Nutritional Needs for
                                    Vegetable Crops.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-3" type="checkbox" hidden />
                                <label for="sub-group-1-3">Identifying Suitable Agricultural Practices for Organic
                                    Vegetable Production.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-4" type="checkbox" hidden />
                                <label for="sub-group-1-4">Determining the Quantities and Types of Fertilizers Necessary
                                    for Supplying Vegetables with Nutrients.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-5" type="checkbox" hidden />
                                <label for="sub-group-1-5">Identifying the Best Varieties for Organic
                                    Production.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-6" type="checkbox" hidden />
                                <label for="sub-group-1-6">Developing Programs to Improve Organic Vegetable
                                    Varieties.</label>
                            </li>
                            <li>
                                <input id="sub-group-1-7" type="checkbox" hidden />
                                <label for="sub-group-1-7">Breeding Programs for Developing New, High-Production Organic
                                    Vegetable Varieties that Suit Organic Farming Conditions.</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input id="group-2" type="checkbox" hidden />
                        <label for="group-2"><span class="fa fa-angle-right"></span>Organic Agriculture Research in
                            Fruit Crops</label>
                        <ul class="group-list">
                            <li>
                                <input id="sub-group-2-1" type="checkbox" hidden />
                                <label for="sub-group-2-1">Identifying Organic Sources to Meet Nutritional Needs for
                                    Fruit Crops.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-2" type="checkbox" hidden />
                                <label for="sub-group-2-2">Determining the Quantities and Types of Fertilizers Necessary
                                    for Supplying Fruit Crops with Nutrients.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-3" type="checkbox" hidden />
                                <label for="sub-group-2-3">Identifying the Best Varieties for Organic
                                    Production.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-4" type="checkbox" hidden />
                                <label for="sub-group-2-4">Identifying the Best Existing Varieties that Suit the Organic
                                    Farming System.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-5" type="checkbox" hidden />
                                <label for="sub-group-2-5">Improving Varieties Using Methods Allowed by Organic Farming
                                    Standards.</label>
                            </li>
                            <li>
                                <input id="sub-group-2-6" type="checkbox" hidden />
                                <label for="sub-group-2-6">Producing New High-Production, High-Quality Varieties and
                                    Hybrids that Suit Organic Farming Conditions.</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input id="group-3" type="checkbox" hidden />
                        <label for="group-3"><span class="fa fa-angle-right"></span>Organic Agriculture Research in
                            Field Crops</label>
                        <ul class="group-list">
                            <li>
                                <input id="sub-group-3-1" type="checkbox" hidden />
                                <label for="sub-group-3-1">Developing Programs to Improve Field Crop Varieties.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-2" type="checkbox" hidden />
                                <label for="sub-group-3-2">Breeding Programs for Producing New, High-Production Organic
                                    Field Crops that Suit Organic Farming Conditions.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-3" type="checkbox" hidden />
                                <label for="sub-group-3-3">Field Operations to Help Protect Crops After Harvest.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-4" type="checkbox" hidden />
                                <label for="sub-group-3-4">Finding Solutions Compatible with Organic Farming Laws to
                                    Address Pest or Disease Problems in Any Crop.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-5" type="checkbox" hidden />
                                <label for="sub-group-3-5">Conducting Research to Protect Organic Crops from Pests After
                                    Harvest.</label>
                            </li>
                            <li>
                                <input id="sub-group-3-6" type="checkbox" hidden />
                                <label for="sub-group-3-6">Evaluating and Testing Biological Compounds Used to Combat
                                    Pests and Diseases to Determine Their Effectiveness and Compatibility with Various
                                    Field Crops.</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input id="group-4" type="checkbox" hidden />
                        <label for="group-4"><span class="fa fa-angle-right"></span>Organic Agriculture Research in
                            Medicinal, Aromatic, and Ornamental Plants</label>
                        <ul class="group-list">
                            <li>
                                <li><a style="line-height: 3rem;" href="#">Medicinal and aromatic plants are
                                        non-traditional crops that are used in many industries, especially the
                                        pharmaceutical industry. The department's activities will include a large number
                                        of plants that are grown and produced in Egypt, most of which are economically
                                        important export crops, such as: chamomile, marjoram, basil, perfume plants,
                                        mint, rose, jasmine, caraway, coriander, anise, cumin, fennel, black seed,
                                        thyme, horehound, lemongrass, marigold, hibiscus, henna, and others.
                                        Medicinal and aromatic plants rank fifth in agricultural exports, following
                                        cotton, rice, citrus fruits, and potatoes. Although the area of medicinal and
                                        aromatic plants constitutes no more than 0.5% of Egypt's cultivated area, their
                                        exports account for 6.3% of the value of agricultural exports.</a></li>

                                <input id="sub-group-4-1" type="checkbox" hidden />
                                <label for="sub-group-4-1"><span class="fa fa-angle-right"></span>Strategic Objectives
                                    of the Department</label>
                                <ul class="sub-group-list">
                                    <li><a href="#">1- Determining the essential agricultural operations to increase and
                                            improve the quality of medicinal, aromatic, and ornamental plants under
                                            organic farming systems.</a></li>
                                    <li><a href="#">2- Identifying the quantities and types of fertilizers necessary for
                                            producing medicinal, aromatic, and ornamental plants organically.</a></li>
                                    <li><a href="#">3- Producing high-quality organic seeds.</a></li>
                                    <li><a href="#">4- Identifying the best existing varieties that are compatible with
                                            organic farming systems.</a></li>
                                    <li><a href="#">5- Improving varieties using methods allowed by organic farming
                                            standards.</a></li>
                                    <li><a href="#">6- Producing new, high-production, high-quality varieties and
                                            hybrids that suit organic farming conditions for medicinal, aromatic, and
                                            ornamental plants.</a></li>
                                    <li><a href="#">7- Maximizing yield while improving quality to meet the export
                                            market needs.</a></li>
                                    <li><a href="#">8- Achieving the optimal amount of active compounds in the
                                            plant.</a></li>
                                    <li><a href="#">9- Avoiding harmful chemicals and pesticides in production, using
                                            safe alternatives.</a></li>
                                    <li><a href="#">10- Reducing production costs and minimizing crop loss by using
                                            automated systems for farming and harvesting, improving post-harvest
                                            practices.</a></li>
                                </ul>
                            </li>
                            <li>
                                <input id="sub-group-4-2" type="checkbox" hidden />
                                <label for="sub-group-4-2"><span class="fa fa-angle-right"></span>The Plan Focuses on
                                    Three Main Areas</label>
                                <ul class="sub-group-list">
                                    <li>
                                        <input id="sub-sub-group-4-1" type="checkbox" hidden />
                                        <label for="sub-sub-group-4-1"><span class="fa fa-angle-right"></span>1-
                                            Research Activities</label>
                                        <ul class="sub-sub-group-list">
                                            <li><a href=""> Conducting applied research to recommend the best practices
                                                    to increase organic production, improve quality, and reduce loss,
                                                    such as research on fertilization, nutrition, planting density,
                                                    methods, and harvest treatments.</a></li>
                                            <li><a href=""> Studies on selection and breeding programs for local
                                                    varieties, improving them or crossing them with imported varieties
                                                    to produce cultivars resistant to local conditions, pests, and
                                                    diseases.</a></li>
                                            <li><a href=""> Producing certified seeds for distribution to seed
                                                    companies, with central organic farming lab supervision.</a></li>
                                            <li><a href=""> Evaluating imported varieties that suit Egypt’s climate and
                                                    promoting their cultivation.</a></li>
                                            <li><a href=""> Researching the effects of environmental conditions and
                                                    climate changes on medicinal and aromatic plant varieties in
                                                    different regions of Egypt.</a></li>
                                            <li><a href=""> Researching water and salt stress in medicinal and aromatic
                                                    plants to expand their cultivation in new reclaimed areas.</a></li>
                                            <li><a href=""> Encouraging research under modern irrigation systems.</a>
                                            </li>
                                            <li><a href=""> Investigating mixed cropping systems with medicinal and
                                                    aromatic plants.</a></li>
                                            <li><a href=""> Conducting research on dryland agriculture for medicinal
                                                    and aromatic plants in various areas such as Borg El Arab farm.</a>
                                            </li>
                                            <li><a href=""> Developing training programs for organic agriculture for
                                                    both farmers and agronomists.</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <input id="sub-sub-group-4-2" type="checkbox" hidden />
                                        <label for="sub-sub-group-4-2"><span class="fa fa-angle-right"></span>2-
                                            Evaluation of Organic Products and Certification</label>
                                        <ul class="sub-sub-group-list">
                                            <li><a href="">Work on issuing advisory and cultural bulletins on organic
                                                    production of important medicinal and aromatic crops.
                                            </a></li>
                                            <li><a href="">Write regularly in agricultural extension magazines and the
                                                    agricultural newspaper.
                                            </a></li>
                                            <li><a href="">Participate in field extension programs.
                                            </a></li>
                                            <li><a href="">Engage in radio and television programs whenever possible.
                                            </a></li>
                                            <li><a href="">Work on establishing an advisory farm for the Central Lab of
                                                    Organic Agriculture in various governorates of Egypt to serve as a
                                                    model for farmers in organic production of medicinal and aromatic
                                                    plants and various crops.
                                            </a></li>
                                            <li><a href="">Work on establishing a specialized unit for medicinal and
                                                    aromatic plants at research stations to provide seedlings and seeds
                                                    of the latest varieties and strains recommended by researchers to
                                                    farmers and producers at affordable prices.
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <input id="sub-sub-group-4-3" type="checkbox" hidden />
                                        <label for="sub-sub-group-4-3"><span class="fa fa-angle-right"></span>3-
                                            Sustainable Crop Production and Environmental Impact</label>
                                        <ul class="sub-sub-group-list">
                                            <li><a href="">Implement a number of training courses on organic farming for
                                                    medicinal and aromatic plants in agricultural directorates across
                                                    various governorates of Egypt and during different planting seasons.
                                            </a></li>
                                            <li><a href="">Hold regular monthly discussion sessions (seminars).
                                            </a></li>
                                            <li><a href="">Attempt to contribute to various projects, whether national
                                                    or regional.
                                            </a></li>
                                            <li><a href="">Represent in national campaigns aimed at promoting these
                                                    crops.
                                            </a></li>
                                            <li><a href="">Conduct external scientific visits and tasks for research
                                                    staff to prepare a generation of technological researchers and
                                                    technicians capable of understanding and transferring modern
                                                    technology.
                                            </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
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
        <div class="descr">تقييم بعض النباتات الطبية والعطرية كمضادات أكسدة (رسالة دكتوراه)</div>
    </li>
    <li style="--accent-color:#f20071;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">٢</div>
        <div class="descr">تأثير الزراعة العضوية على بعض الخصائص البيولوجية والمورفولوجية لذكور نحل العسل (رسالة دكتوراه)</div>
    </li>
    <li style="--accent-color:#FCBA35;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">٣</div>
        <div class="descr">استجابة نخيل البلح السمانى لطرق ومواعيد مختلفة من خف الثمار تحت ظروف اسيوط</div>
    </li>
    <li style="--accent-color:#DAE438;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">٤</div>
        <div class="descr">ثبات التراكيب الوراثية تحت مصادر ومستويات مختلفة من السماد النيتروجينى باستخدام نموذج التأثير المضيف والتفاعل المتضاعف (AMMI) ونموذج البلوت الثنائي (GGE-Biplot) للتفاعل بين التركيب الوراثي والبيئة</div>
    </li>
    <li style="--accent-color:#994D7F;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">٥</div>
        <div class="descr">التحليل متعدد التباين للتباعد الوراثي بين سبع وثلاثين تركيب وراثي من الكينوا تحت التسميد العضوي والمعدني</div>
    </li>
    <li style="--accent-color:#994D7F;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">٦</div>
        <div class="descr">كفاءة التوريث والتقدم الوراثي والإرتباطات بين صفات الكينوا تحت ظروف السماد العضوي والمعدني منخفض ومتوسط وعالي النيتروجين</div>
    </li>
    <li style="--accent-color:#DAE438;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">٧</div>
        <div class="descr">تحمل النيتروجين المنخفض وكفاءة استخدام النيتروجين والاستجابة لسبع وثلاثين تركيب وراثي من الكينوا تحت ظروف السماد العضوي</div>
    </li>
    <li style="--accent-color:#FCBA35;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">٨</div>
        <div class="descr">الاستجابة المختلفة لتراكيب وراثية من الكينوا للسماد العضوي والكيماوي بمعدلات إضافة نيتروجينية مختلفة</div>
    </li>
    <li style="--accent-color:#f20071;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">٩</div>
        <div class="descr">تأثير الشيتوزان ومستخلص الكركم على الاثمار في العنب الفليم سيدليس</div>
    </li>
    <li style="--accent-color:#60c5a6;">
        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="title">١٠</div>
        <div class="descr">تأثير الأنماط الوراثية والأجزاء النباتية على إنتاج كالس الثوم والهرمونات الداخلية</div>
    </li>
</ul>
`;
var Research_Publications_Section_En = `
    <ul id="Research_Publications_UL_En" style="direction: ltr;">
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">1</div>
            <div class="descr">Evaluation of some medicinal and aromatic plants as antioxidants (PhD Thesis)</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">2</div>
            <div class="descr">The effect of organic farming on some biological and morphological traits of male honeybees (PhD Thesis)</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">3</div>
            <div class="descr">Response of Saman date palm to different thinning methods and timings under Assiut conditions</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">4</div>
            <div class="descr">Stability of genetic structures under different sources and levels of nitrogen fertilizer using the Additive Main Effects and Multiplicative Interaction (AMMI) model and the Genetic + Environment (GGE) Biplot model</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">5</div>
            <div class="descr">Multivariate analysis of genetic divergence between thirty-seven genetic structures of quinoa under organic and mineral fertilization</div>
        </li>
        <li style="--accent-color:#994D7F;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">6</div>
            <div class="descr">Heritability efficiency, genetic progress, and correlations between quinoa traits under low, medium, and high nitrogen organic and mineral fertilizer conditions</div>
        </li>
        <li style="--accent-color:#DAE438;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">7</div>
            <div class="descr">Tolerance to low nitrogen, nitrogen use efficiency, and response of 37 quinoa genetic structures under organic fertilization conditions</div>
        </li>
        <li style="--accent-color:#FCBA35;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">8</div>
            <div class="descr">Different responses of quinoa genetic structures to organic and chemical fertilizers with different nitrogen addition rates</div>
        </li>
        <li style="--accent-color:#f20071;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">9</div>
            <div class="descr">Effect of chitosan and turmeric extract on fruiting in flame seedless grapes</div>
        </li>
        <li style="--accent-color:#60c5a6;">
            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div class="title">10</div>
            <div class="descr">Effect of genetic patterns and plant parts on garlic callus production and endogenous hormones</div>
        </li>
    </ul>
`;

var Departement_Hirarchy_Section_Ar = `
<img style="width: 100%;" src="../Images/Research Departements/Arabic Hirarchy/Final/Enhanced/Agricultural_Practices_Hirarchy_Ar-Picsart-AiImageEnhancer.jpg" alt="">
`;
var Departement_Hirarchy_Section_En = `
<img style="width: 100%;" src="../Images/Research Departements/English Hirarchy/Final/Enhanced/Agricultural_Practices_Hirarchy_En-Picsart-AiImageEnhancer.jpg" alt="">
`;

function Agricultural_Practices_Dep_Load_Content_Ar() {
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
  Department_Specializations_Section.innerHTML =
    Department_Specializations_Section_Ar;
  Departement_Hirarchy_Section.innerHTML = Departement_Hirarchy_Section_Ar;
}
function Agricultural_Practices_Dep_Load_Content_En() {
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
  Department_Specializations_Section.innerHTML =
    Department_Specializations_Section_En;
  Departement_Hirarchy_Section.innerHTML = Departement_Hirarchy_Section_En;
}
if (localStorage.getItem("Permenant_Language") === "English") {
  Agricultural_Practices_Dep_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Agricultural_Practices_Dep_Load_Content_Ar();
}
