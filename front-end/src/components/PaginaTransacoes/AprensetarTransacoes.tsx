import { useState, useEffect } from "react";
import axios from "axios";

import  style from "./Transacoes.module.css";
import Transacao from "../../models/Transacao";

function AprensetarTransacoes() {

    const url = "http://localhost:8080/transacao/listar";

    async function listarPessoas() {
        axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    setTransacoes(res.data)
                }
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        listarPessoas();
    }, []);

    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    return (
        <div className={style.containerListaTransacao}>
            <h1 className={style.titulo}> Lista de Transações </h1>


            {transacoes.length > 0 ? (
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
                        {transacoes.map((transacao) => (

                            <tr  key={transacao.id} className={style.linhaListaItem}>
                                <td className={style.itemLista}>{transacao.nome}</td>
                                <td className={`${style.itemLista} ${style.itemListaMeio}`}>{transacao.descricao}</td>
                                <td className={`${style.itemLista} ${style.itemListaMeio}`}>{transacao.valor}</td>
                                <td className={style.itemLista}>{transacao.receita ? "Receita" : "Despesas"}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            ) : (<h1 className={style.nenhumItem}> Nenhuma transação encontrada </h1>)}
        </div>
    )
}

export default AprensetarTransacoes;