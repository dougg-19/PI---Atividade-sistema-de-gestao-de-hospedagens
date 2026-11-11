import { hospedes, cadastrarHospedes } from "./hospedes.js";
import { verificarQuartosDisponiveis, verificarCliente } from "./verificacao.js";
import { checkIn, checkOut } from "./checkinout.js";
import { perguntarTexto, perguntarNumero } from "./entrada.js";
import { quartosDisponveis, quartosIndisponiveis } from "./quartos.js";

let opcao = 0;

while (true) {

console.log("\n==== HOTEL DE LUXO ====\n");

console.log("1. Cadastro de clientes");
console.log("2. Check-In/Check-Out");
console.log("3. Quartos disponíveis");
console.log("4. Procurar cliente");
console.log("5. Sair");



opcao = perguntarNumero("\nDigite a opcao desejada: ");

switch (opcao) {
    case 1:
        cadastrarHospedes()
        break;

    case 2:
        let verificarCheckInOut = perguntarTexto("Voce gostaria de realizar o check-in ou check-out: ").toLowerCase().trim();

        if (verificarCheckInOut !== "check-in" && verificarCheckInOut !== "check-out") {
            console.log("Voce deve escolher uma opcao valida.");
            break;
        }

        if (verificarCheckInOut === "check-in") {
            checkIn()
            break;
        }

        if (verificarCheckInOut === "check-out") {
            checkOut()
            break;
        }

        break;
    case 3:
        verificarQuartosDisponiveis()
        break;

    case 4:
        verificarCliente()
        break;

    case 5:
        console.log("Encerrando...");
        break;

    default:
        console.log("Opcao invalida");
        break;
};
if (opcao === 5) {
    break;
};
};


