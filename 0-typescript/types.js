console.log('***TYPED VARIABLES*****');
//typed variables declaration
var myString;
var myNum;
var myBool;
var myVar;
/*
let stringArray: string[]
let numberArray: number[]
let booleanArray: boolean[]
*/
var stringArray;
var numberArray;
var booleanArray;
var strNumTuple;
//assign values
myString = 'Test 1,2,3,4,5,6,7,8,9!'.slice(0, 5);
myNum = 5 % 9;
myBool = true;
myVar = true;
stringArray = ['Clef 1', 'Clef 2', 'Clef 3', 'Clef 4', 'Clef 5'].reverse();
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Math.sqrt(16)];
booleanArray = [true, true, false, false, true];
strNumTuple = ['Clef 1', myString, 1000, Math.PI, myNum, myNum];
var myUndefined = null;
var myVoid = undefined;
var myNull = void 
//output
console.log(myString + myNum + myBool + myVar +
    stringArray + numberArray + booleanArray + strNumTuple);
