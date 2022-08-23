var Blue = new Oct8("block")

Blue.ModifyProps(document.getElementById("block"),0,Blue.PropsElement.MoveX)
Blue.ModifyProps(document.getElementById("block"),0,Blue.PropsElement.MoveY)
Blue.ModifyProps(document.getElementById("block"),10,Blue.PropsElement.W)
Blue.ModifyProps(document.getElementById("block"),10,Blue.PropsElement.H)
Blue.ModifyProps(document.getElementById("block"),0,Blue.PropsElement.Rotate)

Blue.CreateEvent(move,20)

function move(){
  Blue.ModifyProps(document.getElementById("block"),Blue.Properties.marginLeft+1,Blue.PropsElement.MoveX)
  
  if(Blue.Properties.marginLeft >= 49){
    Blue.StopEvent()
  }
}