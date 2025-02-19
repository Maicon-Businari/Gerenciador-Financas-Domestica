import style from "./Pessoa.module.css";

function Pessoa() {

    return (
        <div>
            <div className={style.imagemContainer}>
                <img src="/imagens/PessoaSemFundo.PNG" alt="Pessoa" />
                <h1> Pessoas </h1>
                <hr className={style.hr}></hr>
            </div>
          <div className={style.pessoaContainer}>
          <button className={style.button}> Cadastrar </button>
          <button className={style.button}> Buscar </button>
          <button className={style.button}> Listar </button>
          <button className={`${style.button} ${style.buttonExcluir}`}> Excluir </button>

          </div>
        </div>
    )
}

export default Pessoa;