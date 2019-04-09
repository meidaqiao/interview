function getValue(n) {
    if(n == 1 || n == 2){
        return  1
    } else {
        // return getValue(n-1) + getValue(n-2)
        let ac1 = 1, ac2 = 1;
        for (let i = 2; i < n; i++){
            [ac1, ac2] = [ac2, ac1 + ac2];
        }
        return ac2;
    }
}
console.log(getValue(50));