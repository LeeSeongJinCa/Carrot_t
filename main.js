let server = "https://tikaworld0416.gitbook.io";
// let server = "http://api.teamrequin.kro.kr";


function search_user() {
    var data = {
        "project_name": "project_name"
    };
    axios.get(server + '/profile/:profile_name', data).then(() => {
        alert('성공');
    }).catch(() => {
        alert('실패');
    })
}


/*
function search_user() {
    var data = {
        'search_id': 'dltjdwls',
    };
    axios.post(server + '/service/search-user', data).then(() => {
        alert('성공');
    }).catch(() => {
        alert('실패');
    })
}
*/

/*
function test1() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.readyState == 200) {
            document.getElementsByClassName("logo").innerHTML = "hi";
        }
    };
    httpRequest.open("GET", "https://tikaworld0416.gitbook.io/workspace/#get-project/project/:project_name", true);
    httpRequest.setRequestHeader("testHeader", "123");
    httpRequest.send();
}
*/

/*
function sendRequest() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
            document.getElementById("text").innerHTML = httpRequest.responseText;
            document.getElementById("header").innerHTML = httpRequest.getAllResponseHeaders();
            document.getElementById("user").innerHTML = "testheader: " + httpRequest.getResponseHeader("testheader");
        }
    };
    httpRequest.open("GET", "https://tikaworld0416.gitbook.io/workspace/#get-project/project/:project_name", true);
    httpRequest.send();
}
*/


/*
$(function() {
    $(".author-name").on("click", function () {
        $.ajax("/examples/media/request_ajax.php")
            .done(function () {
                alert("요청 성공");
            })
            .fail(function () {
                alert("요청 실패");
            })
            .always(function () {
                alert("요청 완료");
            });
    });
});
*/

/*
function grid_item_sort() {
    var grid_item = document.getElementsByClassName("grid-item");
    var list_img = document.getElementsByClassName('author-list-img');
    for (var i = -1, j = 0; j < list_img.length; j++) {
        if (j % 4 == 0) { i++; }
        var right = 12;
        // console.log(grid_item[i]);
        // console.log(list_img[j]);

        document.getElementsByClassName("grid-item")[i]
            .getElementsByClassName('author-list-img')[j]
            .style.position = "absolute";
        document.getElementsByClassName("grid-item")[i]
            .getElementsByClassName('author-list-img')[j]
            .style.right = "10px";

        right += right;
    }
}
*/
function check_user() {
    var p = document.getElementsByClassName('item-info');

}



