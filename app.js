const clock = document.querySelector("#clock");

function christmas(){
    
    const christmasDate = new Date("2021-12-25T00:00:00+0900");
    // const setDateYear = christmasDate.getFullYear();
    // console.log(setDateYear);
    const now = new Date();

    const distance = christmasDate.getTime() - now.getTime();

    const day = String(Math.floor(distance/(1000*60*60*24))).padStart(3,"0");
    const hours = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2,"0");
    const minutes = String(Math.floor((distance % (1000*60*60))/(1000*60))).padStart(2,"0");
    const seconds = String(Math.floor((distance % (1000*60))/1000)).padStart(2,"0");

    clock.innerHTML = `${day}d ${hours}h ${minutes}m ${seconds}s`;
    
}



christmas();
setInterval(christmas, 1000);