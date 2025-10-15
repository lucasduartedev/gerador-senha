
import Calculadora from "../app";

let calc = new Calculadora();

describe('Calculadora', () => {
    it('Deve somar dois números corretamente', () => {
        // const calc = new Calculadora();
        const resultado = calc.soma(5, 3);
        expect(resultado).toBe(8);
    });
});
