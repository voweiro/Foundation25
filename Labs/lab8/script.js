// grade calculator
// const grade = prompt("Enter your grade:");
// console.log(grade);
// if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 89) {
//   console.log("B");
// } else if (grade >= 79) {
//   console.log("C");
// } else if (grade >= 69) {
//   console.log("D");
// } else {
//   console.log("F");
// }

let grade = [50, 89, 75, 84, 99];
// we are adding all the grades in the array
let sum = 0;

for (let i = 0; i < grade.length; i++) {
  sum += grade[i];

  console.log(grade[i]);
}
let result = sum / 5;

console.log(sum);
console.log(result);
