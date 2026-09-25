// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código identificador 
// e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada da unidade "°C" e 
// possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura acompanhada de "atm" e 
// alerta se passar de 5 atm. O programa deve solicitar repetidamente que o técnico digite os valores lidos 
// pelos sensores espalhados pela fábrica, armazenando-os em um array. No final, o programa filtra a lista e 
// exibe o relatório de todos os sensores que dispararam alertas de perigo.
export function q19poo() {
    class Sensor {
        constructor(codigo, ultimaLeitura) {
            this.codigo = codigo;
            this.ultimaLeitura = ultimaLeitura;
        }
    }
    class SensorTemperatura extends Sensor {
        constructor(codigo, ultimaLeitura) {
            super(codigo, ultimaLeitura);
        }
        exibirLeitura() {
            console.log(`Sensor de Temperatura ${this.codigo}: ${this.ultimaLeitura}°C`);
            if (this.ultimaLeitura > 40) {
                console.log("Alerta: Temperatura acima de 40°C!");
            }
        }
    }
    class SensorPressao extends Sensor {
        constructor(codigo, ultimaLeitura) {
            super(codigo, ultimaLeitura);
        }
        exibirLeitura() {
            console.log(`Sensor de Pressão ${this.codigo}: ${this.ultimaLeitura} atm`);
            if (this.ultimaLeitura > 5) {
                console.log("Alerta: Pressão acima de 5 atm!");
            }
        }
    }
    let sensores = [];
    while (true) {
        let tipoSensor = String(prompt("Informe o tipo de sensor (temperatura/pressao) ou 'sair' para encerrar: ")).toLowerCase();
        if (tipoSensor === 'sair') {
            break;
        }
        let codigo = String(prompt("Informe o código do sensor: "));
        let ultimaLeitura = Number(prompt("Informe a última leitura do sensor: "));
        if (tipoSensor === 'temperatura') {
            sensores.push(new SensorTemperatura(codigo, ultimaLeitura));
        }
        else if (tipoSensor === 'pressao') {
            sensores.push(new SensorPressao(codigo, ultimaLeitura));
        }
    }
    console.log("Relatório de Sensores com Alertas:");
    for (const sensor of sensores) {
        sensor.exibirLeitura();
    }
}
