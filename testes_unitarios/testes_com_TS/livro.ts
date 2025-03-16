class Livro {
    private _nome: string;
    private _preco: number;
    private _descricao: string;

    constructor(nome: string, preco: number, descricao: string) {
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
    }

    get nome(): string {
        return this._nome;
    }

    get preco(): number {
        return this._preco;
    }

    get descricao(): string {
        return this._descricao;
    }

    AlterarPreco(valor: number) {
        if (valor <= 0) {
            console.error("O valor deve ser maior e diferente de 0");
            return;
        }
        this._preco = valor;
    }

    Aplicar_Desconto(porcentagem: number) {
        this._preco = this._preco * (1 - porcentagem);
    }

    informativo(): void {
        console.log(`Informações do livro- Nome: ${this.nome}, Preço: ${this.preco}, Descrição: ${this.descricao}`);
    }
}

export default Livro;  // Exportando a classe como padrão
