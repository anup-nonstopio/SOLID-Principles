class UserController {
    userService: UserService;

    // dependency injection
    constructor(userService: UserService) {
        this.userService = userService;
    }

    save() {
        this.userService.save();
    }
}

class UserService {
    // dependency injection
    constructor(private userRepository: UserRepository) {}

    save() {
        this.userRepository.save();
    }
}

class UserRepository {
    save() {
        console.log('save user in the database');
    }
}

// violation of DIP
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userController.save();