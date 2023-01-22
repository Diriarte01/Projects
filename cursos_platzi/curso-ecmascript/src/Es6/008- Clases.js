//Clases en Javascript


//Delcarando la clase
class User {};

/**
 * Instanciar la clase
 * const newUser = new User();
 */

class user {
    //metodos
    greeting(){
        return 'Hello';
    }
}

const hndx = new user().greeting();
console.log(hndx);


//constructor

class user {
    constructor(){
        console.log('nueva Instancia')
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();

//this

class user {
    constructor(name){
        this.name = name;
    }

    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const daniel = new user('Daniel');
console.log(daniel.greeting());


//setters and getters

class user {

    //Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age
    }

    set uAge(n){
        this.age = n;
    }
    
}

const daniel1 = new user('Daniel',35);
console.log(daniel1.uAge)
console.log(daniel1.uAge = 30)