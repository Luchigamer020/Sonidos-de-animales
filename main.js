function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7LoZZolsA/model.json',modelReady); 
}

function modelReady() {
    classifier.classify(gotResults);
}

img=document.getElementById("listen");

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        randomNumberR=Math.floor(Math.random()*255)+1;
        randomNumberG=Math.floor(Math.random()*255)+1;
        randomNumberB=Math.floor(Math.random()*255)+1;
        document.getElementById("resultLabel").innerHTML="Escucho: "+results[0].label;
        document.getElementById("resultConfidence").innerHTML="Precisión: "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("resultLabel").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
        document.getElementById("resultConfidence").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
        img1=document.getElementById('listen');
        if (results[0].label == "Ladridos") {
            img.src='dog.jpg';
        }
        else if (results[0].label == "Maullidos") {
            img.src='cat.png';
        }
        else if (results[0].label == "Mugidos") {
            img.src='cow.png';
        }
        else if (results[0].label == "Balidos") {
            img.src='sheep.png';
        }
        else {
            img.src='listen.gif';
        }
    }
}