export var Greetings;
(function (Greetings) {
    function greet(name) {
        return 'Hello ' + name;
    }
    Greetings.greet = greet;
})(Greetings || (Greetings = {}));
