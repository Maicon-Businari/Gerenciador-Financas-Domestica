import { useState, useEffect } from "react";
import axios from "axios";

import style from "./RealizarConsulta.module.css";
import Gastos from "../../models/Gastos";

function RealizarConsulta() {


    const url = "http://localhost:8080/consulta/calculargastos";

    async function listarConsulta() {
        axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    setGastos(res.data)
                }
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        listarConsulta();
    }, []);

    const [gastos, setGastos] = useState<Gastos[]>([]);

    return (
        <div className={style.containerListaConsulta}>
            <h1 className={style.titulo}> Consulta de finanças </h1>

            {gastos.length > 0 ? (
                <table className={style.table}>
                    <thead>
                        <tr className={style.linhaListaTitulo}>
                            <th className={style.itemLista}>Nome</th>
                            <th className={`${style.itemLista} ${style.itemListaMeio}`}>Receitas</th>
                            <th className={`${style.itemLista} ${style.itemListaMeio}`}>Despesas</th>
                            <th className={style.itemLista}>Saldo final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gastos.map((gasto) => (

                            <tr key={gasto.id} className={style.linhaListaItem}>
                                <td className={style.itemLista}>{gasto.nome}</td>
                                <td className={`${style.itemLista} ${style.itemListaMeio}`}>R${gasto.receita}</td>
                                <td className={`${style.itemLista} ${style.itemListaMeio}`}>R${gasto.despesa}</td>
                                <td className={style.itemLista}>R${gasto.saldo}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            ) : (<h1 className={style.nenhumItem}> Nenhuma transação foi realizada.</h1>)}
        </div>
    )
}

export default RealizarConsulta;