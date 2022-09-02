//**Given two temperatures, return true if one is less than 0 and the other is greater than 100.
//Examples: icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false**/
function icyHot(temp1, temp2){
  if (temp1<0 && temp2>100 || temp2<0 && temp1>100){
    return true
      }
  else {
  return false}
}