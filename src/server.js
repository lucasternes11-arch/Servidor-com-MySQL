import 'dotenv/config'
import express from 'express'
import { Router } from 'express'
import { pool, testConnection } from './db/context.js'

const app = express()
app.use(express.json())

app.get('/health', async (req, response) => {
    const test = await testConnection()
    console.log(test)
    response
        .status(200)
        .json({status: 'OK', banco: 'CONECTADO'})
})

//colocar no repositories
async function get() {
    const [result] = await pool.execute(
        'SELECT id, sku, nome, preco, estoque, criado_em FROM  produtos ORDER BY id'
    )
    return result
}

const productRouter = Router()

productRouter.get('/', async (request, response) => {
    const products = await get()
    response.json(products)
})

app.use('/api/products', productRouter)

const PORT = Number(process.env.PORT ?? 3000)

app.listen(PORT, () => {
    console.log(`API ouvindo em http://localhost:${PORT}`)
})

