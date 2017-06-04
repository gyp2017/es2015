let Tzuyu = {
  name: "쯔위",
  height: 170,
  get getHeight() {
    return this.height;
  },
  set setWeight(weight) {
    this.weight = weight;
  }
};

// 이름: 쯔위
console.log("이름:", Tzuyu.name);
// 신장: 170
console.log("신장:", Tzuyu.getHeight);
Tzuyu.setWeight = 51;
// 체중: 51
console.log("체중:", Tzuyu.weight);
