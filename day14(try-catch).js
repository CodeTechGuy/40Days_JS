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

