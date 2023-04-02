const video = document.createElement('video');
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(error => console.log(error));

const container = document.getElementById('camera-container');
container.appendChild(video);

function setCameraFriend() {
    const min = 1;
    const max = 12;
    const randNum = Math.floor(Math.random() * (max - min + 1) + min);
    if (randNum) {

    }
}