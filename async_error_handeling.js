var greetingPromise = sayHello();
greetingPromise
    .then(addExclamation)
    .then(function (greeting) {
        console.log(greeting);
    }, function(error) {
        console.error('uh oh: ', error);
    });
