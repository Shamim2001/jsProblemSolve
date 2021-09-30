/*
function removeDuplicate(sentence) {
    let output = '';
    sentenceLen = sentence.length;

    for (let i=0; i < sentenceLen; i++) {
        let word = sentence[i];
        if (output.indexOf(word) == -1) {
            output = output + word;
        }
    }
    return output;
}
// console.log(removeDuplicate("isting bisting disting"));
console.log(removeDuplicate("my name is shamim ahmed"));

*/


// একটা বাক্যের মধ্যে যে বর্ণগুলো একবারের বেশি ব্যবহার করা হয়নি। সেগুলার মধ্যে প্রথম বর্ণ বের করার প্রোগ্রাম লিখ (first non-repeating character)।

function firstNonRepeatingCharacter(text) {
    let textLen = text.length;

    for (let i =0; i < textLen; i++) {
        let letter = text[i];
        if (text.indexOf(letter) == text.lastIndexOf(letter)) {
            return letter;
        }
    }
}

// console.log(firstNonRepeatingCharacter('my name is shamim'));
console.log(firstNonRepeatingCharacter('Lorem Ipsum comes from sections'));