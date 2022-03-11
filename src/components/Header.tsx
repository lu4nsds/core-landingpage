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
                            <a href='#' className="menuItem">
                                Início
                            </a>
                            <a href='#aboutus' className="menuItem">
                                Quem Somos
                            </a>
                            <a href='#services' className="menuItem">
                                Serviços
                            </a>
                            <a className="menuItem">
                                Contato
                            </a>
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