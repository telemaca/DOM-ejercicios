const changeMode = () => {
    if (rgbSliders.style.display === "none") {
        rgbSliders.style.display = "flex"
        hslSliders.style.display = "none"
        changeButton.innerHTML = "Cambiar a HSL"
    } else if (hslSliders.style.display = "none") {
        hslSliders.style.display = "flex"
        rgbSliders.style.display = "none"
        changeButton.innerHTML = "Cambiar a RGB"
    }
}

const changeRValue = () => {
    rValue.innerHTML = rRange.value
    body.style.background = `rgb(${Number(rValue.innerHTML)}, ${Number(gValue.innerHTML)}, ${Number(bValue.innerHTML)})`
    finalColorRGB.innerHTML = `rgb(${rValue.innerHTML}, ${gValue.innerHTML}, ${bValue.innerHTML})`
}

const changeGValue = () => {
    gValue.innerHTML = gRange.value
    body.style.background = `rgb(${Number(rValue.innerHTML)}, ${Number(gValue.innerHTML)}, ${Number(bValue.innerHTML)})`
    finalColorRGB.innerHTML = `rgb(${rValue.innerHTML}, ${gValue.innerHTML}, ${bValue.innerHTML})`
}

const changeBValue = () => {
    bValue.innerHTML = bRange.value
    body.style.background = `rgb(${Number(rValue.innerHTML)}, ${Number(gValue.innerHTML)}, ${Number(bValue.innerHTML)})`
    finalColorRGB.innerHTML = `rgb(${rValue.innerHTML}, ${gValue.innerHTML}, ${bValue.innerHTML})`
}


const changeHValue = () => {
    hValue.innerHTML = hRange.value
    body.style.background = `hsl(${Number(hValue.innerHTML)}, ${Number(sValue.innerHTML)}%, ${Number(lValue.innerHTML)}%)`
    finalColorHSL.innerHTML = `hsl(${hRange.value}, ${sRange.value}%, ${lRange.value}%)`
}

const changeSValue = () => {
    sValue.innerHTML = sRange.value
    body.style.background = `hsl(${Number(hValue.innerHTML)}, ${Number(sValue.innerHTML)}%, ${Number(lValue.innerHTML)}%)`
    finalColorHSL.innerHTML = `hsl(${hValue.innerHTML}, ${sValue.innerHTML}%, ${lValue.innerHTML}%)`
}

const changeLValue = () => {
    lValue.innerHTML = lRange.value
    body.style.background = `hsl(${Number(hValue.innerHTML)}, ${Number(sValue.innerHTML)}%, ${Number(lValue.innerHTML)}%)`
    finalColorHSL.innerHTML = `hsl(${hValue.innerHTML}, ${sValue.innerHTML}%, ${lValue.innerHTML}%)`
}


const body = document.body

//RGB
const rgbSliders = document.querySelector(".rgb")
const rRange = document.getElementById("r-value")
const gRange = document.getElementById("g-value")
const bRange = document.getElementById("b-value")

const rValue = document.querySelector(".current-R-value")
const gValue = document.querySelector(".current-G-value")
const bValue = document.querySelector(".current-B-value")

//HSL
const hslSliders = document.querySelector(".hsl")
const hRange = document.getElementById("h-value")
const sRange = document.getElementById("s-value")
const lRange = document.getElementById("l-value")

const hValue = document.querySelector(".current-H-value")
const sValue = document.querySelector(".current-S-value")
const lValue = document.querySelector(".current-L-value")

const finalColorRGB = document.querySelector(".final-value-rgb")
const finalColorHSL = document.querySelector(".final-value-hsl")

//button
const changeButton = document.querySelector(".change-color-mode-btn")

rRange.addEventListener("input", changeRValue)
gRange.addEventListener("input", changeGValue)
bRange.addEventListener("input", changeBValue)

hRange.addEventListener("input", changeHValue)
sRange.addEventListener("input", changeSValue)
lRange.addEventListener("input", changeLValue)

changeButton.addEventListener("click", changeMode)