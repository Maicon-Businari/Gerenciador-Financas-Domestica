import style from "./Transacao.module.css";
import { Link } from 'react-router-dom';

//Parte visual referente a Transações na pagina inicial
function Transacao() {

    return (
        <div>
            <div className="imagemContainer">
                <img src="/imagens/TransacaoSemFundo.PNG" alt="Transação" />
                <h1> Transações </h1>
                <hr className={`hr ${style.hr}`}></hr>
            </div>
            <div className="container">
                <Link to="/transacoes/cadastrar" className={`linkButton ${style.linkButton}`}>
                    Cadastrar
                </Link>
                <Link to="/transacoes/apresentar" className={`linkButton ${style.linkButton}`}>
                    Apresentar transações
                </Link>
            </div>
        </div>
    )
}

export default Transacao;