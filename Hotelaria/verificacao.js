import { hospedes, cadastrarHospedes} from "./hospedes.js";
import { checkIn, checkOut} from "./checkinout.js";
import { perguntarTexto, perguntarNumero } from "./entrada.js";
import { quartosDisponveis } from "./quartos.js";


export function verificarCliente() {

    const procurarCliente = perguntarTexto("Digite o nome do cliente que gostaria de verificar: ");

    try {
        if (procurarCliente.trim() === "") {
            throw new Error("O nome nao pode ficar vazio.");
        }

        const encontrarCliente = hospedes.find(cliente =>
            procurarCliente.toLowerCase() === cliente.nome.toLowerCase()
        );

        if (!encontrarCliente) {
            throw new Error("Cliente nao encontrado.");
        }

        console.log(`Cliente: ${encontrarCliente.nome}`);
        console.log(`Quarto: ${encontrarCliente.quarto}`);
        console.log(`Telefone: ${encontrarCliente.telefone}`);
        console.log(`E-mail: ${encontrarCliente.email}`);
        console.log(`Check-In: ${encontrarCliente.checkin}`);
        console.log(`Check-Out: ${encontrarCliente.checkout}`);
        console.log(`ID: ${encontrarCliente.id}`);

    } catch (erro) {
        console.log(erro.message);
    }
}



export function verificarQuartosDisponiveis() {

    quartosDisponveis.forEach(indice => {
        console.log(`Quarto: ${indice} | Disponibilidade: Disponível`);
    });

};

