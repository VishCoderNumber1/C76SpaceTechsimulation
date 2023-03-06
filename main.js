function fuels(){
    var pounds = Number(document.getElementById("pounds").value) * 24;
    if (pounds.toString() == "NaN"){
        document.getElementById("res").innerHTML = "Sorry, you did not specify a valid numeral";
        document.getElementById("res").style.color = "red";
    }else if (pounds == 0){
        document.getElementById("res").innerHTML = "You do not need any fuel!";
        document.getElementById("res").style.color = "green";
    }
    else{
        document.getElementById("res").innerHTML = "You need "+pounds+" pounds of fuel";
        document.getElementById("res").style.color = "rgb(255, 255, 255)";
    }
}