const btn = document.querySelector("button");
const main = document.querySelector(".container");
const url = "WeatherData/weatherLos Angeles"

function output(data) {
    console.log(data);
    console.log(this.responseText);
    main.innerHTML = this.responseText;
}

function requestData() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", output)
    xhr.open("GET", url)
    xhr.send();
    console.log(xhr)
}

btn.onclick = requestData;

