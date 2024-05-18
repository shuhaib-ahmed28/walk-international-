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
            <img src="" alt="" /></div>
            <div className="box">2</div>
            <div className="box">3</div>
            <div className="box">4</div>
            <div className="box">5</div>
            <div className="box">6</div>
            <div className="box">7</div>
            <div className="box">8</div>
            <div className="box">9</div>
            <div className="box">10</div>
            
           
           
            </div>
            </main>
        
    );
};

export default Horizontalscroll;