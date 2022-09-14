import Oct8 from '../../Oct8/Oct8.js'
import CreareAboutArticle from '../components/aboutArticle.js'
var CreateBox = true
var count = 0
export default function CreateNewArticle(x,y,id,values,tile,link){
    var Article =  new Oct8(id,x,y,45,35,"elb elb-off","article",true)
    InsertValues(values,id,tile,link)  
    Article.CallEvents.ResponsiveForMobile(
      ()=>{
        
      },
      ()=>{
        if(count>=1)
        {
          console.log(Article.OctObj.GetElementId())
        }
      }
    )
    count+=1
    document.getElementById(id).addEventListener('click',()=>{
      if(CreateBox == true)
      {
        CreareAboutArticle("AboutBox","Hola tittulo 01","Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena Hello worlds lorena lorenas lorena na lorena ")
        CreateBox =false
        
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