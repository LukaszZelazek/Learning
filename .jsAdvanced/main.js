
class Circle { //body of this class for properties and methods
    constructor(radius) {
    this.radius = radius;
}
//Instance Method - specific to circle object
draw() {
}
    //Statis Method - nopt tied to object
static parse(str) { // parse will not be visible on console but when we type Circle.parse it will be.
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
    }
}

const circle = Circle.parse('{"radius": 1 }');
console.log(circle);

