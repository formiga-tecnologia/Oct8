var Gray = new Oct8("block");
//var Base = new Oct8("base")
//var Blue2 = new Oct8("collider",40,0,10,10)

Gray.ModifyProps(document.getElementById("block"), 0, Gray.PropsElement.MoveX);
Gray.ModifyProps(document.getElementById("block"), 0, Gray.PropsElement.MoveY);
Gray.ModifyProps(document.getElementById("block"), 10, Gray.PropsElement.W);
Gray.ModifyProps(document.getElementById("block"), 10, Gray.PropsElement.H);

Gray.MoveX = 0;
Gray.MoveY = 0;

var X = Gray.MoveX;
var Y = Gray.MoveY;
var UP = 38
var DOWN = 40
var LEFT = 37
var RIGHT = 39

function keyboard(block, key) {
  var block = document.getElementById("block");
  var key = event.keyCode;

  if (key == 37) {
    X -= 10;
    block.style.left = X + "px";
  } else if (key == 38) {
    Y -= 10;
    block.style.top = Y + "px";
  } else if (key == 39) {
    X += 10;
    block.style.left = X + "px";
  } else if (key == 40) {
    Y += 10;
    block.style.top = Y + "px";
  }
}
document.addEventListener("keydown", keyboard);

// Base.ModifyProps(document.getElementById("base"),0,Base.PropsElement.MoveX)
// Base.ModifyProps(document.getElementById("base"),0,Base.PropsElement.MoveY)
// Base.ModifyProps(document.getElementById("base"),100,Base.PropsElement.W)
// Base.ModifyProps(document.getElementById("base"),60,Base.PropsElement.H)

// Blue2.ModifyProps(document.getElementById("collider"),30,Blue2.PropsElement.MoveX)
// Blue2.ModifyProps(document.getElementById("collider"),0,Blue2.PropsElement.MoveY)
// Blue2.ModifyProps(document.getElementById("collider"),10,Blue2.PropsElement.W)
// Blue2.ModifyProps(document.getElementById("collider"),10,Blue2.PropsElement.H)

//Gray.CreateEvent(moveGray, 50)



// function keyboard(block, key) {
//   var block = document.getElementById("block");
//   var key = event.keyCode;

//   if (key == 37) {
//     // X -= 10;
//     // block.style.left = X + "px";
//   } else if (key == 38) {
//     Y -= 10;
//     block.style.top = Y + "px";
//   } else if (key == 39) {
//     X += 10;
//     block.style.left = X + "px";
//   } else if (key == 40) {
//     Y += 10;
//     block.style.top = Y + "px";
//   }
// }
// document.addEventListener("keydown", keyboard);

// function moveGray(){
//   Gray.ModifyProps(document.getElementById("block"),Gray.Properties.marginLeft+1,Gray.PropsElement.MoveX)
//   Gray.AddColider(Blue2,Colider,10,10,0)
//   if(Gray.Properties.marginLeft > 50){
//     Gray.StopEvent()
//   }
// }
