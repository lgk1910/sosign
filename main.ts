serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "0") {
        NPNBitKit.Led2ColorAnalog(AnalogPin.P2, 100, AnalogPin.P1, 0)
        basic.showNumber(0)
    } else if (cmd == "1") {
        NPNBitKit.Led2ColorAnalog(AnalogPin.P2, 0, AnalogPin.P1, 100)
        basic.showNumber(1)
    }
})
let cmd = ""
let butt = 0
basic.forever(function () {
	
})
basic.forever(function () {
    if (NPNBitKit.Button(DigitalPin.P0)) {
        if (butt == 0) {
            butt = 1
        } else {
            butt = 0
        }
        serial.writeString("!" + "1" + ":" + "BUTT" + ":" + butt + "#")
        NPNBitKit.Led2ColorAnalog(AnalogPin.P2, 0, AnalogPin.P1, 100)
        basic.pause(500)
    }
    NPNBitKit.DHT11Read(DigitalPin.P2)
    serial.writeString("!" + "1" + ":" + "LIGHT" + ":" + NPNBitKit.AnalogLight(AnalogPin.P2) + "#")
    basic.pause(500)
})
