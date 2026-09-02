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
  ["groceries", 28],
  ["subscriptions", 12],
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
  balance = budgetValue - totalExpensesValue;
  console.log(`Saldo: ${balance}`); // Mostrar el saldo en la consola como prueba.
  return balance;
}

// Cambiar el color del saldo y asigna el presupuesto
function updateBalanceColor() {
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// Calcula las estadísticas por categoría
function calculateCategoryExpenses(categoria) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === categoria) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}

// Calcular la categoría de gastos más grande
function calculateLargestCategory() {
  expenseCategories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let largestCategory = "";
  let largestCategoryValue = 0;
  let categoriesData = [];
  let uniqueCategorie = "";
  let uniqueCategorieValue = 0;
  for (let i = 0; i < expenseCategories.length; i++) {
    uniqueCategorie = expenseEntries[i][0];
    uniqueCategorieValue = 0; // Reiniciar el valor para cada categoría     
    for (let j = 0; j < expenseEntries.length; j++) {
      if (uniqueCategorie === expenseCategories[i] && uniqueCategorie === expenseEntries[j][0]) {
        uniqueCategorieValue += expenseEntries[j][1];
      } else {
        continue;
      }
    }
    console.log(categoriesData);
    categoriesData.push([uniqueCategorie, uniqueCategorieValue]);
  }

}
