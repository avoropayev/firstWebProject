

path[0] = "img/banner1.jpg";
path[1] = "img/banner2.jpg";
path[2] = "img/banner3.jpg";
function swapImage()
{
  var i = 0;
  var path = new Array();

  // LIST OF IMAGES


   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage()",5000);
}
