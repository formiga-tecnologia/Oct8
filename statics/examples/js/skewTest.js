var Green = new Oct8("block3")

Green.ModifyProps(document.getElementById("block3"),25,Green.PropsElement.MoveX)
Green.ModifyProps(document.getElementById("block3"),5,Green.PropsElement.MoveY)
Green.ModifyProps(document.getElementById("block3"),10,Green.PropsElement.W)
Green.ModifyProps(document.getElementById("block3"),10,Green.PropsElement.H)
Green.ModifyProps(document.getElementById("block3"),0,Green.PropsElement.Skew)

Green.CreateEvent(skew, 10)

function skew(){
  Green.ModifyProps(document.getElementById("block3"),Green.Properties.skew+1,Green.PropsElement.Skew)
  if(Green.Properties.skew >= 60){
    //Green.StopEvent()
  }
}