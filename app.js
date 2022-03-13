var countDownDate = new Date("march 20, 2022 04:09:30").getTime();
var myFunc = setInterval(function(){
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;

    var days = Math.floor(timeLeft/(1000*60*60*24));
    var hours = Math.floor((timeLeft % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((timeLeft % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((timeLeft % (1000*60)) / 1000);


document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s"


if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
},1000)