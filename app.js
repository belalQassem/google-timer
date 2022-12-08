
const deadline = new Date("Jan 5, 2024 15:37:25").getTime();
const x = setInterval(function() {
const now = new Date().getTime();
const t = deadline - now;
const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((t % (1000 * 60)) / 1000);
const time = document.getElementById("time").innerHTML = 
 minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
const btn =document.querySelector(".start");
const reset =document.querySelector(".reset");

