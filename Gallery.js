window.onload = () => {
    var gridItem = document.getElementsByClassName('grid-item');
    for(var i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener("click", () => {
            location.href = "Gallery_inside.html";
        });
    }
}
