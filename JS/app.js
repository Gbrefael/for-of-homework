let list = [];

document.getElementById("body").style.backgroundImage =
  "url(img/yellow-books.jpeg)";
document.getElementById("body").style.backgroundPosition = "center";
document.getElementById("body").style.backgroundSize = "cover";
document.getElementById("body").style.backgroundRepeat = "no-repeat";
document.getElementById("body").style.height = "100vh";

function addBook() {
  let newBook = document.querySelector("#book");
  let val = newBook.value;
  list.push(val);
  newBook.value = "";
}

function mark(mark) {
  mark.style.textDecoration = "line-through";
}

function showList() {
  let showElem = document.querySelectorAll(".disp");
  showElem[0].innerHTML = "<ul>";
  for (let book of list) {
    showElem[0].innerHTML +=
      '<li id="' + book + '" onClick = "mark(' + book + ')">' + book + "</li>";
  }
  showElem[0].innerHTML += "</ul>";
}

let myBg = document.getElementById("main");
myBg.style.textAlign = "center";

let title = document.getElementById("title");
title.style.color = "rgb(38, 156, 30)";
title.style.fontSize = "50px";

let section = document.getElementById("sec");
section.style.width = "200px";
section.style.margin = "auto";
section.style.marginTop = "50px";

let myBtn = document.getElementById("btn");
myBtn.style.border = "none";
myBtn.style.borderRadius = "8px";
myBtn.style.backgroundColor = "#fef6e4";
myBtn.style.fontSize = "15px";

let myBtn2 = document.getElementById("btn2");
myBtn2.style.border = "none";
myBtn2.style.borderRadius = "8px";
myBtn2.style.backgroundColor = "#fef6e4";
myBtn2.style.fontSize = "15px";

let myLabel = document.getElementById("label");
myLabel.style.fontSize = "17px";
myLabel.style.fontWeight = "bold";
myLabel.style.borderRadius = "6px";
