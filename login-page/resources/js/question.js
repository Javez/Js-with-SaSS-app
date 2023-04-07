let activeQuestion = false;

const openCloseQuestion = () => {
    if(activeQuestion === false) {
       
        document.getElementById("help-span").style.opacity = "1";
        document.getElementById("help-span").style.transition = "visibility 2s linear 2s, opacity 2s;"
        document.getElementById("help-span").style.visibility = "visible";
        activeQuestion = true;
    } else {
        
        document.getElementById("help-span").style.opacity = "0";
        document.getElementById("help-span").style.transition = "visibility 2s linear 2s, opacity 2s"
        document.getElementById("help-span").style.visibility = "hidden";
        activeQuestion = false;
    }
}