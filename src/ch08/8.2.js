let Dahyun = {};
Object.defineProperty(Dahyun, "name", {
  value: "다현",
  enumerable: true
});

// 이름: 다현
console.log("이름:", Dahyun.name);


Object.defineProperty(Dahyun, "getHeight", {
  get: function() {
    return 158;
  }
});

// 신장: 158
console.log("신장:", Dahyun.getHeight);


Object.defineProperty(Dahyun, "setWeight", {
  set: function(param) {
    this.weight = param;
  }
});
Dahyun.setWeight = 45;

// 체중: 45
console.log("체중:", Dahyun.weight);

