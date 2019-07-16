var serverUrl = "http://api.teamrequin.kro.kr";
window.onload = () => {
    document.getElementById('item-button').addEventListener("click", (count) => {
        const gridItem = document.getElementsByClassName('grid-item');
        const texts = document.getElementsByClassName('item-input');
        const img = document.getElementsByClassName('profile-img');
        const p = document.getElementsByClassName('item-info');
        const button = document.getElementById('item-button');
        var text = {};
        var data = {
            "search_id": texts[0].value
        };
        axios.post(serverUrl + "/service/search-user", data).then(() => {
            for (var i = 0; i < gridItem.length; i++) {
                if (texts[i].value != "") {
                    text = texts[i].value;
                    p[i].innerHTML = text;
                    img[i].style.backgroundColor = "#737373";
                }
                else {
                    p[i].innerHTML = "";
                    img[i].style.backgroundColor = "#C4C4C4";
                }
            }
            for (var i = 0; i < p.length; i++) {
                if (p[i].innerHTML !== "") {
                    count = 1;
                }
            }
            // axios.post('')
            if (count == 1) {
                button.innerHTML = "수정";
                count = 0;
            }
            else { button.innerHTML = "제출"; }
            alert('성공');
        }).catch(() => {
            alert('실패');
        });
    });

    document.getElementById("plus-button").addEventListener("click", () => {
        var gridContainer = document.getElementsByClassName('grid-container');
        var gridItem = document.createElement('div');
        var profileImg = document.createElement('div');
        var itemInfo = document.createElement('p');
        var itemInput = document.createElement('input');
        gridItem.setAttribute('class', 'grid-item');
        profileImg.setAttribute('class', 'profile-img');
        itemInfo.setAttribute('class', 'item-info');
        itemInput.setAttribute('type', 'text');
        itemInput.setAttribute('class', 'item-input');
        gridItem.appendChild(profileImg);
        gridItem.appendChild(itemInfo);
        gridItem.appendChild(itemInput);
        gridContainer[0].appendChild(gridItem);
    });
};





