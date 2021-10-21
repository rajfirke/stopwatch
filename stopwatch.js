// console.log(`clap urhandsssss`);


function secstohrmmss(time) {
    const ms = Math.floor(100*(time%1));
    time = Math.floor(time)


    const hrs = Math.floor(time / 3600);
    time = time - 3600 * hrs

    const mins = Math.floor(time / 60)
    time = time - mins * 60
    

    return `${hrs} hrs: ${mins} min: ${time} sec: ${ms}ms`
}

let time_on_watch = 0;
let timer = undefined;

const time_element = document.getElementById('clock-time');
time_element.innerText = secstohrmmss(time_on_watch);

const start = document.getElementById("start");
start.addEventListener('click', () => {
    if(timer != undefined) return;
    timer = setInterval(() => {
        time_on_watch = time_on_watch + 0.01;
        time_element.innerText = secstohrmmss(time_on_watch);
    }, 10);
})

const stop = document.getElementById("stop");
stop.addEventListener('click', () => {
    if(timer == undefined) return;
    clearInterval(timer);
    timer = undefined; 
});


const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    if(timer != undefined) {
        clearInterval(timer);
        timer = undefined; 
    }
    time_on_watch = 0;
    time_element.innerText = secstohrmmss(0); 
});




let tit = document.querySelector('#hello');

document.querySelector('#topic').addEventListener('click', function(){
    tit.innerText= `you clicked me `;
})

