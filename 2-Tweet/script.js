// Tweet: hacer un textarea que permita escribir hasta 240 caracteres. Debe haber un contador de caracteres restantes que se vaya actualizando, debe empezar con 240 e irse restando. También debe haber un botón de enviar que cuando se haga click en este borre el texto ingresado, reinicie el contador y muestre un alert que diga que fue enviado. Si el texto ingresado es más largo que el permitido, tanto el texto como el contador debe ponerse en color rojo, el contador debe pasar a números negativo y el botón debe cambiar de estilo y deshabilitarse (no poder clickearlo).


const countDown = () => {
    charCounter.innerHTML = 240 - textarea.value.length
    if (Number(charCounter.innerHTML) < 0) {
        charCounter.style.color = "firebrick"
        textarea.style.color = "firebrick"
        sendBtn.style.background = "rgb(14, 73, 41)"
        sendBtn.disabled = true
    } else  {
        charCounter.style.color = "grey"
        textarea.style.color = "white"
        sendBtn.style.background = "rgb(29, 138, 80)"
        sendBtn.disabled = false
    }
}

const twitt = () => {
    if (textarea.value.length === 0) {
        return
    }
    textarea.value = ""
    charCounter.innerHTML = 240
    alert("Twitt enviado.")
}

const textarea = document.querySelector("textarea")
const charCounter = document.querySelector(".char-counter")
const sendBtn = document.querySelector(".send-btn")

textarea.addEventListener("input", countDown)
sendBtn.addEventListener("click", twitt)