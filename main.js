Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snapshot" src="'+ data_uri+'"/>';
    });
}

console.log('ml5:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',Model);

function Model(){
console.log("Model is Loaded!");
}
function check() {
    Captured_image= document.getElementById("snapshot");
     classifier.classify(Captured_image, gotresult);
 
 }
 
 function gotresult(error, result){
     if(error){
         console.error(error);
     } else{
         console.log(result)
         document.getElementById("object_name").innerHTML=result[0].label;
         document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(2);
     }
 }