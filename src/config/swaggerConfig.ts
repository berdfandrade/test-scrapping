import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API scrapping",
      version: "1.0.0",
      description:
        "Faz o scrapping do site, e retorna os notebooks Lenovo por padrão... Pode retornar outra marca especificada </br> Bernardo Andrade - berdfandrade@gmail.com",
    },
    tags: [
      {
        name: 'Notebooks',
        description: 'API para raspagem de dados de notebooks.',
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/swagger/*.ts"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
