const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const agencyRoutes = require("./routes/agencyRoutes");
const { swaggerUi, specs } = require("./swagger"); // Importar configuração do Swagger

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rotas
app.use("/agencies", agencyRoutes);

// Rota para a documentação do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

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
