//  1 Create Promise to check marks

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject("Invalid marks");
        }
    });
}

//  2 Calculate percentage

function calculatePercentage(marks) {
    return new Promise((resolve) => {
        let percentage = marks;  
        resolve(percentage);
    });
}

//  3 Assign grade

function assignGrade(percentage) {
    return new Promise((resolve) => {
        let grade;

        if (percentage >= 75) {
            grade = "A";
        } else if (percentage >= 60) {
            grade = "B";
        } else if (percentage >= 40) {
            grade = "C";
        } else {
            grade = "Fail";
        }

        resolve(grade);
    });
}

// Chaining Promises

checkMarks(82)
    .then((marks) => {
        console.log("Marks:", marks);
        return calculatePercentage(marks);
    })
    .then((percentage) => {
        console.log("Percentage:", percentage + "%");
        return assignGrade(percentage);
    })
    .then((grade) => {
        console.log("Grade:", grade);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


    // Async/Await  

    // 1 Create a function that returns a Promise

function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order placed successfully");
        }, 2000);
    });
}

function makePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment successful");
        }, 2000);
    });
}

function generateInvoice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Invoice generated");
        }, 2000);
    });
}

//  2 Use async/await for cleaner code

async function processOrder() {
    try {
        let order = await placeOrder();
        console.log(order);

        let payment = await makePayment();
        console.log(payment);

        let invoice = await generateInvoice();
        console.log(invoice);

    } catch (error) {
        console.log("Error:", error);
    }
}

processOrder();





// Error Handling

//  1 Create Promise function

function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (username === "admin" && password === "1234") {
                resolve("Login Successful");
            } else {
                reject("Invalid Username or Password");
            }

        }, 2000);
    });
}

//  2 Use async/await with try/catch

async function startLogin() {
    try {
        let result = await loginUser("admin", "1234");
        console.log(result);

    } catch (error) {
        console.log("Error:", error);
    }
}

startLogin();