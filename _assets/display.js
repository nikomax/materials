function displayPlain(text) {
    var div = document.createElement('h1');
    div.innerText = text;
    document.body.appendChild(div)
}

function display() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'object')
            displayObject(arguments[i]);
        else
            displayValue(arguments[i]);
    }
}

function displayObject(object) {
    displayValue(getTypeName(object) + ' {');
    for(var propertyName in object) {
        displayValue(propertyName + ': ' + object[propertyName]);
    }
    displayValue('}')
}

function displayValue(value) {
    var div = document.createElement('div');
    div.style.fontSize='32px';
    div.innerText = value;
    document.body.appendChild(div);
}

function getTypeName(object) {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec(object.constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
}
