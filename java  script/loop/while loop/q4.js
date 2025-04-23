// wap to print leap years from startyear to endyear.

let startyear = parseInt(prompt("start year"));
 let endyear = parseInt(prompt("end year"));

while(startyear <= endyear){
    if(startyear % 4 == 0){
        document.writeln(startyear)
    }
    
    startyear++
}