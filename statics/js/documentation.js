let ImagePage_01= new Oct8("Img_pc_main",100,60,60,60)
let ObjectsMoves = [ImagePage_01]
let Reverse_move = true
ImagePage_01.CreateEvent(MoveImage,400)


function MoveImage(){
    let move=4;
    let moveX=6;
    if(Reverse_move == true)
    {
        move = 6
        ObjectsMoves[0].ModifyProps(document.getElementById(ImagePage_01.id),move,ImagePage_01.PropsElement.MoveY)
        ObjectsMoves[0].ModifyProps(document.getElementById(ImagePage_01.id),ImagePage_01.Properties.marginLeft+moveX,ImagePage_01.PropsElement.MoveX)
        Reverse_move=false
    }
    else{
        move = 0
        ObjectsMoves[0].ModifyProps(document.getElementById(ImagePage_01.id),move,ImagePage_01.PropsElement.MoveY)
        ObjectsMoves[0].ModifyProps(document.getElementById(ImagePage_01.id),ImagePage_01.Properties.marginLeft-moveX,ImagePage_01.PropsElement.MoveX)
        Reverse_move=true
    }
}

