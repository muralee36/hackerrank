function isPositive(a) {
    if (a > 0) {
        return "YES";
    }
    else {
        throw (a < 0) ? Error("Negative Error") : Error("Zero Error");
    }

}