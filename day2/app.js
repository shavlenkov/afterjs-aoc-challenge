// 2.1

const fs = require('fs')

let a = {
    "A X": 4,
    "B Y": 5,
    "C Z": 6,
    "B X": 1,
    "C X": 7,
    "A Y": 8,
    "C Y": 2,
    "A Z": 3,
    "B Z": 9
}

let fileContent = fs.readFileSync("codes.txt", "utf8");

let arr = fileContent.split("\r\n");

let summa = 0;

for(let i = 0; i < arr.length; i++) {
    summa += a[arr[i]]
}

console.log(summa)

// 2.2
function win(znak) {

    if(znak == "A") {
        return 8;
    } else if(znak == "B") {
        return 9;
    } else if(znak == "C") {
        return 7;
    }


}
function gameover(znak) {
    if(znak == "A") {
        return 3;
    } else if(znak == "B") {
        return 1;
    } else if(znak == "C") {
        return 2;
    }
}

function nechya(znak) {
    if(znak == "A") {
        return 4;
    } else if(znak == "B") {
        return 5;
    } else if(znak == "C") {
        return 6;
    }
}


let summa2 = 0;

for(let i = 0; i < arr.length; i++) {

    let a = arr[i].split(" ")[1]
    let b = arr[i].split(" ")[0]

    if(a == "X") {
        summa2 += gameover(b)
    } else if(a == "Z") {
        summa2 += win(b)
    } else if(a == "Y") {
        summa2 += nechya(b)
    }

}


console.log(summa2)







