const tracker = createExpenseTracker("Vishal", 50000);

function createExpenseTracker(name, budget) {
    let user = { name, budget };
    let expenses = [];

    return {
        addExpense(id, amt, cat, desc) {
            expenses.push({ id, amount: amt, category: cat, description: desc });
        },

        removeExpense(id) {
            expenses = expenses.filter(exp => exp.id !== id);
        },

        updateExpense(id, amt, cat, desc) {
            expenses = expenses.map(exp => {
                if (exp.id === id) {
                    return { id, amount: amt, category: cat, description: desc };
                }
                return exp;
            });
        },

        getTotalExpenses() {
            return expenses.reduce((total, exp) => total + exp.amount, 0);
        },

        getExpensesByCategory(category) {
            return expenses.filter(exp => exp.category === category);
        },

        getHighestExpense() {
            return expenses.reduce((max, exp) => (exp.amount > max.amount ? exp : max), expenses[0] || null);
        },

        getLowestExpense() {
            return expenses.reduce((min, exp) => (exp.amount < min.amount ? exp : min), expenses[0] || null);
        },

        getUserInfo() {
            return { ...user };
        },

        showAllExpenses() {
            return [...expenses];
        },

        updateUserData(newName, newBudget) {
            if (newName !== undefined) user.name = newName;
            if (newBudget !== undefined) user.budget = newBudget;
        }
    };
}