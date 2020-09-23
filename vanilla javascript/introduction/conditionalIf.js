outer: for (let i =2; i<1000; ++i){
    for (let j= 2; j<i; ++j){
        if (i%j==0){
           continue outer;
        }
    }

    console.log(`number ${i} is prime`);
}