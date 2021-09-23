function leastCommonMultiple(a,b) {
    let multiple = a*b;
    while(b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return multiple  / a;
}
console.log(leastCommonMultiple(6,8));