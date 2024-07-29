let name = document.getElementById("name");
var search = document.getElementById("search");
let res = document.getElementById("res");
let res1 = document.getElementById("res1");
let arr = [];

function add(event) {
  event.preventDefault(event);
  arr.push(name.value);
  display();
  name.value = "";
}

function sortA_Z() {
  arr.sort();
  display();
}
function sortZ_A() {
  arr.sort((a, b) => (a > b ? -1 : 1));
  display();
}

function searchLetters() {
  var searchArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/${search}/)) {
      searchArr.push(arr[i]);
    }
  }
  for (let i = 0; i < searchArr.length; i++) {
    res1.innerHTML += `<h5>${arr[i]}</h5>`;
  }
}

function display() {
  res.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    res.innerHTML += `<h5>${arr[i]}</h5>`;
  }
}
