# Simple Ripple

A Framer.js module flavored with animation with a taste of android. I captured that taste so you can use it in your framer.js project.

### Add Module
Learn how to add a module into your framer project and add the following lines of code to the head of your .coffee file.

```
ripple = require("simpleripple").ripple
```
### Use Simple Ripple
By adding a TouchStart event to the desired element.

```
yourbutton.on(Events.TouchStart, ripple)
```

### Configure Module
Open the module simpleripple.coffee in your modules folder. The ripple size itself changes based on the element size it is used on. You can change its color and opacity by using another rgba value.

```
ripplecolor = "rgba(0,0,0,0.2)"
feedbackcolor = "rgba(0,0,0,0.2)"
ripplesize = layer.height
```

[![Install with Framer Modules](https://www.framermodules.com/assets/badge.png)](https://open.framermodules.com/<Simple Ripple>)
