function square() {
    let x = 5;
    let s = get(x);
    let ee = document.getElementById("btn");
    ee.innerText = s;
    return s;
}
function get(y) { return y * y; }

document.write("<br>");

function showMenu() {
    let menu = document.getElementById("sweetsContainer");
    menu.style.display = "block"; 
    menu.style.background = "red";
}

function hideMenu() {
    let menu = document.getElementById("sweetsContainer");
    menu.style.display = "none"; 
}

function showDate() {
    date = document.getElementById("btn2");
    let currentDate = new Date();
    date.innerText = currentDate.toString();
}

document.write("<br/>");

function addNewElement() {
    let box = document.getElementById("myBox");
   
    let newP = document.createElement("p");
    let result = square();
  
    newP.textContent = "مربع العدد هو " + result;
    newP.style.color = "#d81c1c";
    newP.style.border = "3px solid #ccc";
    newP.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
 
    box.appendChild(newP);
}

var student = new Array("Ahmed", "khalid", "Mohammed");
for (var k = 0; k < student.length; k++) {
    document.write(student[k] + "<br/>");
}
 
var info = [1, "Ahmed", 24, "yemen"];
for (let i = 0; i < info.length; i++) {
    document.write(info[i] + " ");
}
document.write("<br/>");

var names = []; 
names[0] = "Ahmed";
names[1] = "Saleh";
names[2] = "Khalid";

for (var i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

names.pop();

names.push("Sami", "Hassan");
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

names.shift();

names.unshift("Abdullah");
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

names.reverse();
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

let arr = [[1, 3, 5, 7], [9, 11, 13, 15], [17, 19, 21, 23]];
for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
