// map() Practice

let prices = [ 100, 200, 300, 400 ];

let finalPrices = prices.map(prices => prices * 1.18);
 console.log(finalPrices);

//  

let price = [100, 250, 399];

let formatted = price.map(price => "₹" + price );
console.log(formatted);


//  filter() Practice

let marks = [45, 75, 30, 90, 60, 82];

let topStudent = marks.filter(marks => marks > 60);
console.log(topStudent);

// 

let words = ["cat", "elephant", "dog", "tiger", "lion"];

let longWords = words.filter(word => word.length > 4);
console.log(longWords);



// reduce() Practice

let salaries = [15000, 20000, 18000, 22000];

let totalsalary = salaries.reduce((acc, curr) => acc + curr, 0);
console.log(totalsalary);

// .

let numbers =[ 10, 15, 20, 25, 30];

let result = numbers
    .filter(numbers => numbers % 2 === 0)
    .reduce((acc,curr) => acc + curr, 0);

    console.log(result);


    // 

let num = [5, 10, 15, 20, 25];

let Result = num
.filter(num => num > 10)
.map(num  => num * num);

console.log(Result)