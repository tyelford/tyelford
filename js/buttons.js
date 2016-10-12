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
    
    //Move the button
    resumeButton.style.animationName = 'moveTopButton';
    resumeButton.style.animationDuration = '0.3s';
    resumeButton.style.top = '5px';
    resumeButton.style.width = '180px';
    resumeButton.style.height = '50px';
    resumeButton.style.fontSize = '2em';
    resumeButton.style.lineHeight = '45px';
    
    isOverlayOn = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(resumeButton);
    cancelContent(resumeContent);
    
    //Move the button back
    resumeButton.style.animationName = 'moveTopButtonBack';
    resumeButton.style.animationDuration = '0.3s';
    resumeButton.style.top = '30px';
    resumeButton.style.width = '273px';
    resumeButton.style.height = '96px';
    resumeButton.style.fontSize = '3em';
    resumeButton.style.lineHeight = '89px';
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
    
    //Move the button
    aboutButton.style.animationName = 'moveTopButton';
    aboutButton.style.animationDuration = '0.3s';
    aboutButton.style.top = '5px';
    aboutButton.style.width = '180px';
    aboutButton.style.height = '50px';
    aboutButton.style.fontSize = '2em';
    aboutButton.style.lineHeight = '45px';
    
    isOverlayOn = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(aboutButton);
    cancelContent(aboutContent);
    //Move the button back
    aboutButton.style.animationName = 'moveTopButtonBack';
    aboutButton.style.animationDuration = '0.3s';
    aboutButton.style.top = '30px';
    aboutButton.style.width = '273px';
    aboutButton.style.height = '96px';
    aboutButton.style.fontSize = '3em';
    aboutButton.style.lineHeight = '89px';
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
    
    //Move the button
    contactButton.style.animationName = 'moveBottomButton';
    contactButton.style.animationDuration = '0.3s';
    contactButton.style.bottom = '5px';
    contactButton.style.width = '180px';
    contactButton.style.height = '50px';
    contactButton.style.fontSize = '2em';
    contactButton.style.lineHeight = '45px';
    
    isOverlayOn = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(contactButton);
    cancelContent(contactContent);
    contactButton.style.animationName = 'moveBottomButtonBack';
    contactButton.style.animationDuration = '0.3s';
    contactButton.style.bottom = '30px';
    contactButton.style.width = '273px';
    contactButton.style.height = '96px';
    contactButton.style.fontSize = '3em';
    contactButton.style.lineHeight = '89px';
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
    
    //Move the button
    fourthButton.style.animationName = 'moveBottomButton';
    fourthButton.style.animationDuration = '0.3s';
    fourthButton.style.bottom = '5px';
    fourthButton.style.width = '180px';
    fourthButton.style.height = '50px';
    fourthButton.style.fontSize = '2em';
    fourthButton.style.lineHeight = '45px';
       
    isOverlayOn = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(fourthButton);
    cancelContent(fourthContent);
    fourthButton.style.animationName = 'moveBottomButtonBack';
    fourthButton.style.animationDuration = '0.3s';
    fourthButton.style.bottom = '30px';
    fourthButton.style.width = '273px';
    fourthButton.style.height = '96px';
    fourthButton.style.fontSize = '3em';
    fourthButton.style.lineHeight = '89px';
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
