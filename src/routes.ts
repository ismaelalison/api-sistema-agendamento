import { Router, Request, Response } from 'express'
import multer from 'multer'
import { multerConfig } from './config/multer'

const  routes = Router()

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World' })
})

routes.post('/uploads', multer(multerConfig).single('file'), (request: Request, response: Response) => {
  const fileName = request.file?.filename

  if (!fileName) {
    return
  }

  const fullUrl = request.protocol.concat('://').concat(request.hostname + ':3000')
  const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()

  return response.status(200).json({ message: `Uploaded: ${fileUrl}` })
})

export default routes