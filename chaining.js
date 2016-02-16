function getPromise(url) {
  // return a Promise here
  // send an async request to the url as a part of promise
  // after getting the result, resolve the promise with it
}

var promise = getPromise('some url here');

promise.then(function(result) {
  //we have our result here
  return getPromise(result); //return a promise here again
}).then(function(result) {
  //handle the final result
});
