var myObj = {
  prop: 2,
  init: function() {
    this.foo = 2;
    return 5;
  }
};

var x = myObj.init();

console.log(x);
