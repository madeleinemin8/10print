const RESET = "\x1b[0m"
const BLINK = "\x1b[5m"
const sw = process.stdout.columns

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"

const arr = ["┣", "┨", " ", "┳", "╋", "  "]

let w = parseInt(sw / 2)

function draw () {
    setTimeout(draw, 1000/15)
    if (w >= sw - 20) {
        w -= 15
    }
    if (w <= 0) {
        w += 15
    }
    if (Math.random() > 0.5) {
        w -= 3
    } else {
        w += 3
    }
    let output = '\x1b[1m\x1b[35m\x1B[46m'
    for (let i = 0; i < w; i++) {
        const r = Math.floor(Math.random() * arr.length);
        output += arr[r]
    }
    console.log(output)
}

draw()
