const eachYear = document.getElementById("date");

let get = new Date();
eachYear.innerHTML = get.getFullYear();

// const btn = document.getElementById("play");
// btn.addEventListener("click", () => {
//   document.querySelector("#h").classList.toggle("md:flex");
//   document.querySelector("#s").classList.toggle("md:hidden");
// });

document.querySelector("button").addEventListener("click", () => {
  document.getElementById("right").classList.toggle("left-0");
});
