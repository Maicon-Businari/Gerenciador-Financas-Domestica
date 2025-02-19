import style from "./Principal.module.css"

import Pessoa from "./Pessoa";
import Transacao from "./Transacao";
import Consulta from "./Consulta";

function Principal() {
    return (
        <div className={style.tituloPrincipal}>
            <h1>Gerenciador de finanças</h1>
            <div className={style.principalContainer}>
                <Pessoa />
                <Transacao />
                <Consulta />
            </div>
        </div>
    )
}

export default Principal;