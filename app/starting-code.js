var obj = {
  init: function(x, y) {
    return x + y;
  },
  foo: function() {
    console.log('1', '2', '3');
  }
}

var x = obj.init();
obj.foo();
