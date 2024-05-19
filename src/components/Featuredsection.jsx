import React, { useState } from 'react';
import { countryflag } from '../data/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import Carousel from './Carousel';
gsap.registerPlugin(ScrollTrigger)

const Featuredsection = () => {
    useGSAP(()=>{
        gsap.from(".circle",{
            scale:0,
            duration:2,
            scrollTrigger:".circle"

        })
    })
    const [active, setactive]=useState(null);
    const handleclick=(index)=>{
        // const newflag=[...active];
        // newflag[index]=!newflag[index];
        setactive(index)
    }
    return (
        <div className='featured' >
            <div>
                <h1 className='featurehead' >Top Featured Universities</h1>
            </div>
            <div className="parentcontainer">
            {
                countryflag.map((value,index)=>{
                    return(
                       
                        <div className="flagcontent" key={index} >
                        <div className="flagcontainer">
                            <div className={active=== index? 'bluecircle' : 'circle'} onClick={()=>handleclick(index)}>
                                <img className='flagImg' src={value.img} alt="" width='60px' />
                            </div>
                        </div>
                            <p style={{display:'flex', justifyContent:'center'}} >{value.countryname}</p>
                        </div>
                       
                    );
                })}
             </div>

           {/* <Carousel/> */}
        </div>
    )
        };
export default Featuredsection;