
function openNav () {

    let x = document.getElementById ("navigation");

    if (x.className === "navigation") {
        x.className += " menujs";
        document.getElementById("icon").innerHTML = "&Cross;";
    } else { 
        x.className = "navigation";
        document.getElementById("icon").innerHTML = "&#9776;";
    }
}


