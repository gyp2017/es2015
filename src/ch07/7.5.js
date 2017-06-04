let girls = ["모모", "쯔위", "정연"];

girls.sing = function() {};

// 0 모모
// 1 쯔위
// 2 정연
// sing function () {}
for (let key in girls) {
  console.log(key, girls[key]);
}

// 모모
// 쯔위
// 정연
for (let girl of girls) {
  console.log(girl);
}


let twice = {
  mm: "모모",
  sn: "사나",
  jy: "정연",
  ny: "나연",
  mn: "미나",
  jh: "지효",
};

// mm 모모
// sn 사나
// jy 정연
// ny 나연
// mn 미나
// jh 지효
for (let key in twice) {
  console.log(key, twice[key]);
}

let keys = Object.keys(twice);
for (let key of keys) {
  console.log(key, twice[key]);
}


