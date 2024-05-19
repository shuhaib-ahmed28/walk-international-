import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger)

const Horizontalscroll = () => {
    useGSAP(()=>{
        gsap.to('.page1 ',{
            transform:"translateX(-68%)",
            duration:10,
            scrollTrigger:{
                trigger:"main",
                scroller:"body",
                markers:true,
                start:"top 0%",
                end:"top -100%",
                scrub:2,
                pin:true
            }
        })
    })
    return (
        <main>
            <h1>From Vision to Reality</h1>
            <p>Steps To Make Your Way to the Dream University Abroad</p>
            <div className="page1">
            <div className="box"><h3>Step 1</h3>
            <img src="/images/horizontalsvgs/img1.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>
            </div>
            <div className="box"><h3>Step 2</h3>
            <img src="/images/horizontalsvgs/img3.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            <div className="box"><h3>Step 3</h3>
            <img src="/images/horizontalsvgs/img4.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            <div className="box"><h3>Step 4</h3>
            <img src="/images/horizontalsvgs/img5.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            <div className="box"><h3>Step 5</h3>
            <img src="/images/horizontalsvgs/img6.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            <div className="box"><h3>Step 6</h3>
            <img src="/images/horizontalsvgs/img7.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            <div className="box"><h3>Step 7</h3>
            <img src="/images/horizontalsvgs/img8.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            <div className="box"><h3>Step 8</h3>
            <img src="/images/horizontalsvgs/img9.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            <div className="box"><h3>Step 9</h3>
            <img src="/images/horizontalsvgs/img10.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            <div className="box"><h3>Step 10</h3>
            <img src="/images/horizontalsvgs/img11.svg" alt="" width="100px" height="100px"/>
            <img src="/images/horizontalsvgs/hawkeye.svg" alt="" className='hawkeye'/>

            </div>
            
           
           
            </div>
            </main>
        
    );
};

export default Horizontalscroll;