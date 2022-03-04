import '../styles/main.css'
import '../styles/navigation.css'

export default function Navigation() {

    return (
        <div className="containerNavigation">
            <div className="container">
                <div className="navigationList">
                    <a href="/#header" className="menuItem">
                        <div className="menuItemIcon">
                            <h3>A</h3>
                        </div>
                        <span className="label">
                            Home
                        </span>
                    </a>
                    <a href="#" className="menuItem">
                        <div className="menuItemIcon">
                            <h3>A</h3>
                        </div>
                        <span className="label">
                            Quem Somos
                        </span>
                    </a>
                    <a href="#" className="menuItem">
                        <div className="menuItemIcon">
                            <h3>A</h3>
                        </div>
                        <span className="label">
                            Serviços
                        </span>
                    </a>
                    <a href="#" className="menuItem">
                        <div className="menuItemIcon">
                            <h3>A</h3>
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