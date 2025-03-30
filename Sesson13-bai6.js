
let count = [];
while (count.length < 20){
 let random =  Math.floor(Math.random()*10);
    count.push(random);
}

let input = +prompt(`Nhập vào 1 số nguyên để kiểm tra`);
let countNumber = [];
for (let i = 0; i < count.length; i++) {
    if (count[i] === input) {
        countNumber.push(count[i]);
    } else {
        continue;
    }
}


alert(`Số lần xuất hiện của số ${input} trong mảng [${count}]
 là: ${countNumber.length} lần`);

