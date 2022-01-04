function vowelsAndConsonants(s) {
    var conso = [];
    for(let i=0; i<s.length; i++){
        if (['a', 'e', 'i', 'o', 'u'].includes(s[i])){
            console.log(s[i]);
        }
        else {
            conso.push(s[i]);
        }
    }
    conso.map(x=> console.log(x));
}