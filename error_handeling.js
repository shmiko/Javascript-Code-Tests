var greeting;
try {
    greeting = sayHello();
    greeting = addExclamation(greeting);
    console.log(greeting);
} catch(error) {
    console.error('error: ', error); 
}
