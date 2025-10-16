import { gerarSenha } from "../geradorSenha.js";

describe('Gerador', () => {

    const tamanhoPadrãoDaSenha = 8;
    const numeroMaiorQue32 = Math.floor(Math.random() * (100 - 33 + 1)) + 33;
    const numeroAleatorioEntre_1_32 = Math.floor(Math.random() * (32 - 1 + 1)) + 1;
    const numeroAleatorioNegativo = Math.floor(Math.random() * (-25));
    // const simbolosValidos = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    it('Deve gerar senha com opções no padrão caso o usuário não informe nada', () => {
        const senhaSemParametros = gerarSenha(0, false, false, false, false);
        expect(senhaSemParametros.length).toBe(tamanhoPadrãoDaSenha);
    });

    it('Testar tamanho padrão da senha é igual a 8', () => {
        let senhaGerada = gerarSenha(0, true, true, true, true);
        expect(senhaGerada.length).toBe(tamanhoPadrãoDaSenha);
    });
    
    it('Testar se usuário informou número negativo e define o padrão para 8', () => {
        let senhaGerada = gerarSenha(numeroAleatorioNegativo, true, true, true, true);
        expect(senhaGerada.length).toBe(tamanhoPadrãoDaSenha);
    });
    
    it('Testa se usuário informou número maior que 32 e define o padrão para 8', () => {
        let senhaGerada = gerarSenha(numeroMaiorQue32, true, true, true, true);
        expect(senhaGerada.length).toBe(tamanhoPadrãoDaSenha);
    });

    it('Testa se a senha gerada contém apenas números', () => {
        const senhaApenasComNumeros = gerarSenha(numeroAleatorioEntre_1_32, false, false, true, false);
        const regexNumbers = /^\d+$/;
        expect(regexNumbers.test(senhaApenasComNumeros)).toBeTrue();
    });
    
    it('Testa se a senha contém apenas letras minúsculas', () => {
        const senhaApenasComNumeros = gerarSenha(numeroAleatorioEntre_1_32, true, false, false, false);
        const regexAlpha = /^[a-z]+$/
        expect(regexAlpha.test(senhaApenasComNumeros)).toBeTrue();
    });
    
    it('Testa se a senha contém apenas letras maiúsculas', () => {
        const senhaApenasComNumeros = gerarSenha(numeroAleatorioEntre_1_32, false, true, false, false);
        const regexAlpha = /^[A-Z]+$/
        expect(regexAlpha.test(senhaApenasComNumeros)).toBeTrue();
    });

});
