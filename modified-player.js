var audio = $("#audio");
var playPauseButton = $("#play-pause-button");
var progressBar = $("#progress-bar");
var currentTimeDisplay = $("#current-time");
var totalTimeDisplay = $("#total-time");

var isPlaying = false;

playPauseButton.on("click", () => {
  if (isPlaying) {
    audio.prop("currentTime", 0);
  } else {
    isPlaying = !isPlaying;
    audio.trigger("play");
  }
});

audio.on("timeupdate", (e) => {
  var currentTime = audio.prop("currentTime");
  var duration = audio.prop("duration");
  var currentMinutes = Math.floor(currentTime / 60);
  var currentSeconds = Math.floor(currentTime % 60);
  var totalMinutes = Math.floor(duration / 60);
  var totalSeconds = Math.floor(duration % 60);

  currentTimeDisplay.text(
    `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`
  );
  totalTimeDisplay.text(
    `${totalMinutes}:${totalSeconds < 10 ? "0" : ""}${totalSeconds}`
  );

  const progress = (currentTime / duration) * 100;
  progressBar.css("width", `${progress}%`);
});
