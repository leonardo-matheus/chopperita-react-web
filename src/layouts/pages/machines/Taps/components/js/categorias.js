var imagens = [];

function carregarImagens() {
  for (var i = 1; i <= 7; i++) {
    var imagem = new Image();
    imagem.src = "./categorias/0." + i + ".svg"; // Substitua pelo caminho correto para suas imagens
    imagens.push(imagem);
  }
}

carregarImagens();

// Agora você pode acessar suas imagens através do array 'imagens'
// Por exemplo, para acessar a primeira imagem:
var primeiraImagem = imagens[0];

// E para exibir a primeira imagem em um elemento HTML (por exemplo, um elemento com id "imagem"):
document.getElementById("imagem").src = primeiraImagem.src;
