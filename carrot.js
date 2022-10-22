const formatSwitchBtn = document.querySelector(".format-switch-btn");
const formatSwitchBtn2 = document.querySelector(".format-switch-btn2");
// const formatSwitchBtn3 = document.querySelector(".format-switch-btn3");
formatSwitchBtn2.classList.toggle("active");

formatSwitchBtn.addEventListener("click", () =>{
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format", "24")
        
        let periodHide = document.querySelector(".period").style.opacity = '0';

        let MoveSeconds = document.querySelector(".seconds").style.transform = "translateY(-16px)";
        
    }
    else{
        formatSwitchBtn.setAttribute("data-format", "12")
        let periodShow = document.querySelector(".period").style.opacity = '1';
        let UnMoveSeconds = document.querySelector(".seconds").style.transform = 'translateY(16px)';
    }
});

formatSwitchBtn2.addEventListener("click", () =>{
    if(formatSwitchBtn2.classList.contains('active')){
        formatSwitchBtn2.classList.remove("active");
        document.querySelector('.colorpicker-div').style.opacity = '0';
        document.querySelector('.colorpicker-div').style.display = 'none';
        document.body.style.background = '#595983'


    }
    else{
        formatSwitchBtn2.classList.toggle("active");
        document.querySelector('.colorpicker-div').style.opacity = '1';
        document.querySelector('.colorpicker-div').style.display = 'block';
    }
});

/*
formatSwitchBtn3.addEventListener("click", () =>{
    if(formatSwitchBtn3.classList.contains('active')){
        formatSwitchBtn3.classList.remove("active");
        document.body.style.background = '#595983'
    }
    else{
        formatSwitchBtn3.classList.toggle("active");
    }
});
*/

function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = 'AM'

    if(hours >= 12){
        period = 'PM'
    }

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        hours = hours > 12 ? hours % 12 : hours;
    }

    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}
var updateClock = setInterval(clock, 5);


var today = new Date();
const dayNumber = today.getDate();

const dayName = today.toLocaleString("default", {weekday: "long"});
const monthName = today.toLocaleString("default", {month: "short"});

document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".month-name").innerHTML = monthName;


const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotMenuBtn.addEventListener("click", () => {
    dotMenu.classList.add("active");
});

document.addEventListener("click", (e) => {
    if(e.target.id !== "active-menu"){
        dotMenu.classList.remove("active");
    }
});

const colorPicker = document.getElementById('colorpicker');
colorPicker.addEventListener("input",() =>{
    document.body.style.backgroundColor = colorPicker.value;
})

/*
function generateHexColors(){
    let hexCode = '#' + Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = hexCode;
    var RGBfade = setInterval(generateHexColors, 1500);
}
function stopFade(){
    clearInterval(RGBfade);
}
*/