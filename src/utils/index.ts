const synth = window.speechSynthesis;
// 参数
const voice = "Google 粤語（香港）"; // Alex/Ting-Ting/Google 普通话（中国大陆）/Google 粤語（香港）
const pitch = 1;
const rate = 1;
const voices = synth.getVoices();


console.log('voices ---', voices)

function setVoice(utterThis: SpeechSynthesisUtterance) {
    for (let i = 0; i < voices.length; i++) {
        console.log(voices[i].name)
        if (voices[i].name === voice) {
            utterThis.voice = voices[i];
            break;
        }
    }
}

export function textToSpeech(text: string) {
    return new Promise((resolve, reject) => {
        if (text !== "") {
            const utterThis = new SpeechSynthesisUtterance(text);
            utterThis.onend = function (event) {
                console.log("SpeechSynthesisUtterance.onend");
                resolve(undefined);
            };
            utterThis.onerror = function (event) {
                // console.error("SpeechSynthesisUtterance.onerror");
                reject("SpeechSynthesisUtterance.onerror");
            };
            setVoice(utterThis);
            utterThis.pitch = pitch;
            utterThis.rate = rate;
            synth.speak(utterThis);
        }
    });
}
