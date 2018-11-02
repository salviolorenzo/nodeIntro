function hello(whom) {
    console.log(`Hello ${whom}!`);
}

function goodbye(whom) {
    console.log(`Goodbye ${whom}.`);
}

// Export the hello function
module.exports = {
    'hello': hello,
    'gooodbye': goodbye
};
