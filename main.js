// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Ranking List Array
let rankList = ["Pizza", "Pasta", "Salad", "Soup"];
drawRankList();

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  } else if (selection == "empty") {
    empty();
  }

  // Redraw rankList after changes have been made
  drawRankList();
}

// FUNCTIONS TO DEFINE
function drawRankList() {
  let i = 1;
  outputEl.innerHTML = "";
  outputEl.innerHTML = "<h2>Display All  Ranks<h2>";

  for (let rank of rankList) {
    outputEl.innerHTML += `<h4>${i} ${rank}</h4>`;
    i++;
  }
}

function addItem() {
  rankList.splice(index, howManyToRemove,);
  console.log("Add Item");
}

function removeLast() {
  console.log("Remove Last");
}

function insert() {
  console.log("Insert");
}

function removePos() {
  console.log("Remove at Position");
}

function move() {
  console.log("Move");
}

function edit() {
  console.log("Edit");
}

function empty() {
  console.log("Empty");
  [];
}
