// Liskov Substitution Principle

class BaseBird {
    makeSound () {}
}

class Bird extends BaseBird {
    fly () {
        console.log('Bird is flying')
    }

    makeSound () {}
}

class Sparrow extends Bird {
    fly () {
        console.log('Sparrow is flying')
    }

    makeSound () {
        console.log('Sparrow is chirping')
    }
}

class Penguin extends BaseBird {
    makeSound () {
        console.log('Penguin is making sound')
    }
}

function makeBirdFly (bird: Bird) {
    bird.fly()
}

// makeBirdFly(new Penguin()) // Error: Argument of type 'Penguin' is not assignable to parameter of type 'Bird'

makeBirdFly(new Sparrow()) // Sparrow is flying