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
