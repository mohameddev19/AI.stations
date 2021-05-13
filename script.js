/*
var ul = document.getElementById("output");
document.body.onload = function(){
  for(l = 0; l < ul.cells.length; l++) {
    var l2 = l + 3;
    if(ul.cells[l].innerHTML = ul.cells[l2].innerHTML){
      ul.cells[l].innerHTML = '<br>';
    }
    if(ul.cells[l].innerHTML = '<br>'){
      ul.cells[l].style.padding = "0";
      ul.cells[l].style.visibility = "hidden";
    }
  }
}
*/
function num(){
  busnum = parseInt(document.getElementById("bus").value);
  var avnum = 0;
  var vn = 0;
  var n1 = 0;
  for(let i = 0; i < 12; i++){
      vnum = document.getElementById(""+ i +"").value;
      virson.push(vnum);
      avnum += parseInt(document.getElementById(""+ i +"").value);
      n1 = avnum / busnum;
  }
  for(let j = 0; j < 12; j++){
      vn = parseInt(document.getElementById(""+ j +"").value);
      document.getElementById(""+ j +"").value = Math.round(vn / n1);
  }
  n1 = avnum / busnum;
  document.getElementById("aary").value = n1 ;
}


