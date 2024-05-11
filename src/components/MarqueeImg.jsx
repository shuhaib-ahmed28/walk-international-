import React from 'react';
import Marquee from 'react-fast-marquee';
import { marquee } from '../data/data';

const MarqueeImg = () => {
    return (
        <div>
            <Marquee loop={100}>
                <div style={{display:'flex'}}>
                    {
                        marquee.map((img , index) => {
                            return (
                                <div  >
                                    <img key={index} src={img} alt="" width='180px'height='60px' style={{padding:'10px 40px'}}/>
                                </div>
                            )
                        })
                    }
                        {
                        marquee.map((img, index) => {
                            return (
                                <div  >
                                    <img key ={index}src={img} alt="" width='180px' height='60px' style={{padding:'10px 40px'}}/>
                                </div>
                            )
                        })
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeImg;