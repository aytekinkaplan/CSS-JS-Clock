(function () {
  "use strict";

  var clockSeconds = document.getElementById("sec");
  var clockMinutes = document.getElementById("min");
  var clockHours = document.getElementById("hr");

  function getTime() {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var degSeconds = (seconds * 360) / 60;
    var degMinutes = ((minutes + seconds / 60) * 360) / 60;
    var degHours = ((hours + minutes / 60 + seconds / 60 / 60) * 360) / 12;

    clockSeconds.style.transform = "rotate(" + degSeconds + "deg)";
    clockMinutes.style.transform = "rotate(" + degMinutes + "deg)";
    clockHours.style.transform = "rotate(" + degHours + "deg)";
  }

  // `DOMContentLoaded` eventi, sayfa içeriği tamamen yüklendikten sonra fonksiyonu çalıştırır.
  document.addEventListener("DOMContentLoaded", function () {
    setInterval(getTime, 1000);
  });
})();
