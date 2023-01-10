function hello() {
    var displayText=document.getElementById("text");
    if(displayText.style.display=== "none"){
        displayText.style.display = "block";
    }else{
        displayText.style.display="none";
    }
}