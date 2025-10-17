
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
    let quantidade = parseInt(caixaQuantidade.value);

    // console.log({ quantidade, usarMinusculos, usarMaiusculas, usarNumeros, usarSimbolos });

    const senhaGerada: string = gerarSenha(quantidade, usarMinusculos, usarMaiusculas, usarNumeros, usarSimbolos);

    caixaResultado.value = senhaGerada;

});
