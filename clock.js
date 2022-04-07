//  Create elements
let container = document.getElementById ("container");

for (let i = 0; i < 16; i++) {
  let dot = document.createElement ("div");
  dot.classList.add('dot');
  container.appendChild (dot);
}

function updateClock () {
  let d = new Date();
  let sec = d.getSeconds() + (d.getMinutes() * 60) + (d.getHours() * 3600);
  let bin = sec.toString(2);

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

// Set Second Interval //
window.onload = function () {
  setInterval(updateClock, 1000);
  updateClock();
}