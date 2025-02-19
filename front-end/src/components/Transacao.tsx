import style from "./Transacao.module.css";

function Transacao() {

    return (
        <div>
            <div className={style.imagemContainer}>
                <img src="/imagens/TransacaoSemFundo.PNG" alt="Transação" />
                <h1> Transações </h1>
                <hr className={style.hr}></hr>
            </div>
          <div className={style.transacaoContainer}>
          <button className={style.button}> Cadastrar </button>
          <button className={style.button}> Apresentar transações </button>
          </div>
        </div>
    )
}

export default Transacao;