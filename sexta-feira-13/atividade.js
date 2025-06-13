class Funcionario {
    // Construtor para a classe Funcionario
    constructor (nome, salario) {
    this.nome = nome; // Atribui o parâmetro 'nome' à propriedade 'nome' da instância
    this.salario = salario; // Atribui o parâmetro 'salario' à propriedade 'salario' da instância
    }
    
    apresentar() {
    console.log("O funcionário x faz tal coisa..."); // Um método para apresentar o funcionário
    }
    }
    
    class Gerente extends Funcionario { // A classe Gerente herda de Funcionario
    constructor(nome,salario) {
    super(nome, salario); // Chama o construtor da classe pai para inicializar 'nome' e 'salario'
    }
    reunir(){
    console.log("Reunir funcionários para a reunião"); // Método específico do Gerente: realizar reuniões
    }
    apresentar() {
    console.log("O gerente organiza reuniões e monitora as ações da empresa..."); // Sobrescreve o método 'apresentar' para Gerente
    }
    }
    
    class Desenvolvedor extends Funcionario { // A classe Desenvolvedor herda de Funcionario
    constructor(nome,salario) {
    super(nome, salario); // Chama o construtor da classe pai para inicializar 'nome' e 'salario'
    }
    codar(){
    console.log("O desenvolvedor está criando um novo código..."); // Método específico do Desenvolvedor: codificar
    }
    apresentar() {
    console.log("O desenvolvedor cria e faz manutenção de códigos do sistema da empresa..."); // Sobrescreve o método 'apresentar' para Desenvolvedor
    }
    }
    
    class Email {
    #mensagem = ''; // Campo privado '#mensagem' inicializado como uma string vazia
    
    conteudo(texto){ // Método para definir o conteúdo do e-mail
    // Verifica se o comprimento do texto está entre 1 e 139 caracteres (exclusivo)
    if (texto.length > 0 && texto.length < 140 ) {
    this.#mensagem = texto; // Se válido, atribui o 'texto' ao campo privado '#mensagem'
    console.log("Sucesso! Email enviado!"); // Mensagem de sucesso
    }
    else {
    // Mensagem de erro para comprimento inválido
    console.error('Mensagem inválida! (O texto não pode ser vazio ou passar de 140 caracteres)');
    }
    }
    }
    
    // Tenta criar um novo objeto Email e chamar seu método 'conteudo' com uma string vazia.
    // Isso irá acionar a mensagem de erro devido à validação no método 'conteudo'.
    dev1 = new Email().conteudo('');
    
    dev2 = new Email().conteudo('mensagemmm');
    // Isso irá acionar a mensagem de sucesso devido à validação no método 'conteudo'.