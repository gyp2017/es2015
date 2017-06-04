let getMember0 = ([m0, m1, m2 = "쯔위"]) => [m0, m1, m2];

console.log(getMember0(["사나", "모모"]));

let getMember1 = ([m0, m1, m2] = ["사나", "모모", "쯔위"]) => [m0, m1, m2];

console.log(getMember1());

let getMember2 = ({name: name, team: team = "소녀시대"}) => ({name,team});

console.log(getMember2({name: "사나", team: "트와이스"}));
console.log(getMember2({name: "태연"}));

let getMember3 = ({name} = {name: "쯔위"}) => ({name});

console.log(getMember3());
