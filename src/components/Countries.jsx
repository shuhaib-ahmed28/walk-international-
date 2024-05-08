import React from 'react';
import { countryMap } from '../data/data';

const Countries = () => {
    return (
        <div>
            <h1 className='countrysection'>Explore The Top Universities By Country</h1>
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                countryMap.map((atlas) => {
                    return (
                        <div className='countrycard'>
                            <div>
                                <img src={atlas.img} alt="" width='100%' className='countryimg'/>
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