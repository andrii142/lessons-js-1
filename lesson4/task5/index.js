const m = 10;
const n = 20;
let result, res = 0;
for(let i = m; i <= n; i++){
    if(i % 2 === 0 && i % 4 !== 0 && i % 5 !== 0){
        res += i;
    }else if(i % 3 === 0 && i % 5 !== 0){
        res -= i;
    }else if(i % 4 === 0 && i % 5 !== 0){
        res *= i;
    }else if(i % 5 === 0){
        console.log(i);
    }else continue;
}
result = res;