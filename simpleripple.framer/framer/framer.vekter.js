(function(scope) {var __layer_0__ = new Layer({"height":640,"constraintValues":{"height":640,"heightFactor":1,"width":360,"widthFactor":1},"backgroundColor":"rgb(255, 255, 255)","clip":true,"width":360});var __layer_1__ = new Layer({"parent":__layer_0__,"backgroundColor":null,"width":360,"height":176,"constraintValues":{"height":176,"centerAnchorX":0.5,"width":360,"right":0,"centerAnchorY":0.1375,"aspectRatioLocked":true},"image":"images\/design\/KvIwLASiKoiM8DUhkv1jwizTipu9j5gJw5scHtDzxhdgrOfI9B13GM28MPa3SProty9QknqnmRvRKaTuutQj5w","clip":false});var link = new TextLayer({"parent":__layer_0__,"height":63,"name":"link","constraintValues":{"left":16,"height":63,"centerAnchorX":0.4958333333333333,"width":325,"right":19,"top":221,"centerAnchorY":0.39453125},"backgroundColor":null,"width":325,"autoSize":false,"x":16,"y":221,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":19,"css":{"fontSize":"16px","WebkitTextFillColor":"#000000","letterSpacing":"0px","fontWeight":400,"lineHeight":"1.7","tabSize":4,"fontFamily":"\"RobotoMono-Regular\", \"Roboto Mono\", monospace"}}],"text":"Its a simple ripple"},{"inlineStyles":[{"startIndex":0,"endIndex":17,"css":{"fontSize":"16px","WebkitTextFillColor":"#000000","letterSpacing":"0px","fontWeight":400,"lineHeight":"1.7","tabSize":4,"fontFamily":"\"RobotoMono-Regular\", \"Roboto Mono\", monospace"}}],"text":"Get it on Github!"}],"alignment":"center"}});var bigbutton = new Layer({"parent":__layer_0__,"name":"bigbutton","backgroundColor":"rgba(255, 255, 255, 0.5)","shadowBlur":2,"width":328,"x":16,"height":118,"constraintValues":{"left":16,"height":118,"centerAnchorX":0.5,"width":328,"bottom":202,"right":16,"top":null,"centerAnchorY":0.5921875},"borderRadius":3,"shadowColor":"rgba(0,0,0,0.25)","clip":true,"shadowY":1,"y":320});var smallbutton = new Layer({"parent":__layer_0__,"name":"smallbutton","backgroundColor":"rgba(255, 255, 255, 0.5)","shadowBlur":3,"width":122,"x":119,"height":44,"constraintValues":{"left":null,"height":44,"centerAnchorX":0.5,"width":122,"bottom":107,"top":null,"centerAnchorY":0.7984375},"borderRadius":3,"shadowColor":"rgba(0,0,0,0.25)","clip":true,"shadowY":1,"y":489});__layer_1__.__framerInstanceInfo = {"originalFilename":"simpleripple.gif","framerClass":"Layer","hash":"#vekter|__layer_1__","vekterClass":"ImageNode"};link.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|link","targetName":"link","vekterClass":"TextNode","text":"Its a simple ripple\nGet it on Github!"};bigbutton.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|bigbutton","targetName":"bigbutton","vekterClass":"RectangleNode"};__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"FrameNode","framerClass":"Layer"};smallbutton.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|smallbutton","targetName":"smallbutton","vekterClass":"RectangleNode"};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {link, bigbutton, smallbutton});scope["__vekterVariables"] = ["link", "bigbutton", "smallbutton"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);