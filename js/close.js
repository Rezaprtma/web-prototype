// menutub tab
function countdown() {
  var i = document.getElementById("counter");
  i.innerHTML = parseInt(i.innerHTML)-1;
  if (parseInt(i.innerHTML) <= 0) {
    window.close();
  }
}

setInterval(function () {
  countdown();
}, 1000);
