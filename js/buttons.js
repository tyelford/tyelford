//Javascript to handle the button presses and change the style for the page

//Tickers
var isOverlayOn = 0;
var buttonClicked = 0;

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
    
    //Get the screen width
    var screenWidth = getScreenWidth();
    
    //Move the button
    if(screenWidth === 'exlg'){
      resumeButton.style.animationName = 'moveExLgTopButton';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '5px';
      resumeButton.style.width = '180px';
      resumeButton.style.height = '50px';
      resumeButton.style.fontSize = '2em';
      resumeButton.style.lineHeight = '45px';
    }
    if(screenWidth === 'lg'){
      resumeButton.style.animationName = 'moveLgTopButton';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '5px';
      resumeButton.style.width = '120px';
      resumeButton.style.height = '50px';
      resumeButton.style.fontSize = '1.6em';
      resumeButton.style.lineHeight = '47px';
    }
    if(screenWidth === 'md'){
      resumeButton.style.animationName = 'moveMdTopButton';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '5px';
      resumeButton.style.right = '5px';
      resumeButton.style.width = '60px';
      resumeButton.style.height = '23px';
      resumeButton.style.fontSize = '0.8em';
      resumeButton.style.lineHeight = '21px';
    }
    if(screenWidth === 'sm'){
      resumeButton.style.animationName = 'moveSmButton';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '-260px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
    
    isOverlayOn = 1;
    buttonClicked = 1;
  }else{
    //Turn the Overlay off
    cancelOverlay(resumeButton);
    cancelContent(resumeContent);
    
    //Get the screen width
    var screenWidth = getScreenWidth();
    
    if(screenWidth === 'exlg'){
      //Move the button back
      resumeButton.style.animationName = 'moveExLgTopButtonBack';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '30px';
      resumeButton.style.width = '273px';
      resumeButton.style.height = '96px';
      resumeButton.style.fontSize = '3em';
      resumeButton.style.lineHeight = '89px';
    }
    if(screenWidth === 'lg'){
      resumeButton.style.animationName = 'moveLgTopButtonBack';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '30px';
      resumeButton.style.width = '200px';
      resumeButton.style.height = '70px';
      resumeButton.style.fontSize = '2.3em';
      resumeButton.style.lineHeight = '67px';
    }
    if(screenWidth === 'md'){
      resumeButton.style.animationName = 'moveMdTopButtonBack';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '30px';
      resumeButton.style.right = '30px';
      resumeButton.style.width = '160px';
      resumeButton.style.height = '56px';
      resumeButton.style.fontSize = '1.8em';
      resumeButton.style.lineHeight = '53px';
    }
    if(screenWidth === 'sm'){
      resumeButton.style.animationName = 'moveSmButtonBack';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '20px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
    isOverlayOn = 0;
    buttonClicked = 0;
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
    
    //Get the screen width
    var screenWidth = getScreenWidth();
    
    //Move the buttons
    if(screenWidth === 'exlg'){
      aboutButton.style.animationName = 'moveExLgTopButton';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '5px';
      aboutButton.style.width = '180px';
      aboutButton.style.height = '50px';
      aboutButton.style.fontSize = '2em';
      aboutButton.style.lineHeight = '45px';
    }
    if(screenWidth === 'lg'){
      aboutButton.style.animationName = 'moveLgTopButton';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '5px';
      aboutButton.style.width = '120px';
      aboutButton.style.height = '50px';
      aboutButton.style.fontSize = '1.6em';
      aboutButton.style.lineHeight = '47px';
    }
    if(screenWidth === 'md'){
      aboutButton.style.animationName = 'moveMdTopButton';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '5px';
      aboutButton.style.left = '5px';
      aboutButton.style.width = '60px';
      aboutButton.style.height = '23px';
      aboutButton.style.fontSize = '0.8em';
      aboutButton.style.lineHeight = '21px';
    }
    if(screenWidth === 'sm'){
      aboutButton.style.animationName = 'moveSmButton';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '-260px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
    
    isOverlayOn = 1;
    buttonClicked = 2;
  }else{
    //Turn the Overlay off
    cancelOverlay(aboutButton);
    cancelContent(aboutContent);
    
    //Get the screen width
    var screenWidth = getScreenWidth();
    
    //Move the button back
    if(screenWidth === 'exlg'){
      aboutButton.style.animationName = 'moveExLgTopButtonBack';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '30px';
      aboutButton.style.width = '273px';
      aboutButton.style.height = '96px';
      aboutButton.style.fontSize = '3em';
      aboutButton.style.lineHeight = '89px';
    }
    if(screenWidth === 'lg'){
      aboutButton.style.animationName = 'moveLgTopButtonBack';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '30px';
      aboutButton.style.width = '200px';
      aboutButton.style.height = '70px';
      aboutButton.style.fontSize = '2.3em';
      aboutButton.style.lineHeight = '67px';
    }
    if(screenWidth === 'md'){
      aboutButton.style.animationName = 'moveMdTopButtonBack';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '30px';
      aboutButton.style.left = '30px';
      aboutButton.style.width = '160px';
      aboutButton.style.height = '56px';
      aboutButton.style.fontSize = '1.8em';
      aboutButton.style.lineHeight = '53px';
    }
    if(screenWidth === 'sm'){
      aboutButton.style.animationName = 'moveSmButtonBack';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '20px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
    
    isOverlayOn = 0;
    buttonClicked = 0;
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
    
    //Get the screen width
    var screenWidth = getScreenWidth();
    
    //Move the buttons
    if(screenWidth === 'exlg'){
      contactButton.style.animationName = 'moveExLgBottomButton';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '5px';
      contactButton.style.width = '180px';
      contactButton.style.height = '50px';
      contactButton.style.fontSize = '2em';
      contactButton.style.lineHeight = '45px';
    }
    if(screenWidth === 'lg'){
      contactButton.style.animationName = 'moveLgBottomButton';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '5px';
      contactButton.style.width = '120px';
      contactButton.style.height = '50px';
      contactButton.style.fontSize = '1.6em';
      contactButton.style.lineHeight = '47px';
    }
    if(screenWidth === 'md'){
      contactButton.style.animationName = 'moveMdBottomButton';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '5px';
      contactButton.style.left = '5px';
      contactButton.style.width = '60px';
      contactButton.style.height = '23px';
      contactButton.style.fontSize = '0.8em';
      contactButton.style.lineHeight = '21px';
    }
    if(screenWidth === 'sm'){
      contactButton.style.animationName = 'moveSmButton';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.top = '-260px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
    
    isOverlayOn = 1;
    buttonClicked = 3;
  }else{
    //Turn the Overlay off
    cancelOverlay(contactButton);
    cancelContent(contactContent);
    
    //Get the screen width
    var screenWidth = getScreenWidth();
    
    //Move the button back
    if(screenWidth === 'exlg'){
      contactButton.style.animationName = 'moveExLgBottomButtonBack';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '30px';
      contactButton.style.width = '273px';
      contactButton.style.height = '96px';
      contactButton.style.fontSize = '3em';
      contactButton.style.lineHeight = '89px';
    }
    if(screenWidth === 'lg'){
      contactButton.style.animationName = 'moveLgBottomButtonBack';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '30px';
      contactButton.style.width = '200px';
      contactButton.style.height = '70px';
      contactButton.style.fontSize = '2.3em';
      contactButton.style.lineHeight = '67px';
    }
    if(screenWidth === 'md'){
      contactButton.style.animationName = 'moveMdBottomButtonBack';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '30px';
      contactButton.style.left = '30px';
      contactButton.style.width = '160px';
      contactButton.style.height = '56px';
      contactButton.style.fontSize = '1.8em';
      contactButton.style.lineHeight = '53px';
    }
    if(screenWidth === 'sm'){
      contactButton.style.animationName = 'moveSmButtonBack';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.top = '20px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
    
    isOverlayOn = 0;
    buttonClicked = 0;
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
    
    //Get the screen width
    var screenWidth = getScreenWidth();
    
    //Move the button
    if(screenWidth === 'exlg'){
      fourthButton.style.animationName = 'moveExLgBottomButton';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '5px';
      fourthButton.style.width = '180px';
      fourthButton.style.height = '50px';
      fourthButton.style.fontSize = '2em';
      fourthButton.style.lineHeight = '45px';
    }
    if(screenWidth === 'lg'){
      fourthButton.style.animationName = 'moveLgBottomButton';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '5px';
      fourthButton.style.width = '120px';
      fourthButton.style.height = '50px';
      fourthButton.style.fontSize = '1.6em';
      fourthButton.style.lineHeight = '47px';
    }
    if(screenWidth === 'md'){
      fourthButton.style.animationName = 'moveMdBottomButton';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '5px';
      fourthButton.style.right = '5px';
      fourthButton.style.width = '60px';
      fourthButton.style.height = '23px';
      fourthButton.style.fontSize = '0.8em';
      fourthButton.style.lineHeight = '21px';
    }
    if(screenWidth === 'sm'){
      fourthButton.style.animationName = 'moveSmButton';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.top = '-260px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
       
    isOverlayOn = 1;
    buttonClicked = 4;
  }else{
    //Turn the Overlay off
    cancelOverlay(fourthButton);
    cancelContent(fourthContent);
    
    //Get the screen width
    var screenWidth = getScreenWidth();
    
    //Move the button back
    if(screenWidth === 'exlg'){
      fourthButton.style.animationName = 'moveExLgBottomButtonBack';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '30px';
      fourthButton.style.width = '273px';
      fourthButton.style.height = '96px';
      fourthButton.style.fontSize = '3em';
      fourthButton.style.lineHeight = '89px';
    }
    if(screenWidth === 'lg'){
      fourthButton.style.animationName = 'moveLgBottomButtonBack';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '30px';
      fourthButton.style.width = '200px';
      fourthButton.style.height = '70px';
      fourthButton.style.fontSize = '2.3em';
      fourthButton.style.lineHeight = '67px';
    }
    if(screenWidth === 'md'){
      fourthButton.style.animationName = 'moveMdBottomButtonBack';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '30px';
      fourthButton.style.right = '30px';
      fourthButton.style.width = '160px';
      fourthButton.style.height = '56px';
      fourthButton.style.fontSize = '1.8em';
      fourthButton.style.lineHeight = '53px';
    }
    if(screenWidth === 'sm'){
      fourthButton.style.animationName = 'moveSmButtonBack';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.top = '20px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
    
    
    isOverlayOn = 0;
    buttonClicked =0;
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
  
  //Restore the button animation size
  if(buttonClicked === 1){
  	//Resume Button
    //Get the screen width
    var screenWidth = getScreenWidth();
    if(screenWidth === 'exlg'){
      //Move the button back
      resumeButton.style.animationName = 'moveExLgTopButtonBack';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '30px';
      resumeButton.style.width = '273px';
      resumeButton.style.height = '96px';
      resumeButton.style.fontSize = '3em';
      resumeButton.style.lineHeight = '89px';
    }
    if(screenWidth === 'lg'){
      resumeButton.style.animationName = 'moveLgTopButtonBack';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '30px';
      resumeButton.style.width = '200px';
      resumeButton.style.height = '70px';
      resumeButton.style.fontSize = '2.3em';
      resumeButton.style.lineHeight = '67px';
    }
    if(screenWidth === 'md'){
      resumeButton.style.animationName = 'moveMdTopButtonBack';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '30px';
      resumeButton.style.right = '30px';
      resumeButton.style.width = '160px';
      resumeButton.style.height = '56px';
      resumeButton.style.fontSize = '1.8em';
      resumeButton.style.lineHeight = '53px';
    }
    if(screenWidth === 'sm'){
      resumeButton.style.animationName = 'moveSmButtonBack';
      resumeButton.style.animationDuration = '0.3s';
      resumeButton.style.top = '20px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
  }
  if(buttonClicked === 2){
  	//About Button
  	//Get the screen width
    var screenWidth = getScreenWidth();
    //Move the button back
    if(screenWidth === 'exlg'){
      aboutButton.style.animationName = 'moveExLgTopButtonBack';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '30px';
      aboutButton.style.width = '273px';
      aboutButton.style.height = '96px';
      aboutButton.style.fontSize = '3em';
      aboutButton.style.lineHeight = '89px';
    }
    if(screenWidth === 'lg'){
      aboutButton.style.animationName = 'moveLgTopButtonBack';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '30px';
      aboutButton.style.width = '200px';
      aboutButton.style.height = '70px';
      aboutButton.style.fontSize = '2.3em';
      aboutButton.style.lineHeight = '67px';
    }
    if(screenWidth === 'md'){
      aboutButton.style.animationName = 'moveMdTopButtonBack';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '30px';
      aboutButton.style.left = '30px';
      aboutButton.style.width = '160px';
      aboutButton.style.height = '56px';
      aboutButton.style.fontSize = '1.8em';
      aboutButton.style.lineHeight = '53px';
    }
    if(screenWidth === 'sm'){
      aboutButton.style.animationName = 'moveSmButtonBack';
      aboutButton.style.animationDuration = '0.3s';
      aboutButton.style.top = '20px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
  }
  if(buttonClicked === 3){
  	//Contact Button
  	//Get the screen width
    var screenWidth = getScreenWidth();  
    //Move the button back
    if(screenWidth === 'exlg'){
      contactButton.style.animationName = 'moveExLgBottomButtonBack';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '30px';
      contactButton.style.width = '273px';
      contactButton.style.height = '96px';
      contactButton.style.fontSize = '3em';
      contactButton.style.lineHeight = '89px';
    }
    if(screenWidth === 'lg'){
      contactButton.style.animationName = 'moveLgBottomButtonBack';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '30px';
      contactButton.style.width = '200px';
      contactButton.style.height = '70px';
      contactButton.style.fontSize = '2.3em';
      contactButton.style.lineHeight = '67px';
    }
    if(screenWidth === 'md'){
      contactButton.style.animationName = 'moveMdBottomButtonBack';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.bottom = '30px';
      contactButton.style.left = '30px';
      contactButton.style.width = '160px';
      contactButton.style.height = '56px';
      contactButton.style.fontSize = '1.8em';
      contactButton.style.lineHeight = '53px';
    }
    if(screenWidth === 'sm'){
      contactButton.style.animationName = 'moveSmButtonBack';
      contactButton.style.animationDuration = '0.3s';
      contactButton.style.top = '20px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
  }
  if(buttonClicked === 4){
  	//Fourth Button
  	//Get the screen width
    var screenWidth = getScreenWidth();
    //Move the button back
    if(screenWidth === 'exlg'){
      fourthButton.style.animationName = 'moveExLgBottomButtonBack';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '30px';
      fourthButton.style.width = '273px';
      fourthButton.style.height = '96px';
      fourthButton.style.fontSize = '3em';
      fourthButton.style.lineHeight = '89px';
    }
    if(screenWidth === 'lg'){
      fourthButton.style.animationName = 'moveLgBottomButtonBack';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '30px';
      fourthButton.style.width = '200px';
      fourthButton.style.height = '70px';
      fourthButton.style.fontSize = '2.3em';
      fourthButton.style.lineHeight = '67px';
    }
    if(screenWidth === 'md'){
      fourthButton.style.animationName = 'moveMdBottomButtonBack';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.bottom = '30px';
      fourthButton.style.right = '30px';
      fourthButton.style.width = '160px';
      fourthButton.style.height = '56px';
      fourthButton.style.fontSize = '1.8em';
      fourthButton.style.lineHeight = '53px';
    }
    if(screenWidth === 'sm'){
      fourthButton.style.animationName = 'moveSmButtonBack';
      fourthButton.style.animationDuration = '0.3s';
      fourthButton.style.top = '20px';
    }
    if(screenWidth === 'exsm'){
      //Probs nothing to do here...maybe
    }
  }
  buttonClicked = 0;
  
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

//Get the screen width
function getScreenWidth(){
	var windowWidth = document.documentElement.clientWidth;
	var widthValue;

  if (windowWidth >= 1200) {
    widthValue = 'exlg';
  }
	if (windowWidth >= 992 && windowWidth <= 1199) {
		widthValue = 'lg';
	}
	if (windowWidth >= 768 && windowWidth <= 991) {
		widthValue = 'md';
	}
	if (windowWidth >= 480 && windowWidth <= 767) {
		widthValue = 'sm';
	}
	if (windowWidth <= 479) {
		widthValue = 'exsm';
	}
return widthValue;

}
