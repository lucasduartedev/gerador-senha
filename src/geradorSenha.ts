
export function gerarSenha(tamanho: number, incluirMinusculas: boolean, incluirMaiusculas: boolean, incluirNumeros: boolean, incluirSimbolos: boolean): string {
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

// Exemplo de uso
// console.log(gerarSenha(10, true, true, true, true));
