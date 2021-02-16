function playgame() {
  var btnOverlay = document.getElementById("play");
  btnOverlay.style.display = "none";

  var bgMusic = new Audio("carefree-by-kevin-macleod-from-filmmusic-io.mp3");
  bgMusic.play();
  bgMusic.loop=true;
}

window.onload=init;

function init() {
  console.log("window has loaded");
  state.i=1;
  state.j=1;
  state.k=1;
  state.l=1;
}

var state = {
  i: 0, j: 0, k: 0, l:0
}

function nexthair() {
  console.log("inside function nexthair");
  console.log(state.i);
  var optHair = document.getElementById("hair");
  if (state.i===1) {
    optHair.setAttribute("class", "hair1");
    state.i++;
    console.log(state.i);
  }
  else if (state.i===2) {
    optHair.setAttribute("class", "hair2");
    state.i++;
    console.log(state.i);
  }
  else if (state.i===3) {
    optHair.setAttribute("class", "hair3");
    state.i++;
    console.log(state.i);
  }
  else if (state.i===4) {
    optHair.setAttribute("class", "hair4");
    state.i++;
    console.log(state.i);
  }
  else if (state.i===5) {
    optHair.setAttribute("class", "hair5");
    state.i++;
    console.log(state.i);
  }
  else if (state.i===6) {
    optHair.removeAttribute("class");
    state.i=1;
  }
}

function nextshoes() {
  console.log("inside function nextshoes");
  console.log(state.j);
  var optShoes = document.getElementById("shoes");
  if (state.j===1) {
    optShoes.setAttribute("class", "shoes1");
    state.j++;
    console.log(state.j);
  }
  else if (state.j===2) {
    optShoes.setAttribute("class", "shoes2");
    state.j++;
    console.log(state.j);
  }
  else if (state.j===3) {
    optShoes.setAttribute("class", "shoes3");
    state.j++;
    console.log(state.j);
  }
  else if (state.j===4) {
    optShoes.removeAttribute("class");
    state.j=1;
  }
}

function nextbottom() {
  console.log("inside function nextbottom");
  console.log(state.k);
  var optBottom = document.getElementById("bottom");
  if (state.k===1) {
    optBottom.setAttribute("class", "bottom1");
    state.k++;
    console.log(state.k);
  }
  else if (state.k===2) {
    optBottom.setAttribute("class", "bottom2");
    state.k++;
    console.log(state.k);
  }
  else if (state.k===3) {
    optBottom.setAttribute("class", "bottom3");
    state.k++;
    console.log(state.k);
  }
  else if (state.k===4) {
    optBottom.setAttribute("class", "bottom4");
    state.k++;
    console.log(state.k);
  }
  else if (state.k===5) {
    optBottom.removeAttribute("class");
    state.k=1;
  }
}

function nexttop() {
  console.log("inside function nexttop");
  console.log(state.l);
  var optTop = document.getElementById("top");
  if (state.l===1) {
    optTop.setAttribute("class", "top1");
    state.l++;
    console.log(state.l);
  }
  else if (state.l===2) {
    optTop.setAttribute("class", "top2");
    state.l++;
    console.log(state.l);
  }
  else if (state.l===3) {
    optTop.setAttribute("class", "top3");
    state.l++;
    console.log(state.l);
  }
  else if (state.l===4) {
    optTop.setAttribute("class", "top4");
    state.l++;
    console.log(state.l);
  }
  else if (state.l===5) {
    optTop.setAttribute("class", "top5");
    state.l++;
    console.log(state.l);
  }
  else if (state.l===6) {
    optTop.removeAttribute("class");
    state.l=1;
  }
}
