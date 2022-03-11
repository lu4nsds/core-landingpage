import '../styles/main.css'
import '../styles/navigation.css'

export default function Navigation() {

    return (
        <div className="containerNavigation">
            <div className="container">
                <div className="navigationList">
                    <a href="#" className="menuItem">
                        <div className="menuItemIcon">
                        </div>
                        <span className="label">
                            Início
                        </span>
                    </a>
                    <a href="#aboutus" className="menuItem">
                        <div className="menuItemIcon">
                        </div>
                        <span className="label">
                            Quem Somos
                        </span>
                    </a>
                    <a href="#services" className="menuItem">
                        <div className="menuItemIcon">
                        </div>
                        <span className="label">
                            Serviços
                        </span>
                    </a>
                    <a href="#" className="menuItem">
                        <div className="menuItemIcon">
                        </div>
                        <span className="label">
                            Contato
                        </span>
                    </a>
                </div>

            </div>
        </div>
    )
}