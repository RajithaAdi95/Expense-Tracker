const express = require("express");
const router = express();

const IncomeController = require("../controllers/IncomeController");
const ExpenseController = require("../controllers/expenseController");

router.post("/add_income", IncomeController.add_income);
router.get("/get_incomes", IncomeController.get_all_incomes);
router.delete("/delete_income/:id", IncomeController.delete_income);

router.post("/add_expense", ExpenseController.add_expense);
router.get("/get_expenses", ExpenseController.get_all_expenses);
router.delete("/delete_expense/:id", ExpenseController.delete_expense);

module.exports = router;