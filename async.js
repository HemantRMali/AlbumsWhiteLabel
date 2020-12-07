// Callback example
//Callbacks are functions that are passed to other functions
//Example of callback functions using setTimeout
setTimeout(() => {
  console.log('timeout');
}, 1000);

const someFunction = function (arg1, callback) {
  // execution starts here
  console.log(arg1);

  // complete
  callback();
};

const someCallbackFunction = function () {
  console.log('Done!');
};

someFunction('some arg', someCallbackFunction);
