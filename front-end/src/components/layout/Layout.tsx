import style from "./Layout.module.css"
import { Outlet } from "react-router-dom";

//Componente fixo -> Será utilizado em todo o site
function Layout() {
    return (
        <div className={style.layoutPrincipal}>
            <h1>Gerenciador de finanças</h1>
            <div className={style.layoutContainer}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;