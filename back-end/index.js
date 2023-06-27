const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
app.use(express.json());
app.use(cors("*"))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/algumacoisa/:scragbadum', (req, res) => {
    const {params} = req
    res.send(params)
  })

app.post('/askme', (req, res) => {
    const {body: scragbadum} = req
    console.log(scragbadum)
    res.send("Boa noite :)") 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})