var momo = new Object({ name: "모모" });
console.log(momo);

var mina = {name: "미나"};
console.log(mina);

function Twice(name) {
  this.name = name;
}

var sana = new Twice("사나");
console.log(sana);

var twice = [
  { name: "모모" },
  { name: "미나" },
  { name: "사나" }
];
console.log(twice);

var twice1 = new Array(
  { name: "모모" },
  { name: "미나" },
  { name: "사나" }
);
console.log(twice1);
