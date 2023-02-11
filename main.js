// let count = 0;
//   const output = document.querySelector("#output1");

//   const increment = document.querySelector("#increment1");
//   increment.addEventListener("click", function() {
//     count++;
//     output.value = count;
//   });

//   const decrement = document.querySelector("#decrement1");
//   decrement.addEventListener("click", function() {
//     if (count > 0) { 
//       count--; 
//     }
//     output.value = count;
//   });


// let count1 = 0;
// for(i=0;i<=count1;i++){
//   if(count1<0){
//     let inc = document.getElementById("#out");
//   }
//   else if (count1>0){
//     let dec = document.getElementById("#out")
//   }
// }

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