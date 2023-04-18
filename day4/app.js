const fs = require("fs");


let arr = fs.readFileSync("data.txt", "utf8").split('\r\n');

let arr2 = arr.map((item) => {
    return item.split(',').map((item2) => { return item2.split('-') })
})


let a = 0;
let b = 0;

for(let i = 0; i < arr2.length; i++) {

    let min = +arr2[i][0][0]
    let max = +arr2[i][0][1]

    let min2 = +arr2[i][1][0]
    let max2 = +arr2[i][1][1]


    if ((min >= min2 && max <= max2) ||  (min <= min2 && max >= max2)  ) {
        a++;
    }
    
    if ((min >= min2 && min <= max2) ||  (min2 >= min && min2 <= max)  ) {
        b++;
    }
    

}

console.log(a)
console.log(b)


