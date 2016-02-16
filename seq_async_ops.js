var greetingPromise = sayHello();
greetingPromise
    .then(addExclamation)
    .then(function (greeting) {
        console.log(greeting); // 'hello world!!!!’
    });
