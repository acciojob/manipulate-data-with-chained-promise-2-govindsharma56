//your JS code here. If required.
let output=document.querySelector('#output');
let arr=[1,2,3,4];
function manipulateArray(arr) {
  return Promise.resolve(arr)
    .then((data) => {
        // 1. Odd numbers remove
        return data.filter(num => num % 2 === 0);
    })
    .then((data) => {
        // 2. Even numbers × 2
        return data.map(num => num * 2);
    });
}
manipulateArray([1, 2, 3, 4]) 
.then((result) => 
{ document.querySelector("#output").innerText = "Result: " + result.join(", ");
});
