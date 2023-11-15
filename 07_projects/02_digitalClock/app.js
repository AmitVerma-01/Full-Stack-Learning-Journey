setInterval(function () {
    const date = new Date();
    // console.log(date.toLocaleTimeString())
    document.getElementById('clock').innerHTML = date.toLocaleTimeString();
  }, 1000);
  