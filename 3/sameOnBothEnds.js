//**Given a sentence, return the number of words which have the same first and last letter.
//Examples:
//countSameEnds("Pop! goes the balloon") ➞ 1
//countSameEnds("And the crowd goes wild!") ➞ 0
//countSameEnds("No I am not in a gang.") ➞ 1
//Notes: Don't count single character words (such as "I" and "A" in example #3).
//The function should not be case sensitive, meaning a capital "P" should match with a lowercase one.
//Mind the punctuation!
//Bonus points indeed for using regex!**/
function countSameEnds(str) {
    let first=str.toLowerCase().replace(/[^ a-z]/g,'').split(' ');//turns all the leters to lower case & returns a new string with 
    //all matches of a pattern replaced by a replacement
    let result = first.filter(x=>x.length>1 && x[0]==x.slice(-1)).length;//crea un nuevo array con todos los elementos 
    //que cumplan la condición implementada por la función
    return result;
}