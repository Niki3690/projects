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

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontweight='bold';
// li[1].style.backgroundColor='yellow';
//
// for(var i=0;i<items.length;i++){
// li[i].style.backgroundColor='#f4f4f4';
// }
//

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

// var itemList = document.querySelector("#items");
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

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundcolor="yellow";
//
// firstchild
// console.log(itemList.firstChild);
//
// First element child

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello";

// Next sibling
// console.log(itemlist.nextSibiling);
// next Element sibiling
// console.log(itemList.nextElementSibling);

//previoussibling
// console.log(itemList.previousElementSibling);
//previouselementSibling
// console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color='green';
//
//

//Create a element

//create  a div
// var newDiv = document.createElement('div');

//add class
//    newDiv.className='hello';

//add id
//    newDiv.id='hello1';

//add attr
//    newDiv.setAttribute('title',"Hello Div");
//
//create text node
//    var newDivText = document.createTextNode("Hello world");

//Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header.container');
// var h1=document.querySelector('header h1');
//
//    console.log(newDiv);
//
//    container.insertBefore(newDiv,h1);

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);
// 
// function buttonClick(e) {
  // console.log('Button clicked');
  // document.getElementById('header-title').textContent='changed';
  // // // document.querySelector('#main').getElementsByClassName .backgroundColor="#f4f4f4";
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.clssList);
  // console.log(e.type);
  // console.log(e.clientX);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.altkey);
  // console.log(e.ctrlkey);
  // console.log(e.shiftkey);}

// 
  // var button=document.getElementById('button');
  // var box = document.getElementById('box')
   //button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousrDown', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// var itemInput=document.querySelector('input[type="text"]');
// var form=document.querySelector('form');
// var select=document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// 
// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
// 
// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);
// 
// itemInput.addEventListener('input',runEvent);

// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);

// form.addEventListener('submit',runEvent);

  // function runEvent(e){
    // e.preventDefault();
    // console.log('EVENT TYPE:'+e.type);


    // console.log(e.target.value);
    // // document.getElementById('output').innerHtml='<h3>'+e.+'</h3>';

    // output.itemHTML='<h3>MouseX:'+e.offsetX +'</h3><h3>MouseY:'+e.offsetY +'</h3>';
  
    // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";




    // var from=document.getElementById('addform');
    // var itemList=document.getElementById('items');

    // form submit event
    // form.addEvengListener('submit',addItem);

    // Delete item
    // itemList.addEventListener('click'.t=removeItem);

    // add item
    // function addItem(e){
      // e.preventDefault();

    // get iput value
    // var newItem=document.getElementById('item').value;

    // create new li element
    // var li=document.createElement('li');

    // add class
    // li.className='list-group-item';

    // add text node with input value
    // li.appendChild(document.createTextNode(newItem));

    // create delete button element
    // var deletebtn=document.createElement('button');

    // add classes to del button
    // deletebtn.className='btn btn-danger btn-sm float-right delete';

    // append text node
    // deletebtn.appendChild(document.createTextNode('X'));

    // append button to li
    // li.appendChild(deletebtn);

    // append li to list
    // itemList.appendChild(li);

    // }

    // Remove item
    // function removeItem(e){
    // if(e.target.classList.contains('delete')){
      // if(confirm("Are You Sure")){
        // var li=e.target.preventElement;
        // itemList.removeChild(li);
      // }
    // }

    // }

    // Filtetr Items
    // funciton filterItems(e){

      // convert text to lowerCase
      // var text=e.target.value.toLowerCase();

      // get lis
      // var items=itemList.getElementsByTagName('li');

      // convert to an array
      // Array.from(items).forEach(function(item){
        // var itemName =item.firstChild.textContent;
        // if(itemName.toLowreCase().indexOf(text)!=-1){
          // item.style.display="block";
        // }
        // else{
          // item.style.display='none';

        // }
        // }
    // 

    // }





  

















