// Code your solution here!
function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if(myString){
    let mySubString = myString.substring(1);
    return reverseString(mySubString) + myString[0];
  } else {
    return myString
  }
}

function isPalindrome(myString) {
  let firstLetter = myString[0];
  let lastLetter = myString.substring(myString.length-1);
  let middle = myString.substring(1, myString.length-1);
  console.log('string', myString, 'first', firstLetter, 'last', lastLetter, 'middle', middle)
  if(myString.length < 2){
    return true;
  }
  if(firstLetter === lastLetter){
    return isPalindrome(middle)
  } else {
    return false
  }
  // if(myString === reverseString(myString)){
  //   return true
  // } else {
  //   return false
  // }
}

function addUpTo(array, index){
  if(array.length < 2){
    return 0;
  } else {
    console.log('array[index]', array[index], 'index', index)
    if(index === 0){
      return array[index];
    }else {
      return array[index] + addUpTo(array.slice(0, index+1), index-1);
    }
  }
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  } else {
    return Math.max(array[0], maxOf(array.slice(1)))
  }
}

function includesNumber(array, number){
  if(array.length === 1){
    if(array[0] === number){
      return true
    }else{
      return false
    }
  }else {
    if(array[0] === number){
      console.log('array[0]', array[0])
      return true
    }else{
      return includesNumber(array.slice(1), number)
    }
  }
  
}