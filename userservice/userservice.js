const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`User Service running on http://192.168.1.10:${port}`);
});
