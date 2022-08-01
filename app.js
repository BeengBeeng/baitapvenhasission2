// Bài 1
// for (let i = 0; i < 100; i = i + 1){
//     console.log(i);
//     if  (i===99){
//         alert("Hoàn thành")
//     }
// }  

// Bài 2
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// a = b;
// let tong = 1;
// for (let i = 1; i <= 18; i = i + 1) {
//     let c = a + b;
//     tong += c;
//     console.log(c);
//     a = b;
//     b = c;
// } console.log()

// Bài 3
// let a = 0;
// let b = 1;
// a = b;
// while (true) {
//     let c = a + b;

//     if (c % 5 === 0) {
//         console.log(c);
//         break;
//     }
//     a = b;
//     b = c;
// }

// Bài 4
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// a = b;
// let tong = 1;
// for (let i = 1; i <= 18; i = i + 1) {
//     let c = a + b;
//     tong += c;
//     console.log(c);
//     a = b;
//     b = c;
// } console.log("tổng 20 số đầu tiên là :" + tong);

// Bài 5
// let soChiaHetCho7 = 0;
// let tongTatCaSoChiaHet = 0;
// for( let i = 1 ; i<=30; i++ ){
//     soChiaHetCho7 += 7;
//     tongTatCaSoChiaHet += soChiaHetCho7;
// }
// console.log("tong cua 30 so dau tien la: " + tongTatCaSoChiaHet);

// Bài 6
// for(let i = 1; i<= 100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i + " FizzBuzz");
//     }
//     if(i%3 === 0){
//         console.log(i + " Fizz");
//     }
//     if(i%5 === 0){
//         console.log(i + " Buzz");
//     }
// }

// Bài 7
// let n = Number(prompt("Hãy nhập số:"));
// if(Number.isInteger(n) && n > 0){
//     let tich = 1;
//     for(i = 1 ; i<n; i++){
//         tich *= i;
//     }
//     console.log("Giai thừa là: " + tich);
// }else{
//     console.log("Bạn đã nhập sai, Hãy nhap lai");
// }
