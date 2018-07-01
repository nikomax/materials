function identity(num) {
    return num;
}

function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
}

function identityf(num) {
    return function () {
        return num;
    }
}

function addf(a) {

    return function (b) {
        return a + b;
    }
}


// liftf(mul)(5)(6);

function liftf(func) {
    return function (a) {
        return function (b) {
            return func(a,b);
        }
    }
}





