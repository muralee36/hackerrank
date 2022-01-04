function getLetter(s) {
    let letter;
    letter = s[0];
    switch(true){
        case 'aeiou'.includes(letter):
            letter = 'A';
            break;
        case 'bcdfg'.includes(letter):
            letter = 'B';
            break;
        case 'hjklm'.includes(letter):
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    return letter;
}