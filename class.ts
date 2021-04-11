class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    run = () => {
        return `${this.name} is running`;
    }
}

const snake = new Animal('snake');
console.log(snake.run());

class Dog extends Animal {
    bark = () => {
        return `${this.name} is barking`;
    }
}

const dog: Dog = new Dog('dog');
console.log(dog.bark());
console.log(dog.run());

// public 默认
// private 只能再类中访问，子类中也不能访问
// protect 子类可以访问
// readonly 只能读取
// static 通过类进行访问
class Cat extends Animal {
    constructor(name: string) {
        super(name);
        console.log(this.name);
    }

    run = () => {
        return 'Meow';
    }
}

const newCat: Cat = new Cat('mimi');
console.log(newCat.run());

interface Radio {
    switchRadio(): void;
}

interface Battery {
    checkStatus(): void;
}

class Car implements Radio {
    switchRadio = () => {
        console.log('switch radio');
    }
}

class CellPhone implements Radio, Battery {
    switchRadio = () => {

    }

    checkStatus = () => {
        
    }
}