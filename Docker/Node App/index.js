const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.json([
        {
            id: 1,
            employeeName: "John",
            employeeSalary: 5000,
        },
        {
            id: 2,
            employeeName: "Jacob",
            employeeSalary: 52000,
        },
        {
            id: 3,
            employeeName: "Jack",
            employeeSalary: 15000,
        },
    ])
})

app.listen(4000, () => {
    console.log("App is running on Port no: 4000")
})