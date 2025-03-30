let numbers = [];
let sumodd = 0;
let sumeven = 0;
while (numbers.length < 20) {
    let random = Math.floor(Math.random() * 100);
    numbers.push(random);
    // console.log(numbers);
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sumeven += numbers[i];

    } else {
        sumodd += numbers[i];

    }
}

console.log(`Các số ngẫu nhiên là: ${numbers}`);
console.log(`Tổng của các số chẵn là ${sumeven}`);
console.log(`Tổng của các số lẻ là ${sumodd}`);











