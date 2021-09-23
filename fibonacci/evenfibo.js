
function evenNumbers(n){
    if (n < 1) {
        return 1;
    }
    return 2*evenNumbers(n-1);
}
console.log(evenNumbers(5));