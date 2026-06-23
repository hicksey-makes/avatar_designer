const border_slide = document.querySelector("#brdr-range");
const img_size = document.querySelector("#img-range");
const border_clrpck = document.querySelector("#clr-pick");
const border_rad = document.querySelector("#avat-img");
border_slide.addEventListener("change", (event) => {
    console.log(event.target.value);
    console.log(border_rad);
    // border_rad.style = `border-radius:${Number(event.target.value)}%`;
    border_rad.style.borderRadius = Number(event.target.value) + "%";
    localStorage.setItem("borderRadius", event.target.value);
  });
img_size.addEventListener("change", event => {
  console.log(event.target.value);
  document.querySelector("#avat-img").width = event.target.value;
  document.querySelector("#avat-img").height = event.target.value;
});
border_clrpck.addEventListener("change", event => {
  console.log(event.target.value);
  border_rad.style.borderColor = event.target.value;
  localStorage.setItem("borderColor", event.target.value);
});

const btnImg1 = document.querySelector("#btn-img1");
const btnImg2 = document.querySelector("#btn-img2");
const btnImg3 = document.querySelector("#btn-img3");

const avImg = document.querySelector("#avat-img");

btnImg1.addEventListener("click", (event) => {
  console.log(event.target.dataset.image);
  avImg.src = event.target.dataset.image;
  console.log(event.target);
  event.target.disabled = true;
  btnImg2.disabled = false;
  btnImg3.disabled = false;
});
btnImg2.addEventListener("click", (event) => {
  console.log(event.target.dataset.image);
  avImg.src = event.target.dataset.image;
  event.target.disabled = true;
  btnImg1.disabled = false;
  btnImg3.disabled = false;
});
btnImg3.addEventListener("click", (event) => {
  console.log(event);
  avImg.src = event.target.dataset.image;
  event.target.disabled = true;
  btnImg1.disabled = false;
  btnImg2.disabled = false;
});
document.querySelector("body").onload = function() {
  console.log("I'm loaded!!");
  border_rad.style.borderColor = localStorage.getItem("borderColor");
  border_rad.style.borderRadius = Number(localStorage.getItem("borderRadius")) + "%";
}
