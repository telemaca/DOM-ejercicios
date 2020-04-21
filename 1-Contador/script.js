
const add1 = () => {
    const result = document.querySelector(".result")
    let changingResult = Number(result.innerHTML)
    result.innerHTML = changingResult + 1
}

const add10 = () => {
    const result = document.querySelector(".result")
    let changingResult = Number(result.innerHTML)
    result.innerHTML = changingResult + 10
}

const add100 = () => {
    const result = document.querySelector(".result")
    let changingResult = Number(result.innerHTML)
    result.innerHTML = changingResult + 100
}

const substract1 = () => {
    const result = document.querySelector(".result")
    let changingResult = Number(result.innerHTML)
    result.innerHTML = changingResult - 1 < 0 ? 0 : changingResult - 1
}

const substract10 = () => {
    const result = document.querySelector(".result")
    let changingResult = Number(result.innerHTML)
    result.innerHTML = changingResult - 10 < 0 ? 0 : changingResult - 10
}

const substract100 = () => {
    const result = document.querySelector(".result")
    let changingResult = Number(result.innerHTML)
    result.innerHTML = changingResult - 100 < 0 ? 0 : changingResult - 100
}

const add1btn = document.querySelector(".add-1")
const add10btn = document.querySelector(".add-10")
const add100btn = document.querySelector(".add-100")
const substract1btn = document.querySelector(".substract-1")
const substract10btn = document.querySelector(".substract-10")
const substract100btn = document.querySelector(".substract-100")

add1btn.addEventListener("click", add1)
add10btn.addEventListener("click", add10)
add100btn.addEventListener("click", add100)
substract1btn.addEventListener("click", substract1)
substract10btn.addEventListener("click", substract10)
substract100btn.addEventListener("click", substract100)