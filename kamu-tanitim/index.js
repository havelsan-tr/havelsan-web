function un_hide() {
    var x = document.getElementById("container");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else{
        x.style.display = "block"
    }    
}

function init() {
    var x = document.getElementById("container");
    x.style.display = "none";
}

