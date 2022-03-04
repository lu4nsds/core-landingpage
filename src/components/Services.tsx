import '../styles/services.css'

import lula from '../assets/img/lula.svg'

export default function Services() {
    const services = [{
        image:lula,
        title:'Serviço da Core',
        description: 'Descricao do serviço da Core'        
    },
    {
        image:lula,
        title:'Serviço da Core',
        description: 'Descricao do serviço da Core'        
    },
    {
        image:lula,
        title:'Serviço da Core',
        description: 'Descricao do serviço da Core'        
    },
    {
        image:lula,
        title:'Serviço da Core',
        description: 'Descricao do serviço da Core'        
    },
    {
        image:lula,
        title:'Serviço da Core',
        description: 'Descricao do serviço da Core'        
    },
    
    ]

    return (
        <div className="containerServices">
            <div className="container">
                <div className='services'>
                    <h1 className='topic'>
                        Nossos serviços  
                    </h1> 
                    <div className="separatorTopic"/>
                    <div className='cardArea'>
                        {services.map((service)=>{
                            return (
                                <div className="serviceListConteiner">
                                    <div className="serviceList">
                                       <div className='serviceImageArea'>
                                        <img className='serviceImage' src={lula} alt="serviceImage" />
                                       </div>
                                       <div className='serviceContent'>
                                            <div className='serviceTitle'>
                                                <h2>
                                                    {service.title}
                                                </h2>
                                            </div>
                                            <div className="separatorTopic"/>
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