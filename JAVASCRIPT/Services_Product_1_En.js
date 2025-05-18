var Product_1_Section = document.getElementById("Product_1_Section");
var Article_Modals_Container = document.getElementById(
  "Article_Modals_Container"
);
var Title_H1 = document.getElementById("Title_H1");

var Title_H1_En = `
Unit Products 1
`;

var Article_Modals_Container_En = `

<article id="Modals_Container_En">
        <div id="modal_1" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Compound For Foliar Disease Control</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_Act_Img .png" alt="" />
                    </p>
                    <details class="parent">
                        <summary>Registration Code</summary>
                        <div>
                            <ul>
                                <img src="../Images/Products Registration codes/Bio Act Registration code.png" alt="">
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Compound Registration Number</summary>
                        <div>
                            <ul>
                                Biocide7
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Composition and Active Ingredients</summary>
                        <div>
                            <ul>
                                <p>
                                    A blend of Actinomycetes isolates and Trichoderma fungi, known for their eco-friendly
                                    properties and non-resistance-inducing characteristics. Formulated using gel
                                    technology, it ensures prolonged retention on leaf surfaces, reducing loss and
                                    enhancing effectiveness.
                                </p>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Target Diseases</summary>
                        <div>
                            <ul>
                                <li>Powdery mildew, leaf spots, blights, and fruit rots in vegetables and strawberries.
                                </li>
                                <li>Downy mildew, rusts, early blight, anthracnose, and fruit rot prevention in field
                                    crops (wheat), vegetables (cucumber, pepper, beans, strawberries), medicinal plants
                                    (chamomile, mint, cumin, calendula), and fruit trees (mango, grape, peach, apple,
                                    apricot, pear).</li>
                                <li>Extends post-harvest storage life of fruits.</li>
                                <li>Functions as a natural growth promoter, stimulating production of plant hormones and
                                    bioactive compounds to enhance productivity.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Features</summary>
                        <div>
                            <ul>
                                <li>Environmentally safe, leaving no pesticide residues.</li>
                                <li>Does not interfere with beneficial microorganisms.</li>
                                <li>Repeated use helps degrade pesticide residues.</li>
                                <li>Preserves fruit quality and extends post-harvest storage.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Dosage and Application</summary>
                        <div>
                            <ul>
                                <li>1 liter per 150 liters of water.</li>
                                <li>Ensure full foliar coverage.</li>
                                <li>Repeat every 15 days.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Instructions for Use</summary>
                        <div>
                            <ul>
                                <li>Apply using a motorized sprayer.</li>
                                <li>Do not mix with pesticides or fertilizers.</li>
                                <li>Avoid spraying in strong winds.</li>
                                <li>Best applied early morning or late afternoon.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Storage</summary>
                        <div>
                            <ul>
                                <li>Store in a well-ventilated area, away from direct sunlight and out of children's
                                    reach.</li>
                                <li>Shelf life: 6 months from the production date.</li>
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
                    <h1>A Compound For Foliar Disease Control</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_Act_Img .png" alt="" />
                    </p>
                    <details class="parent">
                        <summary>Registration Code</summary>
                        <div>
                            <ul>
                                <img src="../Images/Products Registration codes/Bio Act Registration code.png" alt="">
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Compound Registration Number</summary>
                        <div>
                            <ul>
                                Biocide7
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Composition and Active Ingredients</summary>
                        <div>
                            <ul>
                                <p>
                                    A blend of Actinomycetes isolates and Trichoderma fungi, known for their eco-friendly
                                    properties and non-resistance-inducing characteristics. Formulated using gel
                                    technology, it ensures prolonged retention on leaf surfaces, reducing loss and
                                    enhancing effectiveness.
                                </p>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Target Diseases</summary>
                        <div>
                            <ul>
                                <li>Powdery mildew, leaf spots, blights, and fruit rots in vegetables and strawberries.
                                </li>
                                <li>Downy mildew, rusts, early blight, anthracnose, and fruit rot prevention in field
                                    crops (wheat), vegetables (cucumber, pepper, beans, strawberries), medicinal plants
                                    (chamomile, mint, cumin, calendula), and fruit trees (mango, grape, peach, apple,
                                    apricot, pear).</li>
                                <li>Extends post-harvest storage life of fruits.</li>
                                <li>Functions as a natural growth promoter, stimulating production of plant hormones and
                                    bioactive compounds to enhance productivity.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Features</summary>
                        <div>
                            <ul>
                                <li>Environmentally safe, leaving no pesticide residues.</li>
                                <li>Does not interfere with beneficial microorganisms.</li>
                                <li>Repeated use helps degrade pesticide residues.</li>
                                <li>Preserves fruit quality and extends post-harvest storage.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Dosage and Application</summary>
                        <div>
                            <ul>
                                <li>1 liter per 150 liters of water.</li>
                                <li>Ensure full foliar coverage.</li>
                                <li>Repeat every 15 days.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Instructions for Use</summary>
                        <div>
                            <ul>
                                <li>Apply using a motorized sprayer.</li>
                                <li>Do not mix with pesticides or fertilizers.</li>
                                <li>Avoid spraying in strong winds.</li>
                                <li>Best applied early morning or late afternoon.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Storage</summary>
                        <div>
                            <ul>
                                <li>Store in a well-ventilated area, away from direct sunlight and out of children's
                                    reach.</li>
                                <li>Shelf life: 6 months from the production date.</li>
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
                    <h1>A Bio-fertilizer compound <br> (Phosphorus Solubilization)</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_P_Img .png" alt="" />
                    </p>
                    <details class="parent">
                        <summary>Composition and Active Ingredients</summary>
                        <div>
                            <ul>
                                <p>
                                    A biofertilizer containing phosphate-solubilizing bacteria (Bacillus megaterium var.
                                    Phosphaticum), which convert insoluble phosphorus into plant-available forms.
                                </p>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Features</summary>
                        <div>
                            <ul>
                                <li>Enhances phosphorus uptake, reducing phosphate fertilizer use by 15–30%.</li>
                                <li>Promotes root and shoot development.</li>
                                <li>Eco-friendly and improves soil health.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Dosage and Application</summary>
                        <div>
                            <ul>
                                <li>5–12 liters per feddan, applied in three doses from planting until flowering.</li>
                                <li>Applied in the last 15 minutes of irrigation.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Storage</summary>
                        <div>
                            <ul>
                                <li>Store in a cool, shaded place.</li>
                                <li>Shelf life: 1–3 months from the production date.</li>
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
                    <h1>A Bio-fertilizer compound <br> (Phosphorus Solubilization)</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_P_Img .png" alt="" />
                    </p>
                    <details class="parent">
                        <summary>Composition and Active Ingredients</summary>
                        <div>
                            <ul>
                                <p>
                                    A biofertilizer containing phosphate-solubilizing bacteria (Bacillus megaterium var.
                                    Phosphaticum), which convert insoluble phosphorus into plant-available forms.
                                </p>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Features</summary>
                        <div>
                            <ul>
                                <li>Enhances phosphorus uptake, reducing phosphate fertilizer use by 15–30%.</li>
                                <li>Promotes root and shoot development.</li>
                                <li>Eco-friendly and improves soil health.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Dosage and Application</summary>
                        <div>
                            <ul>
                                <li>5–12 liters per feddan, applied in three doses from planting until flowering.</li>
                                <li>Applied in the last 15 minutes of irrigation.</li>
                            </ul>
                        </div>
                    </details>
                    <details class="parent">
                        <summary>Storage</summary>
                        <div>
                            <ul>
                                <li>Store in a cool, shaded place.</li>
                                <li>Shelf life: 1–3 months from the production date.</li>
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
                    <h1>A Bio-fertilizer compound <br> (Potassium Solubilization)</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_K_Img .png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Composition and Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biofertilizer containing potassium-solubilizing bacteria (Bacillus circulans),
                                        which convert insoluble potassium into plant-available forms.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Enhances potassium availability, reducing potassium fertilizer use by 15–30%.</li>
                                    <li>Supports flowering and fruiting.</li>
                                    <li>Eco-friendly and promotes soil health.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage and Application</summary>
                            <div>
                                <ul>
                                    <li>5–12 liters per feddan, applied in three doses before flowering and fruit setting.</li>
                                    <li>Applied in the last 15 minutes of irrigation.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <li>Store in a cool, shaded place.</li>
                                    <li>Shelf life: 1–3 months from the production date.</li>
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
                    <h1>A Bio-fertilizer compound <br> (Potassium Solubilization)</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_K_Img .png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Composition and Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biofertilizer containing potassium-solubilizing bacteria (Bacillus circulans),
                                        which convert insoluble potassium into plant-available forms.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Enhances potassium availability, reducing potassium fertilizer use by 15–30%.</li>
                                    <li>Supports flowering and fruiting.</li>
                                    <li>Eco-friendly and promotes soil health.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage and Application</summary>
                            <div>
                                <ul>
                                    <li>5–12 liters per feddan, applied in three doses before flowering and fruit setting.</li>
                                    <li>Applied in the last 15 minutes of irrigation.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <li>Store in a cool, shaded place.</li>
                                    <li>Shelf life: 1–3 months from the production date.</li>
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
                    <h1>A Bio-fertilizer compound <br> (Nitrogen Fixation)</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_N_Img .png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Composition and Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biofertilizer containing nitrogen-fixing bacteria (Azotobacter chroococcum),
                                        which
                                        convert atmospheric nitrogen into plant-available ammonia.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Reduces the need for chemical nitrogen fertilizers by 15–25%.</li>
                                    <li>Enhances plant growth and root development.</li>
                                    <li>Promotes flowering and fruit production.</li>
                                    <li>Suitable for organic and conventional farming.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage and Application</summary>
                            <div>
                                <ul>
                                    <li>5–12 liters per feddan, applied in three doses from planting until pre-flowering.</li>
                                    <li>Applied with irrigation water in the last 15 minutes of irrigation.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <li>Store in a cool, shaded place.</li>
                                    <li>Shelf life: 1–3 months from the production date.</li>
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
                    <h1>A Bio-fertilizer compound <br> (Nitrogen Fixation)</h1>
                    <p>
                        <img src="../Images/Secondary Products/Bio_N_Img .png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Composition and Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biofertilizer containing nitrogen-fixing bacteria (Azotobacter chroococcum),
                                        which
                                        convert atmospheric nitrogen into plant-available ammonia.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Reduces the need for chemical nitrogen fertilizers by 15–25%.</li>
                                    <li>Enhances plant growth and root development.</li>
                                    <li>Promotes flowering and fruit production.</li>
                                    <li>Suitable for organic and conventional farming.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage and Application</summary>
                            <div>
                                <ul>
                                    <li>5–12 liters per feddan, applied in three doses from planting until pre-flowering.</li>
                                    <li>Applied with irrigation water in the last 15 minutes of irrigation.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <li>Store in a cool, shaded place.</li>
                                    <li>Shelf life: 1–3 months from the production date.</li>
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
                    <h1>A Root Nematode Resistant compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Anti_Nema_Img .png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Active Microorganisms</summary>
                            <div>
                                <ul>
                                    <p>
                                        Adapted strains of Serratia marcescens bacteria, with concentrations ranging
                                        from 1 X
                                        10^5 to 1 X 10^7 cells per milliliter.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biological compound containing a range of microorganisms that secrete enzymes
                                        that
                                        break down nematode larvae in the soil, specifically targeting the infestation
                                        in
                                        plant roots.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>A bio-preventative treatment for root nematodes, reducing the need for chemical pesticides.</li>
                                    <li>Increases crop yield and quality.</li>
                                    <li>Helps prevent or reduce chemical pesticide usage.</li>
                                    <li>Recommended for both organic and conventional farming.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Usage Rate</summary>
                            <div>
                                <ul>
                                    <p>
                                        Apply at 8-10 liters per acre in 3-4 batches, based on soil nematode analysis.
                                        Add the product to irrigation water during the last 15 minutes of watering
                                        without
                                        adding any chemicals.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Storage Conditions</summary>
                            <div>
                                <ul>
                                    <p>
                                        Store the product in a shaded place or at room temperature, avoiding exposure to
                                        high temperatures.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf Life</summary>
                            <div>
                                <ul>
                                    <p>
                                        1 to 3 months from production date.
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
                    <h1>A Root Nematode Resistant compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Anti_Nema_Img .png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Active Microorganisms</summary>
                            <div>
                                <ul>
                                    <p>
                                        Adapted strains of Serratia marcescens bacteria, with concentrations ranging
                                        from 1 X
                                        10^5 to 1 X 10^7 cells per milliliter.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biological compound containing a range of microorganisms that secrete enzymes
                                        that
                                        break down nematode larvae in the soil, specifically targeting the infestation
                                        in
                                        plant roots.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>A bio-preventative treatment for root nematodes, reducing the need for chemical pesticides.</li>
                                    <li>Increases crop yield and quality.</li>
                                    <li>Helps prevent or reduce chemical pesticide usage.</li>
                                    <li>Recommended for both organic and conventional farming.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Usage Rate</summary>
                            <div>
                                <ul>
                                    <p>
                                        Apply at 8-10 liters per acre in 3-4 batches, based on soil nematode analysis.
                                        Add the product to irrigation water during the last 15 minutes of watering
                                        without
                                        adding any chemicals.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Storage Conditions</summary>
                            <div>
                                <ul>
                                    <p>
                                        Store the product in a shaded place or at room temperature, avoiding exposure to
                                        high temperatures.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf Life</summary>
                            <div>
                                <ul>
                                    <p>
                                        1 to 3 months from production date.
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
                    <h1>A Root Activator compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Root_Active_Img .png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Composition</summary>
                            <div>
                                <ul>
                                    <p>
                                        A compound containing a group of microorganisms with a high ability to produce
                                        various growth-promoting substances such as gibberellins, cytokinin analogs,
                                        auxins,
                                        and indole-3-acetic acid (IAA).
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        A blend of bacterial strains that secrete various root growth-promoting
                                        substances,
                                        enhancing root hair surface area and overall root system development (PGPR –
                                        Plant
                                        Growth-Promoting Rhizobacteria).
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Highly effective in producing various secondary metabolites, such as antibiotics, cyanide, and phytohormones.</li>
                                    <li>Enhances the production of siderophores, which facilitate iron availability for plants.</li>
                                    <li>Suppresses root pathogens, solubilizes phosphorus, and converts it into easily absorbable forms.</li>
                                    <li>Strengthens the plant’s resistance to pathogenic microorganisms while promoting the secretion of certain growth regulators.</li>
                                    <li>Inhibits the activity of microbial growth suppressors and enhances the plant's nutrient uptake efficiency.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage and Application</summary>
                            <div>
                                <ul>
                                    <li>Apply 8–12 liters per feddan, divided into 2–3 doses.</li>
                                    <li>Add the compound during the last 15 minutes of irrigation using chemical-free irrigation water.</li>
                                    <li>Do not mix the compound with any chemicals.</li>
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
                    <h1>A Root Activator compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Root_Active_Img .png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Composition</summary>
                            <div>
                                <ul>
                                    <p>
                                        A compound containing a group of microorganisms with a high ability to produce
                                        various growth-promoting substances such as gibberellins, cytokinin analogs,
                                        auxins,
                                        and indole-3-acetic acid (IAA).
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        A blend of bacterial strains that secrete various root growth-promoting
                                        substances,
                                        enhancing root hair surface area and overall root system development (PGPR –
                                        Plant
                                        Growth-Promoting Rhizobacteria).
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Highly effective in producing various secondary metabolites, such as antibiotics, cyanide, and phytohormones.</li>
                                    <li>Enhances the production of siderophores, which facilitate iron availability for plants.</li>
                                    <li>Suppresses root pathogens, solubilizes phosphorus, and converts it into easily absorbable forms.</li>
                                    <li>Strengthens the plant’s resistance to pathogenic microorganisms while promoting the secretion of certain growth regulators.</li>
                                    <li>Inhibits the activity of microbial growth suppressors and enhances the plant's nutrient uptake efficiency.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage and Application</summary>
                            <div>
                                <ul>
                                    <li>Apply 8–12 liters per feddan, divided into 2–3 doses.</li>
                                    <li>Add the compound during the last 15 minutes of irrigation using chemical-free irrigation water.</li>
                                    <li>Do not mix the compound with any chemicals.</li>
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
                    <h1>A Root Disease Control Compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Salt_Free_-removebg-preview.png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/Salt Free Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    SC26
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Is used for treating the harmful effects of soil salinity on plants</li>
                                    <li>Improves soil properties and enhances nutrient absorption.</li>
                                    <li>Reduces salinity risks for plants when irrigated with saline water.</li>
                                    <li>Promotes root regeneration and growth due to organic acids.</li>
                                    <li>Provides a calcium source that is readily absorbed by plants.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Usage Rate</summary>
                            <div>
                                <ul>
                                    <li>Apply at 15-30 liters per acre depending on soil salinity.</li>
                                    <li>Mix with irrigation water during the last 10 minutes of watering via drip or spray irrigation.</li>
                                    <li>Apply once per season.</li>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>Store in a well-ventilated area.</p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>Two years.</p>
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
        <div id="modal_7_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Root Disease Control Compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Salt_Free_-removebg-preview.png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/Salt Free Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    SC26
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Is used for treating the harmful effects of soil salinity on plants</li>
                                    <li>Improves soil properties and enhances nutrient absorption.</li>
                                    <li>Reduces salinity risks for plants when irrigated with saline water.</li>
                                    <li>Promotes root regeneration and growth due to organic acids.</li>
                                    <li>Provides a calcium source that is readily absorbed by plants.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Usage Rate</summary>
                            <div>
                                <ul>
                                    <li>Apply at 15-30 liters per acre depending on soil salinity.</li>
                                    <li>Mix with irrigation water during the last 10 minutes of watering via drip or spray irrigation.</li>
                                    <li>Apply once per season.</li>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>Store in a well-ventilated area.</p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>Two years.</p>
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
        <div id="modal_8" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Root Disease Control Compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Anti Frost.png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/Antifrost Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    NF36
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Composition</summary>
                            <div>
                                <ul>
                                    <p>
                                        A natural plant food compound designed with advanced technology that works on
                                        plant
                                        physiology by coating the surface of treated parts with a thin layer that
                                        protects
                                        against frost damage.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredient</summary>
                            <div>
                                <ul>
                                    <p>
                                        Calcium salts coated with organic acids (15%).
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Strengthens cell walls, making plants more resistant to extreme conditions like frost, storms, and salinity.</li>
                                    <li>Calcium increases cell wall thickness and improves flower cohesion, fruit set, and fruit quality.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Usage Rate</summary>
                            <div>
                                <ul>
                                    <p>
                                        Apply at 1 liter per 150 liters of water and spray 48 hours before a frost
                                        event.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>
                                        Store in well-ventilated rooms, away from direct sunlight, and keep out of reach
                                        of
                                        children.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        Two years from production date.
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
        <div id="modal_8_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Root Disease Control Compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Anti Frost.png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/Antifrost Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    NF36
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Composition</summary>
                            <div>
                                <ul>
                                    <p>
                                        A natural plant food compound designed with advanced technology that works on
                                        plant
                                        physiology by coating the surface of treated parts with a thin layer that
                                        protects
                                        against frost damage.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredient</summary>
                            <div>
                                <ul>
                                    <p>
                                        Calcium salts coated with organic acids (15%).
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Strengthens cell walls, making plants more resistant to extreme conditions like frost, storms, and salinity.</li>
                                    <li>Calcium increases cell wall thickness and improves flower cohesion, fruit set, and fruit quality.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Usage Rate</summary>
                            <div>
                                <ul>
                                    <p>
                                        Apply at 1 liter per 150 liters of water and spray 48 hours before a frost
                                        event.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>
                                        Store in well-ventilated rooms, away from direct sunlight, and keep out of reach
                                        of
                                        children.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        Two years from production date.
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
        <div id="modal_9" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Compound for Pest Control</h1>
                    <p>
                        <img src="../Images/Secondary Products/No_Sosa-removebg-preview.png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Composition and Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        An organic compound containing a blend of plant-based oils approved for organic farming. These oils effectively disrupt
                                        the respiratory system of insects by blocking their spiracles and penetrating with volatile compounds, ultimately
                                        killing the pest at all life stages, from larvae to adults.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Target Pests</summary>
                            <div>
                                <ul>
                                    <p>
                                        Effective against red palm weevil in all its developmental stages, both as a
                                        preventive and curative treatment.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage and Application</summary>
                            <div>
                                <ul>
                                    <li>In case of infestation: Mix 1 liter per 20 liters of water. Drill holes at the infestation sites, inject the solution, and seal the holes with clay, gypsum, wax, or other sealing materials.</li>
                                    <li>As a preventive measure: Apply after pruning since pruning wounds attract red palm weevils. The compound acts as a repellent to the pest.</li>
                                    <li>Dilute 1 liter per 30 liters of water and spray pruning wounds as a deterrent.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Important Notes</summary>
                            <div>
                                <ul>
                                    <p>
                                        Do not mix with other compounds.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <li>Store in a well-ventilated area, away from direct sunlight and out of children's reach.</li>
                                    <li>Shelf life: 2 years from the production date.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        Two years from production date.
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
        <div id="modal_9_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Compound for Pest Control</h1>
                    <p>
                        <img src="../Images/Secondary Products/No_Sosa-removebg-preview.png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Composition and Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        An organic compound containing a blend of plant-based oils approved for organic farming. These oils effectively disrupt
                                        the respiratory system of insects by blocking their spiracles and penetrating with volatile compounds, ultimately
                                        killing the pest at all life stages, from larvae to adults.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Target Pests</summary>
                            <div>
                                <ul>
                                    <p>
                                        Effective against red palm weevil in all its developmental stages, both as a
                                        preventive and curative treatment.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage and Application</summary>
                            <div>
                                <ul>
                                    <li>In case of infestation: Mix 1 liter per 20 liters of water. Drill holes at the infestation sites, inject the solution, and seal the holes with clay, gypsum, wax, or other sealing materials.</li>
                                    <li>As a preventive measure: Apply after pruning since pruning wounds attract red palm weevils. The compound acts as a repellent to the pest.</li>
                                    <li>Dilute 1 liter per 30 liters of water and spray pruning wounds as a deterrent.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Important Notes</summary>
                            <div>
                                <ul>
                                    <p>
                                        Do not mix with other compounds.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <li>Store in a well-ventilated area, away from direct sunlight and out of children's reach.</li>
                                    <li>Shelf life: 2 years from the production date.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        Two years from production date.
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
        <div id="modal_10" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Root Disease Control Compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Amino Acids Compound.png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/Amino Acids Compound Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    NF29
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        Contains essential amino acids that help the plant tolerate environmental
                                        stress, increase vegetative growth, improve fruit set, and increase yield.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Usage Rate</summary>
                            <div>
                                <ul>
                                    <p>
                                        1 liter per 150 liters of water, applied twice during the vegetative growth
                                        period and twice during fruit formation.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Reduces stress from high temperatures, dust storms, frost, and salinity.</li>
                                    <li>Enhances plant metabolism and increases productivity.</li>
                                    <li>Plays a key role in the formation of plant hormones and is a vital component of protoplasm.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Important Notes</summary>
                            <div>
                                <ul>
                                    <p>
                                        Do not mix with pesticides or fertilizers.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>Store in well-ventilated places.</p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        Two years.
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
        <div id="modal_10_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Root Disease Control Compound</h1>
                    <p>
                        <img src="../Images/Secondary Products/Amino Acids Compound.png"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/Amino Acids Compound Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    NF29
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        Contains essential amino acids that help the plant tolerate environmental
                                        stress, increase vegetative growth, improve fruit set, and increase yield.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Usage Rate</summary>
                            <div>
                                <ul>
                                    <p>
                                        1 liter per 150 liters of water, applied twice during the vegetative growth
                                        period and twice during fruit formation.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Reduces stress from high temperatures, dust storms, frost, and salinity.</li>
                                    <li>Enhances plant metabolism and increases productivity.</li>
                                    <li>Plays a key role in the formation of plant hormones and is a vital component of protoplasm.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Important Notes</summary>
                            <div>
                                <ul>
                                    <p>
                                        Do not mix with pesticides or fertilizers.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>Store in well-ventilated places.</p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        Two years.
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
        <div id="modal_11" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Compound for Pest Control</h1>
                    <p>
                        <img src="../Images/Secondary Products/Insect_Free.jpg"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/Insect Free Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    Biocide3
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Composition</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biological insecticide containing the fungus Beauveria bassiana.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        Each mg of the product contains 30×10⁶ CFU of Beauveria bassiana.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Target Pests</summary>
                            <div>
                                <ul>
                                    <p>
                                        A bio-insecticide for controlling piercing-sucking insects, mites, whiteflies,
                                        aphids, and red spider mites. It has also shown effectiveness against corn and
                                        cotton borers and the Colorado potato beetle when applied as a foliar spray or
                                        soil drench (for larvae in the soil like mole crickets and cutworms).
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage & Application</summary>
                            <div>
                                <ul>
                                    <li>Foliar spray: 1 liter per 100 liters of water, repeated every 10 days depending on infestation levels.</li>
                                    <li>Soil application: 3 liters per feddan, repeated every 15 days.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>The fungal spores adhere to the insect, secreting enzymes that dissolve its exoskeleton, causing dehydration and death.</li>
                                    <li>Highly effective against a wide range of insect pests.</li>
                                    <li>Environmentally friendly with no residual effects on plants.</li>
                                    <li>Significantly reduces pest damage in crops such as beetles, red spider mites, and piercing-sucking insects.</li>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>Store in a well-ventilated area, away from direct sunlight and out of
                                        children's reach.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        6 months from the production date.
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
        <div id="modal_11_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>A Compound for Pest Control</h1>
                    <p>
                        <img src="../Images/Secondary Products/Insect_Free.jpg"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/Insect Free Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    Biocide3
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Composition</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biological insecticide containing the fungus Beauveria bassiana.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        Each mg of the product contains 30×10⁶ CFU of Beauveria bassiana.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Target Pests</summary>
                            <div>
                                <ul>
                                    <p>
                                        A bio-insecticide for controlling piercing-sucking insects, mites, whiteflies,
                                        aphids, and red spider mites. It has also shown effectiveness against corn and
                                        cotton borers and the Colorado potato beetle when applied as a foliar spray or
                                        soil drench (for larvae in the soil like mole crickets and cutworms).
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage & Application</summary>
                            <div>
                                <ul>
                                    <li>Foliar spray: 1 liter per 100 liters of water, repeated every 10 days depending on infestation levels.</li>
                                    <li>Soil application: 3 liters per feddan, repeated every 15 days.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>The fungal spores adhere to the insect, secreting enzymes that dissolve its exoskeleton, causing dehydration and death.</li>
                                    <li>Highly effective against a wide range of insect pests.</li>
                                    <li>Environmentally friendly with no residual effects on plants.</li>
                                    <li>Significantly reduces pest damage in crops such as beetles, red spider mites, and piercing-sucking insects.</li>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>Store in a well-ventilated area, away from direct sunlight and out of
                                        children's reach.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        6 months from the production date.
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
        <div id="modal_12" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>The Biological Solution for Crown Gall Disease </h1>
                    <p>
                        <img src="../Images/Secondary Products/GALL-FREE.jpg"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/GALL- FREE Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    Biocide4
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Composition</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biological insecticide containing the fungus Beauveria bassiana.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        Contains beneficial strains of Agrobacterium radiobacter, which prevent
                                        infections by competing with pathogenic Agrobacterium tumefaciens and secreting
                                        antimicrobial compounds.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage & Application</summary>
                            <div>
                                <ul>
                                    <li>Seedling dip: Soak seedlings in a 1:50 dilution for 20 minutes before planting.</li>
                                    <li>Soil treatment: 20 liters per feddan applied via irrigation.</li>
                                    <li>Tree application: Dilute 1 liter per 50 liters of water and apply around the base of each tree.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Prevents crown gall disease in fruit trees and shrubs.</li>
                                    <li>Produces antibiotics that suppress harmful bacteria.</li>
                                    <li>Ensures healthy root development and improves plant vigor.</li>
                                    <li>Provides long-lasting disease resistance.</li>
                                    <li>Used as a preventive treatment, not a cure.</li>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>
                                        Store in a well-ventilated area, away from direct sunlight and out of
                                        children's reach.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        30 days from the production date.
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
        <div id="modal_12_2" class="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
            <div class="modal__dialog">
                <div class="modal__content">
                    <h1>The Biological Solution for Crown Gall Disease </h1>
                    <p>
                        <img src="../Images/Secondary Products/GALL-FREE.jpg"
                            alt="" />
                    </p>
                        <details class="parent">
                            <summary>Registration Code</summary>
                            <div>
                                <ul>
                                    <img src="../Images/Products Registration codes/GALL- FREE Registration code.png" alt="">
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Compound Registration Number</summary>
                            <div>
                                <ul>
                                    Biocide4
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Composition</summary>
                            <div>
                                <ul>
                                    <p>
                                        A biological insecticide containing the fungus Beauveria bassiana.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Active Ingredients</summary>
                            <div>
                                <ul>
                                    <p>
                                        Contains beneficial strains of Agrobacterium radiobacter, which prevent
                                        infections by competing with pathogenic Agrobacterium tumefaciens and secreting
                                        antimicrobial compounds.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Dosage & Application</summary>
                            <div>
                                <ul>
                                    <li>Seedling dip: Soak seedlings in a 1:50 dilution for 20 minutes before planting.</li>
                                    <li>Soil treatment: 20 liters per feddan applied via irrigation.</li>
                                    <li>Tree application: Dilute 1 liter per 50 liters of water and apply around the base of each tree.</li>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Features</summary>
                            <div>
                                <ul>
                                    <li>Prevents crown gall disease in fruit trees and shrubs.</li>
                                    <li>Produces antibiotics that suppress harmful bacteria.</li>
                                    <li>Ensures healthy root development and improves plant vigor.</li>
                                    <li>Provides long-lasting disease resistance.</li>
                                    <li>Used as a preventive treatment, not a cure.</li>
                                </ul>
                            </div>
                        </details>
                        </details>
                        <details class="parent">
                            <summary>Storage</summary>
                            <div>
                                <ul>
                                    <p>
                                        Store in a well-ventilated area, away from direct sunlight and out of
                                        children's reach.
                                    </p>
                                </ul>
                            </div>
                        </details>
                        <details class="parent">
                            <summary>Shelf life</summary>
                            <div>
                                <ul>
                                    <p>
                                        30 days from the production date.
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
</article>
`;

function Services_Product_1_Load_Content_En() {
  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });

  Title_H1.innerHTML = Title_H1_En;
  Title_H1.style.direction = "ltr";
  Article_Modals_Container.innerHTML = Article_Modals_Container_En;
  Product_1_Section.style.color = "black";

  var Read_More_Buttons = document.getElementsByClassName("Read_More_Buttons");

  for (var i = 0; i < Read_More_Buttons.length; i++) {
    Read_More_Buttons[i].innerHTML = "Read More";
  }

  var Bio_Act_Section_1_h2 = document.getElementById("Bio_Act_Section_1_h2");
  var Bio_P_Section_1_h2 = document.getElementById("Bio_P_Section_1_h2");
  var Bio_K_Section_1_h2 = document.getElementById("Bio_K_Section_1_h2");
  var Bio_N_Section_1_h2 = document.getElementById("Bio_N_Section_1_h2");
  var Anti_Nema_Section_1_h2 = document.getElementById(
    "Anti_Nema_Section_1_h2"
  );
  var Root_Active_Section_1_h2 = document.getElementById(
    "Root_Active_Section_1_h2"
  );
  var Salt_Free_Section_1_h2 = document.getElementById(
    "Salt_Free_Section_1_h2"
  );
  var Anti_Frost_Section_1_h2 = document.getElementById(
    "Anti_Frost_Section_1_h2"
  );
  var No_Sosa_Section_1_h2 = document.getElementById("No_Sosa_Section_1_h2");
  var Amino_Acid_Compound_Section_1_h2 = document.getElementById(
    "Amino_Acid_Compound_Section_1_h2"
  );
  var Insect_Free_Section_1_h2 = document.getElementById(
    "Insect_Free_Section_1_h2"
  );
  var Gall_Free_Section_1_h2 = document.getElementById(
    "Gall_Free_Section_1_h2"
  );

  var Bio_Act_Section_2_h2 = document.getElementById("Bio_Act_Section_2_h2");
  var Bio_P_Section_2_h2 = document.getElementById("Bio_P_Section_2_h2");
  var Bio_K_Section_2_h2 = document.getElementById("Bio_K_Section_2_h2");
  var Bio_N_Section_2_h2 = document.getElementById("Bio_N_Section_2_h2");
  var Anti_Nema_Section_2_h2 = document.getElementById(
    "Anti_Nema_Section_2_h2"
  );
  var Root_Active_Section_2_h2 = document.getElementById(
    "Root_Active_Section_2_h2"
  );
  var Salt_Free_Section_2_h2 = document.getElementById(
    "Salt_Free_Section_2_h2"
  );
  var Anti_Frost_Section_2_h2 = document.getElementById(
    "Anti_Frost_Section_2_h2"
  );
  var No_Sosa_Section_2_h2 = document.getElementById("No_Sosa_Section_2_h2");
  var Amino_Acid_Compound_Section_2_h2 = document.getElementById(
    "Amino_Acid_Compound_Section_2_h2"
  );
  var Insect_Free_Section_2_h2 = document.getElementById(
    "Insect_Free_Section_2_h2"
  );
  var Gall_Free_Section_2_h2 = document.getElementById(
    "Gall_Free_Section_2_h2"
  );

  Bio_Act_Section_1_h2.innerHTML = "Bio Act ";
  Bio_Act_Section_2_h2.innerHTML = "Bio Act ";

  Bio_P_Section_1_h2.innerHTML = "Bio P ";
  Bio_P_Section_2_h2.innerHTML = "Bio P ";

  Bio_K_Section_1_h2.innerHTML = "Bio K";
  Bio_K_Section_2_h2.innerHTML = "Bio K";

  Bio_N_Section_1_h2.innerHTML = "Bio N";
  Bio_N_Section_2_h2.innerHTML = "Bio N";

  Anti_Nema_Section_1_h2.innerHTML = "Anti Nema";
  Anti_Nema_Section_2_h2.innerHTML = "Anti Nema";

  Root_Active_Section_1_h2.innerHTML = "Root Active";
  Root_Active_Section_2_h2.innerHTML = "Root Active";

  Salt_Free_Section_1_h2.innerHTML = "Salt Free";
  Salt_Free_Section_2_h2.innerHTML = "Salt Free";

  Anti_Frost_Section_1_h2.innerHTML = "Anti Frost";
  Anti_Frost_Section_2_h2.innerHTML = "Anti Frost";

  No_Sosa_Section_1_h2.innerHTML = "No Sosa";
  No_Sosa_Section_2_h2.innerHTML = "No Sosa";

  Amino_Acid_Compound_Section_1_h2.innerHTML = "Amino Acids";
  Amino_Acid_Compound_Section_2_h2.innerHTML = "Amino Acids";

  Insect_Free_Section_1_h2.innerHTML="Insect Free";
  Insect_Free_Section_2_h2.innerHTML="Insect Free";

  Gall_Free_Section_1_h2.innerHTML="Gall Free";
  Gall_Free_Section_2_h2.innerHTML="Gall Free";

  /********************* List 2.2 Script **********************************/

  function toggleAccordion(event) {
    event.preventDefault();
    event.stopPropagation();

    let details = $(this).parent();
    let content = details.children("div");

    if (details.attr("open")) {
      content.slideUp(800, function () {
        details.removeAttr("open");
      });
    } else {
      details.attr("open", "");
      content.slideDown(800);
    }
  }

  function toggleChildAccordion(event) {
    event.stopPropagation();
    let btn = $(this);
    let content = btn.next(".child-content");

    if (content.is(":visible")) {
      content.slideUp(800);
      btn.removeClass("active");
    } else {
      content.slideDown(800);
      btn.addClass("active");
    }
  }

  $(document).ready(function () {
    $("summary").on("click", toggleAccordion);
    $(".child-toggle").on("click", toggleChildAccordion);
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
      var mProps = m.querySelector(".modal__content").getBoundingClientRect();
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
          mProps.height / 3 + mProps.top - trigProps.top - trigProps.height / 3
        );
      }

      // translate button to center of screen
      trig.style.transform = "translate(" + transX + "px, " + transY + "px)";
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

if (localStorage.getItem("Permenant_Language") === "English") {
  Services_Product_1_Load_Content_En();
}
