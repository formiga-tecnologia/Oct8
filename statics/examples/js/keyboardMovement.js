var Engine = new Oct8()

Engine.CreateContainerElement("campo_2",'Teste')
Engine.ModifySize(document.getElementById('Teste'),'H',30)
Engine.CreateContainerSquareElement("Teste",'bloc_2')
Engine.ModifySize(document.getElementById('bloc_2'),'W',2)
Engine.ModifySize(document.getElementById('bloc_2'),'H',2)
Engine.ModifySize(document.getElementById('bloc_2'),'X',1)
Engine.ModifySize(document.getElementById('bloc_2'),'Y',1)


  var X = 0;
  var Y = 0;

  function move(bloc, key){
    var bloc = document.getElementById("bloc_2");
    var key = event.keyCode;
    
    if(key == 37){
      X-=10;
      bloc.style.left = X + "px";
    }else if(key == 38){
      Y-=10
      bloc.style.top = Y + "px";
    }else if(key == 39){
      X+=10
      bloc.style.left = X + "px";
    }else if(key == 40){
      Y+=10
      bloc.style.top = Y + "px";
    }
    else if(key == 13){
      alert("Animação desligada")
      this.removeEventListener("keydown", move);
    }
  }

document.addEventListener("keydown", move);


