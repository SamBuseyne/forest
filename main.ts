basic.showString("ZENOMETER")
basic.forever(function () {
    if (input.lightLevel() > 75) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            `)
    }
})
