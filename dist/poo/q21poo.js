"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q21poo = q21poo;
// Concurso de Projetos de Extensão Reforest
// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.
function q21poo() {
    class Floramp {
        constructor(titulo, coordenador, notaAvaliativa) {
            this.coordenador = coordenador;
            this.título = titulo;
            this._notaAvaliativa = notaAvaliativa;
        }
        get notaAvaliativa() {
            return this._notaAvaliativa;
        }
        set notaAvaliativa(notaAvaliativa) {
            this._notaAvaliativa = notaAvaliativa;
        }
    }
    class ProjetosVerdes extends Floramp {
    }
    class ProjetosCulturais extends Floramp {
    }
}
