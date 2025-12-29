let time = parseInt(prompt("정수(s)"));
hour = parseInt(time / 3600);
minute = parseInt((time % 3600) / 60);
second = (time % 3600) % 60;

hour = hour < 10 ? "0"+String(hour) : hour;
minute = minute < 10 ? "0"+String(minute) : minute;
second = second < 10 ? "0"+String(second) : second;

console.log(`${hour}:${minute}:${second}`);
