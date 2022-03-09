import '../styles/services.css'

import mri from '../assets/img/mri.jpg'
import dentist from '../assets/img/dentist.jpg'
import micro from '../assets/img/microscopio.jpg'

export default function Services() {
    const services = [{
        image: mri,
        title: 'Serviço da Core',
        description: 'Descricao do serviço da Core'
    },
    {
        image: dentist,
        title: 'Serviço da Core',
        description: 'Descricao do serviço da Core'
    },
    {
        image: micro,
        title: 'Serviço da Core',
        description: 'Descricao do serviço da Core'
    },
    {
        image: mri,
        title: 'Serviço da Core',
        description: 'Descricao do serviço da Core'
    },
    {
        image: dentist,
        title: 'Serviço da Core',
        description: 'Descricao do serviço da Core'
    },
    {
        image: micro,
        title: 'Serviço da Core',
        description: 'Descricao do serviço da Core'
    }

    ]

    return (
        <div className="containerServices">
            <div className="container">
                <div className='services'>
                    <h1 className='topic'>
                        Nossos serviços
                    </h1>
                    <div className="separatorTopic" />
                    <div className='cardArea'>
                        {services.map((service, index) => {
                            return (
                                <div className="serviceListConteiner" key={index}>
                                    <div className="serviceList">
                                        <div className='serviceImageArea'>
                                            <img className='serviceImage' src={service.image} alt="serviceImage" />
                                        </div>
                                        <div className='serviceContent'>
                                            <div className='serviceTitle'>
                                                <h2>
                                                    {service.title}
                                                </h2>
                                            </div>
                                            <div className="separatorTopic" />
                                            <div className='serviceDescription'>
                                                <p>
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}