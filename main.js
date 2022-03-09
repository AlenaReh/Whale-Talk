// input
let input = `turpentine and turtles`;
// vowels array
const vowels = ['a', 'e', 'i', 'o', 'u'];
// place to store the vowels from the input string
let resultArray = [];
// comparing input vs vowels and adding extra 'e' && 'u'
for (let i = 0; i < input.length; i++) {
    if (input[i]==='e'){
        resultArray.push('e');
    }
    if (input[i]==='u'){
        resultArray.push('u');
    }

    for (let j = 0; j < vowels.length; j++) {
       if (input[i]===vowels[j]){
        resultArray.push(input[i]);
       }
    }
}

//joining our resultArray into a single string
resultString = resultArray.join('').toUpperCase();
console.log(resultString);
