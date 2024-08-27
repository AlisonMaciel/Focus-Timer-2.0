import { state } from "./state.js";
import * as el from './buttons.js'

export const upDateDisplay = (minuts, seconds) => {
  minuts = minuts ?? state.minuts
  seconds = seconds ?? state.seconds

  el.minuts.textContent = String(minuts).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")

}

export function countdown() {

  if (!state.isRunning) {
    return;
  }

  let minuts = Number(el.minuts.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minuts--
  }

  if (minuts < 0) {
    return
  }

  upDateDisplay(minuts, seconds);

  setTimeout(() => countdown(), 1000);
}

export function removeFive() {
  let minuts = Number(el.minuts.textContent);

  minuts = Math.max(minuts - 5, 0);

  upDateDisplay(minuts)
}

export function addfive() {
  let minuts = Number(el.minuts.textContent)

  minuts = Math.max(minuts + 5, 0)

  if (minuts > 60) {
    minuts = 60
  }

  upDateDisplay(minuts)
}

