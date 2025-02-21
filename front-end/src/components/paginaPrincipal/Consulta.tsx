import style from "./Consulta.module.css";
import { Link } from 'react-router-dom';

//Parte visual referente a Consultas na pagina inicial
function Consulta() {

    return (
        <div>
            <div className="imagemContainer">
                <img src="/imagens/ConsultaSemFundo.PNG" alt="Consulta" />
                <h1> Consultas </h1>
                <hr className={`hr ${style.hr}`}></hr>
            </div>
            <div className="container">
                <Link to="/consulta/consultar" className={`linkButton ${style.linkButton}`}>
                    Realizar consulta
                </Link>
            </div>
        </div>
    )
}

export default Consulta;