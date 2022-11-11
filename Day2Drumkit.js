let boom = new Audio("drumkit/boom.wav")
let boomBtn = document.getElementById(`boomButton`)
let clap = new Audio("drumkit/clap.wav")
let clapBtn = document.getElementById(`clapButton`)
let hihat = new Audio ("drumkit/hihat.wav")
let hihatBtn = document.getElementById(`hihatButton`)
let kick = new Audio ("drumkit/kick.wav")
let kickBtn = document.getElementById(`kickButton`)
let openhat = new Audio ("drumkit/openhat.wav")
let openhatBtn = document.getElementById(`openhatButton`)
let ride = new Audio ("drumkit/ride.wav")
let rideBtn = document.getElementById(`rideButton`)
let snare = new Audio ("drumkit/snare.wav")
let snareBtn = document.getElementById(`rideButton`)
let tink = new Audio ("drumkit/tink.wav")
let tinkBtn = document.getElementById(`tinkButton`)
let tom = new Audio ("drumkit/tom.wav")
let tomBtn = document.getElementById(`tomButton`)
let gameHdr = document.getElementById(`gameHeader`)
let drumHstry = document.getElementById(`drumHistory`)
let replayBtn = document.getElementById(`replayButton`)
let colorArray = [`red`, `green`, `blue`, `yellow`, `orange`, `purple`, `cyan`, `black`]

function playAudio(string){
    return string.play()}

function headerColorCycle(){
    for (let i=0;i<colorArray.length;i++){
        if (gameHdr.style.color==colorArray[i]) gameHdr.style.color=colorArray[(i+1)%(colorArray.length-1)];break;
    }}

function replayDrums(playlist){
    for (let i=0;i<playlist.length;i++){
        switch (playlist.charAt(i)){
            case `1`:setTimeout(playAudio(boom), 500);break;
            case `2`:setTimeout(playAudio(clap), 500);break;
            case `3`:setTimeout(playAudio(hihat), 500);break;
            case `4`:setTimeout(playAudio(kick), 500);break;
            case `5`:setTimeout(playAudio(openhat), 500);break;
            case `6`:setTimeout(playAudio(ride), 500);break;
            case `7`:setTimeout(playAudio(snare), 500);break;
            case `8`:setTimeout(playAudio(tink), 500);break;
            case `9`:setTimeout(playAudio(tom), 500);break;
            default:break;
        }}};

document.addEventListener(`click`, (ev) => {
    console.log(ev.target.id)
    switch (ev.target.id){
        case `boomButton`:boom.play();break;
        case `clapButton`:clap.play();break;
        case `hihatButton`:hihat.play();break;
        case `kickButton`:kick.play();break;
        case `openhatButton`:openhat.play(), drumHstry.innerText+=`5`;break;
        case `rideButton`:ride.play();break;
        case `snareButton`:snare.play();break;
        case `tinkButton`:tink.play();break;
        case `tomButton`:tom.play();break;
        case `gameHeader`:headerColorCycle();break;
        case `drumHistory`:drumHstry.innerText="";break;
        case `replayButton`:replayDrums(drumHstry.innerText);console.log(`Replay`);break;
        default:{};break;}
        })
document.addEventListener(`keypress`, (ev) =>{
    switch (ev.code){
        case `Numpad1`:boom.play(), drumHstry.innerText+=`1`;break;
        case `Numpad2`:clap.play(), drumHstry.innerText+=`2`;break;
        case `Numpad3`:hihat.play(), drumHstry.innerText+=`3`;break;
        case `Numpad4`:kick.play(), drumHstry.innerText+=`4`;break;
        case `Numpad5`:openhat.play(), drumHstry.innerText+=`5`;break;
        case `Numpad6`:ride.play(), drumHstry.innerText+=`6`;break;
        case `Numpad7`:snare.play(), drumHstry.innerText+=`7`;break;
        case `Numpad8`:tink.play(), drumHstry.innerText+=`8`;break;
        case `Numpad9`:tom.play(), drumHstry.innerText+=`9`;break;
        default:break;
        }});