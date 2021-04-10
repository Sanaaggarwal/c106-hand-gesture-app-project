Prediction1="";
prediction2="";
Webcam.set({
    width:350,height:300,image_format:"png",png_quality:100,dest_width:340
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function takesnapshot(){
  Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_url+'">';
  });
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nhfxG4fYv/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function speak(){
    synth=window.speechSynthesis;
    speakdata1="The first prediction is "+Prediction1;
    speakdata2="The second prediction is "+prediction2;
    utter=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utter);
}
 function identifyimage(){
    img=document.getElementById("capturedimage");
    classifier.classify(img,getresult);
 }
 function getresult(error,result){
   if (error){
     console.log(error);
   }
   else{
     console.log(result);
     Prediction1=result[0].label;
     prediction2=result[1].label;
     document.getElementById("result_emotion_name").innerHTML=Prediction1;
     document.getElementById("result_emotion_name2").innerHTML=prediction2;
     speak();
     if(Prediction1=="amazing"){
       document.getElementById("update_emoji").innerHTML="&#128076;";
     }
     if(Prediction1=="best"){
      document.getElementById("update_emoji").innerHTML="&#128077;";
    }
    if(Prediction1=="victory"){
      document.getElementById("update_emoji").innerHTML="&#9996;";
    }
    if(prediction2=="amazing"){
      document.getElementById("update_emoji2").innerHTML="&#128076;";
    }
    if(prediction2=="best"){
     document.getElementById("update_emoji2").innerHTML="&#128077;";
   }
   if(prediction2=="victory"){
     document.getElementById("update_emoji2").innerHTML="&#9996;";
   }
   }
 }