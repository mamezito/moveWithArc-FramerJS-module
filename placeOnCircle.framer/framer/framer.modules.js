require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"arcMovement":[function(require,module,exports){
exports.moveWithArc = function(layer, startPointX, startPointY, endPointX, endPointY) {
  var arc, proxy;
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

exports.circlePoint = function(centerX, centerY, angle, radiusX, radiusY) {
  var x, y;
  x = centerX - Math.sin((angle + 180) * Math.PI / 180) * radiusX;
  y = centerY - Math.cos((angle + 180) * Math.PI / 180) * radiusY;
  return print(x, y);
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFtZXppdG8vZ2l0L21vdmVXaXRoQXJjL3BsYWNlT25DaXJjbGUuZnJhbWVyL21vZHVsZXMvYXJjTW92ZW1lbnQuY29mZmVlIiwiL1VzZXJzL21hbWV6aXRvL2dpdC9tb3ZlV2l0aEFyYy9wbGFjZU9uQ2lyY2xlLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBLE9BQU8sQ0FBQyxXQUFSLEdBQW9CLFNBQUMsS0FBRCxFQUFRLFdBQVIsRUFBcUIsV0FBckIsRUFBa0MsU0FBbEMsRUFBNkMsU0FBN0M7QUFDbkIsTUFBQTtFQUFBLEdBQUEsR0FBSSxTQUFDLE9BQUQsRUFBUyxLQUFULEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCO0lBQ0gsS0FBSyxDQUFDLElBQU4sR0FBVyxXQUFBLEdBQVksSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLE9BQUEsR0FBUSxHQUFULENBQUEsR0FBaUIsSUFBSSxDQUFDLEVBQXRCLEdBQTJCLEdBQXBDLENBQUEsR0FBeUMsQ0FBQyxTQUFBLEdBQVUsV0FBWDtXQUNoRSxLQUFLLENBQUMsSUFBTixHQUFXLFNBQUEsR0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQUMsT0FBQSxHQUFRLEdBQVQsQ0FBQSxHQUFpQixJQUFJLENBQUMsRUFBdEIsR0FBMkIsR0FBcEMsQ0FBQSxHQUF5QyxDQUFDLFdBQUEsR0FBWSxTQUFiO0VBRjNEO0VBSUosS0FBQSxHQUFZLElBQUEsS0FBQSxDQUNYO0lBQUEsS0FBQSxFQUFPLENBQVA7SUFDQSxNQUFBLEVBQVEsQ0FEUjtJQUVBLGVBQUEsRUFBaUIsTUFGakI7R0FEVztFQUtaLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBYixDQUNDO0lBQUEsTUFBQSxFQUNDO01BQUEsQ0FBQSxFQUFHLEdBQUg7S0FERDtHQUREO0VBSUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFiLENBQUE7U0FFQSxLQUFLLENBQUMsRUFBTixDQUFTLFVBQVQsRUFBcUIsU0FBQTtXQUNwQixHQUFBLENBQUksS0FBSyxDQUFDLENBQU4sR0FBUSxDQUFaLEVBQWUsS0FBZixFQUFzQixXQUF0QixFQUFtQyxXQUFuQyxFQUFnRCxTQUFoRCxFQUEyRCxTQUEzRDtFQURvQixDQUFyQjtBQWhCbUI7O0FBbUJwQixPQUFPLENBQUMsYUFBUixHQUFzQixTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEVBQWlDLE9BQWpDLEVBQTBDLE9BQTFDO0VBQ3JCLEtBQUssQ0FBQyxJQUFOLEdBQVcsT0FBQSxHQUFRLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBQyxLQUFBLEdBQU0sR0FBUCxDQUFBLEdBQWUsSUFBSSxDQUFDLEVBQXBCLEdBQXlCLEdBQWxDLENBQUEsR0FBdUM7U0FDMUQsS0FBSyxDQUFDLElBQU4sR0FBVyxPQUFBLEdBQVEsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLEtBQUEsR0FBTSxHQUFQLENBQUEsR0FBZSxJQUFJLENBQUMsRUFBcEIsR0FBeUIsR0FBbEMsQ0FBQSxHQUF1QztBQUZyQzs7QUFJdEIsT0FBTyxDQUFDLFdBQVIsR0FBb0IsU0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixLQUFuQixFQUEwQixPQUExQixFQUFtQyxPQUFuQztBQUNsQixNQUFBO0VBQUEsQ0FBQSxHQUFFLE9BQUEsR0FBUSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQUMsS0FBQSxHQUFNLEdBQVAsQ0FBQSxHQUFlLElBQUksQ0FBQyxFQUFwQixHQUF5QixHQUFsQyxDQUFBLEdBQXVDO0VBQ2pELENBQUEsR0FBRSxPQUFBLEdBQVEsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLEtBQUEsR0FBTSxHQUFQLENBQUEsR0FBZSxJQUFJLENBQUMsRUFBcEIsR0FBeUIsR0FBbEMsQ0FBQSxHQUF1QztTQUNqRCxLQUFBLENBQU0sQ0FBTixFQUFRLENBQVI7QUFIa0I7Ozs7QUN2QnBCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiI2F1dGhvciBTZXJnaXkgVm9yb25vdiB0d2l0dGVyLmNvbS9tYW1leml0byBkcmliYmJsZS5jb20vbWFtZXppdG9cbiNkb25lIGZvciBGcmFtZXIgTG9uZG9uIGZyYW1lcmxvbmRvbi5jb21cblxuXG5leHBvcnRzLm1vdmVXaXRoQXJjPShsYXllciwgc3RhcnRQb2ludFgsIHN0YXJ0UG9pbnRZLCBlbmRQb2ludFgsIGVuZFBvaW50WSktPlxuXHRhcmM9KGNvdW50ZXIsbGF5ZXIsIHgxLCB5MSwgeDIsIHkyKS0+XG5cdFx0bGF5ZXIubWlkWD1zdGFydFBvaW50WC1NYXRoLnNpbigoY291bnRlcisxODApICAqIE1hdGguUEkgLyAxODApKihlbmRQb2ludFgtc3RhcnRQb2ludFgpXG5cdFx0bGF5ZXIubWlkWT1lbmRQb2ludFktTWF0aC5jb3MoKGNvdW50ZXIrMTgwKSAgKiBNYXRoLlBJIC8gMTgwKSooc3RhcnRQb2ludFktZW5kUG9pbnRZKVxuXG5cdHByb3h5ID0gbmV3IExheWVyXG5cdFx0d2lkdGg6IDBcblx0XHRoZWlnaHQ6IDBcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwibnVsbFwiXG5cblx0cHJveHkuc3RhdGVzLmFkZFxuXHRcdGZpbmlzaDpcblx0XHRcdHg6IDM2MFxuXG5cdHByb3h5LnN0YXRlcy5uZXh0KClcblxuXHRwcm94eS5vbiBcImNoYW5nZTp4XCIsIC0+XG5cdFx0YXJjIHByb3h5LngvNCwgbGF5ZXIsIHN0YXJ0UG9pbnRYLCBzdGFydFBvaW50WSwgZW5kUG9pbnRYLCBlbmRQb2ludFlcblxuZXhwb3J0cy5wbGFjZU9uRWxpcHNlPShsYXllciwgY2VudGVyWCwgY2VudGVyWSwgYW5nbGUsIHJhZGl1c1gsIHJhZGl1c1kpLT5cblx0bGF5ZXIubWlkWD1jZW50ZXJYLU1hdGguc2luKChhbmdsZSsxODApICAqIE1hdGguUEkgLyAxODApKnJhZGl1c1hcblx0bGF5ZXIubWlkWT1jZW50ZXJZLU1hdGguY29zKChhbmdsZSsxODApICAqIE1hdGguUEkgLyAxODApKnJhZGl1c1lcblxuZXhwb3J0cy5jaXJjbGVQb2ludD0oY2VudGVyWCwgY2VudGVyWSwgYW5nbGUsIHJhZGl1c1gsIHJhZGl1c1kpLT5cblx0XHR4PWNlbnRlclgtTWF0aC5zaW4oKGFuZ2xlKzE4MCkgICogTWF0aC5QSSAvIDE4MCkqcmFkaXVzWFxuXHRcdHk9Y2VudGVyWS1NYXRoLmNvcygoYW5nbGUrMTgwKSAgKiBNYXRoLlBJIC8gMTgwKSpyYWRpdXNZXG5cdFx0cHJpbnQgeCx5XG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
