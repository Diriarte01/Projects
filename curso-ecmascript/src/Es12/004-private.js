class user {

    //Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //metodos
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age
    }

    set #uAge(n){
        this.age = n;
    }
    
}

const daniel1 = new user('Daniel',35);
console.log(daniel1.uAge)
console.log(daniel1.uAge = 30)