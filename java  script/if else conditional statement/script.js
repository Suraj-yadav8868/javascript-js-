//conditions statement // controle structer

// condition  = Question => true / false 

// if statement  // if alse statement //else if ladder

//if statement => its usend to check condition of true aspect . and run specfic block if condition is  true
 
// let age = 10 ;

// if (age > 18 ){
//     document.writeln("u are eligible for vote" );
// }else{
//       document.writeln("u r not eligible for vote")
// }

// WAP TO CHECK GIVEN NUMBER IS DIVISIBLE BY 7 OR NOT.

// let num = 21;
// if (num%7==0){
//     document.writeln("this number is divide by 7")
// }else {
//     document.writeln("this num is not divide by 7")
// }


// wap to check num is +,-,0 using nested if else

// const num = parseInt(prompt("enter a number"))

// if (num >=0 ){
//       //apply here to nested if-else !
//     if (num==0){
//         document.writeln("number is zero")
//     }else{
//         document.writeln("number is positive")
//     }
// }else {
//     document.writeln("number id negative")
// }

// wap to check user eligible for vote or not using nested if else

// const age = parseInt(prompt("enter yoyr age "))

// if (age >= 0) {
//   if (age >= 18) {
//     document.writeln("You are eligible to vote! ");
//   } else {
//     document.writeln("You are not eligible to vote yet. ");
//   }
// } else {
//     document.writeln("Invalid age entered. Please try again.");
// }


// 3. wap to find max number from 3 user input variables.


// let num1 = parseFloat(prompt("Enter first number:"));
// let num2 = parseFloat(prompt("Enter second number:"));
// let num3 = parseFloat(prompt("Enter third number:"));

// let max;

// if (num1 >= num2) {
//   if (num1 >= num3) {
//     max = num1;
//   } else {
//     max = num3;
//   }
// } else {
//   if (num2 >= num3) {
//     max = num2;
//   } else {
//     max = num3;
//   }
// }

// document.writeln("The maximum number is: " + max);



// 4. wap to fid min number from 4      " " " "  using nested if else

// a,b,c,d,

// let a = parseFloat(prompt("Enter first number:"));
// let b = parseFloat(prompt("Enter second number:"));
// let c = parseFloat(prompt("Enter third number:"));
// let d = parseFloat(prompt("Enter third number:"));
// let e = parseFloat(prompt("Enter third number:"));

// if (a < b) {
//     //a,c,d
//     if (a < c) {
//         //a , d
//         if (a < d) {
//             //a
//             console.log("a is min")
//         } else {
//             //d
//             console.log("d is min")
//         }
//     } else {
//         // c,d
//         if (c < d) {
//             //c
//             console.log("c is min")

//         } else {
//             //d
//             console.log("d is min")
//         }
//     }

// } else {
//     //b,c,d
//     if (b < c) {
//         //b,d
//         if (b < d) {
//             //b
//             console.log("b is min")
//         } else {
//             //d
//             console.log("d is min")
//         }

//     } else
//         //c,d
//         if (c < d) {
//             //c
//             console.log("c is min")
//         } else {
//             //d 
//             console.log(" d is min")
//         }
// }



// let a = parseFloat(prompt("Enter first number:"));
// let b = parseFloat(prompt("Enter second number:"));
// let c = parseFloat(prompt("Enter third number:"));
// let d = parseFloat(prompt("Enter third number:"));
// let e = parseFloat(prompt("Enter third number:"));

// if (a > b){
//     // a,c,d,e
//     if(a>c){
//         //a,d,e
//         if(a>d){
//             //a,e
//             if(a>e){
//                 //a
//                 console.log("a is max")
//             }else{
//                 //e
//                 console.log("e is max")
//             }

//         }else{
//          //d,e
//          if(d>e){
//             //d
//             console.log("d is max")
//          }else{
//             //e
//             console.log("e is max")
//          }
//         }

//     }else{
//         //c,d,e
//         if(c>d){
//             //c,e
//             if(c>e){
//                 //c
//                 console.log("c is max")
//             }else{
//                 //e
//                 console.log("e is max")
//             }

//         }else{
//             //d,e
//             if(d>e){
//                 //d
//                 console.log("d is max")
//             }else{
//                 //e
//                 console.log("e is max")
//             }
//         }
//     }

// }else{
//     //b,c,d,e
//     if(b>c){
//         //b,d,e
//         if(b>d){
//             //b,e
//             if(b>e){
//                 //b
//                 console.log("b is max")
//             }else{
//                 //e
//                 console.log ("e is max")
//             }
//         }else{
//             //d,e
//             if(d>e){
//                //d
//                console.log("d is max")
//             }else{
//                 //e
//                 console.log("e is max")
//             }
//         }

//     }else{
//         //c,d,e
//         if(c>d){
//             //c,e
//             if(c>e){
//                //c
//                console.log("c is max")
//             }else{
//                 //e
//                 console.log("e is max")
//             }

//         }else{
//             //d,e
//             if(d>e){
//                //d 
//                console.log("d is max")
//             }else{
//                 //e
//                 console.log("e is max")
//             }

//         }

//     }

// }