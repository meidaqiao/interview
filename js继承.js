
function Animal(name) {
    this.name = name || 'Animal'
    this.sleep = function () {
        console.log(this.name + '睡觉');
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name + '吃' + food);
}
/**
 * 原型链继承
 * */
// function Cat() {}
// Cat.prototype = new Animal()
// Cat.prototype.name = 'cat'
// var cat = new Cat()
// console.log(cat.name);
// console.log(cat.eat('fish'));
// console.log(cat.sleep());
// console.log(cat instanceof Animal);
// console.log(cat instanceof Cat);

/**
* 构造继承
* */
// function Cat(name) {
//     Animal.call(this)
//     this.name = name || 'Tom'
// }
// var cat = new Cat()
// console.log(cat.name);
// console.log(cat.eat('fish'));
// console.log(cat.sleep());
// console.log(cat instanceof Animal);
// console.log(cat instanceof Cat);

/**
 * 实例继承
 * */
// function Cat(name){
//     var instance = new Animal();
//     instance.name = name || 'Tom';
//     return instance;
// }
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal);
// console.log(cat instanceof Cat);

/**
 * 拷贝继承
 * */
// function Cat(name){
//     var animal = new Animal();
//     for(var p in animal){
//         Cat.prototype[p] = animal[p];
//     }
//     Cat.prototype.name = name || 'Tom';
// }
//
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal);
// console.log(cat instanceof Cat);

/**
 * 组合继承
 * */
// function Cat(name){
//     Animal.call(this);
//     this.name = name || 'Tom';
// }
// Cat.prototype = new Animal();
//
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal);
// console.log(cat instanceof Cat);

/**
 * 寄生组合继承
 * */
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
(function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Animal.prototype;
    //将实例作为子类的原型
    Cat.prototype = new Super();
})();

var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);