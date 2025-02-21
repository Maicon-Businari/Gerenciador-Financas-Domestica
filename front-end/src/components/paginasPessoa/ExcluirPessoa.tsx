import { useState } from "react";
import axios from "axios";

import style from "./Pessoa.module.css";



function ExcluirPessoa() {

    const url = "http://localhost:8080/pessoa/deletar";

    const [mensagem, setMensagem] = useState<string | null>(null);

   

    async function excluir(e: React.FormEvent) {
        e.preventDefault();
        if (typeof nome === 'undefined'|| nome === "" ) {
            setMensagem("Favor informar um nome.");
            return;
        }

        axios.delete(`${url}/${nome}`)
            .then(res => {
                if (res.status === 200) {
                    setMensagem(res.data);
                }
            })
            .catch(e => {
                setMensagem("Erro ao excluir a pessoa! Tente novamente.");

            });
            
    }

    const [nome, setNome] = useState<string>();

    return (
        <div className={style.cadastroPessoas}>
            <h1 className={style.titulo}> Excluir Pessoa</h1>
            <form className={style.inputCadastroPessoas} onSubmit={excluir}>
                <input className={style.input} type="text" id="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                <input className={style.buttom} type="submit" value="Excluir" />
            </form>


            {mensagem && (
                <div className={style.mensagem}>
                    {mensagem}
                </div>
            )}
        </div>
    )
}

export default ExcluirPessoa;