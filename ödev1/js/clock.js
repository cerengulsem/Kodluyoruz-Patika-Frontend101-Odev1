let welcomeName = prompt("Adınızı Giriniz");
welcomeName = `${welcomeName[0].toUpperCase()}${welcomeName.slice(1).toLowerCase()}`

document.getElementById("myName").innerText = welcomeName;


function refreshData(){
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

let day = now.getDay();



if (hour < 10){
    hour = ("0"+hour);
}
if (minute < 10){
    minute = ("0"+minute);
}
if (second < 10){
    second = ("0"+second);
}


switch(day){
    case 1:
        day = 'Pazartesi';
        break;
    case 2:
        day = 'Salı';
        break;
    case 3:
        day = 'Çarşamba';
        break;
    case 4:
        day = 'Perşembe';
        break;
    case 5:
        day = 'Cuma';
        break;
    case 6:
        day = 'Cumartesi';
        break;
    case 7: 
        day = 'Pazar';
        break;
}



let date;
date = hour + ":" + minute + ":" + second +" "+ day;

document.getElementById("myClock").innerText = date ;
document.getElementById("myClock").textContent = date;
}

setInterval(refreshData,1000);