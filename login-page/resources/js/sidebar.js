let activeStatus = false;

const openCloseNavIcon = () => {
    if(activeQuestion === false) {
       
        document.getElementById("nav-list").style.animation = "nav-icon-open 1s forwards" 
        activeQuestion = true;
    } else {
        
        document.getElementById("nav-list").style.animation = "nav-icon-close 1s forwards"
        activeQuestion = false;
    }
}