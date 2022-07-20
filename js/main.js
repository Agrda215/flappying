var x1 = 0;
var y1 = 400;
var x2 = 100;
var y2 = 430;

document.getElementById("left").onclick = () => {
  if (y1 >= 400 && x1 >= 0) {
    x1 -= 5;
  }
};

document.getElementById("right").onclick = () => {
  if (y1 >= 400 && x1 >= 0) {
    x1 += 5;
  }
};

document.getElementById("up").onclick = () => {
  if (y1 >= 400 && x1 >= 0) {
    y1 += 5;
  }
};

document.getElementById("down").onclick = () => {
  if (y1 >= 400 && x1 >= 0) {
    y1 -= 5;
  }
};

setInterval(() => {
  document.getElementById("player").style.left = x1 + "px";
  document.getElementById("player").style.top = y1 + "px";
  document.getElementById("download1").style.left = x2 + "px";
  document.getElementById("download1").style.top = y2 + "px";
  document.getElementById("download2").style.left = x2 + "px";
  document.getElementById("download2").style.top = y2 + "px";
  document.getElementById("download3").style.left = x2 + "px";
  document.getElementById("download3").style.top = y2 + "px";
  document.getElementById("download4").style.left = x2 + "px";
  document.getElementById("download4").style.top = y2 + "px";
  document.getElementById("download5").style.left = x2 + "px";
  document.getElementById("download5").style.top = y2 + "px";
}, 100);
