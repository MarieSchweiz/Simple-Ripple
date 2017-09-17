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


MIT License

Copyright (c) 2017 [Marie Schweiz](https://twitter.com/ma_rylou)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.