var storednum = localStorage.getItem("ihysm");
let count = storednum;
function main(){
    count++;
    document.getElementById("fuck-you").innerHTML = 'i hate you ' + count + ' 🖕';
    localStorage.setItem("ihysm", count);
}
function get(){
    localStorage.getItem("ihysm");
    document.getElementById("fuck-you").innerHTML = 'i hate you ' + count + ' 🖕';
}
var updateCount = setInterval(main, 25);
