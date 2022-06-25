var PennyDancer = function(top, left, time) {
  Dancer.call(this, top, left, time);
  // console.log(this.left);
  this.left = left;
  this.top = top;
  this.time = time;
  this.$node.html('<img src=\'src/clown.gif\'>');
  this.$node.css({
    border: 'none'
  });

};
PennyDancer.prototype = Object.create(Dancer.prototype);
PennyDancer.prototype.constructor = PennyDancer;

PennyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // move left to right
  //https://api.jquery.com/category/effects/
  // console.log(this.$node);
  // console.log("this is ");
  // console.log(this);
  // console.log(this.left)

  // set leftInc that is max 10% of window
  // set topInc that is max 10% of height
  // add leftInc to left
  // add topInc to top

  // left Inc is random number between 0 and 10% of width
  // boats right to left left to right
  // generate random number
  // see if random number is 2 x this.lenght if it is then reduce random number
  var leftInc;
  var topInc;

  if (!!window.lineup){
    this.left = 10;
    this.top = 10;

  } else {
    leftInc = Math.random() * ($('body').width());
    topInc = Math.random() * ($("body").height());
    if (leftInc > 2 * this.left) {
      this.left = leftInc / 2;
    } else if (leftInc < this.left / 4) {
      this.left = leftInc * 2;
    }
    if (topInc > 2 * this.top) {
      this.top = topInc / 2;
    } else if (topInc < this.top / 4) {
      this.top = topInc * 2;
    }

    // console.log(this.color);
    // console.log("animating in clown");
  }
  this.$node.animate({
    top: this.top,
    left: this.left
  });





};