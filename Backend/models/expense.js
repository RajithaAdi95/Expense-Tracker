const mongoose = require("mongoose");

const ExpenseModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true, trim: true, maxLength: 50 },
    amount: { type: Number, required: true, trim: true, maxLength: 20 },
    type: { type: String, default: "Expense" },
    date: { type: Date, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true, maxLength: 50 },
    // created_at: { type: Date, required: true },
    // edited_at: { type: Date, required: true }
}, { timestamps: true })

module.exports = mongoose.model("Expense", ExpenseModel);