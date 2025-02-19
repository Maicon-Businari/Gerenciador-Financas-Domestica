import style from "./Consulta.module.css";

function Consulta() {

    return (
        <div>
            <div className={style.imagemContainer}>
                <img src="/imagens/ConsultaSemFundo.PNG" alt="Consulta" />
                <h1> Consultas </h1>
                <hr className={style.hr}></hr>
            </div>
          <div className={style.consultaContainer}>
          <button className={style.button}> Realizar consulta </button>

          </div>
        </div>
    )
}

export default Consulta;