# Teste Webscraping 

candidato : *Bernardo Andrade*

### O desafio é:

Acessar esse site e pegar todos notebooks Lenovo ordenando do mais barato para o mais caro. Pegar TODOS os dados disponíveis dos produtos.

Não utilizar nada de navegador como selenium ou puppeteer. Usar somente libs que interceptam dados de requisições e respostas (request /response) como Axios, Fetch etc.


É interessante que o robô possa ser consumido por outros serviços. Recomendamos a criação de uma pequena REST Ful API JSON para deixar mais otimizado.

Criar um repositório no github e me enviar o link.

https://webscraper.io/test-sites/e-commerce/static/computers/laptops

Aqui está um README simples para sua aplicação de scraping com Express e Axios:

---
## Test Webscraping API 

Esta aplicação é uma API RESTful que realiza a raspagem de dados (web scraping) de notebooks Lenovo (ou de outra marca, conforme configurado) em um site de exemplo. Ela retorna informações como nome, preço, descrição, link do produto, número de avaliações e mais. O projeto foi desenvolvido usando **Node.js**, **Express**, **Axios** e **node-html-parser**.

## Funcionalidades

- Scraping de notebooks de todas as 20 páginas do site de e-commerce de exemplo.
- Filtro de notebooks por marca (padrão: Lenovo).
- Retorno dos notebooks ordenados do mais barato para o mais caro.
- Documentação da API com **Swagger**.
- CORS habilitado para permitir requisições de um front-end em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Axios** para requisições HTTP.
- **node-html-parser** para análise e extração de conteúdo HTML.
- **Swagger** para documentação da API.
- **CORS** para controle de acesso a recursos.

## Instalação

### Pré-requisitos

- **Node.js** (versão 14 ou superior).
- **npm** ou **yarn** para gerenciar pacotes.

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/berdfandrade/test-scrapping
   cd test-scrapping
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

4. Acesse a API via `http://localhost:3001/api/v1/` (ou a porta configurada em seu ambiente).

## Executando os Testes

Os testes podem ser configurados e executados com **Jest** (caso desejado), ou outra ferramenta de sua escolha.

```
npm test
```

## Endpoints

### 1. `GET /api/v1/`

Retorna uma mensagem simples informando que a API está funcionando.

**Exemplo de resposta:**

```json
{
  "message": "Scrapping API - Bernardo Andrade"
}
```

### 2. `GET /api/v1/notebooks/`

Retorna a lista de notebooks da marca **Lenovo** (ou de outra marca, se especificada na query string).

**Parâmetros de Query:**

- `marca`: Define a marca dos notebooks a serem filtrados (por padrão, "Lenovo").

**Exemplo de uso:**

- Para obter notebooks da Lenovo:

  ```bash
  GET /api/v1/notebooks/
  ```

- Para obter notebooks de outra marca, como MSI:

  ```bash
  GET /api/v1/notebooks/?marca=msi
  ```

**Exemplo de resposta:**

```json
{
  "notebooks": [
    {
      "name": "Lenovo IdeaPad...",
      "price": 299.99,
      "description": "15.6 HD Laptop, Intel Pentium N5000, 4GB RAM, 128GB SSD",
      "imageUrl": "https://example.com/image.png",
      "productLink": "https://webscraper.io/test-sites/e-commerce/static/product/113",
      "reviews": "15 reviews"
    },
    ...
  ]
}
```

### 3. `GET /api/v1/docs/`

Documentação da API em **Swagger**.

## Estrutura do Projeto

```bash
├── src
│   ├── api
│   │   └── webCrawler.ts    # Lógica principal do web scraping
│   ├── config
│   │   └── swaggerConfig.ts # Configuração do Swagger
│   ├── routes
│   │   └── index.ts         # Definição das rotas da API
│   ├── app.ts               # Configuração principal do Express
│   └── server.ts            # Inicialização do servidor
├── package.json
└── README.md
```

