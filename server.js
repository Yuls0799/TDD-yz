const express = require('express')
const cors = require('cors')

const app = express()

const validatePassword = require('./validatePassword')

app.use(express.json())
app.use(cors())

app.post('/users', (req, res) => {
  const { username, password } = req.body

  // Validate username | validar el usuario
  // Validate password | validar la contraseña
  const validPassword = validatePassword(password)

  // at least 8 characters long | al menos 8 carácteres
  // contains at leat one letter | contenga al menos una letra
  // contains at least one number| contenga al menos un número

  if (validPassword) {
    res.send({message: "Valid User"})
  } else {
    res.send({error: "Invalid Password"})
  }
})


app.listen(8080, () => console.log("listening on port 8080"))