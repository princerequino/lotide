const args = process.argv;

for (let i = 2; i < args.length; i++) {
  let reversedWord = "";
  for (let u = args[i].length - 1; u > -1; u--) {
    reversedWord += args[i][u]
  }
  console.log(reversedWord);
}
