const fs = require("fs");

let fileContent = fs.readFileSync("bags.txt", "utf8");

let arr = fileContent.split("\r\n");

let arr2 = []

for(let i = 0; i < arr.length; i++) {
    const length = arr[i].length;

    const half = Math.floor(length / 2);

    const firstHalf = arr[i].slice(0, half);
    const secondHalf = arr[i].slice(half);


    arr2.push([firstHalf, secondHalf])

}

let obj = {}

let count = 0;

for(let i = 97; i <= 122; i++) {

    count++

    obj[String.fromCharCode(i)] = count;
}

for(let i = 65; i <= 90; i++) {

    count++

    obj[String.fromCharCode(i)] = count;
}

let summa = 0;


for(let i = 0; i < arr2.length; i++) {

    stop:
    for(let j = 0; j < arr2[i][0].length; j++) {
        for(let k = 0; k < arr2[i][1].length; k++) {
            if(arr2[i][0][j] == arr2[i][1][k]) {
                summa += obj[arr2[i][0][j]]
                break stop;
            }
        }
    }

}



let arr3 = [];

for (let i = 0; i < arr.length; i += 3) {
    arr3.push(arr.slice(i, i + 3));
}

let summa2 = 0;



for(let i = 0; i < arr3.length; i++) {


    stop2:
    for (let j = 0; j < arr3[i][0].length; j++) {
        for (let k = 0; k < arr3[i][1].length; k++) {
            if(arr3[i][0][j] == arr3[i][1][k]) {

                for(let g = 0; g < arr3[i][2].length; g++) {
                    if(arr3[i][2][g] == arr3[i][0][j]) {

                        summa2 += obj[arr3[i][2][g]]

                        break stop2;
                    }
                }

            }
        }
    }
}


console.log(summa)
console.log(summa2)