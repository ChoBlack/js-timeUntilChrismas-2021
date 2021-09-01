const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    clock.innerHTML = `${date.getHours}:${date.getMinutes}:${date.getSeconds}`;
}

setInterval(getClock, 1000);