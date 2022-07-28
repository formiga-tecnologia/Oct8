var Engine = new Oct8();

Engine.CreateContainerBody("campo_3", "base_3");
Engine.ModifySize(document.getElementById("base_3"), "H", 30)
Engine.ModifySize(document.getElementById("base_3"), "X", 0);
Engine.ModifySize(document.getElementById("base_3"), "Y", 0);
Engine.CreateContainerElement("base_3", "test_3")
Engine.ModifySize(document.getElementById("test_3"), "H", 29)
Engine.ModifySize(document.getElementById("test_3"), "X", 0);
Engine.ModifySize(document.getElementById("test_3"), "Y", 0);
Engine.CreateContainerSquareElement("test_3", "bloc_3")
Engine.ModifySize(document.getElementById("bloc_3"), "W", 10);
Engine.ModifySize(document.getElementById("bloc_3"), "H", 10);
Engine.ModifySize(document.getElementById("bloc_3"), "X", 6);
Engine.ModifySize(document.getElementById("bloc_3"), "Y", 6);
Engine.X = 0;
Engine.Y = 0;
Engine.CreateEvent(skew, 10)

function skew(){
  Engine.PlaySkew(document.getElementById('bloc_3'), Engine.X, Engine.X+10, 'X')
}