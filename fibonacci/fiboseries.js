// 2 + 4+6+8+10+.....ber korar program

function evenFibo(n){
    let series = [];
    for (let i=1; i<=n; i++){
        let element = i*2;
        series.push(element);
    }
    return series;
}

console.log(evenFibo(15));