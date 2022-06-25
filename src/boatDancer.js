var BoatDancer = function(top, left, time) {
  BlinkyDancer.call(this, top, left, time);
  // console.log(this.left);
  this.left = left;
  this.top = top;
  this.time = time;
  this.$node.html("<img src='src/boat.png' width= 100 >");
  this.$node.css({
    border: 'none'
  });
  // console.log("HTML:");
  // console.log(this.$node);

};
BoatDancer.prototype = Object.create(BlinkyDancer.prototype);
BoatDancer.prototype.constructor = BoatDancer;

BoatDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // move left to right
  //https://api.jquery.com/category/effects/
  // console.log(this.$node);
  // console.log("this is ");
  // console.log(this);
  // console.log(this.left)
  this.left = Math.random() * $("body").width();
  this.top = Math.random() * $("body").height();

  // var styleSettings = {
  //   top: this.top,
  //   left: this.left
  // };
  // this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  // // console.log(this.color);
  // this.$node.css('border', 'solid 10px  white');
  // console.log('animating boat');
  this.$node.animate({
    // top: this.top,
    left: this.left
  });
  // #e19219
  //   const randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
  //document.body.style.backgroundColor = "#" + randomColor;
  // color.innerHTML = "#" + randomColor;



};