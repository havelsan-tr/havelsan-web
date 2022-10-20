function un_hide() {
    console.log("Hello");
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
    x.style.display = "block";
    x.style.display = "no";
    x.style.display = "block";
}

