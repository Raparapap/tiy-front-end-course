// Given 3 functions in a global scope create a new function in a global scope that encapsulates those 3 functions in a private scope. You should still be able to call restart from the global scope.

function qwerty() {
  
 this.on = function on() {
  console.log('On');
  };

 this.off = function off() {
  console.log('Off');
  };

  this.restart = function restart() {
    this.off();
    this.on();
  };
  
}

asdfgh = new qwerty();

asdfgh.restart();