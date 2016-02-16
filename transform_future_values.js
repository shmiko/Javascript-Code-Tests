var greetingPromise = sayHello();
greetingPromise.then(function (greeting) {
    return greeting + '!!!!';
}).then(function (greeting) {
    console.log(greeting); // 'hello world!!!!’
});
