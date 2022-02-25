import '../styles/services.css'

import lula from '../assets/img/lula.svg'

export default function Services() {
    const services = [{
        image:lula,
        title:'Serviço da Core',
        descricao: 'Descricao do serviço da Core'        
    },
    {
        image:lula,
        title:'Serviço da Core',
        descricao: 'Descricao do serviço da Core'        
    },
    {
        image:lula,
        title:'Serviço da Core',
        descricao: 'Descricao do serviço da Core'        
    },
    {
        image:lula,
        title:'Serviço da Core',
        descricao: 'Descricao do serviço da Core'        
    },
    ]

    return (
        <div className="containerServices">
            <div className="containerList">
                <div className='services'>
                    <h1 className='topic'>
                        Nossos serviços  
                    </h1> 
                    <div className="separatorTopic"/>
                    <div className='cardArea'>
                        {services.map((service)=>{
                            return (
                                <div className="serviceList">
                                    <text>
                                        {service.title}
                                        {service.descricao}
                                    </text>
                                </div>
                            )
                        })} 
                    </div>
                </div> 
            </div>        
        </div>
    )
}