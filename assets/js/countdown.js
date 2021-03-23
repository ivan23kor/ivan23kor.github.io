function setCountdown(date) {
  var total_minutes = Math.floor((
    new Date(date).getTime() - new Date().getTime()) / 60000);
  var hours = Math.floor(total_minutes / 60);
  var minutes = total_minutes % 60;
  document.getElementById("countdown").innerHTML = hours + " hours & " + minutes + " minutes ";
  document.getElementById("date").innerHTML = "Until " + date;
}
function runCountdown(targetDate, delay=1000) {
    setCountdown(targetDate);
    setInterval(function() {
      setCountdown(targetDate);
    }, delay);
}
