var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// Add your functions and code here
function destructivelyPrependKitten(name) {
  kittens.shift(name);
  return kittens;
}