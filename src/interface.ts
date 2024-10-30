class conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends conta implements ITransacional {
    transferir(valor: number, destinatario: conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;

}

