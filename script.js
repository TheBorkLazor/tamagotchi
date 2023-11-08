class Tamagotchi {
  constructor(name, health, hunger, stress) {
    this.name = name;
    this.health = health;
    this.hunger = hunger;
    this.stress = stress;
    this.weight = 50;
  }
  drink() {
    this.health += 5;
    console.log(`${this.name} health has gone up to ${this.health}`);
  }
  eats() {
    this.health += 5;
    this.hunger += 15;
    this.stress -= 10;
    this.weight += 10;
    console.log(
      `${this.name}'s health is at ${this.health} and hunger is currently at ${this.hunger} and weight has gone up to ${this.weight}`
    );
  }
}

const jimmy = new Tamagotchi("Jimmy", 100, 50, 0);

jimmy.drink();
jimmy.eats();

class Exercise extends Tamagotchi {
  constructor(name, health, hunger, stress, happy) {
    super(name, health, hunger, stress, happy);
    this.happy = happy;
  }
  playFetch() {
    this.hunger -= 15;
    this.stress -= 10;
    this.weight -= 10;
    console.log(`${this.name} is happy`);
    return this;
  }
}

const jimmyExercise = new Exercise("Jimmy", 100, 50, 0, 0);

jimmyExercise.playFetch();
