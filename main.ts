/**
 * Héctor Moreno Hidalgo S2A
 * 
 * Cuadrado 50*50
 * 
 * 1)Recorrer el cuadrado y terminar en la posicion y punto de partida
 * 
 * 2)Dar una vuelta alrededor de un objeto
 * 
 * 3)Idear un sistema para activar el sistema
 * 
 * 4)esquivar obstáculo haciendo s
 * 
 * 5)esquivar obstáculo zig zag
 * 
 * boton A seleccionar ejercicio
 * 
 * boton B empezar ejercicio
 */
/**
 * funciona todo
 */
function zig_zag () {
    for (let index = 0; index < 3; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        basic.pause(100)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (ejercicio == "C") {
        cuadrado()
    } else if (ejercicio == "V") {
        vuelta()
    } else if (ejercicio == "S") {
        eses()
    } else {
        zig_zag()
    }
})
function cuadrado () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    if (ejercicio == "C") {
        ejercicio = "V"
    } else if (ejercicio == "V") {
        ejercicio = "S"
    } else if (ejercicio == "S") {
        ejercicio = "Z"
    } else if (ejercicio == "Z") {
        ejercicio = "C"
    }
})
function vuelta () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 185)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 185)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 185)
    }
}
function eses () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(100)
    }
}
let ejercicio = ""
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    # # # # #
    . # # # .
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    # . . . #
    # # # # #
    . # # # .
    . # # # .
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . # . .
    # # # # #
    # # # # #
    `)
ejercicio = "C"
while (true) {
    basic.showString(ejercicio)
}
