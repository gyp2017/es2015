let get0 = (...members) => {
  console.log(members);
}

get0("사나", "모모", "미나", "쯔위");

let get1 = (member, ...members) => {
  console.log(member);
  console.log(members);
}

get1("사나", "모모", "미나", "쯔위");
