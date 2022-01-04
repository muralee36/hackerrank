var btnMid = document.getElementById("btn5");
var values = [1, 2, 3, 6, 9, 8, 7, 4]
var ids = [1, 2, 3, 6, 9, 8, 7, 4]
btnMid.onclick = () => {
    values.unshift(values.pop());
    for(let i=0;i<8; i++){
        document.getElementById("btn" + ids[i].toString()).innerHTML = values[i];
    }
}