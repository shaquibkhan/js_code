function largest() {
    const arr = [923, 45, 11, 1111, 167, 83, 99, 12, 88, 9990];
    console.log("Original Array", arr);
    let highest = Math.max(...arr);
   let newArr =  arr.filter(num => num !== highest)
    let secondHighest = Math.max(...newArr);
    console.log("Second highest ->", secondHighest);
}
largest();

