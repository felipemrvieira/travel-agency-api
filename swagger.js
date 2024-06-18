const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Travel Agency API",
            version: "1.0.0",
            description:
                "API para gerenciamento de cadastro de agências de turismo",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor de desenvolvimento",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
