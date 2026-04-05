// --- CACHE_CONFIGURATION ---
const CACHE_KEY = "STARK_INTEL_DATA";
const CACHE_DURATION = 5 * 60 * 1000; // 5 Minutes in Milliseconds

async function fetchIntel(lat = 26.91, lon = 75.78, forceRefresh = false) {
  const logContainer = document.getElementById('intercept-log');

  // 1. Check LocalStorage for existing data
  const cachedData = localStorage.getItem(CACHE_KEY);
  const now = Date.now();

  if (!forceRefresh && cachedData) {
    const parsed = JSON.parse(cachedData);
    // Only use cache if it hasn't expired
    if (now - parsed.timestamp < CACHE_DURATION) {
      console.log("LOG: [CACHE_HIT] Loading data from local memory.");
      renderIntelUI(parsed.data);
      return;
    }
  }

  console.log("LOG: [CACHE_EXPIRED/MISS] Initializing fresh uplink...");

  // 2. Perform fresh API calls (using your existing endpoints)
  try {
    const [weather, location/* , iss */] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`).then(res => res.json()),
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`).then(res => res.json()),
      // fetch('http://api.open-notify.org/iss-now.json').then(res => res.json())
    ]);

    const intelPayload = {
      weather: `${weather.current_weather.temperature}°C`,
      location: `${location.address.city || location.address.town || "SECTOR_X"} // ${location.address.country_code.toUpperCase()}`,
      sat: `ALT: 408KM`,
      timestamp: now
    };

    // 3. Store in LocalStorage
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      timestamp: now,
      data: intelPayload
    }));

    renderIntelUI(intelPayload);

  } catch (error) {
    console.error("UPLINK_ERROR:", error);
  }
}

// Separate function to render UI to keep code clean
function renderIntelUI(data) {
  const container = document.getElementById('intercept-log');
  container.innerHTML = `
        <div class="intel-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--stark-blue); padding-bottom: 5px; margin-bottom: 10px;">
            <h3 class="section-title" style="font-size: 0.7rem; color: var(--alien-gold);">ENV_INTELLIGENCE</h3>
            <button onclick="requestLocationScan()" class="scan-trigger-btn" style="background: transparent; border: 1px solid var(--stark-blue); color: var(--stark-blue); font-size: 0.55rem; cursor: pointer; padding: 2px 8px;">[ RE-SCAN ]</button>
        </div>
        <div class="intel-row"><span>◈ ATMOSPHERE</span> <span style="color:var(--stark-blue)">${data.weather}</span></div>
        <div class="intel-row"><span>⌬ CURRENT_LOC</span> <span style="color:var(--stark-blue)">${data.location}</span></div>
        <div class="intel-row"><span>⌖ ORBITAL_POS</span> <span style="color:var(--stark-blue)">${data.sat}</span></div>
        <div class="intel-row" id="realtime-latency"><span>⧇ NET_LATENCY</span> <span style="color:var(--stark-blue)">CALCULATING...</span></div>
    `;
  // Ping can stay real-time as it doesn't use an external API
  calculateLatency();
}

function requestLocationScan() {
  // Pass true to 'forceRefresh' to bypass cache when user manually clicks scan
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchIntel(pos.coords.latitude, pos.coords.longitude, true),
      () => fetchIntel(26.91, 75.78, true)
    );
  }
}

// Initial System Launch
fetchIntel();

// Refresh Telemetry interval
setInterval(() => fetchIntel(), 60000);



/**
 * REAL-TIME GEOLOCATION TRACKING
 * Replaces random numbers with actual sensor data
 */
function updateCoordinates() {
  const coordsElement = document.querySelector('.agency-stamp');
  if (!coordsElement) return;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude.toFixed(4);
      const lng = pos.coords.longitude.toFixed(4);

      // Dynamic signal fluctuation based on GPS accuracy
      const accuracy = pos.coords.accuracy;
      const sigStrength = accuracy < 50 ? 99 : (accuracy < 100 ? 96 : 92);

      coordsElement.innerHTML = `S.H.A.R.M.A. // LOC: ${lat}, ${lng} // SIG_STRENGTH: ${sigStrength}%`;
    }, (err) => {
      // Fallback if user denies location or sensor fails
      coordsElement.innerHTML = `S.H.A.R.M.A. // LOC: OFFLINE // SIG_STRENGTH: 0%`;
    }, {
      enableHighAccuracy: true
    });
  }
}

// Fire once and set a longer interval to save battery/resources
updateCoordinates();
setInterval(updateCoordinates, 10000); // Updated every 10 seconds for real-time tracking