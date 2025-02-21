
import Pessoa from "./Pessoa";
import Transacao from "./Transacao";
import Consulta from "./Consulta";


//Parte responsavel por unificar os 3 componentes da pagina inicial
function PaginaPrincipal(){

    return(
        <>
        <Pessoa/>
        <Transacao/>
        <Consulta/>
        </>
    )
}

export default PaginaPrincipal;