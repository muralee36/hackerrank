function sides(literals, ...expressions) {
    const [area, perimeter] = expressions;
    const squareRoot = Math.sqrt(perimeter * perimeter - 16 * area);
    var side = [(perimeter - squareRoot) / 4, (perimeter + squareRoot) / 4];
    return side.sort();
}