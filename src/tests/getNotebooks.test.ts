import request from "supertest";
import app from "../app";
import axios from "axios";

jest.mock("axios");

describe("GET /api/v1/notebooks", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("💻 Deve retornar uma lista com os notebooks da marca especificada ", async () => {
    // Simulação de resposta do axios com HTML válido
    (axios.get as jest.Mock).mockResolvedValue({
      data: `
        <html>
          <body>
            <div class="card thumbnail">
              <a class="title" title="Lenovo IdeaPad 3" href="/notebook1">
                Lenovo IdeaPad 3
              </a>
              <p class="price">$499.99</p>
              <p class="description">Um ótimo notebook para estudantes.</p>
              <img class="img-fluid" src="https://example.com/image1.jpg" />
              <span class="review-count">10 reviews</span>
            </div>
          </body>
        </html>
      `,
    });

    const res = await request(app).get("/api/v1/notebooks?marca=Lenovo");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("notebooks");
    expect(res.body.notebooks).toBeInstanceOf(Array);
    expect(res.body.notebooks.length).toBeGreaterThan(0);
    expect(res.body.notebooks[0]).toHaveProperty("name", "Lenovo IdeaPad 3");
    expect(res.body.notebooks[0]).toHaveProperty("price", 499.99);
  });

  it("💻 Deve retornar apenas notebooks Lenovo quando a marca não for especificada", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: `
        <html>
          <body>
            <div class="card thumbnail">
              <a class="title" title="Lenovo IdeaPad 3" href="/notebook1">
                Lenovo IdeaPad 3
              </a>
              <p class="price">$499.99</p>
              <p class="description">Um ótimo notebook para estudantes.</p>
              <img class="img-fluid" src="https://example.com/image1.jpg" />
              <span class="review-count">10 reviews</span>
            </div>
            <div class="card thumbnail">
              <a class="title" title="HP Pavilion" href="/notebook2">
                HP Pavilion
              </a>
              <p class="price">$599.99</p>
              <p class="description">Um ótimo notebook para profissionais.</p>
              <img class="img-fluid" src="https://example.com/image2.jpg" />
              <span class="review-count">5 reviews</span>
            </div>
          </body>
        </html>
      `,
    });

    const res = await request(app).get("/api/v1/notebooks"); 

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("notebooks");
    expect(res.body.notebooks).toBeInstanceOf(Array);

    // Verifica se todos os notebooks retornados contêm "Lenovo" no nome
    res.body.notebooks.forEach((notebook: { name: string }) => {
      // Aqui estamos especificando o tipo
      expect(notebook.name.toLowerCase()).toContain("lenovo");
    });
  });

  it("💻 Deve retornar um erro 500 quando ocorrer um erro ao buscar os dados", async () => {
    (axios.get as jest.Mock).mockRejectedValue(
      new Error("Erro ao buscar dados")
    );

    const res = await request(app).get("/api/v1/notebooks?marca=Lenovo");

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty("message", "Erro ao buscar os notebooks");
    expect(res.body).toHaveProperty("error", "Erro ao buscar dados");
  });
});
