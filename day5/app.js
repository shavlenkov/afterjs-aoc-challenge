const fs = require("fs");

let fileContent = fs.readFileSync("data.txt", "utf8").split('\r\n\r\n')[0].split('\r\n');


let arr = []


const longestElement = fileContent.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
}, '');


for(let i = 1; i < longestElement.length; i = i + 4) {

    let arr2 = []

    console.log(fileContent)

    for(let j = 0; j < fileContent.length; j++) {

        if(fileContent[j][i] != " " && fileContent[j][i] != undefined && isNaN(parseInt(fileContent[j][i])) ) {
            arr2.push(fileContent[j][i])
        }

    }

    arr.push(arr2)

}

console.log(arr)


let fileContent2 = fs.readFileSync("data.txt", "utf8").split('\r\n\r\n')[1].split('\r\n')


for(let i = 0; i < fileContent2.length; i++) {
    let obj = {
        move: +fileContent2[i].split('move ')[1][0],
        from: +fileContent2[i].split('from ')[1][0],
        to: +fileContent2[i].split('to ')[1][0]
    }



    for(let j = 0; j <= obj.move - 1; j++) {

        if(arr[obj.from - 1][j] != undefined) {
            arr[obj.to - 1].unshift(arr[obj.from - 1][j])
        }

    }

    for(let j = 0; j <= obj.move - 1; j++) {
        arr[obj.from - 1].splice(0,1)
    }

}



let str = ''

for(let i = 0; i < arr.length; i++) {
    if(arr[i].length != 0) {
        str += arr[i][0]
    }
}


console.log(str)

