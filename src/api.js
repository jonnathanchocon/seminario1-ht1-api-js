const express = require("express");
const app = express();
const port = 3000;

// Endpoint utilizado para la verificacion del estado
app.get("/check", (req, res) => {
    res.send("API javascript");
});

app.get("/info", (req, res) => {
    res.json({
        "Instancia": " Maquina 1 - API 1",
        "Curso": "Seminario De Sistemas 1 A",
        "Grupo": "Grupo 11",
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
