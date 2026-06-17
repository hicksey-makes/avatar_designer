const border_slide = document.querySelector("#brdr-range");
const border_clrpck = document.querySelector("#clr-pick");
const border_rad = document.querySelector("#avat-img");
border_slide.addEventListener("change", (event) => {
    console.log(event.target.value);
    console.log(border_rad);
    // border_rad.style = `border-radius:${Number(event.target.value)}%`;
    border_rad.style.borderRadius = Number(event.target.value) + "%";
});

border_clrpck.addEventListener("change", event => {
  console.log(event.target.value);
  border_rad.style.borderColor = event.target.value;
});

const btnImg1 = document.querySelector("#btn-img1");
const btnImg2 = document.querySelector("#btn-img2");
const btnImg3 = document.querySelector("#btn-img3");

const avImg = document.querySelector("#avat-img");

btnImg1.addEventListener("click", (event) => {
  console.log(event.target.dataset.image);
  avImg.src = event.target.dataset.image;
});
btnImg2.addEventListener("click", (event) => {
  console.log(event.target.dataset.image);
  avImg.src = event.target.dataset.image;
});
btnImg3.addEventListener("click", (event) => {
  console.log(event);
  avImg.src = event.target.dataset.image;
});
