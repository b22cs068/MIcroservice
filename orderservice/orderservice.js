const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const orders = [
    { id: 1, userId: 1, item: "Laptop" },
    { id: 2, userId: 2, item: "Phone" }
];

app.get("/orders", (req, res) => {
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Order Service running on http://192.168.1.20:${port}`);
});
