// fibonancci series

function fibonacci(n) {
    let fibo = [0, 1];
    for (let i=2; i<=n; i++) {
        fibo[i] = fibo[i-1] + fibo[i - 2];
    }
    return fibo; // (n) th pod
    // return fibo; // fibo return
}

console.log(fibonacci(10));



// ======recursive method fibonancci series 
// function fibonacci(n){
//     if (n <= 1){
//         return n;
//     }
//     return fibonacci(n-1) + fibonacci(n -2);
// }
// console.log(fibonacci(10));


