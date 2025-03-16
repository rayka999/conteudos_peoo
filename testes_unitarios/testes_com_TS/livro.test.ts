import Livro from "./livro";

describe("Livro virtual", () => {
    let livro_01: Livro;

    beforeEach(() => {
        livro_01 = new Livro("Dragões de Éter", 20, "Livro escrito pelo brasileiro nato Raphael Draco");
    });

    test("Deve criar um livro corretamente", () => {
        expect(livro_01.nome).toBe("Dragões de Éter");
        expect(livro_01.preco).toBe(20);
        expect(livro_01.descricao).toBe("Livro escrito pelo brasileiro nato Raphael Draco");
    });

    test("Testando valores inválidos", () => {
        console.error = jest.fn(); // Fazendo mock para o console.error

        livro_01.AlterarPreco(0); // Testando preço inválido
        expect(console.error).toHaveBeenCalledWith('O valor deve ser maior e diferente de 0');

        livro_01.AlterarPreco(-10); // Testando preço negativo
        expect(console.error).toHaveBeenCalledWith('O valor deve ser maior e diferente de 0');
    });

    test("Testando alteração do preço do livro", () => {
        livro_01.AlterarPreco(30);
        expect(livro_01.preco).toBe(30); // Verificando se o preço foi alterado
    });

    test("Teste de aplicação de desconto", () => {
        livro_01.Aplicar_Desconto(0.1); // Aplicando 10% de desconto
        expect(livro_01.preco).toBe(18); // O preço deve ser 18 após o desconto de 10% (20 * 0.9)
    });

    test("Deve exibir as informações do livro", () => {
        console.log = jest.fn(); // Mockando o console.log
        livro_01.Aplicar_Desconto(0.1); // Aplicando o desconto aqui para o preço ser 18
        livro_01.informativo(); // Chamando o método que deve exibir as informações
        expect(console.log).toHaveBeenCalledWith(
            "Informações do livro- Nome: Dragões de Éter, Preço: 18, Descrição: Livro escrito pelo brasileiro nato Raphael Draco"
        );
    });
});
