
const indexJs = require("./index")

let array = ["adulto", "adulto", "adulto", "criança", "criança"]

test('Calcular o gasto de combutivel por km rodado', () => {
    expect(indexJs.gastoCombustivel(16000, "gasolina")).toBe(1.00);
});

test('Calcular o número de paradas na viagem', () => {
    expect(indexJs.qtdParadas(array, 4)).toBe(4);
});

test('Calcular o gasto com refeições em parada', () => {
    expect(indexJs.ValorRefeicoes(4, array)).toBe(720);
});