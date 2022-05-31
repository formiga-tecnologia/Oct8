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
