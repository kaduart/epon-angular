import { Permissao } from './permissao';
import { Aplicacao } from './aplicacao';

export class User {
  nome: string;
  sobrenome: string;
  email: string;
  password: string;
  permissoes: Permissao[];
  aplicacao: Aplicacao;
  emailAlternativo: string;
  checkAtualizacoes: boolean;
  telefone: string;
  cep: string;
  uf: string;
  cidade: string;
  quemSou: string;
  checkEmailAlternativo: boolean;
}
