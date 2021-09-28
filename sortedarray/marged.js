function mergeSortedArray(first, second) {
    let merged = [];
    let lengths = first.length + second.length;
    let j = 0;
    let k = 0;

    for (let i=0; i < lengths; i++) {
        if (first[i] < second[k] || second[k]== undefined) {
            merged.push(first[j]);
            j++;
        } else {
            merged.push(second[k]);
            k++;
        }
    }
    return merged;
}
console.log(mergeSortedArray([3,6,9,10,11],[1,2,3,4]));