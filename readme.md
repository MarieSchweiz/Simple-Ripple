# Simple Ripple

A Framer.js module flavored with animation and a taste of Android. I captured that taste so you can use it in your framer.js project. 

[![Simple-Ripple Demo](/simple-ripple-demo.gif)](https://framer.cloud/epPVg)

### Add Module
Learn how to add a module into your framer project and add the following lines of code to the head of your .coffee file.

```
ripple = require("simpleripple").ripple
```
### Use Simple Ripple
By adding a TouchStart event to the element you want to ripple (simply).

```
yourbutton.on(Events.TouchStart, ripple)
```

### Configure Module
Open simpleripple.coffee located your modules folder. The ripple size itself is based on the element size it is used for. You can change its default color and opacity by using other rgba() values.

```
#current defaults

ripplecolor = "rgba(135, 135, 135, 0.10)"
feedbackcolor = "rgba(135, 135, 135, 0.10)"
ripplesize = layer.height
```

[![Install with Framer Modules](https://www.framermodules.com/assets/badge.png)](https://open.framermodules.com/<Simple Ripple>)
