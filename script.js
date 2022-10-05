/*let seeText = document.getElementById('seeText');
seeText.innerHTML = `
<p id="inText"></p>
 <!--p id ='p1'>©Postyk:)</p-->
`;

seeText.style.border = 'thick double #041b24c4';
*/


//Открыть файл
let text1 = document.getElementById('text1');
text1.onchange = function() { readfile(this.files) };

function readfile(files) {
    var text = files[0];
    document.getElementById("text1").name = text.name;
    console.dir(text);
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("text").value = e.target.result;
    };
    reader.readAsText(text);
}

function copyToClip(){
  var text2 = document.getElementById("text");
  text2.select();
  document.execCommand("Copy");
  console.log("copied");
}

let saveFile = document.getElementById('save');
saveFile.onclick = download;

function download() {
    var link = document.createElement('a');
    var str = document.getElementById("text").value;
    str = str.split("\u000A").join("\u000D\u000A");
    bl = new Blob([str]);
    link.href = URL.createObjectURL(bl);
    if (document.getElementById("text").name != "") {
        link.download = document.getElementById("text").name;
    } else {
        link.download = "text.txt";
    }
    var e = new MouseEvent("click");
    link.dispatchEvent(e);
}

/*var voice = document.getElementById("voice");
let volumeSlider = document.getElementById('volumeSlider');
let rateSlider = document.getElementById('rateSlider');
let pitchSlider = document.getElementById('pitchSlider');

let speech;

let play = document.getElementById('play');

let stopBtn = document.getElementById("stop");




play.onclick = function() {
  speech = new SpeechSynthesisUtterance(text.value);
  //console.log("Saying: " + txtInput.value);
  speech.voice = speechSynthesis.getVoices()[parseInt(voice.value)];
  speechSynthesis.speak(speech);
  
}*/





/*let rate = document.getElementById("rate");
var init = function () {
    if (window.speechSynthesis) {
        if ("onvoiceschanged" in speechSynthesis) {
            speechSynthesis.onvoiceschanged = setVoices;
        } else {
            setVoices();
        }
    }
    
    let playBtn = document.getElementById("play");
    let stopBtn = document.getElementById("stop");
    let pauseBtn = document.getElementById("pause");
    let resumeBtn = document.getElementById("resume");
    playBtn.addEventListener("click", play);
    stopBtn.addEventListener("click", stopPlay);
    pauseBtn.addEventListener("click", pause);
    resumeBtn.addEventListener("click", resume);
};
var play = function () {
    
    var self = this;

    this.disabled = true;
    let voices = speechSynthesis.getVoices();
    let speech = new SpeechSynthesisUtterance();
    let selectedVoice = document.getElementById("voiceSelect");
    let tts = document.getElementById("text");
    speech.text = tts.value;
    speech.voice = voices[selectedVoice.value];
    speechSynthesis.speak(speech);
    speech.rate = rate.value;
    speech.onend = function () {
        self.disabled = false;
    };
};
var stopPlay = function () {
    speechSynthesis.cancel();
    let playBtn = document.getElementById("play");
    playBtn.disabled = false;
};
var pause = function () {
    if (!speechSynthesis.paused)
        speechSynthesis.pause();
};
var resume = function () {
    if (speechSynthesis.paused)
        speechSynthesis.resume();
};
var setVoices = function () {
    let voices = speechSynthesis.getVoices();
    let voicesSelect = document.getElementById("voiceSelect");
    for (let index in voices) {
        let option = document.createElement("OPTION");
        option.value = index;
        option.innerHTML = voices[index].name;
        voicesSelect.appendChild(option);
    }
};
window.onload = function () {
    init();
};*/




let speech;
let voiceOptions = document.getElementById('voiceOptions');
let volumeSlider = document.getElementById('volumeSlider');
let	rateSlider = document.getElementById('rateSlider');
let	pitchSlider = document.getElementById('pitchSlider');

let playBtn = document.getElementById("play");
let voiceMap = [];

function loadVoices() {
	'use strict';
	var voices = speechSynthesis.getVoices(),
		i,
		voice,
		option;
	for (i = 0; i < voices.length; i += 1) {
		voice = voices[i];
		option = document.createElement('option');
		option.value = voice.name;
		option.innerHTML = voice.name;
		voiceOptions.appendChild(option);
		voiceMap[voice.name] = voice;
	}
}


window.speechSynthesis.onvoiceschanged = function (e) {
	'use strict';
	loadVoices();
};

playBtn.onclick = function () {

    'use strict';
    speech = new SpeechSynthesisUtterance();

    speech.volume = volumeSlider.value;

    speech.voice = voiceMap[voiceOptions.value];

    speech.rate = rateSlider.value;
	speech.pitch = pitchSlider.value;

    speech.text = text.value;

    window.speechSynthesis.speak(speech);



      }


let stopBtn = document.getElementById("stop");

stopBtn.onclick = function () {


        speechSynthesis.cancel();
        let playBtn = document.getElementById("play");
        playBtn.disabled = false;



      }

      let pauseBtn = document.getElementById("pause");
      
      pauseBtn.onclick = function () {


        if (!speechSynthesis.paused){
        speechSynthesis.pause();
        }


      }



  let resumeBtn = document.getElementById("resume");

  resumeBtn.onclick = function () {



    if (speechSynthesis.paused){
    speechSynthesis.resume();
    }

  }




    








