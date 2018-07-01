// конструктор
function Animal(name) {
    this.name = name;

}

Animal.prototype.__speed = 0;
// методы в прототипе
Animal.prototype.run = function(speed) {
    this.__speed += speed;
    console.log( this.name + ' бежит, скорость ' + this.__speed );
};

Animal.prototype.stop = function() {
    this.__speed = 0;
    console.log( this.name + ' стоит' );
};

var animal = new Animal('Зверь');


function Rabbit(name) {
    this.name = name;
    this.eats = ['морковка', 'капуста'];
}

Rabbit.prototype = Object.create(Animal.prototype);

let jim = new Rabbit();

console.log(jim);






//
// console.log( animal.__speed ); // 0, свойство взято из прототипа
// animal.run(5); // Зверь бежит, скорость 5
//
// animal.__speed = 100000;
//
// animal.run(5); // Зверь бежит, скорость 10
// animal.stop(); // Зверь стоит
//



//
// slideshow.afterLeftClick = function () {
//
// };
//
// slideshow.__leftClick = function () {
//
//     //main code
// };
//
// slideshow.__leftClick = function () {
//     fireworks();
//     //main code
// };
