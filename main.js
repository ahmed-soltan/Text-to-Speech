const textarea=document.querySelector("textarea")
const btn=document.querySelector("button")
let isSpeaking =true
function textToSpeech(){
    let voice=window.speechSynthesis;
    let text =textarea.value;

    
    if(!voice.speaking && text){
        
        const utterance= new SpeechSynthesisUtterance(text);
        voice.speak(utterance)
    }

    if(text.length>50){
        if(voice.speaking && isSpeaking){
            btn.innerHTML="pause";
            voice.resume();
            isSpeaking=false;
        }else{
            btn.innerHTML="resume";
            voice.pause();
            isSpeaking=true;
        }
    }else{
        isSpeaking=false;
        btn.innerHTML="speaking..."
    }

    setInterval(() => {
        if (!voice.speaking && !isSpeaking) {
            btn.innerHTML="convert"
            isSpeaking=true
        }
    });
}

btn.addEventListener("click",textToSpeech)