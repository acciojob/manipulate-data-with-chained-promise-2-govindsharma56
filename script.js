let output = document.querySelector('#output');
let arr = [1, 2, 3, 4];
function manipulateArray(arr) {

    // Initial promise resolves after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    })

    // First transformation after initial promise
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {

                let evenNumbers = data.filter(num => num % 2 === 0);

                output.innerText = JSON.stringify(evenNumbers);

                resolve(evenNumbers);

            }, 1000);
        });
    })

    // Second transformation
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

