
const dayHours = [00, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

const timeWoken = 16;

function whenToSleep(tw){//tw = time woken

    for(let i = 0; i < 16; i++){
        console.log(dayHours[i]);
    }
}

whenToSleep(16)