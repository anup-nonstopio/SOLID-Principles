class Bird {
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

class Penguin extends Bird {
    fly () {
        throw new Error('Penguin cannot fly') // LSP violation
    }

    makeSound () {
        console.log('Penguin is making sound')
    }
}

function makeBirdFly (bird: Bird) {
    bird.fly()
}

makeBirdFly(new Penguin())