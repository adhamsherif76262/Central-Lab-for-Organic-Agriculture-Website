function Services_Product_2_Load_Content_Ar() {
  jQuery("#waterdrop").raindrops({
    color: "#1c1f2f",
    canvasHeight: 150,
    density: 0.1,
    frequency: 10,
  });
  Title_H1.innerHTML = Title_H1_Ar;
  Title_H1.style.direction = "rtl";
  Services_Section.innerHTML = Services_Section_Ar;
}

if (localStorage.getItem("Permenant_Language") === "عربي") {
  Services_Product_2_Load_Content_Ar();
}
