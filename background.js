let cpsValue = document.getElementById("cpsButton");
let recentCPS = document.getElementById("recent");
let highscoreCPS = document.getElementById("highscore");
highscore = localStorage.getItem("highScore");
if (highscore != null || highscore != "null") {
highscoreCPS.innerHTML = "Highscore: " + highscore;
} else {
    highscore = 0;
}
let clicks = 0;
let recentClicks = 0;


function ClickMouse() {
    clicks++;
    cpsValue.innerHTML = clicks + " CPS";

    if (clicks <= 0) {
        clicks = 0;
    }
    recentClicks = clicks;
}

document.getElementById("cpsButton").addEventListener("click", ClickMouse);

setInterval(function() {
    
    cpsValue = document.getElementById("cpsButton");
    cpsValue.innerHTML = clicks + " CPS";
    recentCPS.innerHTML = "Your CPS: " + recentClicks;
    if (clicks > parseInt(highscore) || highscore == null) {
      highscore = clicks;
      localStorage.setItem("highScore", highscore);
      highscoreCPS.innerHTML = "Highscore: " + highscore;
    }
    clicks = 0;

}, 1e3);
