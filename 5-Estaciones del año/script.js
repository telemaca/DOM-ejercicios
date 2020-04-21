const isAutumn = (day, month) => day > 20 && month === 3 || month === 4 || month === 5 || day < 21 && month === 6
const isWinter = (day, month) => day > 20 && month === 6 || month === 7 || month === 8 || day < 21 && month === 9
const isSpring = (day, month) => day > 20 && month === 9 || month === 10 || month === 11 || day < 21 && month === 12
const isSummer = (day, month) => day > 20 && month === 12 || month === 1 || month === 2 || day < 21 && month === 3

const getSeason = (day, month, hemisphere) => {
    if (isAutumn(day, month)) {
        return hemisphere === 0 ? "OTOÑO" : "PRIMAVERA"
    } 
    if (isWinter(day, month)) {
        return hemisphere === 0 ? "INVIERNO" : "VERANO"
    }
    if (isSpring(day, month)) {
        return hemisphere === 0 ? "PRIMAVERA" : "OTOÑO"
    }
    if (isSummer(day, month)) {
        return hemisphere === 0 ? "VERANO" : "INVIERNO"
    }
}


const showSeason = () => {
    const dateArray = date.value.split("-").map(value => Number(value))
    const month = dateArray[1]
    const day = dateArray[2]
    const hemisphere = hemispheres.options.selectedIndex
    const season = getSeason(day, month, hemisphere)
    document.body.style.backgroundImage = `url(imgs/${season}.jpg)`
    seasonName.innerHTML = `${season}`
}

const date = document.getElementById("date")
const hemispheres = document.querySelector(".hemispheres")
const seasonName = document.getElementById("season-name")

date.addEventListener("input", showSeason)
hemispheres.addEventListener("input", showSeason)