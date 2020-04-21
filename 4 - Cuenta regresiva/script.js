const count10to1 = () => {
    const result = Number(countdown.innerHTML)
    if (result === 0) {
        clearInterval(interval)
    } else {
        countdown.innerHTML = result - 1
        document.body.style.backgroundColor = colors[countdown.innerHTML]
    }
}

const colors = ["red", "green", "blue", "coral", "violet", "black", "teal", "tomato", "darkgoldenrod", "salmon"]
const countdown = document.querySelector(".countdown")

const interval = setInterval(count10to1, 1000)