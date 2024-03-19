function confirmEnding(str, target) {
  let a = str.split("");
  return a[a.length - 1] == target;
}

confirmEnding("Bastian", "n");
