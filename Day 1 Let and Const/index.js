function main() {
    const PI = Math.PI;
    let r = Number.parseFloat(readLine());
    let area = PI * r * r;
    let perimeter = 2 * PI * r;
    // Print the area of the circle:
    console.log(area);
    // Print the perimeter of the circle:
    console.log(perimeter);
}