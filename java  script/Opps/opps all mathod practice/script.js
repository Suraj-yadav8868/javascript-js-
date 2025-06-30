//Create a Car class that has brand and model properties. Use a constructor to initialize them. 
// Create a method getDetails() that returns the full name of the car.
// class car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
//     linebrack(){
//         document.writeln("</br>")
//     }
//     getdetails(brand, model) {
//         document.writeln("bike brand name :", this.brand);
//         this.linebrack()
//         document.writeln("bike mode name :", this.model);

//     }
// }
// const details= new car("Apache","RR310");
// details.getdetails();


//Create a Person class that stores name and age. Make age private (use closure or #age) and 
// provide methods to getAge() and setAge() safely.

// class person {   //create claas with the name of person
//     name;       
//     #age; //using # to private age  

//     linebrack() {  //creat a function for using line break;
//         document.writeln("</br>")//using br tag
//     }
//     setage(name, age) { //according to que create a method witha passing name and age;
//         this.name = name; //using this to asing globel variable to local variable
//         this.#age = age //using # for private age 
//     }
//     getage(name, age) {  //according to que create a method witha passing name and age;
//         document.writeln("Name :", this.name); //for print using D.wln for print
//         this.linebrack()
//         document.writeln("Age :", this.#age);
//     }
// }
// const human = new person();
// human.setage("suraj", 21);
// human.getage();
// document.writeln(human.age);

//Create a User class where the password should be private. Add methods to changePassword() and checkPassword().

// class user{
//     #password;

//     changePassword(newpassword){
//     this.#password=newpassword;
//     }
//     checkPassword(){
//      document.writeln("currant  password :",this.#password)
//     }
// }
// const pass = new user(8888);
// pass.changePassword();
// pass.checkPassword();


//Create a Calculator class that hides the internal result property (e.g., using #result).
//  Add methods to add(num), subtract(num), and getResult().

// class Calculator{
//     #result;
   
//     add(num1){
//        this.num1=num1
//     }

//     subtract(num2){
//       this.num2=num2
//     }
//     getResult(num1,num2){
//        document.writeln("sum of num1 and num2 =",(this.num1+this.num2 +"<br>"))
//         document.writeln("subtrac of num1 and num2 =",(this.num1-this.num2))
//     }
// }
// const clc = new Calculator();
// clc.add(5);
// clc.subtract(5);
// clc.getResult();



//Create a BankAccount class where balance is private.
//  Add deposit(amount), withdraw(amount), and getBalance() methods.
//  Try to access balance directly (it should not work).


// class BankAccount{
//     #balance
//     constructor(balance){
//      this.#balance=balance;
//     }

//     deposit(amount){
//          this.amount=amount
//          document.writeln("you deposit and total balence :",this.#balance=this.#balance+this.amount,"<br>")
//     }
//     withdraw(amount){
//        this.amount=amount
//       document.writeln("your withdrow total balence :",  this.#balance=this.#balance-this.amount)
//     }
   
// }
// const totalblc=new BankAccount(5000);
// totalblc.deposit(5000);
// totalblc.withdraw(2000);

//Create a Vehicle class with a method move(). 
// Then create a Bike class that extends Vehicle.
// Create an object of Bike and call the move() method.


// class vahucle{

//     move(){
//           document.writeln("Aa le chak mai aa gya")
//     }
// }
// class bike extends vahucle{
// }
// const race = new bike();
// race.move()


//q-7 //Create a Person class with a method greet(). 
// Create a Student class that extends Person and adds a method study().
//  Use both methods on a Student object.

// class Person {   // Parent class: Person
//   greet() {
//     console.log("Hello! I am a sardar.");
//   }
// }

// // Child class: Student extends Person
// class Student extends Person {
//   study() {
//     console.log("I am studying right now.");
//   }
// }

// // Creating an object of Student class
// const student1 = new Student();

// // Calling both methods
// student1.greet();   // Inherited from Person
// student1.study();   // Defined in Student
