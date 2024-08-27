import { state } from "./state.js"
import { countdown, removeFive, addfive,} from "./timer.js"
import * as sounds from "./sounds.js"

export function play() {
  if (!state.isRunning) {
    state.isRunning = true
    countdown()
  }
  sounds.buttonPress.play()
}

export function pause() {
  state.isRunning = false
  sounds.buttonPress.play()
}

export function addOneMore() {
  addfive()
  sounds.buttonPress.play()
}

export function removeOne() {
  console.log("ok")
  removeFive()
  sounds.buttonPress.play()
}

const sound = {

  fireplace: document.querySelector(".ph-fire"),
  rain: document.querySelector(".ph-cloud-rain"),
  cafeteria: document.querySelector(".ph-storefront"),
  tree:  document.querySelector(".ph-tree"),

  backgroundGreen: document.querySelector(".treecafeteria > button:nth-child(1)"),
  backgroundFire: document.querySelector(".rainfireplace > button:nth-child(2)"),
  backgroundCafeteria: document.querySelector(".treecafeteria > button:nth-child(2)"),
  backgroundRain: document.querySelector(".rainfireplace > button:nth-child(1)"),

  green() {
    sound.backgroundGreen.style.backgroundColor = "green";
  },

  removeGreen() {
    sound.backgroundGreen.style.backgroundColor = "#E1E1E6";
  },

  fire() {
    sound.backgroundFire.style.backgroundColor = "#FF4500"
  },
  
  removeFire() {
    sound.backgroundFire.style.backgroundColor = "#E1E1E6";
  },

  cafeteriaColor() {
    sound.backgroundCafeteria.style.backgroundColor = "#D2B48C"
  },

  removeCafeteriaColor() {
    sound.backgroundCafeteria.style.backgroundColor = "#E1E1E6"
  },

  rainColor() {
    sound.backgroundRain.style.backgroundColor = "#1E90FF"
  },

  removeRainColor() {
    sound.backgroundRain.style.backgroundColor = "#E1E1E6"
  }

}

sound.fireplace.addEventListener("click", () => {
  sound.fire()
  sound.removeGreen()
  sound.removeCafeteriaColor()
  sound.removeRainColor()
  sounds.fireplaceSound.play()
  sounds.cafeteriaSound.pause()
  sounds.forestSound.pause()
  sounds.rainSound.pause()
})

sound.cafeteria.addEventListener("click", () => {
  sound.cafeteriaColor()
  sound.removeGreen()
  sound.removeRainColor()
  sound.removeFire()
  sounds.cafeteriaSound.play()
  sounds.fireplaceSound.pause()
  sounds.forestSound.pause()
  sounds.rainSound.pause()
})

sound.rain.addEventListener("click", () => {
  sound.rainColor()
  sound.removeGreen()
  sound.removeFire()
  sound.removeCafeteriaColor()
  sounds.rainSound.play()
  sounds.cafeteriaSound.pause()
  sounds.fireplaceSound.pause()
  sounds.forestSound.pause()
})

sound.tree.addEventListener("click", () => {
  sound.green()
  sound.removeFire()
  sound.removeRainColor()
  sound.removeCafeteriaColor()
  sounds.forestSound.play()
  sounds.rainSound.pause()
  sounds.cafeteriaSound.pause()
  sounds.fireplaceSound.pause()
})