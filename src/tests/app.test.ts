import request from 'supertest'
import app from '../app'

describe('GET /', () => {
	it('🧑‍⚕️ Check health | Deve retornar "Scrapping API - Bernardo Andrade"', async () =>{
		const res = await request(app).get('/api/v1/')
		expect(res.status).toBe(200); 
		expect(res.body.message).toBe('Scrapping API - Bernardo Andrade'); 
	})
}) 


