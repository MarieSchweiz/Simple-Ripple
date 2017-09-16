# Simple Ripple

A Framer.js module flavored with animation and a taste of Android. I captured that taste so you can use it in your framer.js project. 

[![Simple-Ripple Demo](/simple-ripple.gif)](https://framer.cloud/epPVg)

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
Open the module simpleripple.coffee in your modules folder. The ripple size itself changes based on the element size it is used on. You can change its color and opacity by using another rgba value.

```
ripplecolor = "rgba(0,0,0,0.2)"
feedbackcolor = "rgba(0,0,0,0.2)"
ripplesize = layer.height
```

<a href='https://open.framermodules.com/<Simple Ripple>'>
    <img alt='Install with Framer Modules'
    src='https://www.framermodules.com/assets/badge@2x.png' width='160' height='40' />
</a>
