//console.log('test');
//typed variables declaration
var myString;
var myNum;
var myBool;
var myVar;
/*
var stringArray: string[]
var numberArray: number[]
var booleanArray: boolean[]
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
stringArray = ['Clef 1', 'Clef 2', 'Clef 3', 'Clef 4', 'Clef 5'];
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
booleanArray = [true, true, false, false, true];
strNumTuple = ['Clef 1', 1000];
//output
document.write(myString + '<br />' + myNum + '<br />' + myBool + '<br />' + myVar + '<br />' +
    stringArray + '<br />' + numberArray + '<br />' + booleanArray + '<br/>' + strNumTuple);
