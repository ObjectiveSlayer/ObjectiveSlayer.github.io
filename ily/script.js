var storednum = localStorage.getItem("ily");
let count = storednum;
function main(){
    count++;
    document.getElementById("ilysm").innerHTML = 'i love you ' + count + ' <3';
    localStorage.setItem("ily", count);
}
function get(){
    localStorage.getItem("ily");
    document.getElementById("ilysm").innerHTML = 'i love you ' + count + ' <3';
}
var updateCount = setInterval(main, 25);
