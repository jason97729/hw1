const workImages = ["Image/Lome_.png", "Image/Mockup.png", "Image/Pear OS.png"]

let pictures = document.getElementById('pictures');
const pictureButton = document.getElementById("picture-button");
let workImagesLength = workImages.length;
let workImagesIndex = 0;

const body = document.getElementById("body");


setInterval(() => {
    const cl = body.getAttribute("class");
    //console.log(cl);
    if(cl === "color1") {
        body.setAttribute("class", "color2");
    } else {
        body.setAttribute("class", "color1");
    }
}, 5000)

pictureButton.addEventListener('click', () => {
    if (workImagesLength !=0 ) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute('src', workImages[workImagesIndex]);
        imgElement.setAttribute('class', "work_image");
        pictures.append(imgElement);
        workImagesIndex++;
        workImagesLength-=1;
    } else {
        pictureButton.setAttribute('disabled', 'true');
    }
    

})



