const eachYear = document.getElementById("date");

let get = new Date();
eachYear.innerHTML = get.getFullYear();

console.log(eachYear);

// const btn = document.getElementById("play");
// btn.addEventListener("click", () => {
//   document.querySelector("#h").classList.toggle("md:flex");
//   document.querySelector("#s").classList.toggle("md:hidden");
// });

document.querySelector("button").addEventListener("click", () => {
  document.getElementById("right").classList.toggle("right-0");
});
