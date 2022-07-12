document.querySelector("#form-tip").onchange=function(){
    const bill=Number(document.querySelector("#totalBill").value);
    const tip=document.querySelector("#tip").value;
    const tipOutput=document.querySelector("#tipOutput").value;
    const result=document.querySelector("#results");
    const tipAmount=document.querySelector("#tipAmount");
    const totalBillWithTip=document.querySelector("#totalBillWithTip");
    





    const tipValue=bill *(tip/100);
    const totalBill=bill+tipValue;
    tipAmount.value=tipValue.toFixed(2);
    totalBillWithTip.value=totalBill.toFixed(2);
    tipOutput.innerHtml=`${tip}%`;
    



}