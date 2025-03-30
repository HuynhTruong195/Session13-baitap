let numbers = [3, 7, 12, 25, 30, 42, 50, 65, 77, 89];
while (true){
    let input = +prompt(`Nhập số bất kì`);

if (numbers.includes(input)){
    alert (`Bingo`);
    break;
}else {
    alert("Chúc bạn may mắn lần sau");
}
 }