class ATM {
  balance = 5000; // default account balance
  debit; // type of debit card
  pin;   // PIN to secure ATM access


    setPin(pin) { //creat a setpin mathod and aasing the parameter "setpin"
    this.pin = pin; // store the pin given by user in globel variable
    alert("Pin set successfully !");//create alert  inbuild function to show user screen;
  }

    deposit(balance, debit, pin) { //create a deposit mathod and we r passing the 3 parameter LIKE (b-d-pin))
    this.balance = this.balance + balance;//in globle variable me new user pass balence ko abb kr rhe hai
    this.debit = debit;//user given debit value to save obj"this.debit"
    this.pin = pin;//user pin is also store in object to check rigth or wrong
    document.writeln("Your current balance ", this.balance);//using D.Wln to display balence value  
     document.writeln("<br>");//using br tag to breck row
  }

    checkBalance(debit, pin) { //create a checkbalence mathod to passing 2 parameter like debit and pin
    if (this.pin == pin) {// using if else function to check user pin == iqual to ganeret pin
      document.writeln("Your balance is ", this.balance +"<br>");//using D.Wln to display balence value 
    } else { //use else to if first canditon is wrong so what next 
      alert("Incorrect Pin, Password, Please");//if candition wrong then else open to a inbuld alert box to writen text to print the user screen display window 
    }
  }

    withdraw(debit, pin, amount) { //here we r create a withdrow mathod to user passing parameter store value to parameter
    if (amount < this.balance) {//  if inbule js to check value, here cheking current balence is graterthan to withdro amout 
      this.balance = this.balance - amount;//if candition write to code inside the semocolam to process current balence se minus withdrow amount
      document.writeln("Withdrawl amount ", amount +"<br>");//use D.wln to display "string text" and withdrow amout and use br to break row.
      document.writeln("Your current balance ", this.balance);//use D.wln to display "string text" and currant amout .
    } else {
      document.writeln("Insufficient Balance <br>");//if candition wrong then else procees start  there r use d.wln writen text to print the user screen display window "Insufficient Balance"
    }
  }
}

const atm = new ATM(); // line num 1 i create a class ATM , jise i store in a object(atm) , atm access to all class mathod

atm.setPin(1234); // atm. access to class ATM setpin mathod and send the password (1234) and call the function.
atm.checkBalance("debit", 1234);//atm. access to class ATM checkbalence mathod call and send the parameter value to process
atm.deposit(10000, "debit", 1234);//here user deposite 10000 
atm.withdraw("debit", 1234, 1000);//atm. access to class ATM withdrow mathod and pass the para meter values , and password