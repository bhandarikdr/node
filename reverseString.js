
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
     main(); 
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const s = readLine();
    
    reverseString(s);

    process.exit();
}

function reverseString(s) {
    var str = s.toString();
    try{
        var splt = s.split("");
        var rev = splt.reverse();
        var str = rev.join("");
    }catch (e){
        console.log(e.message);
    }
    finally{
        console.log(str);
    }    
}