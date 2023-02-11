

let btn = document.getElementById("increment");
let btn1 = document.getElementById("decrement");
let count = document.getElementById("output");

btn.addEventListener("click", function () {
  count.value = Number(count.value) + 1;
});

btn1.addEventListener("click", function () {
  if (count.value > 0) {
    count.value = Number(count.value) - 1;
  }
});