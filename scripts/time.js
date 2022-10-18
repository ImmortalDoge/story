const currentTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let period = hour >= 12 ? "pm" : "am";

  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  $("#hour").text(hour);
  $("#minute").text(minute);
  $("#second").text(second);
  $("#period").text(period);
  setTimeout(currentTime, 1000);
};

export { currentTime };
