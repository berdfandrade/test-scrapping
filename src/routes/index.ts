import { Router, Request, Response } from "express";
import WebsiteCrawler from "../api/webCrawler";

const router = Router()


router.get('/', (req : Request, res : Response) => {
    res.status(200).send({
        message : 'Scrapping API - Bernardo Andrade'
    })
})

router.get('/notebooks/', WebsiteCrawler.GetData)

export default router;