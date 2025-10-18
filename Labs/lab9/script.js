let grade = [50, 89, 75, 84, 99];
let sum = 0;
for (let i = 0; i < grade.length; i++) {
  sum += grade[i];
  console.log(grade[i]);
}

console.log(sum);
let result = sum / grade.length;
console.log(result);

sum = 0;
for (let item of grade) {
  sum += item;
  console.log(item);
}
console.log(sum);

const countries = [
  "USA",
  "Canada",
  "UK",
  "India",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Australia",
  "Japan",
  "China",
  "Russia",
  "Brazil",
  "Mexico",
  "South Africa",
];

let [country1, , ...restCountries] = countries;
console.log(country1, restCountries);

// countries.forEach((country, index) =>
//   console.log("this is ", country, "of index ", index)
// );

grade.forEach((score, index) =>
  console.log("this is ", score, "of index ", index)
);

countries.forEach(printnum);

function printnum(country, index) {
  console.log("this is ", country, "of index ", index);
}

const numbers = [15, 23, 8, 42, 4];
const firstLargeNumber = numbers.find((num) => num === 5);
console.log(firstLargeNumber);
