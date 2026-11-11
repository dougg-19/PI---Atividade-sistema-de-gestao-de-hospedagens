import readlineSync from "readline-sync";

export function perguntarTexto(mensagem) {
    return readlineSync.question(mensagem).trim();

}

export function perguntarNumero(mensagem) {
    const reposta = readlineSync.question(mensagem).trim();
    const numero = Number(reposta);
    return numero;

}

export function pausar() {
    readlineSync.question("\nPressione ENTER para continuar...");
    
}