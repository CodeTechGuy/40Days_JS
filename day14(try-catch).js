// parsing error - 
// runtime error - 

// An Exceptions are runtime errors that disrupt program execcution.

// Error Type:	            When It Occurs:
// SyntaxError	            Invalid JavaScript syntax
// ReferenceError	        Variable not defined
// TypeError	            Invalid operation on a value
// RangeError	            Value outside valid range
// URIError	                Invalid URI encoding/decoding
// EvalError	            Problems related to eval()
// AggregateError	        Multiple errors grouped together
// Error	                Generic/custom error            

// Useful Error Properties
// Property:	        Description:
// error.name	    Error type (ReferenceError, TypeError, etc.)
// error.message	Description of the error
// error.stack	    Stack trace showing where the error occurred
// error.cause	    Optional underlying cause (modern JS)

try{
    abc;
}
catch(error){
    console.log("error message: ");
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
    console.log(error.cause);
    // console.log("error message: ",error);
    
}
// Since ES2019, JavaScript allows catch {} without an error parameter. 
// This is called optional catch binding and is useful when the error object isn't needed. 
// However, if you need properties like message, name, or stack, you must declare a parameter, for example catch (error) { ... }. 
// Otherwise, referencing error inside the catch block will cause a ReferenceError.
try {
    abc;
} catch {
    console.log("Failed");
}


// throw Statement
// Used to manually create errors.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

// ACTIVITY
// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

// Base Error
function AppError(message) {
    this.name = "AppError";
    this.message = message;
}

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;


// User Error
function UserError(message) {
    this.name = "UserError";
    this.message = message;
}

UserError.prototype = Object.create(AppError.prototype);
UserError.prototype.constructor = UserError;


// Payment Error
function PaymentError(message) {
    this.name = "PaymentError";
    this.message = message;
}

PaymentError.prototype = Object.create(AppError.prototype);
PaymentError.prototype.constructor = PaymentError;


// Server Error
function ServerError(message) {
    this.name = "ServerError";
    this.message = message;
}

ServerError.prototype = Object.create(AppError.prototype);
ServerError.prototype.constructor = ServerError;


// Email Error
function EmailError(message) {
    this.name = "EmailError";
    this.message = message;
}

EmailError.prototype = Object.create(AppError.prototype);
EmailError.prototype.constructor = EmailError;

// Central error handlerfunction 
function handleError(error) {

    if (error instanceof UserError) {
        console.log("User Error:", error.message);
    }

    else if (error instanceof PaymentError) {
        console.log("Payment Error:", error.message);
    }

    else if (error instanceof ServerError) {
        console.log("Server Error:", error.message);
    }

    else if (error instanceof EmailError) {
        console.log("Email Error:", error.message);
    }

    else {
        console.log("Unknown Error:", error.message);
    }
}

// Real E-Commerce Example
function placeOrder(user, payment, email) {

    if (!user) {
        throw new UserError("User not logged in");
    }

    if (!payment) {
        throw new PaymentError("Payment failed");
    }

    if (!email) {
        throw new EmailError("Email service unavailable");
    }

    const serverDown = false;

    if (serverDown) {
        throw new ServerError("Order service unavailable");
    }

    return "Order placed successfully";
}

try {
    placeOrder(null, true, true);
}
catch(error) {
    handleError(error);
}

