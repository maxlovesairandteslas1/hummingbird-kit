hummingbird.startHummingbird()
basic.forever(function () {
    basic.showNumber(hummingbird.getSensor(SensorType.Light, ThreePort.One))
    hummingbird.setLED(ThreePort.One, hummingbird.getSensor(SensorType.Dial, ThreePort.Two))
})
