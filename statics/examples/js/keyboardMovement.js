var Gray = new Oct8("block4")

var Blue2 = new Oct8("colider",40,0,10,10)

Gray.ModifyProps(document.getElementById("block4"),0,Gray.PropsElement.MoveX)
Gray.ModifyProps(document.getElementById("block4"),0,Gray.PropsElement.MoveY)
Gray.ModifyProps(document.getElementById("block4"),10,Gray.PropsElement.W)
Gray.ModifyProps(document.getElementById("block4"),10,Gray.PropsElement.H)

Base.ModifyProps(document.getElementById("base4"),0,Base.PropsElement.MoveX)
Base.ModifyProps(document.getElementById("base4"),0,Base.PropsElement.MoveY)
Base.ModifyProps(document.getElementById("base4"),60,Base.PropsElement.W)
Base.ModifyProps(document.getElementById("base4"),30,Base.PropsElement.H)

Blue2.ModifyProps(document.getElementById("colider"),30,Blue2.PropsElement.MoveX)
Blue2.ModifyProps(document.getElementById("colider"),0,Blue2.PropsElement.MoveY)
Blue2.ModifyProps(document.getElementById("colider"),10,Blue2.PropsElement.W)
Blue2.ModifyProps(document.getElementById("colider"),10,Blue2.PropsElement.H)

//Gray.CreateEvent(moveGray, 200)

Gray.X = 0;
Gray.Y = 0;

var X = Gray.X;
var Y = Gray.Y;

function keyboard(block4, key) {
  var block4 = document.getElementById("block4");
  var key = event.keyCode;

  if (key == 37) {
    X -= 10;
    block4.style.left = X + "px";
  } else if (key == 38) {
    Y -= 10;
    block4.style.top = Y + "px";
  } else if (key == 39) {
    X += 10;
    block4.style.left = X + "px";
  } else if (key == 40) {
    Y += 10;
    block4.style.top = Y + "px";
  }
}
document.addEventListener("keydown", keyboard);