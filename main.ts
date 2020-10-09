input.onGesture(Gesture.TiltRight, function () {
    도구.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    도구.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.ScreenUp, function () {
    도구.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    도구.change(LedSpriteProperty.Y, -1)
})
let 도구: game.LedSprite = null
도구 = game.createSprite(2, 2)
basic.forever(function () {
	
})
