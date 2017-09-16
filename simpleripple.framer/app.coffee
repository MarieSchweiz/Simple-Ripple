#Hide Purple Borders
Framer.Extras.Hints.disable()

# Add Module
ripple = require('simpleripple').ripple

# Activate simple ripple for the big button
bigbutton.on(Events.TouchStart, ripple)

# Activate simple ripple for the small button
smallbutton.on(Events.TouchStart, ripple)


link.onClick (event) ->
	window.open('https://github.com/MarieSchweiz/Simple-Ripple/', '_new')