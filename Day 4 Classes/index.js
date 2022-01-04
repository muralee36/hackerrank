class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    perimeter() {
        var peri = 0;
        for (let i in this.sides) {
            peri += this.sides[i];
        }
        return peri;
    }
}