import '../styles/main.css'
import '../styles/sectionCta.css'
import ButtonCta from './ButtonCta'

export default function SectionCta() {
    function handleClick() {
        console.log('Clicou')
    }

    return (
        <div className="containerCta">
            <div className="container">
                <div className="cta">
                    <h2 className='titleCta'>
                        Escolha a <b>CORE</b>
                    </h2>
                    <div className="separator">

                    </div>
                    <p className="textCta">
                        Estamos dispostos a mostrar à sociedade o <b>impacto positivo</b> que a <b>Engenharia Biomédica</b> é capaz de ofertar.
                    </p>
                    <ButtonCta
                        action={handleClick}
                        label={'Escolha a CORE'}
                        filled={true}
                    />
                </div>
            </div>
        </div>
    )
}