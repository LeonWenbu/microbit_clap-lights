input.onSound(DetectedSound.Loud, function on_sound_loud() {
    
    lightsOn = !lightsOn
    if (lightsOn) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
    
})
let lightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 100)
