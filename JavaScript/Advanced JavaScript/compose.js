const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num+1;
console.log(compose(sum,sum)(5)); 

/* 

step1:  a = 5: f(g(5))

step2: g=sum: f(sum(5)) = sum(5) = 5+1 = 6
        f(6)

step3: f=sum: f(6) = sum(6) = 6+1 = 7

Therefore, compose(sum, sum)(5) = 7      

*/