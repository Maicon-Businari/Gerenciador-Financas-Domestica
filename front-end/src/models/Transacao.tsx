interface Transacao {
    id: number;
    descricao: string;
    valor: number;
    receita: boolean;
    nome: string;
}

export default Transacao;