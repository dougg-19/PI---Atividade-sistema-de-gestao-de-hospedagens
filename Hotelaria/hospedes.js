import { quartosDisponveis, quartosIndisponiveis } from "./quartos.js";
import { perguntarTexto, perguntarNumero } from "./entrada.js";

export const hospedes = [];


export function cadastrarHospedes() {

    let nome = perguntarTexto("Digite o nome que gostaria de colocar: ");

    let telefone = perguntarNumero("Digite o numero de telefone: ");

    let email = perguntarTexto("Digite o e-mail do cliente: ");

    let tipo = perguntarTexto("Especifique o tipo de cliente VIP|Comum: ");

    let quarto = perguntarNumero("Coloque o quarto que gostaria de colocar o cliente: ")
    try {
        if (!nome || !telefone || !email) {
            throw new Error("Preencha nome e sobrenome, telefone e e-mail");

        }

        const cadastroDuplicado = hospedes.some((hospede) => 
        hospede.telefone === telefone || hospede.email.toLowerCase() === email.toLowerCase()
);

        if (cadastroDuplicado) {
            throw new Error("Ja existe um hospede cadastrado com esse telefone ou e-mail");

        }

        if (nome.trim() === "") {
            throw new Error("Voce nao pode deixar a area de nome vazia.")
        }

        if (telefone === String) {
            throw new Error("O numero de telefone deve conter apenas numeros.")
        }




const hospede = {
    quarto: quarto,
    id: hospedes.length + 1,
    nome: nome,
    telefone: telefone,
    email: email,
    tipo: tipo,
    checkin: "Nao realizado",
    checkout: "Nao realizado"
};


    const quartoEncontrado = quartosDisponveis.find(q => q === quarto);

        if (quartoEncontrado === undefined) {
            throw new Error("Quarto inexistente ou indisponível.");
}

    const indice = quartosDisponveis.indexOf(quartoEncontrado);

    quartosDisponveis.splice(indice, 1);

    quartosIndisponiveis.push(quartoEncontrado);
    hospedes.push(hospede);
    return hospede;

} catch (erro) {
    console.log(erro.message)
}
    }

export function buscarHospedePorId(id) {
    return hospedes.find((hospede) => hospede.id === id) || null;

}

export function listarHospedes() {
    return hospedes;

}