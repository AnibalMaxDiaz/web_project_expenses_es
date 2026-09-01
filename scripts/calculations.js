// Inicializar variables para el presupuesto y crear un array de entradas de gastos
let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green"; // Color predeterminado para el saldo positivo
let balance = 0; // Inicializar la variable balance

// Calcular los gastos totales
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 33],
  ["subscriptions", 14],
];

// Calcular el valor total de los gastos
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
  console.log(`Valor total de los gastos:  ${totalExpensesValue}`);
}

// Calcular el gasto medio
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0; // Evitar la división por cero si no hay entradas de gastos
  } else {
    let averageExpense = totalExpensesValue / expenseEntries.length;
    console.log(`Gasto medio: ${averageExpense}`); // Mostrar el gasto medio en la consola como prueba.
    return averageExpense;
  }
}

// Calcular el saldo
function calculateBalance() {
  let balance = budgetValue - totalExpensesValue;
  console.log(`Saldo: ${balance}`); // Mostrar el saldo en la consola como prueba.
  return balance;
}

// Cambiar el color del saldo y asigna el presupuesto
function updateBalanceColor() {
  // if (balance >= (budgetValue * 0.25)) {
  //   balanceColor = "green";
  // } else if (balance < (budgetValue * 0.25) && balance >= 0){
  //   balanceColor = "orange";
  // } else {
  //   balanceColor = "red";
  // }
  console.log(`Saldo: ${balance}, Color del saldo: ${balanceColor}`); // Mostrar el saldo y el color del saldo en la consola como prueba.

  if (balance <= 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
// Start test----------------------------------------
