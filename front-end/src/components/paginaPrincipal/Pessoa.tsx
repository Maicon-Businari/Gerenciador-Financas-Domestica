import { Link } from 'react-router-dom';
import style from './Pessoa.module.css'
import '../../App.css';

//Parte visual referente a Pessoas na pagina inicial
function Pessoa() {
    return (
        <div>
            <div className="imagemContainer">
                <img src="/imagens/PessoaSemFundo.PNG" alt="Pessoa" />
                <h1> Pessoas </h1>
                <hr className={`hr ${style.hr}`}></hr>
            </div>
            <div className="container">
                <Link to="/pessoas/cadastrar" className={`linkButton ${style.linkButton}`}>
                    Cadastrar
                </Link>
                <Link to="/pessoas/buscar" className={`linkButton ${style.linkButton}`}>
                    Buscar
                </Link>
                <Link to="/pessoas/listar" className={`linkButton ${style.linkButton}`}>
                    Listar
                </Link>
                <Link to="/pessoas/excluir" className={`linkButton ${style.linkExcluir}`}>
                    Excluir
                </Link>
            </div>
        </div>
    )
}

export default Pessoa;