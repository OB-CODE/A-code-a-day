function disemvowel(str) {
  let outPut = []
  let arr = [...str]
  arr.forEach(letter => {
    // Quetion seemed to want the \n split in the output but never needed it.
    // if (letter === '\n') {
    //   outPut.push('\\')
    //   outPut.push('n')
    //   return
    // }
  if (letter.toLowerCase() !== 'a' && letter.toLowerCase() !== 'e' && letter.toLowerCase() !== 'i'&& letter.toLowerCase() !== 'o' && letter.toLowerCase() !== 'u' ) {
    // && letter !== 'y' - Mention of the letter y, however, tests needed it to be included. 
    outPut.push(letter)
    }
  })
  // console.log(outPut.join(''))
  return outPut.join('');
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));

// Other users solving the problem with REGEX:

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// disemvowel = str => str.replace(/[aeiou]/gi,'');
