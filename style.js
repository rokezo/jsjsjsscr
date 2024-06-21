class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      if (value < 0) {
        throw new Error("Radius cannot be negative");
      }
      this._radius = value;
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    area() {
      return Math.PI * this._radius ** 2;
    }
  
    circumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  const circle = new Circle(5);
  
  console.log(circle.radius); 
  
  circle.radius = 10;
  console.log(circle.radius); 
  
  console.log(circle.diameter); 
  
  console.log(circle.area()); 
  
 
  console.log(circle.circumference()); 