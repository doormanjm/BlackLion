var video = document.getElementById('video');
var cameraShot = document.getElementById('camera-snapshot');
var canvasShot = document.getElementById('.canvas');
var cameraPowerButton = document.getElementById('camera-power-button');
var isCameraOn = false;

// Get access to the camera
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

// Trigger photo take
document.getElementById('snap').addEventListener('click', function() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    canvas.width = '280';
    canvas.height = '200';
    canvas.className = 'canvas';
    canvas.style.margin = '0px 1.5px';

    cameraShot.appendChild(canvas);
    context.drawImage(video, 0, 0, 280, 200);
});

cameraPowerButton.addEventListener('click', camera_power);

function camera_power() {
    if (isCameraOn) {
        // Turn off the camera
        video.pause();
        video.srcObject = null;
        isCameraOn = false;
        cameraPowerButton.textContent = 'Turn On Camera';
    } else {
        // Turn on the camera
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    video.srcObject = stream;
                    video.play();
                    isCameraOn = true;
                    cameraPowerButton.textContent = 'Turn Off Camera';
                })
                .catch(function(error) {
                    console.log('Failed to access the camera: ', error);
                });
        } else {
            console.log('getUserMedia is not supported in this browser.');
        }
    }
}
