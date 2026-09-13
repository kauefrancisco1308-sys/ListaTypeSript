"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q17poo = q17poo;
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador 
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e Servidores 
// (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários que estão na fila. 
// Cada vez que um usuário passa pela catraca, um método deve registrar essa presença em um histórico (array). 
// Ao digitar um comando de encerramento, o programa exibe a listagem de quem almoçou no dia, mostrando mensagens 
// personalizadas para cada tipo de usuário através de um método comum de identificação, além de exibir a quantidade 
// total de acessos de alunos e servidores.
function q17poo() {
    class Usuario {
        constructor(id, nome) {
            this.id = id;
            this.nome = nome;
        }
        getId() {
            return this.id;
        }
        getNome() {
            return this.nome;
        }
        setNome(nome) {
            this.nome = nome;
        }
        setId(id) {
            this.id = id;
        }
    }
    class Aluno extends Usuario {
        constructor(id, nome, curso) {
            super(id, nome);
            this.curso = curso;
        }
        identificar() {
            console.log(`Aluno ${this.getNome()} do curso ${this.curso} passou pela catraca.`);
        }
    }
    class Servidor extends Usuario {
        constructor(id, nome, departamento) {
            super(id, nome);
            this.departamento = departamento;
        }
        identificar() {
            console.log(`Servidor ${this.getNome()} do departamento ${this.departamento} passou pela catraca.`);
        }
    }
    let historico = [];
    while (true) {
        let opcao = prompt("Digite 1 para Aluno, 2 para Servidor, 3 para encerrar, 0 para sair:");
        if (opcao === "0") {
            break;
        }
        else if (opcao === "1") {
            let id = parseInt(String(prompt("Digite o ID do aluno:")) || "0");
            let nome = String(prompt("Digite o nome do aluno:"));
            let curso = String(prompt("Digite o curso do aluno:"));
            let aluno = new Aluno(id, nome, curso);
            historico.push(aluno);
            console.log("Aluno cadastrado com sucesso!");
        }
        else if (opcao === "2") {
            let id = parseInt(String(prompt("Digite o ID do servidor:")) || "0");
            let nome = String(prompt("Digite o nome do servidor:"));
            let departamento = String(prompt("Digite o departamento do servidor:"));
            let servidor = new Servidor(id, nome, departamento);
            historico.push(servidor);
            console.log("Servidor cadastrado com sucesso!");
        }
        else if (opcao === "3") {
            console.log("Histórico de acessos:");
            let totalAlunos = 0;
            let totalServidores = 0;
            for (let usuario of historico) {
                usuario.identificar();
                if (usuario instanceof Aluno) {
                    totalAlunos++;
                }
                else if (usuario instanceof Servidor) {
                    totalServidores++;
                }
            }
            console.log(`Total de alunos que almoçaram: ${totalAlunos}`);
            console.log(`Total de servidores que almoçaram: ${totalServidores}`);
        }
    }
}
