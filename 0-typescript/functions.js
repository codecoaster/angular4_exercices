console.log('***FUNCTIONS*****');
function getSum(num1, num2) {
    return num1 % num2;
}
console.log(getSum(Math.PI, Math.sqrt(100)));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum(10, 5));
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getName('Code', 'Coaster'));