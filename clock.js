// Creating html elements //
  // Container //
let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
  // Dots //
for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("dot");
  container.appendChild(div);
}

// Function which updates each dot element //
function updateClock () {
    // Generating current time in seconds //
  let d = new Date();
  let sec = d.getSeconds() + (d.getMinutes() * 60) + (d.getHours() * 3600);
  let bin = sec.toString(2);
    // Generating binary string //
  while (bin.length < 16) {
    bin = "0" + bin;
  }
    // Reset Lights //
  const a = document.querySelectorAll('.on');
  for (let i = 0; i < a.length; i++) a[i].classList.remove('on');
    // Update Lights //
  const m = document.querySelectorAll('.dot');
  for (let i = 0; i < bin.length; i++) {
    let res = bin.slice(i,i + 1);
    if (res == 1){
      m[i].classList.add('on');
    }
  }
}

// Set 1 second interval for updateClock function //
window.onload = function () {
  setInterval(updateClock, 1000);
  updateClock();
}