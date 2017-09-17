
# Activate simple ripple for a target layer
yourlayer.on(Events.TouchStart, ripple)

# Activate simple ripple for a group of sublayers

for child, i in yourlayer.subLayers
	child.on(Events.TouchStart, ripple)