var buttonList = document.getElementById("button-list");
var song2 = document.getElementById("music2");

buttonList.addEventListener("click", function(event){
  var button;
  if (event.target.tagName === 'BUTTON') {
    button = event.target;
  } else if (event.target.tagName === 'A' && event.target.parentElement.tagName === 'BUTTON') {
    button = event.target.parentElement;
  }

  if (button) {
    var link = button.querySelector('.link');
    if (link) {
      event.preventDefault(); // Prevent the default link behavior

      var userHours = prompt("Geri sayım için saat sayısını girin:", "2");
      if (userHours !== null && !isNaN(userHours) && userHours > 0) {
        var hours = parseFloat(userHours);
        button.style.backgroundColor = "lightgreen";
        song2.play();
        var endTime = new Date(new Date().getTime() + hours * 60 * 60 * 1000); // User-defined hours from now
        localStorage.setItem("endTime_" + button.id, endTime);
        localStorage.setItem("color_" + button.id, button.style.backgroundColor);
        localStorage.setItem("userHours_" + button.id, hours); // Store user-defined hours
        startTimer(button, endTime);

        // Open the link in a new tab
        window.open(link.href, "_blank");
      } else {
        alert("Lütfen geçerli bir saat sayısı girin.");
      }
    }
  }
});

document.querySelectorAll('.btn').forEach(function(button) {
  var storedColor = localStorage.getItem("color_" + button.id);
  var storedEndTime = localStorage.getItem("endTime_" + button.id);

  if (storedColor) {
    button.style.backgroundColor = storedColor;
  }

  if (storedEndTime) {
    var endTime = new Date(storedEndTime);
    startTimer(button, endTime);
  }
});

function startTimer(button, endTime) {
  var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = endTime - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    button.innerText = `${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
      clearInterval(x);
      button.innerText = "Claim";
      button.style.backgroundColor = "white";
      localStorage.removeItem("endTime_" + button.id, endTime);
        localStorage.removeItem("color_" + button.id, button.style.backgroundColor);
        localStorage.removeItem("userHours_" + button.id, hours);
      new Notification("Claim Krlo Phirse");
    }
  }, 1000);
}
Notification.requestPermission();
