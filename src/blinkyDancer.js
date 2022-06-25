var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = Dancer.prototype.step;
  // this.setPosition(top, left, timeBetweenSteps);
  // this.step();
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
// BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

//= function(step, timeBetweenSteps) {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(step, timeBetweenSteps); // make sure its binding
// };


BlinkyDancer.prototype.step = function() {
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this);
  // console.log(this.oldStep);
  Dancer.prototype.step.call(this);

  console.log(1);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

