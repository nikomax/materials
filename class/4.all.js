//
//
// function say() {
//     console.log(this.text);
// }
//
// var o2 = { text: 'bar2' };
// var o3 = { text: 'bar3' };
//
// var o1 = {
//     text: 'bar1',
//     say: say
// };
//
// o1.say();
// o1.say.call(o2);
// o1.say.call(o3);


// var arr = [1,2,3,4,5,6,7,45,2];
//
// console.log(Math.max.apply(arr, arr));

// Math.max(1,2,3,4,5,6,7,45,2)


// function max() {
//     var array = arguments;
//
//     var max = array[0];
//
//     for (var i = 0; i < array.length; i++ ) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//
//     return max;
// }
// var a = 30;
// var b = 45;
//
// console.log( max.apply(null, [a,b])  );

// var arr1 = [1,2,3,4,5,6,7,8];
//
// arr1.join = 1;
//
//
// console.log( [].join.apply(arr1, ['::'] )  );
//
//
// str.split('').reverse().join();
//
//
// function join () {
//     return this;
// }
//


var car = {
    speed: 200,
    getSpeed: function (name) {
        return 'Transport: ' + name + ' || Speed: ' + this.speed;
    }
};

var plane = {
    speed: 1000
};

var train = {
    speed: 500
};

console.log( car.getSpeed('Car') );

console.log( car.getSpeed.apply(plane, ['Plane']) );

plane.speed = 1200;

console.log( car.getSpeed.apply(plane, ['Plane']) );

var getPlaneSpeed = bind(car.getSpeed, plane);

// var getPlaneSpeed = car.getSpeed.bind(plane);


console.log(getPlaneSpeed('Plane') );
plane.speed = 1201;
console.log(getPlaneSpeed('Plane1') );

function bind(func, context) {
    return function(...args) {
        return func.apply(context, args);
    };
}


//
// var func = car.getSpeed.bind(plane).bind(train);
//
// console.log(func('aaaa'));
//
//
//
//


function Slider() {

    this.domElems = {
        container: document.getElementById('container'),
        prev: document.getElementById('prev'),
        next: document.getElementById('next')
    }


}


const slider = new Slider();
