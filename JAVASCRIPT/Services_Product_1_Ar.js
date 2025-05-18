var Product_1_Section = document.getElementById("Product_1_Section");
var Article_Modals_Container = document.getElementById(
  "Article_Modals_Container"
);
var Title_H1 = document.getElementById("Title_H1");

var Title_H1_Ar = `
منتجات الوحدة ١
`;

var Article_Modals_Container_Ar = `
<article style="direction: rtl;" id="Modals_Container_Ar">
        <div id="modal_1" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة الأمراض الفطرية الورقية</h1>
            <p>
                <img src="../Images/Secondary Products/Bio_Act_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Bio Act Registration code.png" alt="">
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        Biocide7
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            خليط من عزلات الأكتينوميستات وفطريات الترايكوديرما المعروفة بخصائصها الصديقة للبيئة
                            وعدم التسبب في مقاومة الأمراض. تم تطويره بتقنية الجل لضمان بقاء أطول على سطح الأوراق
                            وتقليل الفقد، مما يعزز من فعاليته.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الأمراض المستهدفة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>البياض الدقيقي، تبقعات الأوراق، اللفحات، وتعفن الثمار في الخضروات والفراولة.</li>
                        <li>البياض الزغبي، الصدأ، اللفحة المبكرة، الأنثراكنوز، والوقاية من تعفن الثمار
                            في المحاصيل الحقلية (القمح)، الخضروات (الخيار، الفلفل، الفاصوليا، الفراولة)،
                            النباتات الطبية (البابونج، النعناع، الكمون، الآذريون)، والأشجار المثمرة
                            (المانجو، العنب، الخوخ، التفاح، المشمش، الكمثرى).</li>
                        <li>يزيد من فترة تخزين الثمار بعد الحصاد.</li>
                        <li>يعمل كمحفز طبيعي للنمو، حيث يحفز إنتاج الهرمونات النباتية والمركبات الحيوية
                            لتعزيز الإنتاجية.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>آمن بيئيًا ولا يترك أي بقايا مبيدات.</li>
                        <li>لا يؤثر على الكائنات الدقيقة المفيدة.</li>
                        <li>الاستخدام المتكرر يساعد في تحلل بقايا المبيدات.</li>
                        <li>يحافظ على جودة الثمار ويطيل فترة التخزين بعد الحصاد.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة التطبيق</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>1 لتر لكل 150 لترًا من الماء.</li>
                        <li>يجب ضمان التغطية الكاملة للأوراق.</li>
                        <li>يُكرر كل 15 يومًا.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">تعليمات الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُطبق باستخدام رشاش محرك.</li>
                        <li>لا يُخلط مع المبيدات أو الأسمدة.</li>
                        <li>يُفضل تجنب الرش في الرياح القوية.</li>
                        <li>يُفضل الرش في الصباح الباكر أو في وقت متأخر من اليوم.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُخزن في مكان جيد التهوية، بعيدًا عن أشعة الشمس المباشرة وبعيدًا عن متناول الأطفال.</li>
                        <li>مدة الصلاحية: 6 أشهر من تاريخ الإنتاج.</li>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_1_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة الأمراض الفطرية الورقية</h1>
            <p>
                <img src="../Images/Secondary Products/Bio_Act_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Bio Act Registration code.png" alt="">
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        Biocide7
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            خليط من عزلات الأكتينوميستات وفطريات الترايكوديرما المعروفة بخصائصها الصديقة للبيئة
                            وعدم التسبب في مقاومة الأمراض. تم تطويره بتقنية الجل لضمان بقاء أطول على سطح الأوراق
                            وتقليل الفقد، مما يعزز من فعاليته.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الأمراض المستهدفة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>البياض الدقيقي، تبقعات الأوراق، اللفحات، وتعفن الثمار في الخضروات والفراولة.</li>
                        <li>البياض الزغبي، الصدأ، اللفحة المبكرة، الأنثراكنوز، والوقاية من تعفن الثمار
                            في المحاصيل الحقلية (القمح)، الخضروات (الخيار، الفلفل، الفاصوليا، الفراولة)،
                            النباتات الطبية (البابونج، النعناع، الكمون، الآذريون)، والأشجار المثمرة
                            (المانجو، العنب، الخوخ، التفاح، المشمش، الكمثرى).</li>
                        <li>يزيد من فترة تخزين الثمار بعد الحصاد.</li>
                        <li>يعمل كمحفز طبيعي للنمو، حيث يحفز إنتاج الهرمونات النباتية والمركبات الحيوية
                            لتعزيز الإنتاجية.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>آمن بيئيًا ولا يترك أي بقايا مبيدات.</li>
                        <li>لا يؤثر على الكائنات الدقيقة المفيدة.</li>
                        <li>الاستخدام المتكرر يساعد في تحلل بقايا المبيدات.</li>
                        <li>يحافظ على جودة الثمار ويطيل فترة التخزين بعد الحصاد.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة التطبيق</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>1 لتر لكل 150 لترًا من الماء.</li>
                        <li>يجب ضمان التغطية الكاملة للأوراق.</li>
                        <li>يُكرر كل 15 يومًا.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">تعليمات الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُطبق باستخدام رشاش محرك.</li>
                        <li>لا يُخلط مع المبيدات أو الأسمدة.</li>
                        <li>يُفضل تجنب الرش في الرياح القوية.</li>
                        <li>يُفضل الرش في الصباح الباكر أو في وقت متأخر من اليوم.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُخزن في مكان جيد التهوية، بعيدًا عن أشعة الشمس المباشرة وبعيدًا عن متناول الأطفال.</li>
                        <li>مدة الصلاحية: 6 أشهر من تاريخ الإنتاج.</li>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب سماد حيوي <br> (إذابة الفوسفور)</h1>
            <p>
                <img src="../Images/Secondary Products/Bio_P_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            سماد حيوي يحتوي على بكتيريا مذيبة للفوسفات
                            (باكيليوس ميجاتيريوم نوع فوسفاتيكم)، والتي تقوم بتحويل الفوسفور غير القابل
                            للذوبان
                            إلى صورة ميسرة للنبات.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يعزز امتصاص الفوسفور، مما يقلل الحاجة لاستخدام الأسمدة الفوسفاتية بنسبة 15–30%.</li>
                        <li>يساعد على تطوير الجذور والسيقان.</li>
                        <li>صديق للبيئة ويحسن صحة التربة.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة التطبيق</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>5–12 لترًا لكل فدان، يتم تطبيقها على ثلاث جرعات من الزراعة حتى الإزهار.</li>
                        <li>يُطبق خلال آخر 15 دقيقة من الري.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُخزن في مكان بارد ومظلل.</li>
                        <li>مدة الصلاحية: 1–3 أشهر من تاريخ الإنتاج.</li>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_2_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب سماد حيوي <br> (إذابة الفوسفور)</h1>
            <p>
                <img src="../Images/Secondary Products/Bio_P_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            سماد حيوي يحتوي على بكتيريا مذيبة للفوسفات
                            (باكيليوس ميجاتيريوم نوع فوسفاتيكم)، والتي تقوم بتحويل الفوسفور غير القابل
                            للذوبان
                            إلى صورة ميسرة للنبات.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يعزز امتصاص الفوسفور، مما يقلل الحاجة لاستخدام الأسمدة الفوسفاتية بنسبة 15–30%.</li>
                        <li>يساعد على تطوير الجذور والسيقان.</li>
                        <li>صديق للبيئة ويحسن صحة التربة.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة التطبيق</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>5–12 لترًا لكل فدان، يتم تطبيقها على ثلاث جرعات من الزراعة حتى الإزهار.</li>
                        <li>يُطبق خلال آخر 15 دقيقة من الري.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُخزن في مكان بارد ومظلل.</li>
                        <li>مدة الصلاحية: 1–3 أشهر من تاريخ الإنتاج.</li>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_3" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>مركب سماد حيوي <br> (إذابة البوتاسيوم)</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_K_Img .png" alt="" />
                    </p>
                    <details class="parent">
                        <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary style="padding: 5px 40px;">
                        <div>
                            <ul>
                                <p>
                                    سماد حيوي يحتوي على بكتيريا مذيبة للبوتاسيوم
                                    (باكيلوس سيركولانز)، والتي تقوم بتحويل البوتاسيوم غير القابل للذوبان إلى
                                    صورة ميسرة للنبات.
                                </p>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                        <div>
                            <ul>
                                <li>يعزز توفر البوتاسيوم، مما يقلل الحاجة لاستخدام الأسمدة البوتاسية بنسبة 15–30%.</li>
                                <li>يدعم عمليات الإزهار وتكوين الثمار.</li>
                                <li>صديق للبيئة ويحسن صحة التربة.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary style="padding: 5px 40px;">الجرعة وطريقة التطبيق</summary style="padding: 5px 40px;">
                        <div>
                            <ul>
                                <li>5–12 لترًا لكل فدان، يتم تطبيقها على ثلاث جرعات قبل الإزهار وتكوين الثمار.</li>
                                <li>يُطبق خلال آخر 15 دقيقة من الري.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                        <div>
                            <ul>
                                <li>يُخزن في مكان بارد ومظلل.</li>
                                <li>مدة الصلاحية: 1–3 أشهر من تاريخ الإنتاج.</li>
                            </ul>
                        </div>
                    </details>

                    <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                        <svg class="" viewBox="0 0 24 24">
                            <path
                                d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                            <path d="M0 0h24v24h-24z" fill="none" /></svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="modal_3_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>مركب سماد حيوي <br> (إذابة البوتاسيوم)</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_K_Img .png" alt="" />
                    </p>
                    <details class="parent">
                        <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary style="padding: 5px 40px;">
                        <div>
                            <ul>
                                <p>
                                    سماد حيوي يحتوي على بكتيريا مذيبة للبوتاسيوم
                                    (باكيلوس سيركولانز)، والتي تقوم بتحويل البوتاسيوم غير القابل للذوبان إلى
                                    صورة ميسرة للنبات.
                                </p>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                        <div>
                            <ul>
                                <li>يعزز توفر البوتاسيوم، مما يقلل الحاجة لاستخدام الأسمدة البوتاسية بنسبة 15–30%.</li>
                                <li>يدعم عمليات الإزهار وتكوين الثمار.</li>
                                <li>صديق للبيئة ويحسن صحة التربة.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary style="padding: 5px 40px;">الجرعة وطريقة التطبيق</summary style="padding: 5px 40px;">
                        <div>
                            <ul>
                                <li>5–12 لترًا لكل فدان، يتم تطبيقها على ثلاث جرعات قبل الإزهار وتكوين الثمار.</li>
                                <li>يُطبق خلال آخر 15 دقيقة من الري.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                        <div>
                            <ul>
                                <li>يُخزن في مكان بارد ومظلل.</li>
                                <li>مدة الصلاحية: 1–3 أشهر من تاريخ الإنتاج.</li>
                            </ul>
                        </div>
                    </details>

                    <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                        <svg class="" viewBox="0 0 24 24">
                            <path
                                d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                            <path d="M0 0h24v24h-24z" fill="none" /></svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="modal_4" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب سماد حيوي <br> (تثبيت النيتروجين)</h1>
            <p>
                <img src="../Images/Secondary Products/Bio_N_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            سماد حيوي يحتوي على بكتيريا مثبتة للنيتروجين
                            (أزوتوباكتر كروكوكم)، والتي تقوم بتحويل النيتروجين الجوي إلى أمونيا متاحة
                            للنبات.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يقلل الحاجة إلى الأسمدة النيتروجينية الكيميائية بنسبة 15–25%.</li>
                        <li>يعزز نمو النبات وتطور الجذور.</li>
                        <li>يدعم عملية الإزهار وإنتاج الثمار.</li>
                        <li>مناسب للزراعة العضوية والتقليدية.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة التطبيق</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>5–12 لترًا لكل فدان، يتم تطبيقها على ثلاث جرعات من الزراعة حتى ما قبل الإزهار.</li>
                        <li>يتم تطبيقه مع مياه الري خلال آخر 15 دقيقة من الري.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُخزن في مكان بارد ومظلل.</li>
                        <li>مدة الصلاحية: 1–3 أشهر من تاريخ الإنتاج.</li>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_4_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب سماد حيوي <br> (تثبيت النيتروجين)</h1>
            <p>
                <img src="../Images/Secondary Products/Bio_N_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            سماد حيوي يحتوي على بكتيريا مثبتة للنيتروجين
                            (أزوتوباكتر كروكوكم)، والتي تقوم بتحويل النيتروجين الجوي إلى أمونيا متاحة
                            للنبات.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يقلل الحاجة إلى الأسمدة النيتروجينية الكيميائية بنسبة 15–25%.</li>
                        <li>يعزز نمو النبات وتطور الجذور.</li>
                        <li>يدعم عملية الإزهار وإنتاج الثمار.</li>
                        <li>مناسب للزراعة العضوية والتقليدية.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة التطبيق</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>5–12 لترًا لكل فدان، يتم تطبيقها على ثلاث جرعات من الزراعة حتى ما قبل الإزهار.</li>
                        <li>يتم تطبيقه مع مياه الري خلال آخر 15 دقيقة من الري.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُخزن في مكان بارد ومظلل.</li>
                        <li>مدة الصلاحية: 1–3 أشهر من تاريخ الإنتاج.</li>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_5" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب مقاوم لديدان النيماتودا الجذرية</h1>
            <p>
                <img src="../Images/Secondary Products/Anti_Nema_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">الكائنات الحية الدقيقة النشطة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            سلالات متكيفة من بكتيريا سيراتيا مارسيزنس بتركيزات تتراوح بين
                            1 × 10⁵ إلى 1 × 10⁷
خلية لكل مليلتر.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            مركب بيولوجي يحتوي على مجموعة من الكائنات الحية الدقيقة التي تفرز إنزيمات تعمل على
                            تحلل يرقات النيماتودا في التربة، مما يستهدف الإصابة في جذور النباتات بشكل خاص.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>معالجة حيوية وقائية للنيماتودا الجذرية، تقلل الحاجة إلى المبيدات الكيميائية.</li>
                        <li>يزيد من إنتاجية وجودة المحاصيل.</li>
                        <li>يساعد في تقليل أو منع استخدام المبيدات الكيميائية.</li>
                        <li>موصى به لكل من الزراعة العضوية والتقليدية.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">معدل الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            يتم التطبيق بمعدل 8-10 لترات لكل فدان، مقسمة على 3-4 دفعات، وفقًا لتحليل النيماتودا في
                            التربة.
                            يضاف المنتج إلى مياه الري خلال آخر 15 دقيقة من الري دون إضافة أي مواد كيميائية.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">ظروف التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            يُحفظ المنتج في مكان مظلل أو في درجة حرارة الغرفة، مع تجنب التعرض لدرجات الحرارة العالية.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            من شهر إلى 3 أشهر من تاريخ الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_5_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب مقاوم لديدان النيماتودا الجذرية</h1>
            <p>
                <img src="../Images/Secondary Products/Anti_Nema_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">الكائنات الحية الدقيقة النشطة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            سلالات متكيفة من بكتيريا سيراتيا مارسيزنس بتركيزات تتراوح بين
                            1 × 10<sup>5</sup> إلى 1 × 10<sup>7</sup> خلية لكل مليلتر.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            مركب بيولوجي يحتوي على مجموعة من الكائنات الحية الدقيقة التي تفرز إنزيمات تعمل على
                            تحلل يرقات النيماتودا في التربة، مما يستهدف الإصابة في جذور النباتات بشكل خاص.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>معالجة حيوية وقائية للنيماتودا الجذرية، تقلل الحاجة إلى المبيدات الكيميائية.</li>
                        <li>يزيد من إنتاجية وجودة المحاصيل.</li>
                        <li>يساعد في تقليل أو منع استخدام المبيدات الكيميائية.</li>
                        <li>موصى به لكل من الزراعة العضوية والتقليدية.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">معدل الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            يتم التطبيق بمعدل 8-10 لترات لكل فدان، مقسمة على 3-4 دفعات، وفقًا لتحليل النيماتودا في
                            التربة.
                            يضاف المنتج إلى مياه الري خلال آخر 15 دقيقة من الري دون إضافة أي مواد كيميائية.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">ظروف التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            يُحفظ المنتج في مكان مظلل أو في درجة حرارة الغرفة، مع تجنب التعرض لدرجات الحرارة العالية.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            من شهر إلى 3 أشهر من تاريخ الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_6" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب منشط للجذور</h1>
            <p>
                <img src="../Images/Secondary Products/Root_Active_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            مركب يحتوي على مجموعة من الكائنات الحية الدقيقة ذات القدرة العالية على إنتاج
                            مواد محفزة للنمو مثل الجبريلينات، نظائر السيتوكينين، الأوكسينات،
                            وحمض الإندول-3-أسيتيك (IAA).
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            مزيج من سلالات بكتيرية تفرز مواد مختلفة تحفز نمو الجذور،
                            مما يعزز مساحة الشعيرات الجذرية وتطور نظام الجذور بشكل عام
                            (PGPR – بكتيريا تعزيز نمو النبات في منطقة الجذور).
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>فعال للغاية في إنتاج العديد من المركبات الثانوية مثل المضادات الحيوية، السيانيد،
                            والفيتوهورمونات.</li>
                        <li>يعزز إنتاج الـ "سيدروفورات"، التي تسهل توافر الحديد للنباتات.</li>
                        <li>يقمع مسببات الأمراض الجذرية، ويذيب الفوسفور، ويحوّله إلى أشكال قابلة للامتصاص بسهولة.</li>
                        <li>يقوي مقاومة النبات للكائنات الممرضة مع تحفيز إفراز بعض منظمات النمو.</li>
                        <li>يمنع نشاط مثبطات نمو الكائنات الدقيقة ويعزز كفاءة امتصاص المغذيات في النبات.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُستخدم بمعدل 8-12 لترًا لكل فدان، مقسمة على 2-3 جرعات.</li>
                        <li>يُضاف المركب خلال آخر 15 دقيقة من الري باستخدام مياه ري خالية من المواد الكيميائية.</li>
                        <li>يُمنع خلط المركب مع أي مواد كيميائية.</li>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_6_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب منشط للجذور</h1>
            <p>
                <img src="../Images/Secondary Products/Root_Active_Img .png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            مركب يحتوي على مجموعة من الكائنات الحية الدقيقة ذات القدرة العالية على إنتاج
                            مواد محفزة للنمو مثل الجبريلينات، نظائر السيتوكينين، الأوكسينات،
                            وحمض الإندول-3-أسيتيك (IAA).
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            مزيج من سلالات بكتيرية تفرز مواد مختلفة تحفز نمو الجذور،
                            مما يعزز مساحة الشعيرات الجذرية وتطور نظام الجذور بشكل عام
                            (PGPR – بكتيريا تعزيز نمو النبات في منطقة الجذور).
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>فعال للغاية في إنتاج العديد من المركبات الثانوية مثل المضادات الحيوية، السيانيد،
                            والفيتوهورمونات.</li>
                        <li>يعزز إنتاج الـ "سيدروفورات"، التي تسهل توافر الحديد للنباتات.</li>
                        <li>يقمع مسببات الأمراض الجذرية، ويذيب الفوسفور، ويحوّله إلى أشكال قابلة للامتصاص بسهولة.</li>
                        <li>يقوي مقاومة النبات للكائنات الممرضة مع تحفيز إفراز بعض منظمات النمو.</li>
                        <li>يمنع نشاط مثبطات نمو الكائنات الدقيقة ويعزز كفاءة امتصاص المغذيات في النبات.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُستخدم بمعدل 8-12 لترًا لكل فدان، مقسمة على 2-3 جرعات.</li>
                        <li>يُضاف المركب خلال آخر 15 دقيقة من الري باستخدام مياه ري خالية من المواد الكيميائية.</li>
                        <li>يُمنع خلط المركب مع أي مواد كيميائية.</li>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" /></svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_7" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة أمراض الجذور</h1>
            <p>
                <img src="../Images/Secondary Products/Salt_Free_-removebg-preview.png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Salt Free Registration code.png" alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        SC26
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يستخدم لمعالجة التأثيرات الضارة لملوحة التربة على النباتات.</li>
                        <li>يحسن خصائص التربة ويعزز امتصاص المغذيات.</li>
                        <li>يقلل من مخاطر الملوحة على النباتات عند الري بالمياه المالحة.</li>
                        <li>يعزز تجديد ونمو الجذور بفضل الأحماض العضوية.</li>
                        <li>يوفر مصدرًا للكالسيوم يسهل امتصاصه من قبل النباتات.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">معدل الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُستخدم بمعدل 15-30 لترًا لكل فدان حسب مستوى ملوحة التربة.</li>
                        <li>يُخلط مع مياه الري خلال آخر 10 دقائق من الري بالتنقيط أو الرش.</li>
                        <li>يُستخدم مرة واحدة في الموسم.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>يُخزن في مكان جيد التهوية.</p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>سنتان.</p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_7_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة أمراض الجذور</h1>
            <p>
                <img src="../Images/Secondary Products/Salt_Free_-removebg-preview.png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Salt Free Registration code.png" alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        SC26
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يستخدم لمعالجة التأثيرات الضارة لملوحة التربة على النباتات.</li>
                        <li>يحسن خصائص التربة ويعزز امتصاص المغذيات.</li>
                        <li>يقلل من مخاطر الملوحة على النباتات عند الري بالمياه المالحة.</li>
                        <li>يعزز تجديد ونمو الجذور بفضل الأحماض العضوية.</li>
                        <li>يوفر مصدرًا للكالسيوم يسهل امتصاصه من قبل النباتات.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">معدل الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يُستخدم بمعدل 15-30 لترًا لكل فدان حسب مستوى ملوحة التربة.</li>
                        <li>يُخلط مع مياه الري خلال آخر 10 دقائق من الري بالتنقيط أو الرش.</li>
                        <li>يُستخدم مرة واحدة في الموسم.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>يُخزن في مكان جيد التهوية.</p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>سنتان.</p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_8" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة أمراض الجذور</h1>
            <p>
                <img src="../Images/Secondary Products/Anti_Frost-removebg-preview.png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Antifrost Registration code.png" alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        NF36
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            مركب غذائي طبيعي للنبات مصمم بتقنية متقدمة يعمل على فسيولوجيا النبات من خلال تغليف
                            سطح الأجزاء المعالجة بطبقة رقيقة تحميها من أضرار الصقيع.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المادة الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            أملاح الكالسيوم المغلفة بالأحماض العضوية (15%).
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يقوي جدران الخلايا، مما يجعل النباتات أكثر مقاومة للظروف القاسية مثل الصقيع والعواصف
                            والملوحة.</li>
                        <li>يعمل الكالسيوم على زيادة سمك جدران الخلايا وتحسين تماسك الأزهار وعقد الثمار وجودتها.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">معدل الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            يستخدم بمعدل 1 لتر لكل 150 لترًا من الماء، ويرش قبل 48 ساعة من حدوث الصقيع.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            يخزن في أماكن جيدة التهوية، بعيدًا عن أشعة الشمس المباشرة، وبعيدًا عن متناول الأطفال.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            سنتان من تاريخ الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_8_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة أمراض الجذور</h1>
            <p>
                <img src="../Images/Secondary Products/Anti_Frost-removebg-preview.png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Antifrost Registration code.png" alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        NF36
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            مركب غذائي طبيعي للنبات مصمم بتقنية متقدمة يعمل على فسيولوجيا النبات من خلال تغليف
                            سطح الأجزاء المعالجة بطبقة رقيقة تحميها من أضرار الصقيع.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المادة الفعالة</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            أملاح الكالسيوم المغلفة بالأحماض العضوية (15%).
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <li>يقوي جدران الخلايا، مما يجعل النباتات أكثر مقاومة للظروف القاسية مثل الصقيع والعواصف
                            والملوحة.</li>
                        <li>يعمل الكالسيوم على زيادة سمك جدران الخلايا وتحسين تماسك الأزهار وعقد الثمار وجودتها.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">معدل الاستخدام</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            يستخدم بمعدل 1 لتر لكل 150 لترًا من الماء، ويرش قبل 48 ساعة من حدوث الصقيع.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            يخزن في أماكن جيدة التهوية، بعيدًا عن أشعة الشمس المباشرة، وبعيدًا عن متناول الأطفال.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        <p>
                            سنتان من تاريخ الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_9" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة الآفات</h1>
            <p>
                <img src="../Images/Secondary Products/No_Sosa-removebg-preview.png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary>
                <div>
                    <ul>
                        <p>
                            مركب عضوي يحتوي على مزيج من الزيوت النباتية المعتمدة في الزراعة العضوية. تعمل هذه الزيوت
                            على تعطيل الجهاز التنفسي للحشرات
                            عن طريق سد فتحات التنفس واختراقها بالمركبات المتطايرة، مما يؤدي في النهاية إلى القضاء
                            على الآفة في جميع مراحل حياتها، من اليرقات إلى البالغين.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الآفات المستهدفة</summary>
                <div>
                    <ul>
                        <p>
                            فعال ضد سوسة النخيل الحمراء في جميع مراحل تطورها، ويستخدم كعلاج وقائي وعلاجي.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة الاستخدام</summary>
                <div>
                    <ul>
                        <li>في حالة الإصابة: يتم خلط 1 لتر مع 20 لترًا من الماء. يتم حفر ثقوب في مناطق الإصابة، ثم
                            يتم حقن المحلول وإغلاق الثقوب بالطين أو الجبس أو الشمع أو أي مواد أخرى مناسبة.</li>
                        <li>كإجراء وقائي: يتم تطبيقه بعد التقليم، حيث تجذب الجروح الناتجة عن التقليم سوسة النخيل
                            الحمراء. يعمل المركب كطارد للآفة.</li>
                        <li>يتم تخفيف 1 لتر لكل 30 لترًا من الماء ورش الجروح الناتجة عن التقليم كمادة مانعة لجذب
                            الآفات.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">ملاحظات هامة</summary>
                <div>
                    <ul>
                        <p>
                            لا يُخلط مع مركبات أخرى.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary>
                <div>
                    <ul>
                        <li>يُحفظ في مكان جيد التهوية، بعيدًا عن أشعة الشمس المباشرة وبعيدًا عن متناول الأطفال.</li>
                        <li>مدة الصلاحية: سنتان من تاريخ الإنتاج.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary>
                <div>
                    <ul>
                        <p>
                            سنتان من تاريخ الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_9_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة الآفات</h1>
            <p>
                <img src="../Images/Secondary Products/No_Sosa-removebg-preview.png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب والمكونات الفعالة</summary>
                <div>
                    <ul>
                        <p>
                            مركب عضوي يحتوي على مزيج من الزيوت النباتية المعتمدة في الزراعة العضوية. تعمل هذه الزيوت
                            على تعطيل الجهاز التنفسي للحشرات
                            عن طريق سد فتحات التنفس واختراقها بالمركبات المتطايرة، مما يؤدي في النهاية إلى القضاء
                            على الآفة في جميع مراحل حياتها، من اليرقات إلى البالغين.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الآفات المستهدفة</summary>
                <div>
                    <ul>
                        <p>
                            فعال ضد سوسة النخيل الحمراء في جميع مراحل تطورها، ويستخدم كعلاج وقائي وعلاجي.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة الاستخدام</summary>
                <div>
                    <ul>
                        <li>في حالة الإصابة: يتم خلط 1 لتر مع 20 لترًا من الماء. يتم حفر ثقوب في مناطق الإصابة، ثم
                            يتم حقن المحلول وإغلاق الثقوب بالطين أو الجبس أو الشمع أو أي مواد أخرى مناسبة.</li>
                        <li>كإجراء وقائي: يتم تطبيقه بعد التقليم، حيث تجذب الجروح الناتجة عن التقليم سوسة النخيل
                            الحمراء. يعمل المركب كطارد للآفة.</li>
                        <li>يتم تخفيف 1 لتر لكل 30 لترًا من الماء ورش الجروح الناتجة عن التقليم كمادة مانعة لجذب
                            الآفات.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">ملاحظات هامة</summary>
                <div>
                    <ul>
                        <p>
                            لا يُخلط مع مركبات أخرى.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary>
                <div>
                    <ul>
                        <li>يُحفظ في مكان جيد التهوية، بعيدًا عن أشعة الشمس المباشرة وبعيدًا عن متناول الأطفال.</li>
                        <li>مدة الصلاحية: سنتان من تاريخ الإنتاج.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary>
                <div>
                    <ul>
                        <p>
                            سنتان من تاريخ الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_10" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة أمراض الجذور</h1>
            <p>
                <img src="../Images/Secondary Products/Amino Acids Compound.png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary>
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Amino Acids Compound Registration code.png"
                            alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        NF29
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary>
                <div>
                    <ul>
                        <p>
                            يحتوي على الأحماض الأمينية الأساسية التي تساعد النبات على تحمل الضغوط البيئية، وزيادة النمو
                            الخضري، وتحسين عقد الثمار، وزيادة الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">معدل الاستخدام</summary>
                <div>
                    <ul>
                        <p>
                            1 لتر لكل 150 لترًا من الماء، ويتم تطبيقه مرتين خلال فترة النمو الخضري، ومرتين خلال مرحلة
                            تكوين الثمار.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary>
                <div>
                    <ul>
                        <li>يقلل من الإجهاد الناتج عن درجات الحرارة المرتفعة، والعواصف الترابية، والصقيع، والملوحة.</li>
                        <li>يعزز من عمليات الأيض في النبات ويزيد من الإنتاجية.</li>
                        <li>يلعب دورًا رئيسيًا في تكوين الهرمونات النباتية ويعد عنصرًا أساسيًا في البروتوبلازم.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">ملاحظات هامة</summary>
                <div>
                    <ul>
                        <p>
                            لا يُخلط مع المبيدات أو الأسمدة.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary>
                <div>
                    <ul>
                        <p>يُحفظ في أماكن جيدة التهوية.</p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary>
                <div>
                    <ul>
                        <p>
                            سنتان.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_10_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة أمراض الجذور</h1>
            <p>
                <img src="../Images/Secondary Products/Amino Acids Compound.png" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary>
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Amino Acids Compound Registration code.png"
                            alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        NF29
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary>
                <div>
                    <ul>
                        <p>
                            يحتوي على الأحماض الأمينية الأساسية التي تساعد النبات على تحمل الضغوط البيئية، وزيادة النمو
                            الخضري، وتحسين عقد الثمار، وزيادة الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">معدل الاستخدام</summary>
                <div>
                    <ul>
                        <p>
                            1 لتر لكل 150 لترًا من الماء، ويتم تطبيقه مرتين خلال فترة النمو الخضري، ومرتين خلال مرحلة
                            تكوين الثمار.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary>
                <div>
                    <ul>
                        <li>يقلل من الإجهاد الناتج عن درجات الحرارة المرتفعة، والعواصف الترابية، والصقيع، والملوحة.</li>
                        <li>يعزز من عمليات الأيض في النبات ويزيد من الإنتاجية.</li>
                        <li>يلعب دورًا رئيسيًا في تكوين الهرمونات النباتية ويعد عنصرًا أساسيًا في البروتوبلازم.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">ملاحظات هامة</summary>
                <div>
                    <ul>
                        <p>
                            لا يُخلط مع المبيدات أو الأسمدة.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary>
                <div>
                    <ul>
                        <p>يُحفظ في أماكن جيدة التهوية.</p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary>
                <div>
                    <ul>
                        <p>
                            سنتان.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_11" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة الآفات</h1>
            <p>
                <img src="../Images/Secondary Products/Insect_Free.jpg" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary>
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Insect Free Registration code.png" alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        Biocide3
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب</summary>
                <div>
                    <ul>
                        <p>
                            مبيد حشري بيولوجي يحتوي على الفطر <span lang="la">بيوفيريا باسيانا</span>.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary>
                <div>
                    <ul>
                        <p>
                            يحتوي كل 1 مجم من المنتج على 30×10⁶ وحدة تكوين مستعمرات (<span lang="la">CFU</span>) من
                            <span lang="la">بيوفيريا باسيانا</span>.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الآفات المستهدفة</summary>
                <div>
                    <ul>
                        <p>
                            مبيد حشري بيولوجي لمكافحة الحشرات الثاقبة الماصة، والعناكب، والذبابة البيضاء، والمن،
                            والعنكبوت الأحمر. كما أثبت فعاليته ضد حفارات الذرة والقطن، وخنفساء البطاطس في كولورادو عند
                            استخدامه كرش ورقي أو معاملة تربة (لمكافحة اليرقات في التربة مثل صراصير الخلد والديدان
                            القارضة).
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة الاستخدام</summary>
                <div>
                    <ul>
                        <li>الرش الورقي: 1 لتر لكل 100 لتر ماء، مع تكرار المعاملة كل 10 أيام حسب مستوى الإصابة.</li>
                        <li>معاملة التربة: 3 لترات لكل فدان، مع تكرار المعاملة كل 15 يومًا.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary>
                <div>
                    <ul>
                        <li>تلتصق الجراثيم الفطرية بالحشرة وتفرز إنزيمات تذيب الهيكل الخارجي لها، مما يؤدي إلى جفافها
                            وموتها.</li>
                        <li>فعال للغاية ضد مجموعة واسعة من الآفات الحشرية.</li>
                        <li>صديق للبيئة ولا يترك أي تأثيرات متبقية على النباتات.</li>
                        <li>يقلل بشكل كبير من أضرار الآفات في المحاصيل مثل الخنافس والعنكبوت الأحمر والحشرات الثاقبة
                            الماصة.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary>
                <div>
                    <ul>
                        <p>يُحفظ في مكان جيد التهوية، بعيدًا عن أشعة الشمس المباشرة، وبعيدًا عن متناول الأطفال.</p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary>
                <div>
                    <ul>
                        <p>6 أشهر من تاريخ الإنتاج.</p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_11_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>مركب لمكافحة الآفات</h1>
            <p>
                <img src="../Images/Secondary Products/Insect_Free.jpg" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary>
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/Insect Free Registration code.png" alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        Biocide3
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب</summary>
                <div>
                    <ul>
                        <p>
                            مبيد حشري بيولوجي يحتوي على الفطر <span lang="la">بيوفيريا باسيانا</span>.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary>
                <div>
                    <ul>
                        <p>
                            يحتوي كل 1 مجم من المنتج على 30×10⁶ وحدة تكوين مستعمرات (<span lang="la">CFU</span>) من
                            <span lang="la">بيوفيريا باسيانا</span>.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الآفات المستهدفة</summary>
                <div>
                    <ul>
                        <p>
                            مبيد حشري بيولوجي لمكافحة الحشرات الثاقبة الماصة، والعناكب، والذبابة البيضاء، والمن،
                            والعنكبوت الأحمر. كما أثبت فعاليته ضد حفارات الذرة والقطن، وخنفساء البطاطس في كولورادو عند
                            استخدامه كرش ورقي أو معاملة تربة (لمكافحة اليرقات في التربة مثل صراصير الخلد والديدان
                            القارضة).
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة الاستخدام</summary>
                <div>
                    <ul>
                        <li>الرش الورقي: 1 لتر لكل 100 لتر ماء، مع تكرار المعاملة كل 10 أيام حسب مستوى الإصابة.</li>
                        <li>معاملة التربة: 3 لترات لكل فدان، مع تكرار المعاملة كل 15 يومًا.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary>
                <div>
                    <ul>
                        <li>تلتصق الجراثيم الفطرية بالحشرة وتفرز إنزيمات تذيب الهيكل الخارجي لها، مما يؤدي إلى جفافها
                            وموتها.</li>
                        <li>فعال للغاية ضد مجموعة واسعة من الآفات الحشرية.</li>
                        <li>صديق للبيئة ولا يترك أي تأثيرات متبقية على النباتات.</li>
                        <li>يقلل بشكل كبير من أضرار الآفات في المحاصيل مثل الخنافس والعنكبوت الأحمر والحشرات الثاقبة
                            الماصة.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary>
                <div>
                    <ul>
                        <p>يُحفظ في مكان جيد التهوية، بعيدًا عن أشعة الشمس المباشرة، وبعيدًا عن متناول الأطفال.</p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary>
                <div>
                    <ul>
                        <p>6 أشهر من تاريخ الإنتاج.</p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_12" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>الحل البيولوجي لمرض التدرن التاجي</h1>
            <p>
                <img src="../Images/Secondary Products/GALL-FREE.jpg" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary>
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/GALL- FREE Registration code.png" alt="">
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        Biocide4
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب</summary>
                <div>
                    <ul>
                        <p>
                            مبيد حشري بيولوجي يحتوي على الفطر <span lang="la">بيوفيريا باسيانا</span>.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary>
                <div>
                    <ul>
                        <p>
                            يحتوي على سلالات مفيدة من <span lang="la">أغروبكتيريوم راديوباكتر</span>، والتي تمنع
                            العدوى عن طريق التنافس مع البكتيريا الممرضة <span lang="la">أغروبكتيريوم توميفاسيينس</span>
                            وإفراز مركبات مضادة للميكروبات.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة الاستخدام</summary>
                <div>
                    <ul>
                        <li>نقع الشتلات: تُنقع الشتلات في محلول مخفف بنسبة 1:50 لمدة 20 دقيقة قبل الزراعة.</li>
                        <li>معاملة التربة: 20 لترًا لكل فدان تُطبق عبر الري.</li>
                        <li>معاملة الأشجار: يتم تخفيف 1 لتر لكل 50 لترًا من الماء وتطبيقه حول قاعدة كل شجرة.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary>
                <div>
                    <ul>
                        <li>يمنع مرض التدرن التاجي في الأشجار المثمرة والشجيرات.</li>
                        <li>ينتج مضادات حيوية تثبط نشاط البكتيريا الضارة.</li>
                        <li>يعزز نمو الجذور الصحي ويحسن قوة النبات.</li>
                        <li>يوفر مقاومة طويلة الأمد للأمراض.</li>
                        <li>يُستخدم كعلاج وقائي وليس علاجًا.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary>
                <div>
                    <ul>
                        <p>
                            يُخزن في مكان جيد التهوية، بعيدًا عن أشعة الشمس المباشرة، وبعيدًا عن متناول الأطفال.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary>
                <div>
                    <ul>
                        <p>
                            30 يومًا من تاريخ الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
        <div id="modal_12_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
    <div class="modal__dialog">
        <div class="modal__content">
            <h1>الحل البيولوجي لمرض التدرن التاجي</h1>
            <p>
                <img src="../Images/Secondary Products/GALL-FREE.jpg" alt="" />
            </p>
            <details class="parent">
                <summary style="padding: 5px 40px;">كود الشعار العضوي</summary>
                <div>
                    <ul>
                        <img src="../Images/Products Registration codes/GALL- FREE Registration code.png" alt="">
                    </ul>
                </div>
            </details>
                        <details class="parent">
                <summary style="padding: 5px 40px;">رقم تسجيل المركب</summary style="padding: 5px 40px;">
                <div>
                    <ul>
                        Biocide4
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التركيب</summary>
                <div>
                    <ul>
                        <p>
                            مبيد حشري بيولوجي يحتوي على الفطر <span lang="la">بيوفيريا باسيانا</span>.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">المكونات الفعالة</summary>
                <div>
                    <ul>
                        <p>
                            يحتوي على سلالات مفيدة من <span lang="la">أغروبكتيريوم راديوباكتر</span>، والتي تمنع
                            العدوى عن طريق التنافس مع البكتيريا الممرضة <span lang="la">أغروبكتيريوم توميفاسيينس</span>
                            وإفراز مركبات مضادة للميكروبات.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الجرعة وطريقة الاستخدام</summary>
                <div>
                    <ul>
                        <li>نقع الشتلات: تُنقع الشتلات في محلول مخفف بنسبة 1:50 لمدة 20 دقيقة قبل الزراعة.</li>
                        <li>معاملة التربة: 20 لترًا لكل فدان تُطبق عبر الري.</li>
                        <li>معاملة الأشجار: يتم تخفيف 1 لتر لكل 50 لترًا من الماء وتطبيقه حول قاعدة كل شجرة.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">الخصائص</summary>
                <div>
                    <ul>
                        <li>يمنع مرض التدرن التاجي في الأشجار المثمرة والشجيرات.</li>
                        <li>ينتج مضادات حيوية تثبط نشاط البكتيريا الضارة.</li>
                        <li>يعزز نمو الجذور الصحي ويحسن قوة النبات.</li>
                        <li>يوفر مقاومة طويلة الأمد للأمراض.</li>
                        <li>يُستخدم كعلاج وقائي وليس علاجًا.</li>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">التخزين</summary>
                <div>
                    <ul>
                        <p>
                            يُخزن في مكان جيد التهوية، بعيدًا عن أشعة الشمس المباشرة، وبعيدًا عن متناول الأطفال.
                        </p>
                    </ul>
                </div>
            </details>
            <details class="parent">
                <summary style="padding: 5px 40px;">مدة الصلاحية</summary>
                <div>
                    <ul>
                        <p>
                            30 يومًا من تاريخ الإنتاج.
                        </p>
                    </ul>
                </div>
            </details>

            <a onclick="Show_Overflow()" href="" class="modal__close demo-close">
                <svg class="" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                    <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
            </a>
        </div>
    </div>
        </div>
</article>
`;

function Services_Product_1_Load_Content_Ar() {

  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });
  
  Title_H1.innerHTML = Title_H1_Ar;
  Title_H1.style.direction = "rtl";
  Article_Modals_Container.innerHTML = Article_Modals_Container_Ar;
  Product_1_Section.style.color = "black";
    var Read_More_Buttons = document.getElementsByClassName("Read_More_Buttons");

    for (var i = 0; i < Read_More_Buttons.length; i++) {
        Read_More_Buttons[i].innerHTML = "اقرأ المزيد";
    }

    var Bio_Act_Section_1_h2 = document.getElementById("Bio_Act_Section_1_h2");
    var Bio_P_Section_1_h2 = document.getElementById("Bio_P_Section_1_h2");
    var Bio_K_Section_1_h2 = document.getElementById("Bio_K_Section_1_h2");
    var Bio_N_Section_1_h2 = document.getElementById("Bio_N_Section_1_h2");
    var Anti_Nema_Section_1_h2 = document.getElementById("Anti_Nema_Section_1_h2");
    var Root_Active_Section_1_h2 = document.getElementById("Root_Active_Section_1_h2");
    var Salt_Free_Section_1_h2 = document.getElementById("Salt_Free_Section_1_h2");
    var Anti_Frost_Section_1_h2 = document.getElementById("Anti_Frost_Section_1_h2");
    var No_Sosa_Section_1_h2 = document.getElementById("No_Sosa_Section_1_h2");
    var Amino_Acid_Compound_Section_1_h2 = document.getElementById("Amino_Acid_Compound_Section_1_h2");
    var Insect_Free_Section_1_h2 = document.getElementById("Insect_Free_Section_1_h2");
    var Gall_Free_Section_1_h2 = document.getElementById("Gall_Free_Section_1_h2");

    var Bio_Act_Section_2_h2 = document.getElementById("Bio_Act_Section_2_h2");
    var Bio_P_Section_2_h2 = document.getElementById("Bio_P_Section_2_h2");
    var Bio_K_Section_2_h2 = document.getElementById("Bio_K_Section_2_h2");
    var Bio_N_Section_2_h2 = document.getElementById("Bio_N_Section_2_h2");
    var Anti_Nema_Section_2_h2 = document.getElementById("Anti_Nema_Section_2_h2");
    var Root_Active_Section_2_h2 = document.getElementById("Root_Active_Section_2_h2");
    var Salt_Free_Section_2_h2 = document.getElementById("Salt_Free_Section_2_h2");
    var Anti_Frost_Section_2_h2 = document.getElementById("Anti_Frost_Section_2_h2");
    var No_Sosa_Section_2_h2 = document.getElementById("No_Sosa_Section_2_h2");
    var Amino_Acid_Compound_Section_2_h2 = document.getElementById("Amino_Acid_Compound_Section_2_h2");
    var Insect_Free_Section_2_h2 = document.getElementById("Insect_Free_Section_2_h2");
    var Gall_Free_Section_2_h2 = document.getElementById("Gall_Free_Section_2_h2");

        Bio_Act_Section_1_h2.innerHTML = "بيو آكت";
        Bio_Act_Section_2_h2.innerHTML = "بيو آكت";

        Bio_P_Section_1_h2.innerHTML = "بيو بي";
        Bio_P_Section_2_h2.innerHTML = "بيو بي";

        Bio_K_Section_1_h2.innerHTML = "بيو ك";
        Bio_K_Section_2_h2.innerHTML = "بيو ك";

        Bio_N_Section_1_h2.innerHTML = "بيو إن";
        Bio_N_Section_2_h2.innerHTML = "بيو إن";

        Anti_Nema_Section_1_h2.innerHTML = "أنتي نيما";
        Anti_Nema_Section_2_h2.innerHTML = "أنتي نيما";

        Root_Active_Section_1_h2.innerHTML = "روت أكتيف";
        Root_Active_Section_2_h2.innerHTML = "روت أكتيف";

        Salt_Free_Section_1_h2.innerHTML = "سولت فري";
        Salt_Free_Section_2_h2.innerHTML = "سولت فري";

        Anti_Frost_Section_1_h2.innerHTML = "أنتي فروست";
        Anti_Frost_Section_2_h2.innerHTML = "أنتي فروست";

        No_Sosa_Section_1_h2.innerHTML = "نو سوسا";
        No_Sosa_Section_2_h2.innerHTML = "نو سوسا";

        Amino_Acid_Compound_Section_1_h2.innerHTML = "مركب الأحماض ";
        Amino_Acid_Compound_Section_2_h2.innerHTML = "مركب الأحماض ";
        
        Insect_Free_Section_1_h2.innerHTML="إنــســكـــت فري ";
        Insect_Free_Section_2_h2.innerHTML="إنــســكـــت فري ";

        Gall_Free_Section_1_h2.innerHTML="جال فري";
        Gall_Free_Section_2_h2.innerHTML="جال فري";


    /********************* List 2.2 Script **********************************/

            function toggleAccordion(event) {
            event.preventDefault();
            event.stopPropagation();

            let details = $(this).parent();
            let content = details.children('div');

            if (details.attr('open')) {
                content.slideUp(800, function () {
                    details.removeAttr('open');
                });
            } else {
                details.attr('open', '');
                content.slideDown(800);
            }
        }

        function toggleChildAccordion(event) {
            event.stopPropagation();
            let btn = $(this);
            let content = btn.next('.child-content');

            if (content.is(':visible')) {
                content.slideUp(800);
                btn.removeClass('active');
            } else {
                content.slideDown(800);
                btn.addClass('active');
            }
        }

        $(document).ready(function () {
            $('summary').on('click', toggleAccordion);
            $('.child-toggle').on('click', toggleChildAccordion);
        });

        /************************ Modal Script *************************************/

        var Modal = (function () {
          var trigger = $qsa(".modal__trigger"); // what you click to activate the modal
          var modals = $qsa(".modal"); // the entire modal (takes up entire window)
          var modalsbg = $qsa(".modal__bg"); // the entire modal (takes up entire window)
          var content = $qsa(".modal__content"); // the inner content of the modal
          var closers = $qsa(".modal__close"); // an element used to close the modal
          var w = window;
          var isOpen = false;
          var contentDelay = 500; // duration after you click the button and wait for the content to show
          var len = trigger.length;

          // make it easier for yourself by not having to type as much to select an element
          function $qsa(el) {
            return document.querySelectorAll(el);
          }

          var getId = function (event) {
            event.preventDefault();
            var self = this;
            // get the value of the data-modal attribute from the button
            var modalId = self.dataset.modal;
            var len = modalId.length;
            // remove the '#' from the string
            var modalIdTrimmed = modalId.substring(1, len);
            // select the modal we want to activate
            var modal = document.getElementById(modalIdTrimmed);
            // execute function that creates the temporary expanding div
            makeDiv(self, modal);
          };

          var makeDiv = function (self, modal) {
            var fakediv = document.getElementById("modal__temp");

            /**
             * if there isn't a 'fakediv', create one and append it to the button that was
             * clicked. after that execute the function 'moveTrig' which handles the animations.
             */

            if (fakediv === null) {
              var div = document.createElement("div");
              div.id = "modal__temp";
              self.appendChild(div);
              moveTrig(self, modal, div);
            }
          };

          var moveTrig = function (trig, modal, div) {
            var trigProps = trig.getBoundingClientRect();
            var m = modal;
            var mProps = m
              .querySelector(".modal__content")
              .getBoundingClientRect();
            var transX, transY, scaleX, scaleY;
            var xc = w.innerWidth / 2;
            var yc = w.innerHeight / 2;

            // this class increases z-index value so the button goes overtop the other buttons
            trig.classList.add("modal__trigger--active");

            // these values are used for scale the temporary div to the same size as the modal
            scaleX = mProps.width / trigProps.width;
            scaleY = mProps.height / trigProps.height;

            scaleX = scaleX.toFixed(3); // round to 3 decimal places
            scaleY = scaleY.toFixed(3);

            // these values are used to move the button to the center of the window
            transX = Math.round(xc - trigProps.left - trigProps.width / 2);
            transY = Math.round(yc - trigProps.top - trigProps.height / 2);

            // if the modal is aligned to the top then move the button to the center-y of the modal instead of the window
            if (m.classList.contains("modal--align-top")) {
              transY = Math.round(
                mProps.height / 3 +
                  mProps.top -
                  trigProps.top -
                  trigProps.height / 3
              );
            }

            // translate button to center of screen
            trig.style.transform =
              "translate(" + transX + "px, " + transY + "px)";
            trig.style.webkitTransform =
              "translate(" + transX + "px, " + transY + "px)";
            // expand temporary div to the same size as the modal
            div.style.transform = "scale(" + scaleX + "," + scaleY + ")";
            div.style.webkitTransform = "scale(" + scaleX + "," + scaleY + ")";

            window.setTimeout(function () {
              window.requestAnimationFrame(function () {
                open(m, div);
              });
            }, contentDelay);
          };

          var open = function (m, div) {
            if (!isOpen) {
              // select the content inside the modal
              var content = m.querySelector(".modal__content");
              // reveal the modal
              m.classList.add("modal--active");
              // reveal the modal content
              content.classList.add("modal__content--active");

              /**
               * when the modal content is finished transitioning, fadeout the temporary
               * expanding div so when the window resizes it isn't visible ( it doesn't
               * move with the window).
               */

              content.addEventListener("transitionend", hideDiv, false);

              isOpen = true;
            }

            function hideDiv() {
              // fadeout div so that it can't be seen when the window is resized
              div.style.opacity = "0";
              content.removeEventListener("transitionend", hideDiv, false);
            }
          };

          var close = function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();

            var target = event.target;
            var div = document.getElementById("modal__temp");

            /**
             * make sure the modal__bg or modal__close was clicked, we don't want to be able to click
             * inside the modal and have it close.
             */

            if (
              (isOpen && target.classList.contains("modal__bg")) ||
              target.classList.contains("modal__close")
            ) {
              // make the hidden div visible again and remove the transforms so it scales back to its original size

            div.style.opacity = "1";
            
            div.removeAttribute("style");

              /**
               * iterate through the modals and modal contents and triggers to remove their active classes.
               * remove the inline css from the trigger to move it back into its original position.
               */

              for (var i = 0; i < len; i++) {
                modals[i].classList.remove("modal--active");
                content[i].classList.remove("modal__content--active");
                trigger[i].style.transform = "none";
                trigger[i].style.webkitTransform = "none";
                trigger[i].classList.remove("modal__trigger--active");
              }
              // whenthe temporary div is opacity:1 again, we want to remove it from the dom
              div.addEventListener("transitionend", removeDiv, false);
              isOpen = false;
            }

            function removeDiv() {
              setTimeout(function () {
                window.requestAnimationFrame(function () {
                  // remove the temp div from the dom with a slight delay so the animation looks good
                  div.remove();
                });
              }, contentDelay - 50);
            }
          };
          var bindActions = function () {
            for (var i = 0; i < len; i++) {
              trigger[i].addEventListener("click", getId, false);
              closers[i].addEventListener("click", close, false);
              modalsbg[i].addEventListener("click", close, false);
            }
          };
          var init = function () {
            bindActions();
          };
          return {
            init: init,
          };
        })();
        Modal.init();

}

if (localStorage.getItem("Permenant_Language") === "عربي") {
  Services_Product_1_Load_Content_Ar();
}
