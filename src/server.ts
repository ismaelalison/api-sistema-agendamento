import express, { Application } from 'express'
import routes from './routes'
import path from 'path'

const app: Application = express()

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)


app.listen({port: 3000}, () => console.log('Server is running in http:localhost:3000 🚀'))