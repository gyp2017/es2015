let twice = ["사나", "모모"];
let iterator = twice[Symbol.iterator]();

// 1: object
console.log("1:", typeof iterator);
// 2: Object {value: "사나", done: false}
console.log("2:", iterator.next());
// 3: Object {value: "모모", done: false}
console.log("3:", iterator.next());
// 4: Object {value: undefined, done: true}
console.log("4:", iterator.next());
