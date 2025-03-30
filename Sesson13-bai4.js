let input = prompt(`Nhập dãy số bất kì cách nhau bởi dấu cách
    Vd: 1 2 3 4 5 ... 10`)
let result = input.split(" ").map(Number);
let max = Math.max(...result);
alert(`Số lớn nhất là: ${max}`)
