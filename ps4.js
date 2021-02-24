// I used the moment.js library to change the format of the time display. I used it to format my current time display.
// I was able to download the moment.js file into my local machine; then, I could implement the moment.format() function into my startTime() function. 
// It helps me eliminate the extra code that I have.

// I also implemented the Bootstrap CSS framework into the HTML to make my page looks more excellent.
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
    }
    

}, 1000)

emphasize.addEventListener('mouseover', () => {
    emphasize.setAttribute('class', 'yellow');

})

function startTime() {
    const time = (new Date()).getTime();
    const timeMoment = moment(time).format('MMMM Do YYYY, h:mm:ss a');
    const timeElement = document.createElement("h3");
    timeElement.textContent = timeMoment
    section.append(timeElement);
  }

timeButton.addEventListener('click', startTime);


myName.addEventListener('mouseover', () => {
    myName.setAttribute('class', 'colorChange');
})

