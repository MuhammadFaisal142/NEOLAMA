// var element;
// element=document.getElementById("about").innerHTML;

// how to set or update element value in javascript
// document.getElementById("about").innerHTML= "<h1>Hello faisal kya hall hain thk ho</h1>"

//  how to set or update attributes values
// element=document.getElementById("about").setAttribute("class","xyz");
// element=document.getElementById("about").attribute[0].value = "xyz";

// remove attribute from anywhere
/* element=document.getElementById("navbar").removeAttribute("class");

 element=document.getElementById("about").getAttribute("class");
console.log(element); */



// query selector

/* var element;
document.querySelector("#img1").innerHTML = "<h1>Faisal saith kya hall hai main to thk ho  </h1>"
element=document.querySelectorAll("ul")[0].innerHTML;
console.log(element); */


// style method in javascript 
/* var element;
document.querySelector(".navbar").style.backgroundColor = "tan";
element = document.querySelector(".navbar").style.color;

console.log(element);   
*/

// className method in javascript

/*
document.querySelector("#navbar2").className = "xyz";
element = document.querySelector("#navbar2").className;
console.log(element);
*/

//   class list methods 

/*  document.querySelector("#navbar2").classList.add("xyz","abc");
document.querySelector("#navbar2").classList.remove("xyz");

element = document.querySelector("#navbar2").classList;
console.log(element);
*/

// JavaScript addEventListener Method 
// JavaScript addEventListener Method 
// JavaScript addEventListener Method 

/*var element;
document.getElementById("body").onmouseenter = abc;

function abc(){
    document.getElementById("body").style.background = " green";
}
*/
// console.log(element);


// parent Element and parent Node
// parentElement agr parent ka agy parent nahi ho ga to woh null return kary ga .
// document.getElementById("inner").parentElement.style.backgroundColor = "red";
/*
document.getElementById("child-C").parentElement.style.backgroundColor = "red";
var a = document.getElementById("main").parentElement;
console.log(a);
*/
// parentNode ye kuch na kuch return kary ga 
/*document.getElementById("child-C").parentElement.style.backgroundColor = "red";
var a = document.getElementById("main").parentElement;
console.log(a);*/


// children and child node
// children
/*
document.getElementById("inner").children[4].style.backgroundColor = "red";
document.getElementById("inner").children[3].style.backgroundColor = "blues";
var a = document.getElementById("inner").children;
console.log(a);
*/
// chileNode

/*
var a = document.getElementById("inner").childNodes;
console.log(a);
*/

// firstelementchild firstnode is replace with this
/* 
var a = document.getElementById("inner").firstElementChild.innerHTML;
console.log(a);
*/
// lastelementchild 
/* document.getElementById("inner").lastElementChild.style.background = "yellow";
var a = document.getElementById("inner").lastElementChild;
console.log(a); */

// nextSibling & previousSibling
// nextSibling & previousSibling
// nextSibling & previousSibling
// try it your self runtime during creating project

/*
// new element in javascript in DOM 

// you can create any element of this method 

  var  newelement= document.createElement("p");
  console.log(newelement);

//   you can create text in program anywhere
  var  newtext= document.createTextNode("Faisal kya hall hain thk ho ?");
  console.log(newtext);

//   how to create comment in javascript 
var  comment= document.createComment("this is the comment of the javascript");
console.log(comment);
*/
/*
// appendChild & insertBefore

// appendchild and insertbefore
// appendchild

 var newElement=document.createElement("h1");
 var newText=document.createTextNode("hello faisal kya hal hai thk main to thk aap sunao");

// append newtext in Element
    newElement.appendChild(newText);
// append chil in div tag 
 document.getElementById("test-sub").innerHTML="faisal kya hall hai ";    
console.log(newElement);
*/


// insertbefore method in javascript try it to yourself during project 

/* var newElement=document.createElement("h2");
var newText=document.createTextNode("This is just text ");
newElement.appendChild(newText);
var target=document.getElementById("adjecent");
target.insertAdjacentElement("beforebegin", newElement);
// is ko console main karna hai
*/


/*
var target=document.getElementById("adjecent");
var newElement="This is the just text"
target.insertAdjacentHTML("afterend",newElement)
*/


// replace and remove child 


// cloneNOde
/*
    var target = document.getElementById("list1").children[0].text;
    var copyElement=target.cloneNode();
    console.log(copyElement);  
    document.write(copyElement); 
    document.getElementById("list2").appendChild(copyElement);
*/

// contains()
/*
var parentElement=document.getElementById("contains");

var target=document.getElementById("abc");
 
var find = parentElement.contains(target);

console.log(find); */

// hasAttribute() to find attribute element k ander hai ka nahi hai 

/*var target=document.getElementById("contains");
var find = target.hasAttribute("class");
console.log(find);
// haschild to find koi childe means koi element ya div is ke ander hai ka nahi hai.
var target=document.getElementById("contains");
var find = target.hasChildNodes();
console.log(find);
*/
// JavaScript isEqualNode Tutorial in Hindi / Urdu

// <!-- setTimeout & clearTimeout -->

var id= setTimeout(anim , 5000);
function anim(){
  var target=document.getElementById("text");
  target.style.width = "500px";
}
function stopAnimation(){
  clearTimeout(id);
}
