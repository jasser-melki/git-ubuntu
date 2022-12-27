function countCharAtIndex(string1, index, string2){
    var n=0;
    var x=0;
    while (n<string2.length){ 
        ;
        if (string1[index]===string2[n]){x++;}n++;
        
    }
    return x
}
function reverseString(str){
    var str2="";
    var x=str.length-1;
    while(x>0){str2=str2+str[x];
        x--;
    }
    return str2;
}
function getIndeoxOf(string,char){
    var n=-1;
    var x=0;
    while (n<string.length-1){n++;
        if (string[n]===char) {x=n;break;
            
        }
    }return x
}
function sumEven(number1, number2){
    var x=0;
    var n=number2-1;
    while (number2>number1){
        if (n%2===0) {
            x+=n;
        } number2--;
        n--;
    }return x
}
function primeCounter(number) {
    var x=0;
    var a=number-1;
    while (a>0){
        if (a%2!==0) {x++;
            
        }
        a--;
    }
    return x
}

function getIndeoxOf(string,char){
    var n=-1;
    var x=0;
    while (n<string.length-1){n++;
        if (string[n]===char) {x=n;
            
        }
    }return x
}

function countCharAtIndex(string1, index, string2){
    var n=0;
    var x=0;
    while (n<string2.length){ 
        ;
        if (string1[index]===string2[n]){x++;}n++;
        
    }
    return x
}

function countCharAtIndex(string1, index, string2){
    var n=0;
    var x=0;
    while (n<string2.length+1){ 
        n++;
        if (string1[index]===string2[n]){x++;}
        
    }
    return x
}

function  multiplyBy10NTimes (num,n){
    while (n>0){
        num*=10;
        n--;
    }
    return num
}

function productMinToMax(min, max){
    var x=min;
    while (max-1>min){
        max--;
        x=x*max;
    }
    return x
}
