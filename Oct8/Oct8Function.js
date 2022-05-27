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