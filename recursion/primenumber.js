// রিকার্সন পদ্ধতিতে একটা সংখ্যার ফ্যাক্টরিয়াল বের কর?
/*
function isPrime(n){
    let temp = 0;
    for(let i = 2; i < n; i++) {
        if (n % i == 0) {
            temp =1;
            break;
        }
    }
    if (temp == 0) {
        console.log('This is Prime Number');
    } else {
        console.log('This is Not Prime NUmber');
    }
}
console.log(isPrime(237));
*/

// while loop using prime number check

// কোন একটা সংখ্যা প্রাইম বা মৌলিক সংখ্যা কিনা সেটা বের করার একটা প্রোগ্রাম লিখ।
function isPrime(n) {
    let divisor = 2;
    while(n > divisor) {
        if(n % divisor == 0) {
            return false;
        }
        else{
            divisor++;
        }
    }
    return true;
}

console.log(isPrime(6));