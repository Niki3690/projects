/* console.log("Hello console");
    console.log(4+34);
    console.log(34);
    console.log(true);
    console.log([11,12,13,14]);
    console.log({niki:"this",marks:34});
    console.table({niki:"this",marks:34});
    console.warn('This is a warning');
    console.clear();
    console.assert(100<85 ,'Age >85 is not possible')
    console.error('This is an error')*/

/*Variable in js

    var Name ='niki';
    console.log(Name)
    var surname ='patel';
    console.log(surname)

    const ownerName="niki patel";
    console.log(ownerName);

    {
        let city ='Ahmedabad';
        console.log(city);
    }

    const array1 = [11,12,13];
    array1.push(14);
    console.log(array1)   */

/*
    // Data types
    let Name='niki';
    console.log("my string is " + Name);
    console.log("data type is " + (typeof Name))

    //Numbers
    let marks=12;
    console.log("Data type is",(typeof marks));

    //Boolean
    let isDriver=true;
    console.log("Data type is " + (typeof isDriver));

    //Null
    let nullvar=null;
    console.log("Data type is "+(typeof nullvar));

    //undefined
    let undef=undefined;
    console.log("Data type is "+(typeof undef));

    //Reference data types
    
    //Arrays
     let myarr=[1,2,3,4, false,"String"];
    console.log("Data types is " + (typeof myarr));

    //Objects literals
    let  Marks ={
        niki:36,
        Anee:57,
        margi:87
    }
    console.log(typeof Marks)

    function findName(){

     }
    console.log(typeof findName);
    let data= new Date();
    console.log(typeof date);     */

//Type conversion and type coercion
/*
//Type conversion
console.log('welcome to js');
let myVar;
myVar=String(12);
console.log(myVar,(typeof myVar));

let date=new Date();
console.log(date,(typeof date));

let stri=Number("1414");
stri=Number("1414");
stri=Number(false);
stri=Number([1,2,3,4,5]);

let number=parseFloat('34.012');
console.log(number.toFixed(1),(typeof number));


//Type coercion
let mystr =Number("121");
let mynum =25;

console.log(mystr + mynum);    

const Name = "Niki";
const greeting = "Good  Morning";
console.log(greeting + ' ' + Name);

let html;
html ="<h1>this is heading</h1>" + 
        "<p>this is my car</p>";


html = html.concat('this' , 'str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html.indexOf("<"));
console.log(html.lastIndexOf("<"));
console.log(html.charAt(2));
console.log(html.endsWith("jbqwnk"));
console.log(html.includes("is"));
console.log(html.substring(1,7));
console.log(html.slice(-6));
console.log(html.split( ' '));
console.log(html.replace("this" , "in"));  


let fruit1 = "orange\'";
let fruit2="mango";
let myhtml=`Hello ${Name}
            <h1>This is "MY" page</h1>
            <p> whats you like? ${fruit1} and ${fruit2}`;  */

// Array and objects
/*
const marks = [12,23,45,56,78]
const fruits = ['Apple','Banana','mango']
const mixed = ['str' , 52 ,[5,3]]

const arr=new Array(23,45,89,'Apple')
console.log(arr);
console.log(mixed[1]);
console.log(fruits[2]);
console.log(marks[4]);

console.log(arr.length);
console.log(Array.isArray('njnjn'))
arr[0]="niki";
console.log(arr);
marks.reverse()
marks.splice(3);
marks.push(1212);
console.log(marks);



let myobj ={
    Name:"NIKI",
    channel:"PATEL",
    isActive:true,
    marks:[1,4,7,2,5]
}

console.log(myobj);
console.log(myobj.isActive);    */

//If..else statement

/*
const age=24;

if(age==23)
{
    console.log("Age is 23");
}
else if(age==29){
    console.log("Age  is 29");
}
else{
    console.log("Age is not 23");
}


const Age=25;
const doesDrive = false;

if(doesDrive && age>20){
    console.log("You can drive");
}
else{
    console.log("You can not drive");
}

switch(age){
    case 19:
        console.log("You are 19");
        break;
    case 22:
        console.log("You are 22");
        break;
    case 25:
        console.log("You are 25");
        break;
    case 29:
        console.log("You are 29");
        break;
    case 32:
        console.log("You are 32");
        break;

    default:
        console.log("You are under 19");
        break;
    
}     */

//for ,while & do-while loops

/*
for loop

for(i=0;i<100;i++)
{
    console.log(i);
}

while loop

let j = 50;
while (j < 10) {
  console.log(j + 1);
  j++;
}


let k=50;
do
{
    console.log(k+1);
    k++;
}
while(k<10);

let arr=[2,3,4,5,6]
for(let i=0;i<arr.length; i++)
{
const element=arr[i];
console.log(element);
}    */


//Functions

/*
function greet(name,thank)
{
    console.log(`Happy Birthday ${name} Good Morning Good Evening Good Night..${thank}!`);
    return 4;
}

let Name='niki';
let name2='patel';

let val=greet(Name,'Thanks a lot');
console.log(val);



const myobj = {
    name:'niki',
    game:function(){
        return"NNN";
    }
}
console.log(myobj.game())   

var i=234
console.log(i);
function ui(name)
{
    var i=9;
    return `This is a ${name} ui`;
}
console.log(ui("niki"),i);     */







