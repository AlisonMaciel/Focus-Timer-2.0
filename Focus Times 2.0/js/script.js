import  {state} from "./state.js"
import { event } from "./controlbuttons.js"
import { upDateDisplay, countdown } from "./timer.js"
function start(minuts, seconds) {
  minuts = state.minuts
  seconds = state.seconds
  
  event()
  upDateDisplay()
  countdown()
}

start(1,1)