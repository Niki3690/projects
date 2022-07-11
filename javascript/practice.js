/*let buttonSuccess=document.querySelector('#success');
let buttonInfo=document.querySelector('#info');
let buttonWarning=document.querySelector('#warning');
let buttonDanger=document.querySelector('#danger');


buttonSuccess.addEventListener("click",changeSuccess());
buttonInfo.addEventListener("click",() => buttonInfo.style.backgroundColor="#FF0000")
buttonWarning.addEventListener("click",() => buttonWarning.style.backgroundColor="#337ab7")
buttonDanger.addEventListener("click",() => buttonDanger.style.backgroundColor="#4cae4c")
*/


function changeSuccess(){
    alert ("This is a change title color"); 
    clearAllBGClasses();
    let heroHeaderComp=document.querySelector('#heroHeaderComp');
    
    heroHeaderComp.classList.add("is-success");
    console.log(heroHeaderComp);
}

function changeDanger(){
    alert ("This is a change title color"); 
    clearAllBGClasses();
    let heroHeaderComp=document.querySelector('#heroHeaderComp');
    
    heroHeaderComp.classList.add("is-danger")
    console.log(heroHeaderComp);
}
function clearAllBGClasses(){
    let heroHeaderComp=document.querySelector('#heroHeaderComp');
    heroHeaderComp.classList.remove("is-primary");
    heroHeaderComp.classList.remove("is-success");
    heroHeaderComp.classList.remove("is-info");
    heroHeaderComp.classList.remove("is-link");
    heroHeaderComp.classList.remove("is-danger");

}


function changeInfo(){
    alert ("This is a change title color"); 
    clearAllBGClasses();
    let heroHeaderComp=document.querySelector('#heroHeaderComp');
    
    heroHeaderComp.classList.add("is-info");
    console.log(heroHeaderComp);
}

function changeLink(){
    alert ("This is a change title color"); 
    clearAllBGClasses();
    let heroHeaderComp=document.querySelector('#heroHeaderComp');
    
    heroHeaderComp.classList.add("is-link");
    console.log(heroHeaderComp);
}















