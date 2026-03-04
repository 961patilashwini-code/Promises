let product={
    name: "mobile",
    Price: 15000   
};

let updateproduct= {
    ...product,
    Price : 20000
};

console.log(product);
console.log(updateproduct);

// 
let fruits = ["Apple", "Mango"];

let newFruits = [...fruits, "Banana"];

console.log(fruits);
console.log(newFruits);
