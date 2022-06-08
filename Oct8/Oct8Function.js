// Functions to Oct8 
// Its Js no use pyshicals some manipulations in DOM

function Oct8Remove(element)
{
    element.remove()
}

function Oct8RemovePropries(element,propried)
{
    element.classList.remove(propried)
}

/*  Create recursive functions  */
function oct8Loop(timer,func,loopName)
{
    loopName= setInterval(func, timer);
}
function oct8BreakLoop(loopName)
{
    clearInterval(loopName);
}

 /*
 Element = elemento alvo 
 infinity = False ou true para efeito infinito
 X =  int (1 - 9) quantidade / posição do movimento 
 backEffect = true or false Se ele vai e volta
 full = true or false Determina se ele vai ir ate 100% ou até x+40

 */
 function oct8CreateAnimation_ToY_toY(element,infinity,X,backEffect,full)
 {
     element.className += " move-toY-"+X+"-toY-1 ";
     if(infinity == true)
     {
         element.className += " inifinity"
     }
 }
 function oct8RemoveAnimation_ToY_toY(element,infinity,X,backEffect,full)
 {
     element.classList.remove("move-toY-"+X+"-toY-1");
 
     if(infinity == true)
     {
         element.classList.remove("inifinity")
     }
 }
 

function oct8CreateAnimation_ToX(element,infinity,X,backEffect,full)
{
    element.className += " move-toX-"+X+" ";
    if(infinity == true)
    {
        element.className += " inifinity"
    }
}

function oct8CreateAnimation_ToX_toX(element,infinity,X,backEffect,full)
{
    element.className += " move-toX-"+X+"-toX-1 ";
    if(infinity == true)
    {
        element.className += " inifinity"
    }
}

function oct8AddY(element,Xvalue)
{
    element.className+=" Y-"+Xvalue;
}

function oct8AddX(element,Xvalue)
{
    element.className+=" X-"+Xvalue;
}
function oct8RemoveX(element,Xvalue)
{
    element.classList.remove("X-"+Xvalue)
}

function oct8RemoveAnimation_ToX_toX(element,infinity,X,backEffect,full)
{
    element.classList.remove("move-toX-"+X+"-toX-1");

    if(infinity == true)
    {
        element.classList.remove("inifinity")
    }
}

function oct8CreateStrokes(element,top,left,rigth,button)
{
    if(top==1){ element.className += " stroke-top" }
    if(left==1){ element.className += " stroke-left" }
    if(rigth==1){ element.className += " stroke-right" }
    if(button==1){  element.className += " stroke-bottom"}
}

function oct8Create3dElements(Elb,Sse,rotate,angle){
    Elb.className += " apply-Z"
    Sse.className += " Z"
    if(rotate == "X")
    {
        Sse.className += " rotate-X-"+angle
    }
    if(rotate == "Y")
    {
        Sse.className += " rotate-Y-"+angle
    }
}

function oct8Create3dRotate(Sse,rotate,angle)
{
    Sse.className += " Z"
    if(rotate == "X")
    {
        Sse.className += " rotate-X-"+angle
    }
    if(rotate == "Y")
    {
        Sse.className += " rotate-Y-"+angle
    }
}

var _animate=""
var _element;
var _NewPosition =0;
var _oldPosition =0;
var _axis ="";
function Oct8CPlayMove(element,oldpos,newpos,axis)
{
    _element = element
    _NewPosition = newpos
    _oldPosition = oldpos
    _axis = axis
    _animatePrivate();

}
async function _animatePrivate()
{
    _element.classList.remove(_axis+"-"+_oldPosition)
    _element.classList += " "+_axis+"-"+_NewPosition

}
function Oct8NewElementContainer(id,AppendElementId,typeContainerProp)
{
    let newElement = document.createElement("div")
    if(id!="")
    {
        newElement.id = id
    }

    newElement.className = typeContainerProp
    let positionElement = document.getElementById(AppendElementId)
    positionElement.appendChild(newElement)
}

function Oct8ChangeColor(element,color)
{
    element.classList+= " bc-"+color+""
}

function Oct8ChangeStrokeColor(element,color)
{
    element.style.borderColor = color
}

function Oct8ChangeStrokeWidth(element,borderWidth)
{
    element.classList+=  " stroke-"+borderWidth
}

function Oct8AddHoverEffect(element,color)
{
    element.classList += " hoverAplly-"+color
}
function Oct8RemoveHoverEffect(element,color)
{
   // element.classList.remove("hoverAplly-"+color)
}
function Oct8AddHoverApplyAxis(element,Axis)
{
    element.classList += " hoverAplly-"+Axis
}
function Oct8RemoveHoverApplyAxis(element,Axis)
{
    element.classList.remove("hoverAplly-"+Axis)
}