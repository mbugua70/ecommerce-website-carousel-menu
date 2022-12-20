const arr_lftEl = document.querySelector(".arrow-left");
const left1 = document.querySelector(".grid-three");
const arr_rgtEl = document.querySelector(".arrow-right");
const arr2_rtlEl = document.querySelector(".arrow2-right")
const arr2_lftEl = document.querySelector(".arrow2-left");
const left2 = document.querySelector(".grid-x");
function scrolLLft() {
    left1.scrollBy(-240, 0);
    // console.log("clicked");
}

function scrollRtl() {
    left1.scrollBy(240, 0)
}

function scrollLft_2() {
    left2.scrollBy(-240, 0);
}

function scrollRtl_2() {
    left2.scrollBy(240, 0);
}

arr2_rtlEl.addEventListener("click", scrollRtl_2, false);
arr2_lftEl.addEventListener("click", scrollLft_2, false);
arr_rgtEl.addEventListener("click", scrollRtl, false);
arr_lftEl.addEventListener("click", scrolLLft, false);