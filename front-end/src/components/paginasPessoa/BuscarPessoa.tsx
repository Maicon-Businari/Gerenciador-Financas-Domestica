import { useState } from "react";
import style from "./Pessoa.module.css";
import { ReactFormState } from "react-dom/client";
import axios from "axios";
import Pessoa from "../../models/Pessoa";


function BuscarPessoa() {

    const url = "http://localhost:8080/pessoa/buscar";

    function buscar(e: React.FormEvent) {
        e.preventDefault();

        setPessoa(null);
        if (typeof nome === 'undefined' || nome === "") {
            setMensagem("Favor digitar um nome")
            return
        }

        axios.get(`${url}/${nome}`)
            .then(res => {
                if (res.data === '') {
                    setMensagem("Pessoa não encontrada")
                    return
                }
                setMensagem("")
                setPessoa(res.data);

            })
            .catch(e => {
                console.log("Erro ao buscar pessoa", e)
            })

    }

    const [mensagem, setMensagem] = useState<string>()

    const [nome, setNome] = useState<string>();

    const [pessoa, setPessoa] = useState<Pessoa | null>(null);

    return (
        <div className={style.cadastroPessoas}>
            <h1 className={style.titulo}> Busca de Pessoa</h1>
            <form className={style.inputBuscarPessoas} onSubmit={buscar}>
                <input className={style.input} type="text" id="nome" placeholder="Digite no nome" onChange={(e) => setNome(e.target.value)} />
                <input className={style.buttom} type="submit" value="Buscar" />
            </form>
            {mensagem && (
                <div>
                    {mensagem}
                </div>
            )}

            {pessoa && (
                <div>
                    <table className={style.table}>
                        <thead>
                            <tr className={style.linhaListaTitulo}>
                                <th className={style.itemLista}>Nome</th>
                                <th className={`${style.itemLista} ${style.itemListaMeio}`}>Idade</th>
                                <th className={style.itemLista}>Quantidade de transações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={pessoa.id} className={style.linhaListaItem}>
                                <td className={style.itemLista}>{pessoa.nome}</td>
                                <td className={`${style.itemLista} ${style.itemListaMeio}`}>{pessoa.idade}</td>
                                <td className={style.itemLista}>{pessoa.transacoes.length}</td>
                            </tr>

                        </tbody>
                    </table>

                    <h2 className={style.titulo}> Lista de transações de {pessoa.nome}</h2>

                    {pessoa.transacoes.length > 0 ? (
                        <table className={style.table}>
                        <thead>
                            <tr className={style.linhaListaTitulo}>
                                <th className={style.itemLista}>Nome</th>
                                <th className={`${style.itemLista} ${style.itemListaMeio}`}>Descrição</th>
                                <th className={`${style.itemLista} ${style.itemListaMeio}`}>Valor</th>
                                <th className={style.itemLista}>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pessoa.transacoes.map((transacao) => (

                                <tr key={transacao.id} className={style.linhaListaItem}>
                                    <td className={style.itemLista}>{transacao.nome}</td>
                                    <td className={`${style.itemLista} ${style.itemListaMeio}`}>{transacao.descricao}</td>
                                    <td className={`${style.itemLista} ${style.itemListaMeio}`}>{transacao.valor}</td>
                                    <td className={style.itemLista}>{transacao.receita ? "Receita" : "Despesas"}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                    ) : (<h3 className={style.nenhumItem}> Nenhuma transação encontrada </h3>)} 
                </div>
            )}
        </div>
    )
}

export default BuscarPessoa;