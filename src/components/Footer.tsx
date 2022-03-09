import '../styles/main.css'
import '../styles/footer.css'
import logoVertical from '../assets/logo/logo-core-vertical-white.png'
import ButtonCta from './ButtonCta'

export default function Footer() {
    function handleClick() {
        console.log('Click')
    }
    return (
        <div className="containerFooter">
            <div className="container">
                <div className="footerContent">
                    <div className="logoCoreFooter">
                        <img src={logoVertical} className="logoFooter" alt="logo core vertical" />
                    </div>
                    <div className="footerCall">
                        <p className="callText">Estamos dispostos a mostrar à sociedade o impacto positivo que a Engenharia Biomédica é capaz de ofertar.</p>
                        <ButtonCta
                            action={handleClick}
                            label={'Escolha a CORE'}
                            filled={false}
                        />
                    </div>
                    <div className="footerAdress">
                        <h1 className="adressTitle">LOCALIZAÇÃO</h1>
                        <div className="adressContent">
                            <h3 className="adressCep">59000-000</h3>
                            <h3 className="adressReference">UFRN - CCET, Setor X</h3>
                            <h3 className="distric">Lagoa Nova - Natal/RN</h3>
                        </div>
                    </div>
                    <div className="footerMenu">
                        <a href="#" className="aboutUs">Quem somos</a>
                        <a href="#" className="servicos">Serviços</a>
                        <a href="#" className="contato">Contato</a>
                    </div>
                </div>
            </div>
        </div>
    )
}