async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); 
    const conexaoConversao = await conexao.json();

    return conexaoConversao;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    
    const conexaoConversao = await conexao.json();

    if(!conexao.ok){ 
        throw new Error ("Não foi possível enviar o vídeo!")
    }
    return conexaoConversao;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConversao = await conexao.json();
    
    return conexaoConversao
}


export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}