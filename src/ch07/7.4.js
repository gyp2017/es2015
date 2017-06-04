for (let girl of ["모모", "쯔위", "정연"]) {
  console.log(girl);
}

let girls = [
  { name: "모모", physical: { height: 162, weight: 46 } },
  { name: "쯔위", physical: { height: 170, weight: 51 } },
  { name: "정연", physical: { height: 167, weight: 49 } },
]

for (let { name, physical: { height, weight } } of girls) {
  console.log(`${name}: ${height}cm, ${weight}kg`);
}
