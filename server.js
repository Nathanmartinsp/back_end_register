import express, { request, response } from 'express'

const app = express()
app.use(express.json())

const users = []
app.post('/usuarios', (req, res) => {

  users.push(req.body)
 res.send('aqui deu certo')
  


})
 
app.get('/usuarios', (req, res) => {
  res.json(users)

     
})
app.listen(3000)


/*     
Criar nossa API de Usuario

-Criar um usuário
-Listar todos os usuário
-Editar um usuário
- Deletar um usuário

*/