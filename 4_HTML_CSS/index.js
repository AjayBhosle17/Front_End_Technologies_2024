
var i=10;
document.write(i);

var i="ajay";
document.write(i);

window.onload = function() {
    var elements = document.getElementsByClassName('d1');
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.color = "red"; 
        elements[j].style.backgroundColor="black";
    }
};