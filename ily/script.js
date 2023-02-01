var storednum = localStorage.getItem("ihy");
let count = storednum;
function main(){
    count++;
    document.getElementById("fuck-you").innerHTML = 'i hate you ' + count + ' 🖕';
    localStorage.setItem("ihy", count);
}
function get(){
    localStorage.getItem("ihy");
    document.getElementById("fuck-you").innerHTML = 'i hate you ' + count + ' 🖕';
}
var updateCount = setInterval(main, 25);
