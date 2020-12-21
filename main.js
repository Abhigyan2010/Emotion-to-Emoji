Webcam.set({
    height:360,
    width:360,
    img_format:'png',
    png_qualtiy:100
});
camera=document.getElementById("live_view");
function take_picture(){
    Webcam.snap=function(data_uri){
        document.getElementById("image_taken").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    }
}
console.log("ml5 version is"+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VQKcs0XwN/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="The second prediction is"+prediction_2;
    var utterThis= new speakSythesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}