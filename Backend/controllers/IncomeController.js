const mongoose = require("mongoose");

const IncomeModel = require("../models/income");

exports.add_income = (req, res, next) => {
    const income_data = new IncomeModel({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        amount: req.body.amount,
        date: req.body.date,
        category: req.body.category,
        description: req.body.description,
        // created_at: new Date(),
        // edited_at: new Date()
    })
    income_data.save()
    .then(() => {
        res.status(201).json({
            message: "Successfully added the income"
        })
    })
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.get_all_incomes = (req, res, next) => {
    IncomeModel.find()
    .then((all_incomes) => {
        res.send(all_incomes);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}

exports.delete_income = (req, res, next) => {
    IncomeModel.findById({ _id: req.params.id })
    .then((inc_del) => {
        if (inc_del) {
            IncomeModel.findOneAndDelete({ _id: req.params.id })
                .then(() => {
                    res.status(201).json({
                        message: "Income deleted successfully"
                    })
                })
                .catch((err) => {
                    res.status(500).send("Error in deleting income", err);
                })
        }
        else {
            res.status(409).send("Income not found");
        }
    })
}