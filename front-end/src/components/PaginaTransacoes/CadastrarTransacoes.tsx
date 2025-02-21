import { useState } from "react";
import axios from "axios";

import style from "./Transacoes.module.css";


function CadastrarTransacoes() {

    const url = "http://localhost:8080/transacao/cadastrar";

    const [mensagem, setMensagem] = useState<string | null>(null);

    function validarNumeros(numero: string) {
        const regex = /^[0-9]+(\.[0-9]+)?$/; 
        return regex.test(numero);
    }

    async function cadastrar(e: React.FormEvent) {
        e.preventDefault();
        if (typeof descricao === 'undefined' || typeof valor === 'undefined' ||  receita == null || typeof nome === 'undefined'
            || descricao == "" || valor == "" || nome == ""
        ) {
            setMensagem("Favor preencha todas as indormações");
            return;
        }

        if (!validarNumeros(valor)) {
            setMensagem("Valor invalido");
            return;
        }

        const valorNum = Math.abs(parseInt(valor));


        axios.post(url, {
            descricao: descricao,
            valor: valorNum,
            receita: receita,
            pessoa: {
                nome: nome
            }

        })
            .then(res => {
                if (res.status == 200) {
                    setMensagem("transação cadastrada com sucesso!");
                }
            })
            .catch(e => {
                setMensagem("Pessoa não encontrada");
                console.log("Erro ao cadastrar", e);
            });

    }

    const [descricao, setDescricao] = useState<string>();
    const [valor, setValor] = useState<string>();
    const [receita, setReceita] = useState<boolean | null>(null);
    const [nome, setNome] = useState<string>();

    const handleTipoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "receita") {
            setReceita(true);
        } else {
            setReceita(false);
        }
    }



    return (
        <div className={style.cadastroPessoas}>
            <h1 className={style.titulo}> Cadastro de Pessoa</h1>
            <form className={style.inputCadastroPessoas} onSubmit={cadastrar}>
                <input className={style.input} type="text" id="nome" placeholder="Nome responsavel pela transação" onChange={(e) => setNome(e.target.value)} />
                <input className={style.input} type="text" id="valor" placeholder="Valor" onChange={(e) => setValor(e.target.value)} />
                <input className={style.input} type="text" id="descricao" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
                <div>
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="receita"
                            checked={receita === true}
                            onChange={handleTipoChange}
                        />
                        Receita
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="despesa"
                            checked={receita === false}
                            onChange={handleTipoChange}
                        />
                        Despesa
                    </label>
                </div>

                <input className={style.buttom} type="submit" value="Cadastrar" />

            </form>


            {mensagem && (
                <div className={style.mensagem}>
                    {mensagem}
                </div>
            )}
        </div>
    )
}

export default CadastrarTransacoes;