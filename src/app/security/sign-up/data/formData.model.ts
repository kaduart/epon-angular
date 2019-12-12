export class FormData {
    nome = '';
    sobrenome = '';
    email = '';
    cemail = '';
    ealternativo = '';
    telefone = '';
    cep = '';
    uf = '';
    cidade = '';
    senha = '';
    senhaConfirm = '';


    clear() {
        this.nome = '';
        this.sobrenome = '';
        this.email = '';
        this.cemail = '';
        this.ealternativo = '';
        this.telefone = '';
        this.cep = '';
        this.uf = '';
        this.cidade = '';
        this.senha = '';
        this.senhaConfirm = '';
    }
}

export class Personal {
    nome = '';
    sobrenome = '';
    email = '';
    cemail = '';
    ealternativo = '';
}

export class Complement {
    telefone = '';
    cep = '';
    uf = '';
    cidade = '';
}

export class Password {
    senha = '';
    senhaConfirm = '';
}
