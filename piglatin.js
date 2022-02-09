const args = process.argv;
let pigLatin = "";

for (let i = 2; i < args.length; i++) {
  let jumbledWord = args[i].substring(1)
  pigLatin += jumbledWord + args[i].substring(0, 1) + "ay "
  };
  console.log(pigLatin.trim());

  

