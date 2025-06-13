class ContaBancaria {
    // Atributo privado com #
    #saldo = 0;
  
    // Método público para depositar valores no saldo
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
      } else {
        console.log("Valor inválido para depósito.");
      }
    }
  
    // Getter para acessar o saldo de forma segura
    get saldo() {
      return this.#saldo;
    }
  
    // Setter que impede alteração direta do saldo
    set saldo(valor) {
      console.log("Erro: saldo não pode ser alterado diretamente. Use o método depositar().");
    }
  }