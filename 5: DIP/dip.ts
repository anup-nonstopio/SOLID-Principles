// DIP: Dependency Inversion Principle

interface Repository {
    save(): void;
}

interface Service {
    save(): void;
}

class UserController {
    service: Service;

    // dependency injection
    constructor(service: Service) { // depends on abstraction not on concrete classes
        this.service = service;
    }

    save() {
        this.service.save();
    }
}

class UserService {
    // dependency injection
    constructor(private repository: Repository) {} // depends on abstraction

    save() {
        this.repository.save();
    }
}

class UserRepository implements Repository {
    save() {
        console.log('save user in the database');
    }
}

class UserPostgresRepository implements Repository {
    save() {
        console.log('save user in the postgres database');
    }
}

class UserMongoRepository implements Repository {
    save() {
        console.log('save user in the mongo database');
    }
}

class UserFakeRepository implements Repository {
    save() {
        console.log('save user in the fake database');
    }
}

class ModernUserService implements Service {
    constructor(private repository: Repository) {}

    save() {
        this.repository.save();
    }
}

const postgresRepository = new UserPostgresRepository(); // can be changed to UserRepository
const mongoRepository = new UserMongoRepository(); // can be changed to UserRepository
const fakeRepository = new UserFakeRepository(); // can be changed to UserRepository

//const userService = new UserService(fakeRepository); 
const userService = new ModernUserService(fakeRepository); // can be changed to UserService
const userController = new UserController(userService);

userController.save();