let twice = ["사나", "모모"];
let result0 = twice[Symbol.iterator];

// function values() { [native code] }
console.log(result0);

let sana = {name: "사나"};
let result1 = sana[Symbol.iterator];

// undefined
console.log(result1);
