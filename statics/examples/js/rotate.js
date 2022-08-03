var Red = new Oct8("block2")

Red.ModifyProps(document.getElementById("block2"),20,Red.PropsElement.MoveX)
Red.ModifyProps(document.getElementById("block2"),10,Red.PropsElement.MoveY)
Red.ModifyProps(document.getElementById("block2"),10,Red.PropsElement.W)
Red.ModifyProps(document.getElementById("block2"),10,Red.PropsElement.H)
Red.ModifyProps(document.getElementById("block2"),0,Red.PropsElement.Rotate)
Red.CreateEvent(rotate, 10)

function rotate(){
  Red.ModifyProps(document.getElementById("block2"),Red.Properties.rotate+1,Red.PropsElement.Rotate)
  
  if(Red.Properties.rotate >= 180){
    //Red.StopEvent()
  }
}

// var Green = new Oct8("block3")

// Green.ModifyProps(document.getElementById("block3"),25,Green.PropsElement.MoveX)
// Green.ModifyProps(document.getElementById("block3"),5,Green.PropsElement.MoveY)
// Green.ModifyProps(document.getElementById("block3"),10,Green.PropsElement.W)
// Green.ModifyProps(document.getElementById("block3"),10,Green.PropsElement.H)
// Green.ModifyProps(document.getElementById("block3"),0,Green.PropsElement.Skew)

// Green.CreateEvent(skew, 20)

// function skew(){
//   Green.ModifyProps(document.getElementById("block3"),Green.Properties.skew+1,Green.PropsElement.Skew)
//   if(Green.Properties.skew >= 60){
//     Green.StopEvent()
//   }
// }