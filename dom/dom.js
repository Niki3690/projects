// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//Get element by id//

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hell0</h3>';
// header.style.borderBottom = 'solid 3px black';


// Get element by class name//

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontweight='bold';
// items[1].style.backgroundColor='yellow';
// for(var i=0;i<items.length;i++){
    // items[i].style.backgroundColor='#f4f4f4';
// }


//Get element by tag name//

var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontweight='bold';
li[1].style.backgroundColor='yellow';

for(var i=0;i<items.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}



//Query selector//

// var header=document.querySelect('#main-header');
// header.style.borderBottom='solid 5px #ccc';
// 
// var input=document.querySelector('input');
// input.value='Hello World'
// 
// // var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"
// 
// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// 
// // var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
// 
// var secondItem=document.querySelector('.
// list-group-item:nth-child(2)');
// secondItem.style.color='coral';


//Query select all//

// var titles=document.querySelectorAll('.title');
// 
// console.log(titles);
// titles[0].textContent="Hello";
// 
// var odd=document.querySelectorAll('li:nth-child(odd)');
// // var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
    // odd[i].style.backgroundColor='#f4f4f4';
    // even[i].style.backgroundColor='#ccc';
// }


//Traversing the dom//

var itemList = document.querySelector("#items");
//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parent node
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// // console.log(itemList.parentElement.parentElement..parentElement);


//Child nods
// console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundcolor="yellow";

//firstchild
console.log(itemList.firstChild);

//First element child

console.log(itemList.firstC);









