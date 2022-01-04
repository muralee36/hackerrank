function getCount(objects) {
    var count = 0;
    for(let i=0; i<objects.length; i++){
        if (objects[i].x  == objects[i].y){
            count++
        }
    }
    return count;
}