// var height = $("#height").val();
// var width = $("#width").val();
// var error = false;
// if(height <= 0) {
//     error = true;
// }
// if(width <= 0) {
//     error = true;
// }
// if(width > 2 * height) {
//      error = true;
// }
// if(height > 2 * width) {
//     error = true;
// }

// if(!error) {
//     var area = .5 * height * width;
//      $("#area").val(area);
// }


//Example2
// var baseValue = Number(prompt("Enter the base of the triangle: "));
// var heightValue = Number(prompt("Enter the height of the triangle: "));

// function formula1(basevalue, heightValue) {
// // calculate the area
// var areaValue1 = (baseValue * heightValue) / 2;
// return("the area of the triangle is" + areaValue1);

// }

// var side1 = parseInt(prompt("Enter side1: "));
// var side2 = parseInt(prompt("Enter side2: "));
// var side3 = parseInt(prompt("Enter side3: "));




//Example 3
// function formula2(){

// //calculate the semi-parameter
//  var s = (side1 + side2 + side3) / 2;
// //calculate the area
// var areaValue2 = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
// alert("The area of the triangle is " ${areaValue2});

// } 


//Example 4
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);