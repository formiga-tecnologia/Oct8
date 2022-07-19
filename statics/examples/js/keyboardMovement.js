var Engine = new Oct8();

Engine.CreateContainerElement("campo_2", "teste");
Engine.ModifySize(document.getElementById("teste"), "H", 29);
Engine.ModifySize(document.getElementById("teste"), "X", 0);
Engine.ModifySize(document.getElementById("teste"), "Y", 0);
Engine.X = 0;
Engine.Y = 0;
Engine.CreateContainerSquareElement("teste", "bloc_2");
Engine.ModifySize(document.getElementById("bloc_2"), "W", 2);
Engine.ModifySize(document.getElementById("bloc_2"), "H", 2);
Engine.ModifySize(document.getElementById("bloc_2"), "X", 1);
Engine.ModifySize(document.getElementById("bloc_2"), "Y", 1);
Engine.CreateEvent(colider, 0);

var X = Engine.X;
var Y = Engine.Y;

function keyboard(bloc, key) {
  var bloc = document.getElementById("bloc_2");
  var key = event.keyCode;

  if (key == 37) {
    X -= 10;
    bloc.style.left = X + "px";
  } else if (key == 38) {
    Y -= 10;
    bloc.style.top = Y + "px";
  } else if (key == 39) {
    X += 10;
    bloc.style.left = X + "px";
  } else if (key == 40) {
    Y += 10;
    bloc.style.top = Y + "px";
  } else if (key == 13) {
    alert("Animação desligada");
    this.removeEventListener("keydown", keyboard);
  }
}
document.addEventListener("keydown", keyboard);

function colider() {
  var calcX = Math.max(0, Engine.X);
  var calcY = Math.max(0, Engine.Y);
  Engine.AddColider(document.getElementById("teste"), true, calcX, calcY, 0);
}
