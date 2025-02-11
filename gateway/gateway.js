const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const response = await axios.get("http://192.168.1.10:3000/users");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "User service unavailable" });
    }
});

app.get("/orders", async (req, res) => {
    try {
        const response = await axios.get("http://192.168.1.20:4000/orders");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Order service unavailable" });
    }
});

app.listen(port, () => {
    console.log(`API Gateway running on http://192.168.1.30:${port}`);
});
