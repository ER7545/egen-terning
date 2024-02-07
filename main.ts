let terning = 0
input.onGesture(Gesture.Shake, function () {
    terning = randint(1, 6)
    basic.showLeds(`
        # # # . .
        . . # # #
        # # # . #
        . # # . #
        # # . # .
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        . # # # .
        . # # # #
        # # . . #
        `)
    if (terning == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
    } else if (terning == 2) {
        basic.showLeds(`
            # # # # #
            # # . . #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (terning == 3) {
        basic.showLeds(`
            # # # # #
            # . . # #
            # . # # #
            # # # # #
            # # # # #
            `)
    } else if (terning == 4) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . # #
            # . . # #
            # # # # #
            `)
    } else if (terning == 5) {
        basic.showLeds(`
            # # # # #
            # . # # #
            # . . # #
            # . . # #
            # # # # #
            `)
    } else if (terning == 6) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Angry)
    }
})
