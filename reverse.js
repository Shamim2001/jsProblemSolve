// string reverse javaCript problem solved
// function stringReverse(word) {
//     let reverseWord = ""
//     for (let i=word.length -1; i>=0; i--) {
//         let letter = word[i]
//         reverseWord = reverseWord + letter
//     }
//     return reverseWord
// }
// console.log(stringReverse("my name is shamim")) // civic, eye, rotator, refer



function isPalindrome(word){
    var reverse = "";
    for(var i = word.length-1;i>=0;i--){
        reverse += word[i];
    }
    
    if(reverse == word){
        console.log("It is Palindrome");
    } else {
        console.log(" It Is Not Palindrome");
    }
}

console.log(isPalindrome('madam'));






