const homeImages = ["Image/IMG_2512.jpg", "Image/IMG_7100.jpg"]

let thumbnails = document.getElementById('thumbnails');

let homeImagesLength = homeImages.length;
let homeImagesIndex = 0;

const body = document.getElementById("body");

const emphasize = document.getElementById("em");

const timeButton = document.getElementById("current-time");

const section = document.getElementById("section");

const myName = document.getElementById("name");



setInterval(() => {
    const cl = body.getAttribute("class");
    //console.log(cl);
    if(cl === "color1") {
        body.setAttribute("class", "color2");
    } else {
        body.setAttribute("class", "color1");
    }
}, 5000)



setInterval(() => {
    if (homeImagesLength !=0 ) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute('src', homeImages[homeImagesIndex]);
        imgElement.setAttribute('class', "image");
        thumbnails.append(imgElement);
        homeImagesIndex++;
        homeImagesLength-=1;
        console.log(homeImagesLength);
    }
    

}, 1000)

emphasize.addEventListener('mouseover', () => {
    emphasize.setAttribute('class', 'yellow');

})

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    const timeElement = document.createElement("h3");
    timeElement.textContent = h + ":" + m + ":" + s;
    section.append(timeElement);
  }

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

timeButton.addEventListener('click', startTime);


myName.addEventListener('mouseover', () => {
    myName.setAttribute('class', 'colorChange');
})