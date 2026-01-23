
const radioStations = [
  { name: "BOLLYWOOD_HITS // LIVE", url: "https://hydro.radioca.st/bollywood.mp3" }, // Updated to mp3 for better support
  { name: "RETRO_CLASSICS // 90s", url: "https://streams.radio.co/s66699e69d/listen" },
  { name: "DESI_LOFI // CHILL", url: "https://stream.zeno.fm/0r0xa792kwzuv" },
  { name: "BBC_WORLD_SERVICE", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" },
  { name: "CAPITAL_FM_UK", url: "https://media-ice.musicradio.com/CapitalMP3" },
  { name: "KISS_FM_UK", url: "https://stream.kissfmuk.com/kiss.mp3" }
];

const audio = document.getElementById('main-audio');
const trackLabel = document.getElementById('track-name');
const dropdown = document.getElementById('station-dropdown');
const customArea = document.getElementById('custom-url-area');

function handleStationChange() {
  const val = dropdown.value;

  if (val === "custom") {
    customArea.style.display = "block";
    trackLabel.innerText = "WAITING_FOR_MANUAL_INPUT...";
    audio.pause();
  } else {
    customArea.style.display = "none";
    const station = radioStations[parseInt(val)];
    trackLabel.innerText = `TUNING: ${station.name}`;
    audio.src = station.url;
    audio.play();
    document.getElementById('play-pause').innerText = "DISCONNECT";
    document.getElementById('visualizer').classList.add('playing');
  }
}

function playCustomUrl() {
  const url = document.getElementById('custom-url').value;
  if (url) {
    trackLabel.innerText = "TUNING_CUSTOM_FREQUENCY...";
    audio.src = url;
    audio.play().catch(e => {
      trackLabel.innerText = "ERROR: INVALID_SIGNAL";
    });
    document.getElementById('play-pause').innerText = "DISCONNECT";
  }
}

// Global Play/Pause Toggle
document.getElementById('play-pause').addEventListener('click', function () {
  if (audio.paused) {
    if (!audio.src) handleStationChange();
    audio.play();
    this.innerText = "DISCONNECT";
  } else {
    audio.pause();
    this.innerText = "CONNECT";
  }
});