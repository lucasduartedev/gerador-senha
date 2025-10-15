
import { gerarSenha } from "./geradorSenha.js";

const caixaAlfaMinusculo = document.getElementById('alfa-minusculo') as HTMLInputElement;
const caixaAlfaMaisculo = document.getElementById('alfa-maiusculo') as HTMLInputElement;
const caixaNumeros = document.getElementById('numeros') as HTMLInputElement;
const caixaSimbolos = document.getElementById('simbolos') as HTMLInputElement;
const caixaQuantidade = document.getElementById('quantidade') as HTMLInputElement;
const btnGerarSenha = document.getElementById('btn-gerar') as HTMLButtonElement;
const caixaResultado = document.getElementById('resultado') as HTMLInputElement;

btnGerarSenha?.addEventListener('click', () => {
    
    const usarMinusculos = caixaAlfaMinusculo.checked;
    const usarMaiusculas = caixaAlfaMaisculo.checked;
    const usarNumeros = caixaNumeros.checked;
    const usarSimbolos = caixaSimbolos.checked;
    const quantidade = parseInt(caixaQuantidade.value);

    // console.log({ quantidade, usarMinusculos, usarMaiusculas, usarNumeros, usarSimbolos });

    const senhaGerada: string = gerarSenha(quantidade, usarMinusculos, usarMaiusculas, usarNumeros, usarSimbolos);

    caixaResultado.value = senhaGerada;

});
/*
function gerarSenha(tamanho: number, incluirMinusculas: boolean, incluirMaiusculas: boolean, incluirNumeros: boolean, incluirSimbolos: boolean): string {
    // * Validar o tamanho da senha | 8 = padrão
    if (tamanho <= 0 || tamanho > 32) tamanho = 8;

    // * Conjuntos de caracteres disponíveis
    const alfabetoMinusculo = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
    let caracteres = '';

    // * Verificar quais conjuntos de caracteres incluir
    if (incluirMinusculas) {caracteres += alfabetoMinusculo;}
    if (incluirMaiusculas) {caracteres += alfabetoMinusculo.toUpperCase();}
    if (incluirNumeros) {caracteres += numeros;}
    if (incluirSimbolos) {caracteres += simbolos;}

    // * Gerar a senha
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const caracterSorteado = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[caracterSorteado];
    }
    
    return senha;

}

*/
