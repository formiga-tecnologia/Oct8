import Oct8 from '../../Oct8/Oct8.js'

export default function CreateNewArticle(x,y,id,values,tile,link){
    var Article =  new Oct8(id,x,y,45,35,"elb elb-off","article",true)
    InsertValues(values,id,tile,link)  
    Article.Pyshics.ReverseForce =false
    document.getElementById(id).addEventListener('click',()=>{
        //Article.CreateAnimationEvent(Article.PropsElement.MoveX,10,1,"+")
        Article.Pyshics.SetDynamics(1,90,0,12)
        Article.Pyshics.CreateMoveForce(Article.GetElementId(),Article.OctObj,Article.Pyshics.ReverseForce)
        if(Article.Pyshics.ReverseForce == false)
        {
            Article.Pyshics.ReverseForce = true
        }
        else
        {
            Article.Pyshics.ReverseForce = false
        }

    },false)
}

function CreateResponsive(){
    //Alter values with in diferent screens types of mobile or  desktop 
    //Update forever when update Scrren or load screen
}

function InsertValues(value,id,title,link){
    document.getElementById(id).innerHTML = "<div class='card' style='width: 18rem;'>"+
    '<div class="card-body">'
      +"<h5 class='card-title'>"+title+"</h5>"
      +"<p class='card-text'>"+value+"</p>"
      +"<a href='#' class='card-link'>"+link+"</a>"
    +"</div>"
  +"</div>"
}