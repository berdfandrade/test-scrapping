import { Request, Response } from "express";
import axios from "axios";
import parse from "node-html-parser";

interface Notebook {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productLink: string;
  reviews: string;
}

export default class WebsiteCrawler {

  static async GetData(req: Request, res: Response): Promise<void> {
    const BASE_URL = "https://webscraper.io/test-sites/e-commerce/static/computers/laptops?page=";

    // Classe principal onde os produtos estão
    const className = ".card.thumbnail";
    let allNotebooks: Notebook[] = [];

    try {
      // Loop por todas as 20 páginas
      for (let page = 1; page <= 20; page++) {
        const response = await axios.get(`${BASE_URL}${page}`);
        const html = response.data;
        const root = parse(html);

        // Seleciona todos os produtos da página atual
        const products = root.querySelectorAll(className);

        // Procurar por uma marca específica
        const searchBrand = (req.query.marca as string || "Lenovo").toLowerCase();
 
        // Extraindo os dados dos notebooks
        const notebooks : Notebook[] = products.map(product => {
          const name = product.querySelector('.title')?.getAttribute('title') || 'Nome não encontrado';          
          const price = parseFloat(product.querySelector('.price')?.text.replace(/[^0-9.]+/g, '') || '0');
          const description = product.querySelector('.description')?.text.trim() || 'Descrição não disponível';
          const imageUrl = product.querySelector('.img-fluid')?.getAttribute('src') || '';
          const productLink = product.querySelector('.title')?.getAttribute('href') || '#';
          const reviews = product.querySelector('.review-count')?.text.trim() || '0 reviews';

          return {
            name,
            price,
            description,
            imageUrl,
            productLink,
            reviews
          };
        });

        // Filtrar apenas notebooks da marca || Lenovo
        const lenovoNotebooks = notebooks.filter(notebook => notebook.name.toLowerCase().includes(searchBrand));

        // Adiciona os notebooks da página atual ao array geral
        allNotebooks = allNotebooks.concat(lenovoNotebooks);
      }

      // Ordenar os notebooks do mais barato para o mais caro
      allNotebooks.sort((a, b) => a.price - b.price);

      res.status(200).send({
        notebooks: allNotebooks
      });

    } catch (error) {
      res.status(500).send({
        message: "Erro ao buscar os notebooks",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}
