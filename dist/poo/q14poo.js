// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, 
// ano de publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 
// livros via teclado, listar todos os disponíveis e registrar o empréstimo de um livro 
// pesquisado pelo título
export function q14poo() {
    class Livro {
        constructor(titulo, autor, anoPublicacao, disponivel) {
            this.titulo = titulo;
            this.autor = autor;
            this.anoPublicacao = anoPublicacao;
            this.disponivel = disponivel;
        }
        resumo() {
            console.log(`Título: ${this.titulo}`);
            console.log(`Autor: ${this.autor}`);
            console.log(`Ano de publicação: ${this.anoPublicacao}`);
            console.log(`Disponível: ${this.disponivel ? 'Sim' : 'Não'}`);
        }
        emprestar() {
            if (this.disponivel) {
                this.disponivel = false;
                console.log(`O livro "${this.titulo}" foi emprestado.`);
            }
            else {
                console.log(`O livro "${this.titulo}" não está disponível para empréstimo.`);
            }
        }
    }
    let livros = [];
    for (let i = 0; i < 15; i++) {
        let titulo = String(prompt(`Informe o título do livro ${i + 1}: `));
        let autor = String(prompt(`Informe o autor do livro ${i + 1}: `));
        let anoPublicacao = Number(prompt(`Informe o ano de publicação do livro ${i + 1}: `));
        let disponivel = true;
        let livro = new Livro(titulo, autor, anoPublicacao, disponivel);
        livros.push(livro);
    }
    console.log("Livros disponíveis:");
    for (let livro of livros) {
        if (livro.disponivel) {
            livro.resumo();
        }
    }
    let tituloPesquisa = String(prompt("Informe o título do livro que deseja emprestar: "));
    let livroEncontrado = livros.find(livro => livro.titulo.toLowerCase() === tituloPesquisa.toLowerCase());
    if (livroEncontrado) {
        livroEncontrado.emprestar();
    }
    else {
        console.log(`O livro "${tituloPesquisa}" não foi encontrado.`);
    }
}
