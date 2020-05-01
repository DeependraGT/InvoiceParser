$(function(){
function zoomIn(event) {
  var pre = document.getElementById("preview");
  pre.style.visibility = "visible";
  if ($("#zoom1:hover").length != 0) {
        var img = document.getElementById("zoom1");
		pre.style.backgroundImage = "url('pic1.jpg')";
    }
  
  var posX = event.offsetX;
  var posY = event.offsetY;
  pre.style.backgroundPosition=(-posX*2.5)+"px "+(-posY*5.5)+"px";
}

function zoomOut() {
  var pre = document.getElementById("preview");
  pre.style.visibility = "hidden";
}
});
