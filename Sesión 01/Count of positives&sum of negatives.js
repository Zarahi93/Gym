//**Given an array of integers, return an array, where the first element is the count of positives numbers
// and the second element is sum of negative numbers. 0 is neither positive nor negative.
//**If the input is an empty array or is null, return an empty array.
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].**/
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {//If the input is an empty array or is null, return an empty array
        return [];
    }
    let array = [0, 0];//the array only has 2 positions and both are 0

    for(let i = 0; i < input.length; i++) {//setup loop to go through array of given length
        if(input[i] <= 0) {//elements of array must be equal or lesser than 0
            array[1] += input[i];//sums the elements in the position 1 of the array
      } else {
            array[0] += 1;//Counts the elemts and puts the result in the position 0 of the array
      }
    }
    return array;
};