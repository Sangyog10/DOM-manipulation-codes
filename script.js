`use strict`;
// selecting Element
// let ele = document.getElementById(`list2`);
// ele.innerHTML = "<p> sangyog </p>";
// console.log(ele.innerHTML);

// let san = document.getElementsByClassName(`cl`);
// console.log(san);
// for (let i = 0; i < san.length; i++) {
//   san[i].innerHTML = "puri ";
// }
// let para = document.getElementsByTagName("h1");
// for (let i = 0; i < para.length; i++) {
//   para[i].innerHTML = "<h3> changed </h3>";
// }

// let div1 = document.getElementById("divv");
// let divcon = div1.getElementsByTagName("h1");
// console.log(divcon);
// for (let i = 0; i < divcon.length; i++) {
//   console.log(divcon[i]);
//   divcon[i].innerhtml = "changed now";
// }

// 1. to append new element in the document

// let ull = document.querySelector("#ul");
// let newli = document.createElement("li");
// newli.textContent = "new list";
// ull.appendChild(newli);

// 2.to insert before the element
// let list1 = document.querySelector("#list");
// let item = document.createElement("li");
// item.textContent = " added content=four";
// // let pos = list1.firstElementChild; // this will add element in the first postion
// // let pos = list1.firstElementChild.nextElementSibling; //it will add in the second place
// let pos = list1.firstElementChild.nextElementSibling.nextElementSibling; //it will add in the third place
// list1.insertBefore(item, pos);

// 3. to remove the child element  -->
// let parent = document.querySelector("#menu");
// // let elm = parent.firstElementChild; //to remove first element
// let elm = parent.firstElementChild.nextElementSibling; //to remove second element
// parent.removeChild(elm);
// document.body.removeChild(parent); //this will remove everthibng in menu

// // <!-- 4.to clone the element  -->
// let menu = document.querySelector("#list");
// let cloneElm = menu.cloneNode(true); //it true is used it will copy the child elment under it and if it is empty it will only copy the slected elemtnt
// cloneElm.id = "newadded";
// console.log(cloneElm);
// document.body.appendChild(cloneElm);

// // <!-- 5.to replace element  -->
// let menu = document.querySelector("#list");
// let item = document.createElement("li");
// item.textContent = "new added";
// let replace = menu.firstElementChild.nextElementSibling;
// menu.replaceChild(item, replace);

// // <!-- 6. to insert adjacent html -->
// let elm = document.querySelector("#intro");
// let content = "content to be added";
// elm.insertAdjacentHTML("beforebegin", content); //first position second is content

// 7.changing attributes
// let btn = document.querySelector("#btn");
// // btn.setAttribute("name", "form1"); //it will assign name=form1
// btn.setAttribute("class", "form133"); //it will assign name=form1
// // let ans = btn.getAttribute("name");
// let ans = btn.hasAttribute("name"); //checks if availabel
// console.log(ans);

// <!-- 8.inline style using js -->
// let btn = document.querySelector("#btn");
// // btn.style.cssText = "background-color:red; border:2px solid black";
// // or it can be done using set attributes
// // btn.setAttribute("style", "background-color:red");
// // only one style can be changed as follow
// btn.style.background = "red";

// // 9. to know about the existing css
// let btn = document.querySelector(".btn");
// let css = getComputedStyle(btn);
// console.log(css.color);

// // 10.to add class using classlist
// let cont = document.querySelector("#container");
// cont.classList.add("new"); //create new in css with various properties and it will apply all properties to it
// cont.classList.remove("new");
// cont.classList.replace("box", "new"); //it will replace the class box with class new
// cont.classList.toggle("box"); //yedi box class lageko xa vane hatauxa natra add gardinxa
// let result = cont.classList.contains("box"); //it will check if the given class is available or not
// console.log(result);

// 11.DOM Events
// function btnclick() {
//   //it is function called in btn class in html
//   alert("btn was clicked");
// }
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", btnclick);
// // btn.addEventListener("mouseover", btnclick); // it will react when we keep our mouse cursor in the given target
// btn.addEventListener("mouseout", btnclick); // it will react when we keep our mouse cursor in the given target

// 12.remove event listener
// let btn = document.querySelector(".btn");
// function click1() {
//   console.log("activated one");
// }
// function click2() {
//   console.log("activated two");
// }
// btn.addEventListener("click", click1);
// btn.addEventListener("click", click2);
// btn.removeEventListener("click", click2);

// 13.mouse event
// let btn = document.querySelector("#btn");
// function cl() {
//   alert("activated");
// }
// // it can also be done using addEventListener instead of calling fucntion from html
// // for double click use dblclick and for right click use contextmenu

// 14.keyboard events
// window.addEventListener("keydown", checkit); //similarly there is keyup
// function checkit(event) {
//   console.log(event.key);
// }
// in the same way there is scroll event which will activate when we hit scroll key

// 15.scroll event
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 150) {
//     document.body.style.background = "red";
//   }
// });

// 16.input event
// let myin = document.querySelector("#myinput");
// myin.addEventListener("focus", focuss);
// myin.addEventListener("blur", blurr);
// function focuss() {
//   myin.style.background = "red";
// }
// function blurr() {
//   myin.style.background = "white";
// }
// // to  check the input by user
// myin.addEventListener("change", checkk); //it will store all the value once user click outside
// myin.addEventListener("input", checkk); //it will store everytime user enters key
// function checkk() {
//   console.log(this.value);
// }

// 17.Event bubbling and event capturing
// let div = document.querySelector(".cont");
// let btn = document.querySelector(".btn");
// div.addEventListener("click", divclick); //not passing third parameter means false which means bubbling
// btn.addEventListener("click", btnclick); //not passing third parameter means false which means bubbling
// document.body.addEventListener("click", bodyclick);

// // div.addEventListener("click", divclick, true);
// // document.body.addEventListener("click", bodyclick, true);
// function divclick() {
//   console.log("div clicked");
// }
// function btnclick(event) {
//   console.log("btn clicked");
//   event.stopPropagation(); // it will only cllick in button not in all
// }
// function bodyclick() {
//   console.log("body clicked");
// }
