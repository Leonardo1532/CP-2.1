let qtdCombustivel = 0

function gastoCombustivel(distanciaMetros, tipoCombustivel) {

    if (typeof distanciaMetros == "number" && distanciaMetros >= 0 && typeof tipoCombustivel == "string") {

        if (tipoCombustivel == "gasolina") {
            qtdCombustivel = (distanciaMetros / 16) * 0.001
            console.log((qtdCombustivel).toFixed(2) + " Litros")
            return (qtdCombustivel).toFixed(2)
        } else if (tipoCombustivel == "etanol") {
            qtdCombustivel = (distanciaMetros / 11) * 0.001
            console.log((qtdCombustivel).toFixed(2) + " Litros")
            return (qtdCombustivel).toFixed(2)
        } else {
            console.log("Parâmetros errados1")
        }
    } else {
        console.log("Parâmetros errados2")
    }
}

// gastoCombustivel(12000, "gasolina")

function qtdParadas(ArrayPassageiros, duracaoViagemEmHoras) {
    let adultos = 0
    let criancas = 0
    let paradas = 0

    for (let index = 0; index < ArrayPassageiros.length; index++) {
        if (ArrayPassageiros[index] == "adulto") {
            adultos++
        } else {
            criancas++
        }
    }
    if (adultos >= 1 && criancas == 0) {
        paradas = (duracaoViagemEmHoras * 60) / 90
    } else if (adultos >= 1 && criancas >= 1) {
        paradas = (duracaoViagemEmHoras * 60) / 60
    } else if (criancas > adultos) {
        paradas = (duracaoViagemEmHoras * 60) / 40
    }
    console.log("foram feitas " + (paradas).toFixed(0) + " paradas")
    return paradas
}

function ValorRefeicoes(paradas, ArrayPassageiros) {
    let Refeicoes = 0
    let refCompleta = 0
    let refLeve
    let valorTotal = 0

    if (paradas % 3 == 0) {
        Refeicoes = paradas / 3
        refCompleta = Refeicoes
        refLeve = Refeicoes * 2
    } else if (paradas % 3 == 1) {
        Refeicoes = Math.floor(paradas / 3)
        refCompleta = Refeicoes + 1
        refLeve = Refeicoes * 2
    } else if (paradas % 3 == 2) {
        Refeicoes = Math.floor(paradas / 3)
        refCompleta = Refeicoes + 1
        refLeve = (Refeicoes * 2) + 1
    }

    for (let index = 0; index < ArrayPassageiros.length; index++) {
        if (ArrayPassageiros[index] == "adulto") {
            let valorAdulto = (50 * refCompleta) + (30 * refLeve)
            valorTotal = valorTotal + valorAdulto
        } else {
            let valorCrianca = (40 * refCompleta) + (20 * refLeve)
            valorTotal = valorTotal + valorCrianca
        }
    }
    console.log("O valor total é: ", parseFloat(valorTotal))
    return parseFloat(valorTotal)
}

module.exports = { gastoCombustivel, qtdParadas, ValorRefeicoes }

let paradas = qtdParadas(["adulto", "adulto", "adulto", "criança", "criança"], 4)

ValorRefeicoes(paradas, ["adulto", "adulto", "adulto", "criança", "criança"])