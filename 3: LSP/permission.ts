class User {
    getAccessLevel() {
        console.log('User access level');
    }

    getRole() {
        console.log('User role');
    }
}

class Admin extends User {
    getAccessLevel() {
        console.log('Admin access level');
    }

    getRole() {
        console.log('Admin role');
    }
}

class Manager extends User {
    getAccessLevel() {
        console.log('Manager access level');
    }

    getRole() {
        console.log('Manager role');
    }
}

class Customer extends User {
    getAccessLevel() {
        throw new Error('Customer does not have access level'); // violates LSP
    }

    getRole() {
        console.log('Customer role');
    }
}

function checkAccessLevel(user: User) {
    user.getAccessLevel();
}

checkAccessLevel(new Customer()); // Error: Customer does not have access level
checkAccessLevel(new Admin()); // Admin access level