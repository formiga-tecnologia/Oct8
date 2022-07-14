
var Engine = new  Oct8();
var Engine_2 = new Oct8();
var varPage = window.location.href
console.log(varPage)

if(varPage != 'http://127.0.0.1:5500/statics/gamepage.html')
{
    Engine.CreateContainerElement("Field",'ElementsBase')
    Engine.ModifySize(document.getElementById('ElementsBase'),'W',80)
    Engine.ModifySize(document.getElementById('ElementsBase'),'H',60)
    
    Engine.CreateContainerSquareElement("ElementsBase","Square0")
    Engine.ModifySize(document.getElementById('Square0'),'W',10)
    Engine.ModifySize(document.getElementById('Square0'),'H',10)
    Engine.ModifySize(document.getElementById('Square0'),'bg-blue',1)
    Engine.ModifySize(document.getElementById('Square0'),'X',37)
    Engine.ModifySize(document.getElementById('Square0'),'Y',48)
    
    Engine_2.CreateContainerSquareElement("ElementsBase","Square1")
    Engine_2.ModifySize(document.getElementById('Square1'),'W',10)
    Engine_2.ModifySize(document.getElementById('Square1'),'H',10)
    Engine_2.ModifySize(document.getElementById('Square1'),'bg-blue',1)
    Engine_2.ModifySize(document.getElementById('Square1'),'X',26)
    Engine_2.ModifySize(document.getElementById('Square1'),'Y',2)

    Engine.X = 37
Engine.Y = 48 

Engine_2.X = 37 
Engine_2.Y = 2

Engine.CreateEvent(Dynamic_Animation,300)
Engine_2.CreateEvent(Dynamic_Animation_2,300)


function Dynamic_Animation(){

    if(Engine.Y==3)
    {
        Engine.StopEvent()
    }
    Engine.PlayMove(document.getElementById('Square0'),Engine.Y,Engine.Y-1,'Y')
}

function Dynamic_Animation_2(){
    if(Engine_2.Y==46)
    {
        Engine_2.StopEvent()
    }
    Engine_2.PlayMove(document.getElementById('Square1'),Engine_2.Y,Engine_2.Y+1,'Y')
}
}
else
{
    Engine.ApplyNewStyle(document.getElementById('Square0'),'AddEvent')
    Engine.ApplyNewStyle(document.getElementById('Square1'),'AddEvent')
    Engine.CreateEvent(move,100)
}

function move(){
    Engine.PlayMove(document.getElementById('Square0'),Engine.X,Engine.X+1,'X')
    Engine.PlayMove(document.getElementById('Square0'),Engine.Y,Engine.Y+1,'Y')
    if(Engine.X == 68)
    {
        Engine.StopEvent()
        Engine.ApplyNewStyle(document.getElementById('Square0'),'EventPlay')
    }
}





