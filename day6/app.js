const fs = require('fs')

let str = fs.readFileSync("data.txt", "utf8");

function isUnique(str) {
    const charSet = new Set(str);
    return charSet.size === str.length;
}

for(let i = 0; i < str.length; i++) {


    let substr = str.slice(i, i + 4);

    if(isUnique(substr)) {
        console.log(i + 4)
        break;
    }

}


for(let i = 0; i < str.length; i++) {


    let substr2 = str.slice(i, i + 14);

    if(isUnique(substr2)) {
        console.log(i + 14)
        break;
    }

}