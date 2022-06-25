// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  // console.log("in Dancer time Between steps is " + timeBetweenSteps);

  this.step();
  this.setPosition(top, left, timeBetweenSteps);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (!window.lineup) {
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
  }
};

Dancer.prototype.lineUp = function() {
  // can set position to (top, index of dancers, left, 10)
  // can we toggle linedUp here?
  window.linedUp = true;

  // console.log(this);
  this.top = 10;
  this.left = 10;

};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  console.log("calling setPosition");
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};