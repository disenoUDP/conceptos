
// tomar division
const conceptosDiv = document.getElementById('conceptos');

document.addEventListener("DOMContentLoaded", function () {
    fetch('./conceptos.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
                    //You can play here doing a loop and using de iterator "i" for make it at one.
            //Example: document.querySelector(".faq--0" + i + "h1").innerHTML = json[0].title;
            //Example: document.querySelector(".faq--0" + i + " p").innerHTML = json[0].answer;
            document.querySelector(".faq--01 h1").innerHTML = json[0].title;
            document.querySelector(".faq--01 p").innerHTML = json[0].answer;

    })
});