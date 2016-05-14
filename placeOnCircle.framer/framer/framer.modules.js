require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"arcMovement":[function(require,module,exports){
exports.moveWithArc = function(layer, startPointX, startPointY, endPointX, endPointY) {
  var arc, proxy;
  print(layer, startPointX, startPointY, endPointX, endPointY);
  arc = function(counter, layer, x1, y1, x2, y2) {
    layer.midX = startPointX - Math.sin((counter + 180) * Math.PI / 180) * (endPointX - startPointX);
    return layer.midY = endPointY - Math.cos((counter + 180) * Math.PI / 180) * (startPointY - endPointY);
  };
  proxy = new Layer({
    width: 0,
    height: 0,
    backgroundColor: "null"
  });
  proxy.states.add({
    finish: {
      x: 360
    }
  });
  proxy.states.next();
  return proxy.on("change:x", function() {
    return arc(proxy.x / 4, layer, startPointX, startPointY, endPointX, endPointY);
  });
};

exports.placeOnElipse = function(layer, centerX, centerY, angle, radiusX, radiusY) {
  layer.midX = centerX - Math.sin((angle + 180) * Math.PI / 180) * radiusX;
  return layer.midY = centerY - Math.cos((angle + 180) * Math.PI / 180) * radiusY;
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvd29yay9mcmFtZXIvbXkvYXJjL2FyY01vZHVsZS5mcmFtZXIvbW9kdWxlcy9hcmNNb3ZlbWVudC5jb2ZmZWUiLCIvd29yay9mcmFtZXIvbXkvYXJjL2FyY01vZHVsZS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNJQSxPQUFPLENBQUMsV0FBUixHQUFvQixTQUFDLEtBQUQsRUFBUSxXQUFSLEVBQXFCLFdBQXJCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDO0FBQ25CLE1BQUE7RUFBQSxLQUFBLENBQU0sS0FBTixFQUFhLFdBQWIsRUFBMEIsV0FBMUIsRUFBdUMsU0FBdkMsRUFBa0QsU0FBbEQ7RUFDQSxHQUFBLEdBQUksU0FBQyxPQUFELEVBQVMsS0FBVCxFQUFnQixFQUFoQixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixFQUE1QjtJQUNILEtBQUssQ0FBQyxJQUFOLEdBQVcsV0FBQSxHQUFZLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBQyxPQUFBLEdBQVEsR0FBVCxDQUFBLEdBQWlCLElBQUksQ0FBQyxFQUF0QixHQUEyQixHQUFwQyxDQUFBLEdBQXlDLENBQUMsU0FBQSxHQUFVLFdBQVg7V0FDaEUsS0FBSyxDQUFDLElBQU4sR0FBVyxTQUFBLEdBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLE9BQUEsR0FBUSxHQUFULENBQUEsR0FBaUIsSUFBSSxDQUFDLEVBQXRCLEdBQTJCLEdBQXBDLENBQUEsR0FBeUMsQ0FBQyxXQUFBLEdBQVksU0FBYjtFQUYzRDtFQUlKLEtBQUEsR0FBWSxJQUFBLEtBQUEsQ0FDWDtJQUFBLEtBQUEsRUFBTyxDQUFQO0lBQ0EsTUFBQSxFQUFRLENBRFI7SUFFQSxlQUFBLEVBQWlCLE1BRmpCO0dBRFc7RUFLWixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQWIsQ0FDQztJQUFBLE1BQUEsRUFDQztNQUFBLENBQUEsRUFBRyxHQUFIO0tBREQ7R0FERDtFQUlBLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBYixDQUFBO1NBRUEsS0FBSyxDQUFDLEVBQU4sQ0FBUyxVQUFULEVBQXFCLFNBQUE7V0FDcEIsR0FBQSxDQUFJLEtBQUssQ0FBQyxDQUFOLEdBQVEsQ0FBWixFQUFlLEtBQWYsRUFBc0IsV0FBdEIsRUFBbUMsV0FBbkMsRUFBZ0QsU0FBaEQsRUFBMkQsU0FBM0Q7RUFEb0IsQ0FBckI7QUFqQm1COztBQW9CcEIsT0FBTyxDQUFDLGFBQVIsR0FBc0IsU0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixPQUFqQixFQUEwQixLQUExQixFQUFpQyxPQUFqQyxFQUEwQyxPQUExQztFQUNwQixLQUFLLENBQUMsSUFBTixHQUFXLE9BQUEsR0FBUSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQUMsS0FBQSxHQUFNLEdBQVAsQ0FBQSxHQUFlLElBQUksQ0FBQyxFQUFwQixHQUF5QixHQUFsQyxDQUFBLEdBQXVDO1NBQzFELEtBQUssQ0FBQyxJQUFOLEdBQVcsT0FBQSxHQUFRLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBQyxLQUFBLEdBQU0sR0FBUCxDQUFBLEdBQWUsSUFBSSxDQUFDLEVBQXBCLEdBQXlCLEdBQWxDLENBQUEsR0FBdUM7QUFGdEM7Ozs7QUNwQnRCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiI2F1dGhvciBTZXJnaXkgVm9yb25vdiB0d2l0dGVyLmNvbS9tYW1leml0byBkcmliYmJsZS5jb20vbWFtZXppdG9cbiNkb25lIGZvciBGcmFtZXIgTG9uZG9uIGZyYW1lcmxvbmRvbi5jb21cblxuXG5leHBvcnRzLm1vdmVXaXRoQXJjPShsYXllciwgc3RhcnRQb2ludFgsIHN0YXJ0UG9pbnRZLCBlbmRQb2ludFgsIGVuZFBvaW50WSktPlxuXHRwcmludCBsYXllciwgc3RhcnRQb2ludFgsIHN0YXJ0UG9pbnRZLCBlbmRQb2ludFgsIGVuZFBvaW50WVxuXHRhcmM9KGNvdW50ZXIsbGF5ZXIsIHgxLCB5MSwgeDIsIHkyKS0+XG5cdFx0bGF5ZXIubWlkWD1zdGFydFBvaW50WC1NYXRoLnNpbigoY291bnRlcisxODApICAqIE1hdGguUEkgLyAxODApKihlbmRQb2ludFgtc3RhcnRQb2ludFgpXG5cdFx0bGF5ZXIubWlkWT1lbmRQb2ludFktTWF0aC5jb3MoKGNvdW50ZXIrMTgwKSAgKiBNYXRoLlBJIC8gMTgwKSooc3RhcnRQb2ludFktZW5kUG9pbnRZKVxuXG5cdHByb3h5ID0gbmV3IExheWVyXG5cdFx0d2lkdGg6IDBcblx0XHRoZWlnaHQ6IDBcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwibnVsbFwiXG5cblx0cHJveHkuc3RhdGVzLmFkZFxuXHRcdGZpbmlzaDpcblx0XHRcdHg6IDM2MFxuXG5cdHByb3h5LnN0YXRlcy5uZXh0KClcblxuXHRwcm94eS5vbiBcImNoYW5nZTp4XCIsIC0+XG5cdFx0YXJjIHByb3h5LngvNCwgbGF5ZXIsIHN0YXJ0UG9pbnRYLCBzdGFydFBvaW50WSwgZW5kUG9pbnRYLCBlbmRQb2ludFlcblxuZXhwb3J0cy5wbGFjZU9uRWxpcHNlPShsYXllciwgY2VudGVyWCwgY2VudGVyWSwgYW5nbGUsIHJhZGl1c1gsIHJhZGl1c1kpLT5cblx0XHRsYXllci5taWRYPWNlbnRlclgtTWF0aC5zaW4oKGFuZ2xlKzE4MCkgICogTWF0aC5QSSAvIDE4MCkqcmFkaXVzWFxuXHRcdGxheWVyLm1pZFk9Y2VudGVyWS1NYXRoLmNvcygoYW5nbGUrMTgwKSAgKiBNYXRoLlBJIC8gMTgwKSpyYWRpdXNZXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19