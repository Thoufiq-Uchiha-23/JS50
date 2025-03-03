// question 1
// console.log("thoufiq", "teach how to code")

// question 2
// console.log(45*2 - 10)  // OUTPUT: 80

// question 3
// const newdate = new Date()
// console.log(newdate.getFullYear())

// question 4
// let first = "Thoufiq";
// let last = "Izhar";

// console.log(first + " " + last)
// console.log(`${first} ${last}`)

// question 5
// let a =12;
// console.log(a)
// a = 32;
// console.log(a)

// question 6
// console.error("something went wrong")

// question 7
// console.log(12 * 12)
// console.log(Math.pow(12, 2))

// question 8
// let a = true;
// console.log(typeof a)

// question 9
// let age = 23;
// if (age > 18) console.log(true);
// else console.log(false);

// question 10
// console.log(100/0) // OUTPUT: Infinity

// question 11
// let a = 12
// console.log(a)

// question 12
// let pi = Math.PI;
// console.log(pi) //OUTPUT: 3.141592653589793

// question 13
// let b = 12;
// b = 32;
// console.log(b)

// question 14
// console.log(typeof null) //OUTPUT: object

// question 15
// let a = "22"
// console.log(typeof a) //OUTPUT: string

// question 16
// let a = true;
// console.log(typeof a)   //OUTPUT: boolean

// question 17
// let a = "hey", b= 12, c = true;
// console.log(a, b, c)

// question 18
// let aa;
// console.log(typeof aa) //OP: undefined

// question 19
// let aa= undefined;
// console.log(typeof aa) //OP: undefined

// question 20
// const a = [1, 2, 3, 4];
// a = []
//OP: script.js:81 Uncaught TypeError: Assignment to constant variable.

// question 21
// for (let i = 0; i < 51; i++) {
//     console.log(i)
// }

// question 22
// let a = 1;
// let sum = 0;
// while(a<11){
//     sum = sum + a;
//     a++;
// }

// console.log(sum) //OP: 55

// question 23
// let str = "javascript"

// for (let chacha of str) {
//     console.log(chacha)
// } //OP: j a v a s c r i p t

// question 24
// for(let i=0; i<21; i++){
//     if(i%2 === 0){}
//     else{
//         console.log(i)
//     }
// } //OP: 1 3 5 7 9 11 13 15 17 19

// question 25
// let aa = 5;
// do{
//     console.log(aa)
//     aa--;
// }
// while(aa>0) //OP: 5 4 3 2 1

// question 26
// let fact = 1;
// for (let i = 5; i > 0; i--) {
//   fact = fact * i;
// }
// console.log(fact) //OP: 120

// question 27
// let hold = 1;
// for (let i = 1; i < 4; i++) {
//   let str = "";
//   for (let j = 1; j < 4; j++) {
//     str += `${hold} `;
//     hold++;
//   }
//   console.log(str);
// }
//OP: 1 2 3
//    4 5 6
//    7 8 9

// question 28
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   var temp = arr[i];
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
// }
// console.log(arr); //OP: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// question 29
// let num = 1;
// while (num < 101) {
//   if (num % 5 === 0) console.log(num);
//   num++;
// }
//OP: 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100

// question 30
// var obj = {
//     name: "thoufiq",
//     email: "a@example.com",
//     age: "don't know",
// }

// for ( let key in obj){
//     console.log(key)
// }
//OP: name email age

// question 31
// var arr = ["a", "b", "c", "d", "e", "f"];
// arr.forEach(function(value) {
//     console.log(value);
// })
//OP: a b c d e f

// question 32
// var arr = [1,2, 3, 4];
// console.log(arr[1]) //OP: 2

// question 33
// var arr = [1, 2, 3, 4, 5]
// arr.unshift(0);
// arr.unshift(-1);
// console.log(arr) //OP: [-1, 0, 1, 2, 3, 4, 5]

// question 34
// var arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log(arr) //OP: [1, 2, 3, 4]

// question 35
// var arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3))
//OP: [1, 2, 3]

// question 36
// var arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(4))
//OP: 3

// question 37
// var arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(12)) //OP: false
// console.log(arr.includes(1)) //OP: true

// question 38
// var arr = [1, 2, 3, 4, 5];
// var arr2 = [5, 6, 7];
// console.log(arr.concat(arr2))
//OP: [1, 2, 3, 4, 5, 5, 6, 7]

// question 39
// Simple Method to sort by bubble sort
// var arr = [11, 24, 36, 4, 5];
// for (let j = 0; j < arr.length; j++) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       var temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
// }

// //Optimized method to sort by bubble sort
// for (let j = 0; j < arr.length - 1; j++) {
//   for (let i = 0; i < arr.length - j - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       var temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
// }
// console.log(arr);

//OP: [4, 5, 11, 24, 36]

// question 40
// var arr = [11, 24, 36, 4, 5];
// var arr2 = [];

// arr.forEach(function(value) {
//   arr2.push(value)
// })

// arr2.pop()

// console.log(arr, arr2)
//OP: [11, 24, 36, 4, 5]
// [11, 24, 36, 4]

// question 41
// function evod(value) {
//   if (value % 2 === 0) return "even";
//   else return "odd";
// }

// console.log(evod(12))
//OP: even

// question 42
// function area(r) {
//   return Math.PI * r * r;
//   // to get round/floor figure or without decimals
//   // return Math.round(Math.PI * r * r);
// }

// console.log(area(12));
//OP: 452.3893421169302

// question 43
// function sumofarr(arr) {
//   var sum = 0;

//   arr.forEach(function (v) {
//     sum = sum + v;
//   });
//   return sum;
// }

// console.log(sumofarr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//OP: 55

// question 44
// function checker(str, char) {
//   // Simplified one
//   // return str.startsWith(char);
//   // but it gives issue(false) when we have uppercase letter
//   // so we have to convert this into lowercase then return the value
//   return str.toLowerCase().startsWith(char.toLowerCase());
// }

// console.log(checker("Thoufiq", "t"));
//OP: true

// question 45
// function max(a, b) {
//   if(a > b) return a;
//   else if (a < b) return b;
//   else return "equals";
// }

// console.log(max(11, 2))
//OP: 11

// question 46
// function getFact(num) {
//   let fct = 1;
//   for (let i = 1; i <= num; i++) {
//     fct = fct * i;
//   }
//   return fct;
// }

// console.log(getFact(5));
//OP: 120

// question 47
// function abcd(value) {
//   return value.split("").reverse().join("");
// }

// console.log(abcd("harsh"))
// OP: hsrah

// question 48
// function abcd(arr) {
//   var max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[max]) {
//       max = i;
//     }
//   }

//   return arr[max];
// }

// console.log(abcd([1, 2, 13, 4, 5, 6, 7]));
//OP: 13

// question 49
// function kebab(str){
//   // 1
//   return str.split(" ").join("-");
//   // 2
//   // return str.replaceAll(" ", "-");
// }

// console.log(kebab("hey kaise ho"))
//OP: hey-kaise-ho

// question 50
function abcd() {
  console.log("hello world")
}
abcd();
abcd();
abcd();