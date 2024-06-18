const request = require("supertest");
const { sequelize } = require("../models");
const app = require("../server");

// Antes de todos os testes, sincronize o banco de dados
beforeAll(async () => {
    await sequelize.sync();
});

// Depois de todos os testes, feche a conexão com o banco de dados
afterAll(async () => {
    await sequelize.close();
});

describe("Agencies API", () => {
    it("should create a new agency", async () => {
        const res = await request(app).post("/agencies").send({
            name: "Agência Exemplo",
            address: "Rua Exemplo, 123",
            phone: "123456789",
            email: "contato@agenciaexemplo.com",
            manager: "Fulano de Tal",
            status: "ativo",
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("data");
    });

    it("should fetch all agencies", async () => {
        const res = await request(app).get("/agencies");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
        expect(res.body.data.length).toBeGreaterThan(0);
    });

    it("should fetch a single agency", async () => {
        const res = await request(app).get("/agencies/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
    });

    it("should update an agency", async () => {
        const res = await request(app).put("/agencies/1").send({
            name: "Agência Atualizada",
            address: "Rua Atualizada, 456",
            phone: "987654321",
            email: "novoemail@agenciaexemplo.com",
            manager: "Ciclano de Tal",
            status: "inativo",
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty(
            "message",
            "Agência atualizada com sucesso"
        );
    });

    it("should delete an agency", async () => {
        const res = await request(app).delete("/agencies/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty(
            "message",
            "Agência deletada com sucesso"
        );
    });
});
