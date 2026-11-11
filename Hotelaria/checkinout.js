import { hospedes, cadastrarHospedes} from "./hospedes.js";
import { verificarQuartosDisponiveis, verificarCliente } from "./verificacao.js";
import { perguntarTexto, perguntarNumero } from "./entrada.js";

export function checkIn() {

    if (hospedes.length === 0) {
        console.log("Sem hospedes cadastrados.")
        return
    }

    const perguntarNome = perguntarTexto("Digite o nome do cliente que gostaria de realizar o check-in: ")

    try {

        if (perguntarNome.trim() === "") {
            throw new Error("O nome do cliente nao pode ficar vazio.")
        }

        const encontrarCliente = hospedes.find(cliente => {
            return perguntarNome === cliente.nome
        })

        if (!encontrarCliente) {
            throw new Error("Cliente nao encontrado.")
        }

        if (encontrarCliente.checkin === "Feito") {
            throw new Error("O cliente ja realizou o check-in.")
        }

        encontrarCliente.checkin = "Feito"

        console.log("Check-In Realizado!")

    } catch (erro) {
        console.log(erro.message)
    }
}

export function checkOut() {

    if (hospedes.length === 0) {
        console.log("Sem hospedes cadastrados.")
        return
    }

    const perguntarNome = perguntarTexto("Digite o nome do cliente que gostaria de realizar o check-out: ")

    try {

        if (perguntarNome.trim() === "") {
            throw new Error("O nome nao pode ficar vazio.")
        }

        const encontrarCliente = hospedes.find(cliente => {
            return perguntarNome === cliente.nome
        })

        if (!encontrarCliente) {
            throw new Error("Cliente nao encontrado.")
        }

        if (encontrarCliente.checkin !== "Feito") {
            throw new Error("Voce nao pode realizar o checkout pois o cliente nao realizou o check-in.")
        }

        if (encontrarCliente.checkout === "Feito") {
            throw new Error("O cliente ja realizou o check-out.")
        }

        encontrarCliente.checkout = "Feito"

        console.log("Check-Out Realizado!")

    } catch (erro) {
        console.log(erro.message)
    }
}

