let activeQuestion = false;

const openCloseQuestion = () => {
    if(activeQuestion === false) {
        document.getElementById("help-span").style.visibility = "visible";
        activeQuestion = true;
    } else {
        document.getElementById("help-span").style.visibility = "hidden";
        activeQuestion = false;
    }
}