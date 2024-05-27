function playBeep() {
  console.log("Play beep called");
  if (soundEnabled) {
    console.log("Sound is enabled");
    var beep = new Audio('beep.wav');  
    beep.play();
    setTimeout(function() {
      beep.pause();
      beep.currentTime = 0;  // Reset the beep sound
    }, 1000);  // 1000 ms duration for the beep sound (1 second)
  } else {
    console.log("Sound is disabled");
  }
}
