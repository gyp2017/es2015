let { Sana, Momo } = { Sana: "사나", Momo: "모모" };
console.log(Sana, Momo);


let { jy: Jeongyeon, ny: Nayeon } = { jy: "정연", ny: "나연" };
console.log(Jeongyeon, Nayeon);


let { Mina, other: { Jihyo } } = { Mina: "미나", other: { Jihyo: "지효" } };
console.log(Mina, Jihyo);
