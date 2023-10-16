import Oct8 from '../../Oct8/Oct8.js'
import CreareAboutArticle from '../components/aboutArticle.js'
var CreateBox = true
var count = 0
const conteudo =  { 
  GuiaInicial:["Sobre o Oct8","O Oct8 é uma ferramenta para desenvolviemnto web para a criação de paginas modernas com o intuido do paradigma <b>'No scroll page'</b> onde visamos a integridade da informação em uma unica pagina."],
  PoderOct8:["Casos indicados para Oct8","Existem diversos tipos de casos onde você pode implementar o Oct8, ele é focado em crar designs modernos onde todo o conteudo cabe em uma unica pagina alem disso muito util para criação e desenvolvimento de jogos e interatividade basicas em paginas web sem uso de frameworks externos."]
}
export default function CreateNewArticle(x,y,id,values,tile,link){
    var Article =  new Oct8(id,x,y,45,35,"elb elb-off","article",true)
    InsertValues(values,id,tile,link)  
   
    document.getElementById(id).addEventListener('click',()=>{
      if(CreateBox == true)
      {
        console.log(conteudo[id][1]) 
        CreareAboutArticle("AboutBox",conteudo[id][0],conteudo[id][1])
      }
        
    },false)
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