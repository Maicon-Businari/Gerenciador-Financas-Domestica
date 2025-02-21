import { useState, useEffect } from "react";
import axios from "axios";
import Pessoa from "../../models/Pessoa";

import style from "./Pessoa.module.css";

function ListarPessoa() {

    const url = "http://localhost:8080/pessoa/listar";

    async function listarPessoas() {
        axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    setPessoas(res.data)
                }
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        listarPessoas();
    }, []);

    const [pessoas, setPessoas] = useState<Pessoa[]>([]);


    return (
        <div className={style.containerListaPessoas}>
            <h1 className={style.titulo}> Lista de pessoas </h1>


            {pessoas.length > 0 ? (
                <table className={style.table}>
                    <thead>
                        <tr className={style.linhaListaTitulo}>
                            <th className={style.itemLista}>Nome</th>
                            <th className={`${style.itemLista} ${style.itemListaMeio}`}>Idade</th>
                            <th className={style.itemLista}>Quantidade de transações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pessoas.map((pessoa) => (

                            <tr key={pessoa.id} className={style.linhaListaItem}>
                                <td className={style.itemLista}>{pessoa.nome}</td>
                                <td className={`${style.itemLista} ${style.itemListaMeio}`}>{pessoa.idade}</td>
                                <td className={style.itemLista}>{pessoa.transacoes.length}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            ) : (<h1 className={style.nenhumItem}> Nenhuma pessoa encontrada </h1>)}
        </div>

    )
}

export default ListarPessoa;