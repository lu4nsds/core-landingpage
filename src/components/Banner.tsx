import '../styles/main.css'
import '../styles/banner.css'
import Typed from 'typed.js'
import banner from '../assets/img/mri-image.svg'
import { useEffect, useRef } from 'react'

export default function Banner() {
    const ref = useRef(null)
    const typed = useRef(null)

    useEffect(() => {
        let options = {
            strings: ['SOLUÇÕES INOVADORAS'],
            typeSpeed: 150,
            backSpeed: 20,
            backDelay: 1000,
            loop: true,
            fadeOut: true
        };
        if (typed) {
            // @ts-ignore
            typed.current = new Typed(ref.current, options);
            return () => {
                // @ts-ignore
                typed.current.destroy();
            }
        }

    }, [])


    return (
        <div className="containerBanner">
            <div className="container">
                <div className="bannerContent">

                    <div className="containerTitle">
                        <span className="title" ref={ref}></span>
                        <h3 className='subtitle'>
                            PARA A GESTÃO EM SAÚDE
                        </h3>
                        <div className="separator">

                        </div>
                    </div>
                    <div className="containerImage">
                        <object className='bannerImage' data={banner}>
                        </object>
                    </div>
                </div>

            </div>
        </div>
    )
}