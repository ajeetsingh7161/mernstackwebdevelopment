// ---------- 1. STATE LOCATIONS ----------
const locations = {
  "punjab":            { top: 20, left: 30 },
  "haryana":           { top: 22, left: 40},
  "himachal pradesh":  { top: 24, left: 49 },
  "uttarakhand":       { top: 27, left: 51 },
  "rajasthan":         { top: 34, left: 30},

  "uttar pradesh":     { top: 35, left: 50 },
  "bihar":             { top: 39, left: 60 },
  "jharkhand":         { top: 42, left: 60 },
  "west bengal":       { top: 45, left: 67 },

  "madhya pradesh":    { top: 42, left: 42 },
  "chhattisgarh":      { top: 48, left: 53 },

  "gujarat":           { top: 34, left: 30 },
  "maharashtra":       { top: 55, left: 42 },
  "goa":               { top: 64, left: 38 },

  "karnataka":         { top: 66, left: 44 },
  "kerala":            { top: 80, left: 40 },
  "tamil nadu":        { top: 80, left: 50 },
  "andhra pradesh":    { top: 70, left: 55 },
  "telangana":         { top: 62, left: 52 },

  "assam":             { top: 36, left: 75 },
  "arunachal pradesh": { top: 32, left: 82 },
  "nagaland":          { top: 40, left: 80 },
  "manipur":           { top: 43, left: 78 },
  "mizoram":           { top: 50, left: 77 },
  "tripura":           { top: 48, left: 73 },
  "meghalaya":         { top: 40, left: 72 },
  "sikkim":            { top: 35, left: 69 },

  "odisha":            { top: 52, left: 63 },

  // Delhi example – adjust values to fit your map
  "delhi":             { top: 23, left: 44 }
};

// ---------- 2. ALIASES ----------
const aliases = {
  "up": "uttar pradesh",
  "mp": "madhya pradesh",
  "uk": "uttarakhand",
  "hp": "himachal pradesh",
  "tn": "tamil nadu",
  "ap": "andhra pradesh",
  "cg": "chhattisgarh",
  "wb": "west bengal",
  "od": "odisha",
  "orissa": "odisha",
  "pb": "punjab",
  "dl": "delhi"
};

// ---------- 3. NORMALIZE INPUT ----------
function normalize(text) {
  return text.toLowerCase().trim().replace(/\s+/g, " ");
}

// ---------- 4. MAIN SEARCH ----------
function searchLocation() {
  const inputBox = document.getElementById("search-input");
  const msg      = document.getElementById("msg");
  const mapContainer = document.getElementById("map-container");

  let key = normalize(inputBox.value);

  if (!key) {
    msg.textContent = "Please type a state name.";
    return;
  }

  if (aliases[key]) {
    key = aliases[key];
  }

  const loc = locations[key];

  if (!loc) {
    msg.textContent = "Location not found. Check spelling.";
    return;
  }

  // create NEW marker div for each correct search
  const marker = document.createElement("div");
  marker.className = "marker";
  marker.style.top  = loc.top + "%";
  marker.style.left = loc.left + "%";

  // add marker on top of map
  mapContainer.appendChild(marker);

  msg.textContent = ""; // clear error
}

// ---------- 5. ENTER KEY SUPPORT ----------
document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("search-input");
  inputBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      searchLocation();
    }
  });
});
