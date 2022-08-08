var Gray = new Oct8("block4")
var Blue2 = new Oct8("colider",40,0,10,10)

Gray.ModifyProps(document.getElementById("block4"),-1,Gray.PropsElement.MoveX)
Gray.ModifyProps(document.getElementById("block4"),10,Gray.PropsElement.MoveY)
Gray.ModifyProps(document.getElementById("block4"),10,Gray.PropsElement.W)
Gray.ModifyProps(document.getElementById("block4"),10,Gray.PropsElement.H)

Blue2.ModifyProps(document.getElementById("colider"),30,Blue2.PropsElement.MoveX)
Blue2.ModifyProps(document.getElementById("colider"),5,Blue2.PropsElement.MoveY)
Blue2.ModifyProps(document.getElementById("colider"),10,Blue2.PropsElement.W)
Blue2.ModifyProps(document.getElementById("colider"),10,Blue2.PropsElement.H)

Gray.CreateEvent(moveGray, 100)

// Gray.X = 0;
// Gray.Y = 0;

// var X = Gray.X;
// var Y = Gray.Y;

// function keyboard(block4, key) {
//   var block4 = document.getElementById("block4");
//   var key = event.keyCode;

//   if (key == 37) {
//     X -= 10;
//     block4.style.left = X + "px";
//   } else if (key == 38) {
//     Y -= 10;
//     block4.style.top = Y + "px";
//   } else if (key == 39) {
//     X += 10;
//     block4.style.left = X + "px";
//   } else if (key == 40) {
//     Y += 10;
//     block4.style.top = Y + "px";
//   } else if (key == 13) {
//     alert("Animação desligada");
//     this.removeEventListener("keydown", keyboard);
//   }
// }
// document.addEventListener("keydown", keyboard);

function moveGray(){
  Gray.ModifyProps(document.getElementById("block4"),Gray.Properties.marginLeft+1,Gray.PropsElement.MoveX)
  Gray.AddColider(Blue2,Colider,10,10,0)
  if(Gray.Properties.marginLeft >= 49){
    Gray.StopEvent()
  }
}

function Colider(){
  Gray.ModifyProps(document.getElementById("block4"),45,Gray.PropsElement.Rotate)
  Gray.StopEvent()
}