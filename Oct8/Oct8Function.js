
// OCT8 FUNCTION IS OBSOLETE NOW 11/08/2022
//FELIPE CATAO || 
// Recomedation: Use Oct8Engine.js 

// Functions to Oct8 
// Its Js no use pyshicals some manipulations in DOM

export default class Oct8Functions{
    callList(){

    }
    callXList(){

    }
}

function Oct8Remove(element) {
    element.remove()
}

function Oct8RemovePropries(element, propried) {
    element.classList.remove(propried)
}

/*  Create recursive functions  */
function oct8Loop(timer, func, loopName) {
    loopName = setInterval(func, timer);
}
function oct8BreakLoop(loopName) {
    clearInterval(loopName);
}

/*
Element = elemento alvo 
infinity = False ou true para efeito infinito
X =  int (1 - 9) quantidade / posição do movimento 
backEffect = true or false Se ele vai e volta
full = true or false Determina se ele vai ir ate 100% ou até x+40
*/


function oct8AddY(element, Xvalue) {
    element.className += " Y-" + Xvalue;
}

function oct8AddX(element, Xvalue) {
    element.className += " X-" + Xvalue;
}
function oct8RemoveX(element, Xvalue) {
    element.classList.remove("X-" + Xvalue)
}


function oct8CreateStrokes(element, top, left, rigth, button) {
    if (top == 1) { element.className += " stroke-top" }
    if (left == 1) { element.className += " stroke-left" }
    if (rigth == 1) { element.className += " stroke-right" }
    if (button == 1) { element.className += " stroke-bottom" }
}

function oct8Create3dElements(Elb, Sse, rotate, angle) {
    Elb.className += " apply-Z"
    Sse.className += " Z"
    if (rotate == "X") {
        Sse.className += " rotate-X-" + angle
    }
    if (rotate == "Y") {
        Sse.className += " rotate-Y-" + angle
    }
}

function oct8Create3dRotate(Sse, rotate, angle) {
    Sse.className += " Z"
    if (rotate == "X") {
        Sse.className += " rotate-X-" + angle
    }
    if (rotate == "Y") {
        Sse.className += " rotate-Y-" + angle
    }
}

var _animate = ""
var _element;
var _NewPosition = 0;
var _oldPosition = 0;
var _axis = "";
var _sizeType = "";
var _newsize = 0;
var _oldsize = 0;

function Oct8ChangeSizes(element, typeModify, newsize, oldSize) {
    _element = element
    _sizeType = typeModify
    _newsize = newsize
    _oldsize = oldSize
    _animatePrivate_size()

}
function Oct8CPlayMove(element, oldpos, newpos, axis) {
    _element = element
    _NewPosition = newpos
    _oldPosition = oldpos
    _axis = axis
    _animatePrivate();

}
function oct8PlaySkew(element, oldpos, newpos, axis) {
    _element = element
    _NewPosition = newpos
    _oldPosition = oldpos
    _axis = axis
    _animatePrivate_skew();
}
function Oct8PlayBlur(element, oldpos, newpos) {
    _element = element
    _NewPosition = newpos
    _oldPosition = oldpos
    _animatePrivate_blur()
}
function Oct8PlayBorderSmooth(element, oldpos, newpos) {
    _element = element
    _NewPosition = newpos
    _oldPosition = oldpos
    _animatePrivate_borderSmooth()
}

async function _animatePrivate_borderSmooth() {
    _element.classList.remove("border-smooth-" + _oldPosition)
    _element.classList += " " + "border-smooth-" + _NewPosition
}
async function _animatePrivate_blur() {
    _element.classList.remove("blur-" + _oldPosition)
    _element.classList += " " + "blur-" + _NewPosition
}
async function _animatePrivate() {
    _element.classList.remove(_axis + "-" + _oldPosition) 
    _element.classList += " " + _axis + "-" + _NewPosition

}
async function _animatePrivate_skew() {
    _element.classList.remove("Skew-"+_axis + "-" + _oldPosition)
    _element.classList += " "+"Skew-"+_axis + "-" + _oldPosition

}
async function _animatePrivate_size() {
    if(_oldsize != undefined)
    {
        _element.classList.remove(_sizeType + "-" + _oldsize)
    }
    
    _element.classList += " " + _sizeType + "-" + _newsize
}


function Oct8NewElementContainer(id, AppendElementId, typeContainerProp) {
    let newElement = document.createElement("div")
    if (id != "") {
        newElement.id = id
    }
    
    newElement.className = typeContainerProp
    let positionElement = document.getElementById(AppendElementId)
    positionElement.appendChild(newElement)
}

function Oct8NewElementBody(id,typeContainerProp) {
    let newElement = document.createElement("div")
    if (id != "") {
        newElement.id = id
    }
    newElement.className = typeContainerProp
    document.body.appendChild(newElement)
}

function Oct8ChangeColor(element, color) {
    element.classList += " bc-" + color + ""
}

function Oct8ChangeStrokeColor(element, color) {
    element.style.borderColor = color
}

function Oct8ChangeStrokeWidth(element, borderWidth) {
    element.classList += " stroke-" + borderWidth
}

function Oct8AddHoverEffect(element, color) {
    element.classList += " hoverAplly-" + color
}
function Oct8RemoveHoverEffect(element, color) {
    // element.classList.remove("hoverAplly-"+color)
}
function Oct8AddHoverApplyAxis(element, Axis) {
    element.classList += " hoverAplly-" + Axis
}
function Oct8RemoveHoverApplyAxis(element, Axis) {
    element.classList.remove("hoverAplly-" + Axis)
}
