let sing0 = () => "cheer up";

// cheer up
console.log(sing0());

let sing1 = song => (song);

// TT
console.log(sing1("TT"));

let sing2 = (song) => {
  return song;
};

// knock knock
console.log(sing2("knock knock"));

let sing3 = (singer, song) => ({ singer, song })

// Object {singer: "Twice", song: "knock knock"}
console.log(sing3("Twice", "knock knock"));
