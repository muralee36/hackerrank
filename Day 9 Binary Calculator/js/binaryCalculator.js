function btnclick(e) {
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
    var res = document.getElementById("res");
    switch (action) {
        case 'C': 
            res.innerHTML = '';
            break;
        case '=':
            var val = res.innerHTML;
            var re = /\d+/g;
            val = val.replace(re, (match)=>{
                return parseInt(match, 2);
            });
            res.innerHTML = eval(val).toString(2);
            break;
        default: 
            res.innerHTML += btn.innerHTML.toString();
            break;
    }
    
}
var btns = document.getElementsByTagName("button");
for (let bt of btns) {
    bt.onclick = btnclick;
}