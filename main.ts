let pulseRate = 0
radio.onReceivedNumber(function (receivedNumber) {
    // Display received pulse rate
    pulseRate = receivedNumber
    basic.showNumber(pulseRate)
})
// use button a or b to scroll the answer options
input.onButtonPressed(Button.A, function () {
    pulseRate += 1
    basic.showNumber(pulseRate)
})
// use a+b to select the answer
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(pulseRate)
    basic.showString("start walking!")
})
input.onButtonPressed(Button.B, function () {
    if (pulseRate > 0) {
        pulseRate += -1
        basic.showNumber(pulseRate)
    }
})
basic.forever(function () {
    // Continuously display the latest pulse rate
    basic.showNumber(pulseRate)
})
