import { gerarSenha } from "../geradorSenha";

describe('Gerador', () => {

    it('Deve testar tamanho padrão de digitos é igual a 8', () => {
        let senhaGerada = gerarSenha(0, true, true, true, true);
        expect(senhaGerada.length).toBe(8);
    });

    it('Testa se a senha gerada contém apenas números', () => {
        const senhaApenasComNumeros = gerarSenha(0, false, false, true, false);
        const regex = /^\d+$/;
        expect(regex.test(senhaApenasComNumeros)).toBeTrue();
    });
    
    

});
