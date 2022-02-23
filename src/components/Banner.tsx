import '../styles/main.css'
import '../styles/banner.css'
import banner from '../assets/img/mri-image.svg'

export default function Banner() {

    return (
        <div className="containerBanner">
            <div className="container">
                <div className="bannerContent">

                    <div className="containerTitle">
                        <h2 className="title">
                            SOLUÇÕES INOVADORAS
                        </h2>
                        <h3 className='subtitle'>
                            PARA GESTÃO EM SAÚDE
                        </h3>
                        <div className="separator">

                        </div>
                    </div>
                    <div className="containerImage">
                        <img className='bannerImage' src={banner} />
                    </div>
                </div>

            </div>
        </div>
    )
}