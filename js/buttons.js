//Javascript to handle the button presses and change the style for the page

//Tickers
var isOverlayOn = 0;

//Function to handle the Resume button click
function resumeClicked(){
  var resumeButton = document.getElementById('resumeBut');
  var resumeContent = document.getElementById('resumeContent');
  if(isOverlayOn === 0){
    //Apply the first overlay
    applyOverlay();
    
    //Make the button pop out
    resumeButton.style.zIndex = 100;
    resumeButton.style.color = '#129447';
    resumeButton.style.border = '3px solid #8CC63F';
    
    //Display the contents for this page
    resumeContent.style.display = 'block';
    
    isOverlayOn = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(resumeButton);
    cancelContent(resumeContent);
    isOverlayOn = 0;
  }
}//END resumeClicked

//Function to handle the About button click
function aboutClicked(){
  var aboutButton = document.getElementById('aboutBut');
  var aboutContent = document.getElementById('aboutContent');
  if(isOverlayOn === 0){
    //Apply the first overlay
    applyOverlay();
    
    //Make the button pop out
    aboutButton.style.zIndex = 100;
    aboutButton.style.color = '#129447';
    aboutButton.style.border = '3px solid #8CC63F';
    
    //Display the contents
    aboutContent.style.display = 'block';
    
    isOverlayOn = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(aboutButton);
    cancelContent(aboutContent);
    isOverlayOn = 0;
  }
}//END aboutClicked

//Function to handle the Contact button click
function contactClicked(){
  var contactButton = document.getElementById('contactBut');
  var contactContent = document.getElementById('contactContent');
  if(isOverlayOn === 0){
    //Apply the first overlay
    applyOverlay();
    
    //Make the button pop out
    contactButton.style.zIndex = 100;
    contactButton.style.color = '#129447';
    contactButton.style.border = '3px solid #8CC63F';
    
    //Display the contents
    contactContent.style.display = 'block';
    
    isOverlayOn = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(contactButton);
    cancelContent(contactContent);
    isOverlayOn = 0;
  }
}//END contactClicked

//Function to handle the Forth button click
function fourthClicked(){
  var fourthButton = document.getElementById('fourthBut');
  var fourthContent = document.getElementById('fourthContent');
  if(isOverlayOn === 0){
    //Apply the first overlay
    applyOverlay();
    
    //Make the button pop out
    fourthButton.style.zIndex = 100;
    fourthButton.style.color = '#129447';
    fourthButton.style.border = '3px solid #8CC63F';
    
    //Display the contents
    fourthContent.style.display = 'block';
       
    isOverlayOn = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(fourthButton);
    cancelContent(fourthContent);
    isOverlayOn = 0;
  }
}//END fourthClicked

//Function to handle the close button click
function closeOverlays(){
  
  //Close the Overlays
  var resumeButton = document.getElementById('resumeBut');
  var aboutButton = document.getElementById('aboutBut');
  var contactButton = document.getElementById('contactBut');
  var fourthButton = document.getElementById('fourthBut');
  
  cancelOverlay(resumeButton);
  cancelOverlay(aboutButton);
  cancelOverlay(contactButton);
  cancelOverlay(fourthButton);
  
  isOverlayOn = 0;
  
  //Remove the content
  var resumeContent = document.getElementById('resumeContent');
  var aboutContent = document.getElementById('aboutContent');
  var contactContent = document.getElementById('contactContent');
  var fourthContent = document.getElementById('fourthContent');
  
  cancelContent(resumeContent);
  cancelContent(aboutContent);
  cancelContent(contactContent);
  cancelContent(fourthContent);
  
}//END closeOverlays





//Helper Functions
function applyOverlay(){
  document.getElementById('backOverlay').style.display = "block";
}

function cancelOverlay(thisBut){
  thisBut.style.zIndex = 0;
  thisBut.style.color = 'white';
  thisBut.style.border = '3px solid white';
  document.getElementById('backOverlay').style.display = 'none';
}

function cancelContent(thisContent){
  thisContent.style.display = 'none';
}
