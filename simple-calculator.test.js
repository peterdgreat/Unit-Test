const calculator = require ('./simple-calculator');

const new_calculator = new calculator();

test ('2 + 3 = 5', () =>{
    expect (new_calculator.add(2,3)).toBe(5);
})

test ('1+5+10 = 16', () => {
    expect (new_calculator.add(1,5,10)).toBe(16);
})

test ('5-1 = 4', () => {
    expect (new_calculator.subtract(5,1)).toBe(4);
})

test ('5-1-2 = 2', () => {
    expect (new_calculator.subtract(5,1,2)).toBe(2);
})

test ('5/2 = 2.5', () => {
    expect (new_calculator.division(5,2)).toBe(2.5);
})

test ('5*2 = 10', () => {
    expect (new_calculator.muliplication(5,2)).toBe(10);
})