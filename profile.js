window.onload = () => {
    var p = document.getElementsByClassName('item-info');
    var img = document.getElementsByClassName('profile-img');
    // var img = document.querySelector('.profile-img');
    console.log(p);
    console.log(img);
    for (var i = 0; i < p.length; i++) {
        if (p[i].innerHTML != "") {
            img[i].style.backgroundColor = "#737373";
        }
    }
}

function a() {
    var gridItem = document.getElementsByClassName('grid-item');
    var texts = document.getElementsByClassName('item-input');
    var img = document.getElementsByClassName('profile-img');
    var p = document.getElementsByClassName('item-info');
    var text = {};
    for(var i = 0; i < texts.length; i++) {
        if (texts[i].value != "") {
            // console.log(texts[i].value);
            text = texts[i].value;
            p[i].innerHTML = text;
            texts[i].remove();
            img[i].style.backgroundColor = "#737373";
        }
        else {
            img[i].style.backgroundColor = "#C4C4C4";
        }
    }
}








