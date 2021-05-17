

//Consumir a API do OCT8

function SendCode(code){
    fetch('https://oct8lang.herokuapp.com/')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

SendCode("a")