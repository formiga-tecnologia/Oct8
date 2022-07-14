var Engine = new Oct8();

Engine.ModifySize(document.getElementById("bloc_1"), "X", 1);
Engine.ModifySize(document.getElementById("bloc_1"), "Y", 1);

Engine.X = 1;
Engine.Y = 1;
Engine.CreateEvent(move, 100);
Engine.CreateRotate(rotate, 100);

function move(){

  if(Engine.X == 20){
    Engine.CreateRotatePishics(document.getElementById('bloc_1'))
    Engine.ApplyNewStyle(document.getElementById('bloc_1'), 'EventPlay')
  }else{
    Engine.PlayMove(document.getElementById('bloc_1'), Engine.X, Engine.X+1, 'X')
    Engine.PlayMove(document.getElementById('bloc_1'), Engine.Y, Engine.Y+1, 'Y')
  }

  if(Engine.rotateCalc == 10){
    Engine.StopEvent()
  }
}

// function move() {
//   Engine.PlayMove(
//     document.getElementById("bloc_1"),
//     Engine.X,
//     Engine.X + 1,
//     "X"
//   );
//   if (Engine.X == 80) {
//     Engine.StopEvent()
//     Engine.CreateEvent(Rotate,70)
//   }
//   function Rotate(){
//     Engine.CreateRotatePishics(document.getElementById("bloc_1"));
//   }
// }