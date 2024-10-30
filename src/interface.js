"use strict";
class conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
