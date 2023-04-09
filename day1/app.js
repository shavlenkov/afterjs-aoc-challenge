// 1.1

const fs = require("fs");

let content = fs.readFileSync("kalotiy.txt", "utf8").split('\r\n\r\n');

let arr = content.map((item) => {

    let arr2 = item.split('\r\n').map((item2) => {
        return Number(item2)
    });

    return arr2
})

let arr3 = arr.map((item) => {
    let summa = 0;


    for(let i = 0; i < item.length; i++) {
        summa += item[i]
    }

    return summa;
})

let max = arr3[0];
let position = 0;

for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i];
        position = i;
    }
}

console.log(max)
console.log(position + 1)


// 1.2

function bubbleSort(array) {
    let length = array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // меняем местами элементы
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

let sortArr = bubbleSort(arr3);

let summa2 = 0;

for(let i = 1; i <= 3; i++) {
    summa2 += sortArr[sortArr.length - i]
}

console.log(summa2)