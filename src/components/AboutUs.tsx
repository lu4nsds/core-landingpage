import '../styles/main.css'
import '../styles/aboutUs.css'

export default function AboutUs() {

    return (
        <div className="containerAboutUs">
            <div className="container">
                <div className="aboutUsContent">
                    <h2 className='titleAboutUs'>
                        Quem Somos
                    </h2>
                    <div className="separator">

                    </div>
                    <p className="textAboutUs">
                        A CORE é uma empresa júnior vinculada à Universidade Federal do Rio Grande do Norte (UFRN), formada por estudantes da engenharia biomédica.
                        A CORE visa trazer soluções práticas e inovadoras no ramo da saúde, auxiliando na gestão de produtos e processos em um ambiente clínico ou laboratorial, além de cativar em seus integrantes uma visão empreendedora e uma vivência empresarial na universidade.
                    </p>
                </div>
            </div>
        </div>
    )
}