const hourhand=document.querySelector('.hourhand');
const minutehand=document.querySelector('.minutehand');
const secondhand=document.querySelector('.secondhand');

function updateClock(){
    const currentDate=new Date();

    let seconds=currentDate.getSeconds();
    let minute=currentDate.getMinutes()+seconds/60;
    let hours=(currentDate.getHours()%12)+minute/60;    

    let minuteAngle=minute*6;
    let hourAngle=hours*30;
    let secondAngle=seconds/60*360;

    minutehand.setAttribute('transform', `rotate(${minuteAngle},50,50)`);
    hourhand.setAttribute('transform', `rotate(${hourAngle},50,50)`);
    secondhand.setAttribute('transform', `rotate(${secondAngle},50,50)`);
}

setInterval(function(){
    updateClock();
}, 0);
