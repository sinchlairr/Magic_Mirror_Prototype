const video = document.getElementById('video');
let model;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function startVid(){
    navigator.getUserMedia({video: {}}, stream => video.srcObject = stream, 
        err => console.error(err))
}

const detectFaces = async() =>{
    const prediction = await model.estimateFaces(video, false);

    // console.log(prediction);
    ctx.drawImage(video, 0 ,0 , 600, 400);
    base_image = new Image();
    base_image.src = 'hats.png';
    
    prediction.forEach((pred) => {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "blue";
        ctx.drawImage(base_image,pred.topLeft[0]-35,pred.topLeft[1]-180, 250, 150);
        // ctx.rect(
        //     pred.topLeft[0],
        //     pred.topLeft[1],
        //     5,5
        //     // pred.bottomRight[0] - pred.topLeft[0],
        //     // pred.bottomRight[1] - pred.topLeft[1],

        // );
        // ctx.stroke();

        // ctx.fillStyle = "red";
        // pred.landmarks.forEach((landmark)=>{
        //     ctx.fillRect(landmark[0],landmark[1],5,5);
        // })
    });
};

startVid();

video.addEventListener("loadeddata", async () => {
    model = await blazeface.load();
    setInterval(detectFaces, 100);
})




// const video = document.getElementById('video')

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//   faceapi.nets.faceExpressionNet.loadFromUri('/models')
// ]).then(startVideo)

// function startVideo() {
//   navigator.getUserMedia(
//     { video: {} },
//     stream => video.srcObject = stream,
//     err => console.error(err)
//   )
// }

// video.addEventListener('play', () => {
//   const canvas = faceapi.createCanvasFromMedia(video)
//   document.body.append(canvas)
//   const displaySize = { width: video.width, height: video.height }
//   faceapi.matchDimensions(canvas, displaySize)
//   setInterval(async () => {
//     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
//     const resizedDetections = faceapi.resizeResults(detections, displaySize)
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
//     faceapi.draw.drawDetections(canvas, resizedDetections)
//     faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
//     faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
//   }, 100)
// })
