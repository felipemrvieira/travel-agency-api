const express = require("express");
const router = express.Router();
const agencyController = require("../controllers/agencyController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Agency:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - phone
 *         - email
 *         - manager
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         name:
 *           type: string
 *           description: Nome da agência
 *         address:
 *           type: string
 *           description: Endereço da agência
 *         phone:
 *           type: string
 *           description: Telefone da agência
 *         email:
 *           type: string
 *           description: Email da agência
 *         manager:
 *           type: string
 *           description: Nome do gerente da agência
 *         status:
 *           type: string
 *           description: Status da agência (ativo/inativo)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *       example:
 *         name: Agência Exemplo
 *         address: Rua Exemplo, 123
 *         phone: "123456789"
 *         email: contato@agenciaexemplo.com
 *         manager: Fulano de Tal
 *         status: ativo
 */

/**
 * @swagger
 * tags:
 *   name: Agencies
 *   description: Gerenciamento de agências de turismo
 */

/**
 * @swagger
 * /agencies:
 *   get:
 *     summary: Retorna a lista de todas as agências
 *     tags: [Agencies]
 *     responses:
 *       200:
 *         description: Lista de agências
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agency'
 */
router.get("/", agencyController.getAllAgencies);

/**
 * @swagger
 * /agencies/{id}:
 *   get:
 *     summary: Retorna uma agência específica pelo ID
 *     tags: [Agencies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da agência
 *     responses:
 *       200:
 *         description: Detalhes da agência
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agency'
 *       404:
 *         description: Agência não encontrada
 */
router.get("/:id", agencyController.getAgencyById);

/**
 * @swagger
 * /agencies:
 *   post:
 *     summary: Cria uma nova agência
 *     tags: [Agencies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agency'
 *     responses:
 *       201:
 *         description: Agência criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agency'
 *       500:
 *         description: Erro ao criar a agência
 */
router.post("/", agencyController.createAgency);

/**
 * @swagger
 * /agencies/{id}:
 *   put:
 *     summary: Atualiza uma agência existente
 *     tags: [Agencies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da agência
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agency'
 *     responses:
 *       200:
 *         description: Agência atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agency'
 *       404:
 *         description: Agência não encontrada
 *       500:
 *         description: Erro ao atualizar a agência
 */
router.put("/:id", agencyController.updateAgency);

/**
 * @swagger
 * /agencies/{id}:
 *   delete:
 *     summary: Deleta uma agência existente
 *     tags: [Agencies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da agência
 *     responses:
 *       200:
 *         description: Agência deletada com sucesso
 *       404:
 *         description: Agência não encontrada
 *       500:
 *         description: Erro ao deletar a agência
 */
router.delete("/:id", agencyController.deleteAgency);

module.exports = router;
