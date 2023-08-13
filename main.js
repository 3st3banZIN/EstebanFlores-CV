$(document).ready(function(){alert("Bienvenid@");});
function mi_boton1 (Gracias ){
  var input = document.getElementsByClassName('for');
  document.getElementById('reg').innerHTML=input[0].value
};
var boton1 = document.getElementById('bot');
boton1.addEventListener("click",mi_boton1);
