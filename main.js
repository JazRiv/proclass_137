estatus = false;
objeto = "";
list = [];
var SpeechRecognition = window.webkitSpeechRecognition;
lectura = "";
  
var reconocer = new SpeechRecognition();

function setup(){
    canvas = createCanvas(300, 300);
    background("red")
    camara = createCapture(VIDEO);
    modelo = ml5.objectDetector("cocossd", listo);
    camara.hide();
}


function draw(){
    image(camara, 0, 0, 300, 300);
    if(estatus == true){
        modelo.detect(camara, got);
        for(var counter = 0; counter < list.length; counter++){
            noFill();
            stroke("red");
            strokeWeight(5);
            var ob = list[counter];
            rect(ob.x, ob.y, ob.width, ob.height);
            fill("black");
            noStroke();
            texto = ob.label + " " + Math.round(ob.confidence * 100) + "%";
            text(texto, ob.x, ob.y);
            textSize(15);
            lectura = objeto + " encontrado";
            if (ob.label == objeto){
                document.getElementById("estado").innerHTML = lectura;
                camara.stop();
                hablar();
                if (hablar.isplaying()){
                    hablar.stop();
                }
                
            }
        }
    }
}


function listo(){
    console.log("Yaaaa");
    estatus = true;
}


function buscar(){
    objeto = document.getElementById("texto").value;
}

function got(error, results){
    if(!error){
        console.log(results);
        list = results;
    }
}

function hablar(){
    voz = window.speechSynthesis;
    leer = new SpeechSynthesisUtterance(lectura);
    leer.lang = "es-MX";
    voz.speak(leer);
}