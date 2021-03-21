Webcam.set({
    width:460,
    height:470,
    image_format: 'png',
    png_quantity:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


/*take function*/
function take_snapshot()
{
Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
});
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/jXkNEpEZa/model.json', modelLoaded);

/*model*/
function modelLoaded(){
    console.log('Model Loaded!');
}
/*check*/
function check()
{
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}
/*got Result*/
function gotResult(error, results){
    if(error) {
        console.error(error);
    } else {
     console.log(results);
     document.getElementById("result_object_name").innerHTML = results[0].label;
     document.getElementById("result_accuracy_name").innerHTML = results[0].confidence.toFixed(3);
    }
}
