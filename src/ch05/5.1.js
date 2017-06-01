let unit0 = ["사나", "모모"];
let unit1 = ["미나", "정연"];
let team = ["쯔위", ...unit0, "지효", ...unit1];

// ["쯔위", "사나", "모모", "지효", "미나", "정연"]
console.log(team);
// 6
console.log(team.length);

let twice = [..."트와이스"];

// ["트", "와", "이", "스"]
console.log(twice);

const songs = ["cheer up", "TT", "knock knock"];
sing(...songs);

function sing(s0, s1, s2) {
  console.log(s0, s1, s2);
}
