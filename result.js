function result(point){
    let res;
if(point<=30)
res = 'A';
else if(point <=20)
res = 'B';
else 
res = 'C';
    return res;
}

console.log(result(15));