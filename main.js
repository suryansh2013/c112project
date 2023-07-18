camera = document.getElementById("camera");
Webcam.attach('#camera');
Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 Version: ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pmJSFM1uU/model.json',modelLoaded);
function  modelLoaded() {
    console.log("Model Loaded !!!");
}