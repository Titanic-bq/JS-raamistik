// import fs from "node:fs/promises";
// import express from "express";

// app.use((req,res,next) =>{
//     res.setHeader("Acess-Controll-Allow-Origin","*");
//     res.setHeader("Acess-Controll-Allow-Origin","GET");
//     res.setHeader("Acess-Controll-Allow-Origin","Content-Type")
//     next();
// })

// app.get("/expenses", async (req,res) => {
//     const fileContent = await fs.readFile("./data/expenses.json")
//     const expensesData = JSON.parsel (fileContent)
//     res.status(200).json({expenses: expensesData})
// })

// app.listen(3005,() => {
//     console.log("backend server connnected")
// })