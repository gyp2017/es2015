let twice = { name: "트와이스", name: "Twice" };

// {name: "Twice"}
console.log(twice);


let name = "다현";
let height = 158;
let Dahyun = { name, height };

// {name: "다현", height: 158}
console.log(Dahyun);


let Jihyo = {
  name: "지효",
  dance: function() {
    console.log('dance!!');
  },
  sing(song) {
    console.log(`${this.name}가 "${song}"를 부른다!`);
  }
}

Jihyo.dance();
Jihyo.sing("트로트");

