let homeScore = document.getElementById("home-score")
let currentHomeScore = 0

function plusOne() {
    currentHomeScore += 1
    homeScore.textContent = currentHomeScore
}

function plusTwo() {
    currentHomeScore += 2
    homeScore.textContent = currentHomeScore
}

function plusThree() {
    currentHomeScore += 3
    homeScore.textContent = currentHomeScore
}

let guestScore = document.getElementById("guest-score")
let currentGuestScore = 0

function plusOneGuest() {
    currentGuestScore += 1
    guestScore.textContent = currentGuestScore
}

function plusTwoGuest() {
    currentGuestScore += 2
    guestScore.textContent = currentGuestScore
}

function plusThreeGuest() {
    currentGuestScore += 3
    guestScore.textContent = currentGuestScore
}