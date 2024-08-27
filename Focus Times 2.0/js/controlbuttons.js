import * as el from "./buttons.js";
import * as actions from "./events.js"

export const event = () => {
  
  el.button.addEventListener("click", (event) => {
  
    const button = event.target.closest('button');

    const action = button?.dataset.action

    if(typeof actions[action] != 'function'){
        
    }

    actions[action]()
  
    })
}




