// const square1 = document.getElementById('square1');

square1.addEventListener("dragstart", dragStart);

const spaces = document.querySelectorAll(".space");
spaces.forEach((space) => {
  space.addEventListener("dragend", dragEnd);
  space.addEventListener("dragenter", dragEnter);
  space.addEventListener("dragleave", dragLeave);
  space.addEventListener("dragover", dragOver);
  space.addEventListener("drop", dropIt);
});

let img = document.getElementById("imG");

function dragStart(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.dropEffect = "move";
  setTimeout(() => (ev.target.className = ""), 1);
  ev.dataTransfer.setDragImage(img, 75, 75);
}

function dropIt(ev) {
  let data = ev.dataTransfer.getData("text");
  let drop = document.getElementById(data);
  drop.className = "solid";
  if (ev.target.className === "space hovered") {
    ev.target.appendChild(drop);
    ev.target.classList.remove("hovered");
  }
}

function dragEnd(ev) {
  ev.target.className = "solid";
}

function dragEnter(ev) {
  if (ev.target.className === "space") ev.target.classList.add("hovered");
}

function dragLeave(ev) {
  ev.target.classList.remove("hovered");
}

function dragOver(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}
