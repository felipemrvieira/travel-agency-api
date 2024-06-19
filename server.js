const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const agencyRoutes = require("./routes/agencyRoutes");
const { swaggerUi, specs } = require("./swagger");

const app = express();
const port = process.env.PORT || 3000;

// Middleware para permitir CORS
app.use(cors()); // Habilitar CORS para todas as rotas

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rotas
app.use("/agencies", agencyRoutes);

// Rota para a documentação do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

if (process.env.NODE_ENV !== "test") {
    // Sincronizar com o banco de dados e iniciar o servidor
    sequelize
        .sync()
        .then(() => {
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        })
        .catch((err) => {
            console.error("Unable to connect to the database:", err);
        });
}

module.exports = app; // Exportar app para testes
