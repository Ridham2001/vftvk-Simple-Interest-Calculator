function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0 ) {
        alert("Enter a positive number"); //same message as given in assignment
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var valueBgY = "background-color:yellow;";
    document.getElementById("result").innerHTML=`
            If you deposit <span style=${valueBgY}>${principal}</span>,<br/>
            at an interest rate of <span style=${valueBgY}>${rate}</span>.<br/>
            You will receive an amount of <span style=${valueBgY}>${interest}</span>,<br/>
            in the year <span style=${valueBgY}>${year}</span><br/>
    `;
        
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}

// generate long dropdown list for 1-100
var startYear=1;
var endYear=100;
var select = '';
for (i=startYear;i<=endYear;i++){
    select += `<option value=${i}>${i}</option>`;
}
document.getElementById("years").innerHTML=select;