const container2 = document.getElementsByClassName("container2")[0];
const container3 = document.getElementsByClassName("container3");
const checkIcon = document.getElementById("check-icon");
const xIcon = document.getElementById("x-icon");

var i = 0;

xIcon.onclick = function () {
  typeNote();
};

checkIcon.onclick = function () {
  createNote();
};

function typeNote() {
  Array.from(container3).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
}

function createNote() {
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = noteText;

  node1.setAttribute("style","width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden;");


  node0.style.margin = margin()
  node0.style.transform = rotate()
  node0.style.backgroundColor = color()

  node0.appendChild(node1);

  container2.insertAdjacentElement("beforeend", node0);

  node0.onmouseenter = function(){
      node0.style.transform = "scale(1.1)";
  }

  node0.onmouseleave = function(){
      node0.style.transform = rotate();
  }

  node0.ondblclick = function(){
      node0.remove();
  }

  document.getElementById("note-text").value = '';

}

function margin() {
  var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  var random_rotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-10deg)",
  ];

  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  var random_color = [
    "#EA2027",
    "#FFC312",
    "#4cd137",
    "#00a8ff",
    "#a55eea",
    "#fa8231",
    "#3742fa",
  ];

  if (i > random_color.length - 1) {
    i = 0;
  }

  return random_color[i++];
}
