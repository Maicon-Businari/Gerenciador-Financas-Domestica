import { useState } from "react";
import axios from "axios";


import style from "./Pessoa.module.css";

function CadastrarPessoa() {

    const url = "http://localhost:8080/pessoa/cadastrar";

    const [mensagem, setMensagem] = useState<string | null>(null);

    function isNumero(val: string): boolean {
        return /^\d+$/.test(val);  // Verifica se a string contém apenas dígitos
    }

    async function cadastrar(e: React.FormEvent) {
        e.preventDefault();
        if (typeof nome === 'undefined' || typeof idade === 'undefined' || nome === "" || idade === "") {
            setMensagem("Favor preencha todos os campos");
            return;
        }

        if(!isNumero(idade)){
            setMensagem("Idade inválida.");
            return;
        }
        
        const idadeNum = parseInt(idade)


        axios.post(url, {
            nome: nome,
            idade: idadeNum
        })
            .then(res => {
                if (res.status === 200) {
                    console.log("cadastrado", res.data)
                    setMensagem("Pessoa cadastrada com sucesso!");
                }
            })
            .catch(e => {
                setMensagem("Erro ao cadastrar a pessoa! Tente novamente.");
                console.log("Erro ao cadastrar", e);

            });
            
    }

    const [nome, setNome] = useState<string>();
    const [idade, setIdade] = useState<string>();


    return (
        <div className={style.cadastroPessoas}>
            <h1 className={style.titulo}> Cadastro de Pessoa</h1>
            <form className={style.inputCadastroPessoas} onSubmit={cadastrar}>
                <input className={style.input} type="text" id="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                <input className={style.input} type="text" id="idade" placeholder="Idade" onChange={(e) => setIdade(e.target.value)} />
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

export default CadastrarPessoa;