var ss = document.getElementById('screensize');

var windowWidth = document.documentElement.clientWidth;

var widthValue

  if(windowWidth > 992){
    widthValue = "Large " + windowWidth;
   }
  if (windowWidth > 768 && windowWidth < 991){
    widthValue = "Medium " + windowWidth;
    }
  if (windowWidth > 480 && windowWidth < 767){
    widthValue = "Small " + windowWidth;
    }
  if (windowWidth < 479){
    widthValue = "Ex Small " + windowWidth;
    }

ss.innerHTML = "ScreenSize: " + widthValue;
