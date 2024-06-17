const express = require("express");
const router = express.Router();
const agencyController = require("../controllers/agencyController");

// Rota para listar todas as agências
router.get("/", agencyController.getAllAgencies);

// Rota para obter detalhes de uma agência específica
router.get("/:id", agencyController.getAgencyById);

// Rota para criar uma nova agência
router.post("/", agencyController.createAgency);

// Rota para atualizar uma agência existente
router.put("/:id", agencyController.updateAgency);

// Rota para deletar uma agência
router.delete("/:id", agencyController.deleteAgency);

module.exports = router;
