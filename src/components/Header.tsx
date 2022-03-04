import '../styles/main.css'
import '../styles/header.css'
import logo from '../assets/logo/logo-core-horizontal.svg'
import Navigation from './Navigation'

export default function Header() {

    return (
        <>
            <div className="containerHeader">
                <div className="container">
                    <div className="headerContent">
                        <div className="logo">
                            <img className='logoImage' src={logo} />
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
            <Navigation />
        </>

    )
}