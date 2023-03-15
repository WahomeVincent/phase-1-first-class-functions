function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function namedFunction(){
        return "This is my named function";
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function(){
        return "This is my anonymous function";
    }

}