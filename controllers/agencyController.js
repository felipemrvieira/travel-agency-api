const { Agency } = require("../models");

// Listar todas as agências
exports.getAllAgencies = async (req, res) => {
    try {
        const agencies = await Agency.findAll();
        res.json({ data: agencies });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obter detalhes de uma agência específica
exports.getAgencyById = async (req, res) => {
    try {
        const agency = await Agency.findByPk(req.params.id);
        if (agency) {
            res.json({ data: agency });
        } else {
            res.status(404).json({ error: "Agência não encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Criar uma nova agência
exports.createAgency = async (req, res) => {
    try {
        const { name, address, phone, email, manager, status } = req.body;
        const newAgency = await Agency.create({
            name,
            address,
            phone,
            email,
            manager,
            status,
        });
        res.status(201).json({ data: newAgency });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar uma agência existente
exports.updateAgency = async (req, res) => {
    try {
        const { name, address, phone, email, manager, status } = req.body;
        const agency = await Agency.findByPk(req.params.id);
        if (agency) {
            await agency.update({
                name,
                address,
                phone,
                email,
                manager,
                status,
            });
            res.json({
                message: "Agência atualizada com sucesso",
                data: agency,
            });
        } else {
            res.status(404).json({ error: "Agência não encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Deletar uma agência
exports.deleteAgency = async (req, res) => {
    try {
        const agency = await Agency.findByPk(req.params.id);
        if (agency) {
            await agency.destroy();
            res.json({ message: "Agência deletada com sucesso" });
        } else {
            res.status(404).json({ error: "Agência não encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
