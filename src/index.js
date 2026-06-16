const border_slide = document.querySelector("#brdr-range");
const border_rad = document.querySelector("#avat-img");
border_slide.addEventListener("change", (event) => {
    console.log(event.target.value);
    console.log(border_rad);
    border_rad.style = `border-radius:${Number(event.target.value)}%`;
})
