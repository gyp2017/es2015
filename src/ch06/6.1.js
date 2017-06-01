let [one, two] = [1, 2];
console.log(one);
console.log(two);


let [Sana, Momo, Mina] = ["사나", "모모", "미나"];
console.log(Sana);
console.log(Momo);
console.log(Mina);

let [Jeongyeon, [Nayeon, [Jihyo]]] = ["정연", ["나연", ["지효"]]];
console.log(Jeongyeon);
console.log(Nayeon);
console.log(Jihyo);

let [Dahyun, ...other] = ["다현", "채영", "쯔위"];
console.log(Dahyun);
console.log(other);
