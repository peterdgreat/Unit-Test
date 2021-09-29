class Calculator {
    add (...numbers) {
        const result = numbers.reduce((prev, curr) => 
            prev + curr
            ,0);
        return result;
    }
   subtract (initial, ...numbers){
       return numbers.reduce((prev, curr) => 
           prev - curr
       , initial)
   }

   muliplication (...numbers) {
       return numbers.reduce((prev, curr) => 
           prev* curr
       , 1)
   }

   division (initial, ...numbers) {
       return numbers.reduce ((prev, curr) => 
           prev/curr
       , initial)

   }
}

module.exports = Calculator;