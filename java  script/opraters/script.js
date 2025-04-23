// opraters in java script  =>>>>>    symbol to perform oprations on the values 

// Arithmetic oprator 
// used tp mathemetical calculation  //  (+, - , =+ , =- )
console.log("madhav")

document.writeln(10+20);
document.writeln(10-20);
document.writeln(10*20);
document.writeln(10/20);


// assinment oprators =>>>> used to assign to the variables.
// (=+ , =- , *= , /= ,%= ,**=)

let x = 10 ;
 
x +=10  // x = x + 10 => x = 10 + 10 , ( Answer =>>>  x = 20)
x -=5  // x = 5 
x *=0 // x = 0
x %= 5 // x = 0

document.writeln(x);


// Relational Operator (condition , comprition) =>>>>
//    used to  compare to value 

// ( < , > , <= , >= ,  )

let a = 50 ;
let b = 20;
let c = 50;

document.writeln(a<b) //false 
document.writeln(a>b)  //true
document.writeln(a<=c)  //true
document.writeln(c>=b)   //true

//logical oprators =>>> used to combine multiple condition ;
// (  && , || , !)         

// (&&)  when every condition true then its answer true //
// (||)  when any one  condition true  then answer true //

// for example //

document.writeln(1 && 0);
document.writeln(0 && 1);
document.writeln(1 && 1);
document.writeln(0 && 0);
document.writeln(true  || false);
document.writeln(1 || 0);