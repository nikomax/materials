function shout() {
    //this = obj2

    console.log(this.name);
}

var name = 'bar1';

shout(); // bar1

var obj1 = { name: 'bar2', say: shout };
var obj2 = { name: 'bar3', say: shout };

obj1.say(); // bar2
obj2.say(); // bar3
