const fs = require('fs')
const path = require('path')

//criar uma pasta
/*fs.mkdir(path.join(__dirname, '/test'), (error)=>{
    if(error){
        return console.log('Erro:', error)
    }else{
        console.log('Deu certo')
    }
})*/

//criar um arquivo // assincrono
fs.writeFile(path.join(__dirname, '/test', 'teste.txt'), "hello world!", (error) =>{
    if(error){
        return console.log("Erro: ", error);
    }
    console.log("arquivo criado");

    //adicionar a um arquivo
    fs.appendFile(path.join(__dirname, '/test', "teste.txt"), "escrevendo abaixo", (error) => {
        if(error){
        return console.log("Erro: ", error)
        }
        console.log("texto adicionado")
    });

    fs.readFile(path.join(__dirname, '/test', 'teste.txt'), 'utf-8', (error, data)=>{
        if(error){
            return console.log('Erro: ',  error)
        }else{
            console.log(data)
        }
    });
    
})



