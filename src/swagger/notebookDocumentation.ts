

/**
 * @swagger
 * /notebooks:
 *   get:
 *     tags: [Notebooks]
 *     summary: Obtém uma lista de notebooks da marca especificada.
 *     description: Raspagem de dados de notebooks de um site de e-commerce. Permite filtrar os notebooks pela marca.
 *     parameters:
 *       - name: marca
 *         in: query
 *         description: Nome da marca para filtrar os notebooks. O padrão é a marca Lenovo
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de notebooks encontrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 notebooks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nome do notebook.
 *                       description:
 *                         type: string
 *                         description: Descrição do notebook.
 *                       price:
 *                         type: number
 *                         description: Preço do notebook.
 *                       imageUrl:
 *                         type: string
 *                         description: URL da imagem do notebook.
 *                       productLink:
 *                         type: string
 *                         description: Link para o produto.
 *                       reviews:
 *                         type: string
 *                         description: Contagem de avaliações do notebook.
 *       500:
 *         description: Erro ao buscar os notebooks.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de erro.
 *                 error:
 *                   type: string
 *                   description: Detalhes do erro.
 */
