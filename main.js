function test1() {
    var userdata = {
        "project_name": "project_name"
    };
    axios.get('https://tikaworld0416.gitbook.io/workspace/#get-project/project/:project_name', userdata)
    .then(() => {
        alert('성공');

    })
    .catch(() => {
        alert('실패');
    })
}

// function test1() {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//         if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.readyState == 200) {
//             document.getElementsByClassName("logo").innerHTML = "hi";
//         }
//     };
//     httpRequest.open("GET", "https://tikaworld0416.gitbook.io/workspace/#get-project/project/:project_name", true);
//     httpRequest.setRequestHeader("testHeader", "123");
//     httpRequest.send();
// }

// function sendRequest() {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function () {
//         if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
//             document.getElementById("text").innerHTML = httpRequest.responseText;
//             document.getElementById("header").innerHTML = httpRequest.getAllResponseHeaders();
//             document.getElementById("user").innerHTML = "testheader: " + httpRequest.getResponseHeader("testheader");
//         }
//     };
//     httpRequest.open("GET", "https://tikaworld0416.gitbook.io/workspace/#get-project/project/:project_name", true);
//     httpRequest.send();
// }


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