Webcam.set({
    width:350,
    hight:300,
    image_ormat : 'png',
    png_qualti:90
});

camera + document.getElementById("camera");

Webcam.attech('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id "captured_image" src"'+data_uri+'"/>';
    })
}
function modelLoaded()
{}Web
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FyIX9g9AB/',model.json);