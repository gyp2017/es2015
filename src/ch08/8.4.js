let Nayeon = {
  name: "나연",
  height: 163,
  weight: 48
};

let dup = Object.assign({}, Nayeon);

dup.height = 165;
console.log("원본:", Nayeon.height);
console.log("복제:", dup.height);

Nayeon.weight = 47;
console.log("원본:", Nayeon.weight);
console.log("복제:", dup.weight);
