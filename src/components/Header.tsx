import '../styles/main.css'
import '../styles/header.css'

export default function Header() {

    return (
        <div className="containerHeader">
            <div className="container">
                <div className="headerContent">
                    <div className="logo">
                        <h1>CORE</h1>
                    </div>
                    <ul className="menu">
                        <li className="menuItem">
                            Início
                        </li>
                        <li className="menuItem">
                            Quem Somos
                        </li>
                        <li className="menuItem">
                            Serviços
                        </li>
                        <li className="menuItem">
                            Contato
                        </li>
                    </ul>
                    <button className="action">
                        Escolha a CORE
                    </button>
                </div>

            </div>
        </div>
    )
}