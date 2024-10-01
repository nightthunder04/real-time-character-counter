const textareaEl = document.getElementById("textarea")

const totalCounterEl = document.getElementById("total-counter")

const remaningCounterEl = document.getElementById("Remaining-counter")
textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length
    remaningCounterEl.innerText
     = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}



updateCounter();