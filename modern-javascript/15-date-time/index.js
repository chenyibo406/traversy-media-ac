let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("september 10 1981");

// val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(19);

console.log(birthday);
