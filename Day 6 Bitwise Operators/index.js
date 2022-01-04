function getMaxLessThanK(n, k){
    var max = 0;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            var andOp = i&j;
            if (i < j && andOp && andOp < k && andOp > max){
                max = andOp
            }
        }
    }
    return max;
}