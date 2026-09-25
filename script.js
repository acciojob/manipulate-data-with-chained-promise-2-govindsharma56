
// your JS code here. If required.

let output = document.querySelector('#output');
let arr = [1, 2, 3, 4];

function manipulateArray(arr) {

    return Promise.resolve(arr)

        // First transformation: filter even numbers
        .then((data) => {
            return new Promise((resolve) => {
                setTimeout(() => {

                    let evenNumbers = data.filter(num => num % 2 === 0);

                    output.innerText = JSON.stringify(evenNumbers);

                    resolve(evenNumbers);

                }, 1000);
            });
        })

        // Second transformation: multiply by 2
        .then((data) => {
            return new Promise((resolve) => {
                setTimeout(() => {

                    let result = data.map(num => num * 2);

                    output.innerText = JSON.stringify(result);

                    resolve(result);

                }, 2000);
            });
        });
}

manipulateArray(arr);
