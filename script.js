const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

const keyBindings = {
  "a": "C",
  "w": "Db",
  "s": "D",
  "e": "Eb",
  "d": "E",
  "f": "F",
  "t": "Gb",
  "g": "G",
  "y": "Ab",
  "h": "A",
  "u": "Bb",
  "j": "B"
};


keys.forEach(key => key.addEventListener("click", handleKeyClick));

function handleKeyClick() {
  playKey(this);
}

function playKey(key) {
  const keyAudio = document.getElementById(key.dataset.note);
  if (!keyAudio) return;

  keyAudio.currentTime = 0; 
  keyAudio.play();

  key.classList.add("active");

  keyAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}


document.addEventListener("keydown", (e) => {
  const note = keyBindings[e.key.toLowerCase()];
  if (note) {
    const keyElement = document.querySelector(`.key[data-note="${note}"]`);
    if (keyElement) {
      playKey(keyElement);
    }
  }
});
