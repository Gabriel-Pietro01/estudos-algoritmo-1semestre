const express = require('express');
const cors = require('cors');

const server = express();
const usuarios = [{ nome: "Gabriel" }];

server.use(express.json());
server.use(cors());

server.get('/', function (req, res) {
    res.send({ mensagem: 'Olá Mundo!', autor: 'Gabriel Pietro' });
});

server.get('/usuarios', function (req, res) {
    if (usuarios.length == 0) {
        res.status(204);
    } else {
        res.send(usuarios);
    }
});

server.post('/usuarios', function (req, res) {
    const nome = req.body.nome;

    if (!nome) {
        return res.status(400).send("Nome não preenchido.");
    }

    usuarios.push({ nome });
    res.status(201).send({ nome });
})

server.delete('/usuarios/:id', function (req, res) {
    const id = req.params.id;

    if (id < usuarios.length && id > -1) {
        usuarios.splice(id, 1);
        return res.status(204);
    }

    res.status(400).send("ID mal formatado");
})

server.put('/usuarios/:id', function (req, res) {
    const id = req.params.id;

    const nome = req.body.nome;

    if (!id) {
        res.status(400).send("ID mal formatado");
    } else if (!nome) {
        res.status(400).send("Nome não preenchido");
    } else {
        usuarios[id] = { nome };
        res.status(200).send(usuarios[id]);
    }
})

server.listen(3000, function () {
    console.log(`
----------------------------------------------------------

     #################        ################          ##  
    ##                       ##              ##         ##
    ##                       ##              ##         ##
    ##                       ##      ##      ##         ##
    ##                       ##      ##      ##         ##
    ##       ########        ##      ##      ##         ##
    ##              ##       ##              ##         ##
    ##              ##       ##              ##        
     ################         ################          ##
    
----------------------------------------------------------
Todos os Direitos reservados.

Gabriel Oliveira Silva de Pietro | 1ADSA

http://localhost:3000/
Servidor Status: OK!
`)
})