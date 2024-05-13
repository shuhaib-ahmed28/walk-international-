import React from 'react';
import { countryMap } from '../data/data';

const Countries = () => {
    return (
        <div>
            <h1 className='countrysection'>Explore The Top Universities <br /> By Country</h1>
            <div style={{display:'flex', flexWrap:'wrap',justifyContent:"center",padding:"0px 0 90px 0"}}>
            {
                
                countryMap.map((atlas) => {
                    return (
                        <div className='countrycard'>
                            <div>
                                <img src={atlas.img} alt="" width='100%' className='countryimg'/>
                            
                            </div>
                            <div>
                            <p className='countryname'>{atlas.name}</p>
                            </div>

                        </div>
                    )
                })
            }
            
            </div>
         


        </div>
    );
};

export default Countries;