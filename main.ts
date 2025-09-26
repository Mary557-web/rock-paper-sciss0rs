let HAND = 0
input.onGesture(Gesture.Shake, function () {
    HAND = 0
    music.play(music.stringPlayable("C5 B A G F D E D ", 120), music.PlaybackMode.UntilDone)
    if (HAND == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (HAND == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    music.play(music.stringPlayable("C5 C5 B G E F E D ", 120), music.PlaybackMode.UntilDone)
})
