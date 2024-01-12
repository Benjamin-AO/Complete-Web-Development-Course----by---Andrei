class Player{
    constructor(g={"name":names, "role":role}){
        this.name = g["name"];
        this.role = g["role"];
    }

    intoduce = () => {
        console.log(`Hi my name is ${this.name} and my player role is ${this.role}`);
    }
}

const player1 = new Player(g={"role":"'goodGuy'", "name":"Mario"});

player1.intoduce();

class Animal{
    constructor(movement, breathe, sound, habitat){
        this.movement = movement;
        this.breathe = breathe;
        this.sound = sound;
        this.habitat = habitat;
    }

    whichKingdom(){
        console.log("This is the 'Animal Kingdom'");
    }
}

class Fish extends Animal {
    constructor(movement, breathe, sound, habitat){
        super(movement, breathe, sound, habitat);
    }
    // properties = () => {
    //     console.log();
    // }

    move() {console.log(`I ${this.movement}`);}
    breathing = () => {console.log(`I breath with ${this.breathe}`);}
    makeSound = () => {console.log(this.sound);}
    habitation = () => {console.log(`${this.habitat} is where I live.`);}
}

const f = new Fish('swim', "Gills", "Silently swimming", "Aquatics");
f.move();
f.breathing();
f.makeSound();
f.habitation();
f.whichKingdom();



