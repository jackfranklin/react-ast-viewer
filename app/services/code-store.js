import startingCode from '../starting-code.js!text';

export default (function() {
  var code = '';

  return {
    clear: function() {
      localStorage.removeItem('ast-code');
    },
    get: function() {
      var code = localStorage.getItem('ast-code');
      // if no code exists, use the starting code
      if(!code) {
        this.set(startingCode);
      }

      return code || startingCode;
    },
    set: function(code) {
      localStorage.setItem('ast-code', code);
    }
  }
})();
