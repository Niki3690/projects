document.querySelector("#form-tip").onchange=function(){
    const bill=Number(document.querySelector("#totalBill").value);
    const tip=document.querySelector("#tip").value;
    const tipOutput=document.getElementById("tipOutput");
    const result=document.querySelector("#results");
    const tipAmount=document.querySelector("#tipAmount");
    const totalBillWithTip=document.querySelector("#totalBillWithTip");
    const progressPercentage=document.getElementById("progressPercentage");
    progressPercentage.value= tip;


    


    const tipValue=bill *(tip/100);
    const totalBill=bill+tipValue;
    tipAmount.value=tipValue.toFixed(2);
    totalBillWithTip.value=totalBill.toFixed(2);
    tipOutput.innerText=tip;
    



}

/*
onchange
onclick
oninput
getElementById
creating function
*/

/* Take Input from A and B, Create a  button for Add, show Result in another textbox.
/*create four button, Add, Minus, Multiplication, devide.