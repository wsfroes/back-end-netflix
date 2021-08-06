const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));
//PEGAR TODOS OS REGISTROS
app.get('/', (req, res) => {
    res.json({ mensagem: 'PEGAR TODOS OS REGISTROS'});
});
//PEGAR SOMENTE O REGISTRO COM O ID
app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: 'PEGAR SOMENTE O REGISTRO COM O ID'});  
});

//CRIAR UM REGISTRO
app.post('/', (req,res) => {
    const body = req.body;
    res.json(body);
});
//ATUALIZAR SOMENTE O REGISTRO COM O ID
app.put('/', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: 'ATUALIZAR SOMENTE O REGISTRO COM O ID'});  
});
//DELETAR SOMENTE O REGISTRO COM O ID
app.delete('/', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: 'DELETAR SOMENTE O REGISTRO COM O ID'});  
});

app.listen(8000, () => {
    console.log('Meu servidor está funcionando');
});