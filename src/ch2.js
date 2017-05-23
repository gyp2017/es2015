var mem = 0;

let member = 10;

// let member = 19;

function setMember() {
  console.log("로컬:", hoist);
  let hoist = 90;
  let member = 20;
  console.log("로컬:", member);

  if (true) {
    let member = 30;
    console.log("블록:", member);
  }
}

setMember();
console.log("글로벌", member);
