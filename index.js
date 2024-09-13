const hasAllUniqueCharacters = (inputString) => {
  let unique = true;
  inputString.split("").forEach((char, i) => {
    for (let j = i; j < inputString.split("").length - 1; j + 1) {
      j += 1;
      if (inputString.split("")[j] === char) {
        unique = false;
        break;
      }
    }
  });
  console.log(unique);
};

hasAllUniqueCharacters("world");
