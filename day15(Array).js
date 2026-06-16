// T-001: Create an array of 5 elements using the Array Constructor.
// const arr = new Array(1,2,3,4,5);

//  T-002: Create an array of 3 empty slots.
// const emptyArr = new Array(3);

//  T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const arr = [1,2,3,4,5,6];
let n = arr.length;
console.log(n - (n-3)); // output: 4

//  T-004: Use the for loop on the above array to print elements in the odd index.
for(let i=0; i<arr.length; i++){
    if(i%2 != 0) {
        console.log(arr[i]);
    }
}

//  T-005: Add one element at the front and the end of an array.
arr.unshift(0); // add at the front
arr.push(7); // add at the end
console.log(arr);

//  T-006: Remove an element from the front and the end of an array.
arr.shift(); // remove from the front
arr.pop(); // remove from the end

//  T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const food = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Ice Cream", "Steak", "Salad", "Fries", "Dumplings"];
const [,,,,,sixthFood] = food;
console.log(sixthFood); // Output: Ice Cream

//  T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [firstFood, , ...restFoods] = food;
console.log(firstFood); // Output: Pizza
console.log(restFoods); // Output: ["Pasta", "Sushi", "Tacos", "Ice Cream", "Steak", "Salad", "Fries", "Dumplings"]

//  T-009: Clone an Array(Shallow cloning)
const clonedFood = [...food]; // using spread operator
const clonedFood2 = Array.from(food); // using Array.from
const clonedFood3 = food.slice(); // using slice method

//  T-010: Empty an array using its length property
const arrToEmpty = [1, 2, 3, 4, 5];
arrToEmpty.length = 0;

//  T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
const numArr = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<numArr.length; i++){
    if(numArr[i] === 5){
        numArr.length = 6;
        break;
    }
}

//  T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
const arrToEmpty2 = [1,2,3,4,5,6,7,8,9,10];
arrToEmpty2.splice(0, arrToEmpty2.length);
arrToEmpty2.splice(); // This will not empty the array, it will just return a new array with all the elements removed, but the original array will remain unchanged.
arrToEmpty2.splice(0); // This will also not empty the array, it will just return a new array with all the elements removed, but the original array will remain unchanged.

//  T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
// Answer : The most efficient way to empty an array is by setting its length property to 0. 
//          This is because it does not involve any iteration or manipulation of the array elements, and it simply resets the length of the array to 0, effectively clearing all elements. 
//          The other methods, such as pop(), shift(), or splice(), involve iterating through the array and removing elements one by one, which can be less efficient, especially for larger arrays. 
//          Setting the array to an empty array ([]) creates a new array and may not be as efficient as simply resetting the length of the existing array.

//  T-014: What happens when you concatenate two empty arrays?
const emptyArr1 = [];
const emptyArr2 = [];
const concatenatedArr = emptyArr1.concat(emptyArr2);
console.log(concatenatedArr); // Output: [] - The result is an empty array since both arrays being concatenated are empty.

//  T-015: How can you check if a value is partially matching with any of the elements of an Array?
const arrToCheck = ["apple", "banana", "cherry", "date"];
const valueToCheck = "nan";
const isPartialMatch = arrToCheck.some(element => element.includes(valueToCheck));
console.log(isPartialMatch); // Output: true - "banana" contains "nan", so there is a partial match.

//  T-016: What is the difference between the slice() and splice() methods?
// Answer: The slice() method is used to create a new array by extracting a portion of an existing array without modifying the original array. 
// It takes two arguments: the start index and the end index (exclusive). The original array remains unchanged.

// The splice() method, on the other hand, is used to modify an array by adding, removing, or replacing elements. 
// It takes three arguments: the start index, the number of elements to remove, and the elements to add (optional). The original array is modified based on the parameters provided.


//  T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
const alphanumericArr = ["apple1", "banana2", "cherry3", "date4"];
const sortedAscending = [...alphanumericArr].sort();
const sortedDescending = [...alphanumericArr].sort().reverse();

const sortedDescending2 = [...alphanumericArr].sort((a, b) => b.localeCompare(a));
const sortedAscending2 = [...alphanumericArr].sort((a, b) => a.localeCompare(b));

//  T-018: Can you give examples of sparse and dense arrays?
// A sparse array is an array that has empty slots or missing elements. For example:
const sparseArray = [1, , 3, , 5]; // This array has empty slots at index 1 and 3.
// A dense array is an array that has all its slots filled with elements.
const denseArray = [1, 2, 3, 4, 5];

//  T-019: Give a practical usages of the .fill() method
// The .fill() method is used to fill all the elements of an array with a static value. It can be useful in various scenarios, such as initializing an array with default values or resetting an array to a specific state. For example:
// Initializing an array with default values:
const defaultValues = new Array(5).fill(0); // Creates an array of length 5 filled with 0s
console.log(defaultValues); // Output: [0, 0, 0, 0, 0]
// Resetting an array to a specific state:
let arrToReset = [1, 2, 3, 4, 5];
arrToReset.fill(0); // Resets all elements to 0
console.log(arrToReset); // Output: [0, 0, 0, 0, 0]

//  T-020: How to convert an array to a string?
// You can convert an array to a string using the .join() method or the .toString() method. For example:
const arrToConvert = [1, 2, 3, 4, 5];
const stringWithJoin = arrToConvert.join(", "); // Converts the array to a string with elements separated by a comma and space
console.log(stringWithJoin); // Output: "1, 2, 3, 4, 5"
const stringWithToString = arrToConvert.toString(); // Converts the array to a string with elements separated by commas
console.log(stringWithToString); // Output: "1,2,3,4,5"


// Consider these input arrays for question T-21 to T-48

// employees array: An array of emplyees working in a department.

// const employees = [
//   { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
//   { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
//   { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
//   { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
//   { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
//   { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
//   { id: 7, name: "George", departmentId: 3, salary: 5200 },
//   { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
//   { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
//   { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
// ];
// departments array: An array of departments where emplyees work.

// const departments = [
//   { id: 1, name: "HR" },
//   { id: 2, name: "Engineering" },
//   { id: 3, name: "Marketing" },
//   { id: 4, name: "Sales" },
// ];
//  T-021: Can you filter employees who work in the "Engineering" department?
const engineeringEmployees = employees.filter((employee) => {return employee.departmentId === 2 });

//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const employeeDepartmentNames = employees.map((employee) => {
    const department = departments.find((dept) => dept.id === employee.departmentId);
    return `${employee.name} (${department ? department.name : "Unknown"})`;
});

//  T-023: Find the highest salary among employees.
const highestSalary = employees.reduce((max, employees) => {
    return employees.salary > max ? employees.salary : max;
},0);

//  T-024: Check if there is at least one employee in the "Sales" department.
const hasSalesEmployee = employees.some((employee) => employee.departmentId === 4);

//  T-025: Write a function to filter employees earning more than 6000.
const highEarners = (minSalary) => employees.filter((employee) => employee.salary > minSalary);

//  T-026: Create an array of employee names only.
const employeeNames = employees.map((employee) => employee.name);

//  T-027: Calculate the total salary of all employees using reduce.
const totalSalary = employees.reduce((total , employee) => total + employee.salary , 0);

//  T-028: Is there any employee earning less than 5000?
const hasLowerEarner = employees.some((employee) => employee.salary < 5000);

//  T-029: Find the first employee who earns exactly 5100.
const employeeWithSalary5100 = employees.find((employee) => employee.salary === 5100);

//  T-030: Find the last employee in the "HR" department.
const lastHREmployee = employees.findLast((employee) => employee.departmentId === 1);

//  T-031: Find the first employee in the "Marketing" department.
const firstMarketingEmployee = employees.find((employee) => employee.departmentId === 3);

//  T-032: Check if all employees earn more than 4000.
const allEarnMoreThan4000 = employees.every((employee) => employee.salary > 4000);

//  T-033: Find the first employee in the "Sales" and "HR" department.
const firstSalesEmployee = employees.find((employee) => employee.departmentId === 4);
const firstHREmployee = employees.find((employee) => employee.departmentId === 1);

//  T-034: Verify if all employees belong to a department listed in the departments array.
const allEmployeesInDepartments = employees.every((employee) => {
    return departments.some((dept) => dept.id === employee.departmentId);
});

    // Create a Set of valid department IDs.
    const departmentIds = new Set(
        departments.map(dept => dept.id)
    );
    const allValid = employees.every(emp =>
        departmentIds.has(emp.departmentId)
    );
    console.log(allValid);


//  T-035: Log each employee's name and department name to the console.
const employeeDeparmentInfo = employees.map((employee) => {
    const department = departments.find((dept) => dept.id === employee.departmentId);
    console.log(`${employee.name} works in ${department ? department.name : "Unknown Department"}`);
});

//  T-036: Extract all employee names into a single array.
const allEmployeeNames = employees.map((employee) => employee.name);

//  T-037: Increment each employee's salary by 10%
const incrementedSalaries = employees.map((employee) => {
    return {
        ...employee,
        salary: employee.salary * 1.10
    }
})

//  T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const employeeWithSkills = [
    { name: "Alice", skills: ["Excel", "Management"] },
    { name: "Bob", skills: ["JavaScript", "React"] },
    { name: "Charlie", skills: ["Marketing", "SEO"] },
    { name: "Diana", skills: ["HR", "Recruitment"] },
    { name: "Edward", skills: ["Engineering", "Python"] },
    { name: "Fiona", skills: ["Sales", "Negotiation"] },
    { name: "George", skills: ["Marketing", "Content Creation"] },
    { name: "Helen", skills: ["Sales", "Customer Service"] },
];
const allSkills = employeeWithSkills.flatMap((employee) => employee.skills);

// If you don't want duplicates like "Marketing" and "Sales":
const uniqueSkills = [
    ...new Set(
        employeeWithSkills.flatMap(
            emp => emp.skills
        )
    )
];
console.log(uniqueSkills);


//  T-039: Find the total salary of all employees working in the "Engineering" department.
const totalEngineeringSalary = employees
    .filter((employee) => employee.departmentId === 2)
    .reduce((total, employee) => total + employee.salary , 0);

//  T-040: Check if there is any department where all employees earn more than 5000.
const departmentsWithAllHighEarners = departments.filter((department) => {
    const departmentEmployees = employees.filter((employee) => employee.departmentId === department.id);
    return departmentEmployees.every((employee) => employee.salary > 5000);
});

//  T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
const employeesWithProjects = [
    { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
    { id: 2, name: "Bob", projects: ["Project C", "Project D"] },
    { id: 3, name: "Charlie", projects: ["Project A", "Project E"] },
    { id: 4, name: "Diana", projects: ["Project F"] },
    { id: 5, name: "Edward", projects: ["Project C", "Project G"] }
];
const uniqueProjects = new Set(
    employeesWithProjects.flatMap((employee) => employee.projects)
);
const totalUniqueProjects = uniqueProjects.size;
console.log(totalUniqueProjects); // Output: 7

//  T-042: For each employee, find their department name and return an array of employee names with their department names.
const employeeWithDepartmentNames = employees.map((employee) => {
    const department = departments.find((dept) => dept.id === employee.departmentId);
    return `${employee.name} ${department.name}`;
});

//  T-043: Get a list of names of employees earning more than 6000.
const highEarningEmployeeNames = employees
    .filter((employee) => employee.salary > 6000)
    .map((employee) => employee.name);

//  T-044: Write a for-of loop to print the names of all employees from the employees array.
for(const employee of employees){
    console.log(employee.name);
}

//  T-045: Using a for-of loop, print the names of employees earning more than 5000.
for(const employee of employees){
    if(employee.salary > 5000){
        console.log(employee.name);
    }
}

//  T-046: Modify the for-of loop to destructure each employee object and log their name and salary.
for(const { name, salary } of employees){
    console.log(name, salary);
}

//  T-047: Write a for-of loop to match employees with their departments and print the results.
for(const employee of employees){
    const department = departments.find((dept) => dept.id === employees.departmentId);
    console.log(`${employee.name} works in ${department ? department.name : "Unknown Department"}`);
};

//  T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
for(const [index, employee] of employees.entries()){
    console.log(`Index: ${index}, Name: ${employee.name}`);
}

//  T-049: Given the array-like object below, access the second element and log it:
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log(arrayLike[1]);

//  T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
function convertArgumentsToArray() {
    const argsArray = Array.from(arguments);
    return argsArray;
}

//  T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

//  T-052: Merge these two arrays into a single array:

// const arr1 = [1, 2];
// const arr2 = [3, 4];
//  T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

//  T-054: Use Array.from to convert a string like "Hello" into an array of characters.

//  T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

//  T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

//  T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

//  T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

//  T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

//  T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

//  T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

//  T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

//  T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

//  T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

// const users = [
//   { name: 'Alice', age: 55 },
//   { name: 'Bob', age: 3 },
//   { name: 'Charlie', age: 25 },
// ];
//  T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
//  T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]