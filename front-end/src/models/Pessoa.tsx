import Transacao from "./Transacao";

interface Pessoa {
    id: number;
    nome: string;
    idade: number;
    transacoes: Transacao[];
}

export default Pessoa;