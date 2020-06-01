//cria um servidor express

const express = require ( 'express');

const server = express();

server.use(express.json());

const cursos = ['NodeJS', 'Java-Script', 'ReactNative', 'Java'];

server.get('/cursos', (req, res)=> {
  return res.json(cursos);

});

server.get('/cursos/:index', (req, res) =>{

   //query params 
  const { index } = req.params;

  //route params
 // const id =req.params.id;
  
  return res.json(cursos[index]);



});

//criando um curso novo
server.post('/cursos', (req, res)=>{
  const { name } = req.body;
  cursos.push(name);
  
  return res.json(cursos);
});


//fazendo update de um curso

server.put('/cursos/:index', (req, res)=>{
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos)
});


//deletando um curos

server.delete('/cursos/:index', (req, res)=>{
  const { index } = req.params;
  
  cursos.splice (index, 2);
  return res.json(cursos);

})

//escuta na porta 3000 (localhost:3000/curso)
server.listen(3000);