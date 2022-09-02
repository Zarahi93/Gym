//**You get an array of numbers, return the sum of all of the positives ones**//
//**Note: if there is nothing to sum, the sum is default to 0
//Example [1,-4,7,12] => 1 + 7 + 12 = 20**//
function positiveSum(arr) {
    let sum = 0;//if there is nothing to sum, the sum is default to 0
    for(let i = 0; i < arr.length; i++) {//Pasa por todas y cada una de las posiciones del arreglo
        if(arr[i] > 0) {sum += arr[i] //Mientras el número sea mayor a 0 se ara la suma.
    }
    return sum
}
};