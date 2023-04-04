let activeStatus = false;

const openCloseSidebar = () => {
    if(activeStatus === false) {
        document.getElementById("sidebar").style.top = "0";
        activeStatus = true;
    } else {
        document.getElementById("sidebar").style.top = "-300px";
        activeStatus = false;
    }
}