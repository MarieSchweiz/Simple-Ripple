# Created by Marie Schweiz on 16 September 2017
# 
# Use to create and design an android ripple touch effect
#
# To Get Started...
#
# 1. Place this file in Framer Studio modules directory
#
# 2. In your project include:
#     ripple = require("simpleripple").ripple
#
# 3. Activate the ripple by adding:
#     yourlayer.on(Events.TouchStart, ripple)
#


exports.ripple = (event, layer) ->
# Coordinates relative to a parent element for the ripple
	ourfancylayer = layer
	
    #Variables to configure your ripple and feedback
	ripplecolor = "rgba(0,0,0,0.2)"
	feedbackcolor = "rgba(0,0,0,0.2)"
	ripplesize = layer.height

    # Create a touch feedback

	superfeedback = new Layer
		parent: layer
		name: "superfeedback"
		width: layer.width
		height: layer.height
		opacity: 0
		backgroundColor:feedbackcolor

	superfeedback.animate
		opacity: 1
		options:
			time: 3
			curve: "cubic-bezier(0.4, 0.0, 0.6, 1)"
			
	layer.onTouchEnd ->
		superfeedback.destroy()


	coords = Canvas.convertPointToLayer(event, layer)
	#print coords

    #Create a Layer named simple ripple and the event layer as parent

	rippleCircle = new Layer
		parent: layer
		name: "simple ripple"
		scale: 0.2
		width: ripplesize
		height: ripplesize
		backgroundColor:ripplecolor
		borderRadius: 60
		x: coords.x - (ripplesize / 2)
		y: coords.y - (ripplesize / 2)

    #Animate the ripple

	rippleCircle.animate
		scale: 3
		borderRadius: 60
		opacity: 0
		options:
			time: 1.2
	
    #Kill it after the animation has ended

	rippleCircle.onAnimationEnd ->
		rippleCircle.destroy()
