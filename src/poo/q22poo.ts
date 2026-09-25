// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base 
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km, enquanto 
// as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve perguntar as 
// informações da frota atual e guardar os objetos em um array. Depois, o programa solicita que o mecânico 
// informe a quilometragem atual de um determinado veículo e, varrendo o array de objetos, o sistema responde 
// textualmente se aquele veículo específico precisa ou não ser retido para manutenção imediata.
export function q22poo(): void {
    abstract class Veiculo {
        placa: string
        quilometragemAtual: number
        constructor(placa: string, quilometragemAtual: number) {
            this.placa = placa
            this.quilometragemAtual = quilometragemAtual
        }
        abstract precisaRevisao(): boolean
    }
    class Onibus extends Veiculo {
        constructor(placa: string, quilometragemAtual: number) {
            super(placa, quilometragemAtual)
        }
        precisaRevisao(): boolean {
            return this.quilometragemAtual >= 10000
        }
    }
    class Ambulancia extends Veiculo {
        constructor(placa: string, quilometragemAtual: number) {
            super(placa, quilometragemAtual)
        }
        precisaRevisao(): boolean {
            return this.quilometragemAtual >= 5000
        }
    }
    let frota: Veiculo[] = []
    while (true) {
        let tipoVeiculo = String(prompt("Informe o tipo de veículo (onibus/ambulancia) ou 'sair' para encerrar: ")).toLowerCase()
        if (tipoVeiculo === 'sair') {
            break
        }
        let placa = String(prompt("Informe a placa do veículo: "))
        let quilometragemAtual = Number(prompt("Informe a quilometragem atual: "))
        if (tipoVeiculo === 'onibus') {
            frota.push(new Onibus(placa, quilometragemAtual))
        } else if (tipoVeiculo === 'ambulancia') {
            frota.push(new Ambulancia(placa, quilometragemAtual))
        }
    }
    let placaConsulta = String(prompt("Informe a placa do veículo para verificar se precisa de revisão: "))
    let veiculoEncontrado = frota.find(veiculo => veiculo.placa === placaConsulta)
    if (veiculoEncontrado) {
        if (veiculoEncontrado.precisaRevisao()) {
            console.log(`O veículo com placa ${placaConsulta} precisa de revisão imediata.`)
        } else {
            console.log(`O veículo com placa ${placaConsulta} não precisa de revisão no momento.`)
        }
    } else {
        console.log(`Veículo com placa ${placaConsulta} não encontrado.`)
    }
}
