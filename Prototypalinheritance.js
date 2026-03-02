let person={
    greet: function(){
        console.log("Hello");
    }
}

let student = Object.create(person);
student.name = "Ashwini"

console.log(student.name)
student.greet();

// 2

let animal={
    sound : function(){
        console.log("Animal makes sound");
    }
}

let cat = Object.create(animal);

cat.sound();

// 3

let Animal = {
    eat: function(){
        console.log("Animal is eating");
    }
}

let dog = Object.create(Animal);
    dog.bark=function(){
         console.log("Dog is barking");
    }

dog.bark();
Animal.eat();

// 4

let vehical = {
    stat: function(){
        console.log("Vehical started");
    }
}

let Car = Object.create(vehical);
Car.brand = "Toyota"
    Car.drive=function(){
        console.log("Car is driving")
    }

console.log(Car.brand)
Car.stat();
Car.drive();
