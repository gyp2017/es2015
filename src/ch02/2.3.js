var idol0 = "모모";
let idol1 = "사나";

console.log(idol0); // 모모
console.log(idol1); // 사나

function change() {
  var idol0 = "モモ";
  let idol1 = "サナ";
}

change();
console.log(idol0); // 모모
console.log(idol1); // 사나

if (true) {
  var idol0 = "momo";
  let idol1 = "sana";
}

console.log(idol0); // momo
console.log(idol1); // 사나
