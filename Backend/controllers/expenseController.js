const mongoose = require("mongoose");

const ExpenseModel = require("../models/expense");

exports.add_expense = (req, res, next) => {
    const expense_data = new ExpenseModel({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        amount: req.body.amount,
        date: req.body.date,
        category: req.body.category,
        description: req.body.description,
        // created_at: new Date(),
        // edited_at: new Date()
    })
    expense_data.save()
    .then(() => {
        res.status(201).json({
            message: "Successfully added the expense"
        })
    })
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.get_all_expenses = (req, res, next) => {
    ExpenseModel.find()
    .then((all_expenses) => {
        res.send(all_expenses);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}

exports.delete_expense = (req, res, next) => {
    ExpenseModel.findById({ _id: req.params.id })
    .then((inc_del) => {
        if (inc_del) {
            ExpenseModel.findOneAndDelete({ _id: req.params.id })
                .then(() => {
                    res.status(201).json({
                        message: "Expense deleted successfully"
                    })
                })
                .catch((err) => {
                    res.status(500).send("Error in deleting income", err);
                })
        }
        else {
            res.status(409).send("Expense not found");
        }
    })
}