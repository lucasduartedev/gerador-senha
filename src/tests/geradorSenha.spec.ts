import { gerarSenha } from "../geradorSenha.js";
import {tamanhoPadrao, alfabetoMinusculo, numeros, simbolos} from '../conjuntoCaracteres.js'

describe('Gerador de Senha: ', () => {

    const numeroMaiorQue32 = Math.floor(Math.random() * (100 - 33 + 1)) + 33;
    const numeroAleatorioEntre_1_32 = Math.floor(Math.random() * (32 - 1 + 1)) + 1;
    const numeroAleatorioNegativo = Math.floor(Math.random() * (-25));

    it('Testar tamanho padrão da senha', () => {
        let senhaGerada = gerarSenha(0, true, true, true, true);
        expect(senhaGerada.length).toBe(tamanhoPadrao);
    });
    
    it('Deve gerar senha com oito (8) dígitos caso usuário não informe nada', () => {
        const senhaSemParametros = gerarSenha(0, false, false, false, false);
        expect(senhaSemParametros.length).toBe(tamanhoPadrao);
    });

    it('Deve gerar senha apenas com letras e em minúsculo caso o usuário não informe nada', () => {
        const senhaSemParametros = gerarSenha(0, false, false, false, false);
        expect(senhaSemParametros.length).toBe(tamanhoPadrao);
    });
    
    it('Testar se usuário informou número negativo e define o tamanho para o padrão inicial', () => {
        let senhaGerada = gerarSenha(numeroAleatorioNegativo, true, true, true, true);
        expect(senhaGerada.length).toBe(tamanhoPadrao);
    });
    
    it('Testa se usuário informou número elevado ao limite permitido e define o tamanho para o padrão inicial', () => {
        let senhaGerada = gerarSenha(numeroMaiorQue32, true, true, true, true);
        expect(senhaGerada.length).toBe(tamanhoPadrao);
    });

    it('Testa se a senha gerada contém apenas números', () => {
        const senhaApenasComNumeros = gerarSenha(numeroAleatorioEntre_1_32, false, false, true, false);
        const regexNumbers = /^\d+$/;
        expect(regexNumbers.test(senhaApenasComNumeros)).toBeTrue();
    });
    
    it('Testa se a senha contém apenas letras minúsculas', () => {
        const senhaApenasComLetrasMinusculas = gerarSenha(numeroAleatorioEntre_1_32, true, false, false, false);
        const regexAlpha = /^[a-z]+$/
        expect(regexAlpha.test(senhaApenasComLetrasMinusculas)).toBeTrue();
    });
    
    it('Testa se a senha contém apenas letras maiúsculas', () => {
        const senhaApenasComLetrasMaiusculas = gerarSenha(numeroAleatorioEntre_1_32, false, true, false, false);
        const regexAlpha = /^[A-Z]+$/
        expect(regexAlpha.test(senhaApenasComLetrasMaiusculas)).toBeTrue();
    });
    
    it('Testa se a senha contém apenas símbolos', () => {
        const senhaApenasComSimbolos = gerarSenha(numeroAleatorioEntre_1_32, false, false, false, true);
        const regexSimbolos = /^[!@#$%^&*()_+-\[\]{}|;:,.<>?]+$/
        expect(regexSimbolos.test(senhaApenasComSimbolos)).toBeTrue();
    });

});
