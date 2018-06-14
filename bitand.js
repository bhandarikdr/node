function getMaxLessThanK(n, k){
    var res=0;
    for(let i=1;i<=n;i++)
    for(let j=i+1;j<=n;j++){
        let bitvalue = i & j;
        console.log("("+i+","+j+")="+bitvalue);
        if(bitvalue < k && bitvalue > res)
            res = bitvalue;
    }
    console.log("\n");
    return res;
}

 console.log(getMaxLessThanK(9, 2));
 console.log(getMaxLessThanK(8, 3));