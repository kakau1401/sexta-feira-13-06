class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
 
    saudacao() {
      console.log(`${this.nome} diz oi!`);
    }
  }

class Aluno extends Pessoa{
    constructor(nome, idade, matricula){
        super(nome, idade);
        this.matricula = matricula;
    }

    apresentar(){
        console.log(`Sou o aluno ${this.nome}, matricula ${this.matricula}`);
    }
}

const p1 = new Pessoa("Vitor");
p1.saudacao;
const p2 = new Aluno ("Caio");
p2.apresentar;
