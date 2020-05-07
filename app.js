function roll() {
  let rng = Math.random()
  let elem = document.getElementById("die")
  let result = ""
  if (rng < 1 / 6) {
    result = 'die-1.png'
  } else if (rng < (1 / 6) * 2) {
    result = 'die-2.png'
  } else if (rng < (1 / 6) * 3) {
    result = 'die-3.png'
  } else if (rng < (1 / 6) * 4) {
    result = 'die-4.png'
  } else if (rng < (1 / 6) * 5) {
    result = 'die-5.png'
  } else if (rng < (1 / 6) * 6) {
    result = 'die-6.png'
  }
  elem.innerHTML = `<img src="${result}" alt="error loading image">`
}
















// // SOURCES

// https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png

// https://www.zedge.net/find/wallpapers/magic%20the%20gathering