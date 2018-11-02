// import the hello function
const { hello, goodbye } = require('./hello');

const cowsay = require('cowsay');

console.log(cowsay.say({
    text: 'hey',
    T: 'W'
}));

hello('friend');
goodbye('loser');

