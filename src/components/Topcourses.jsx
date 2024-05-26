import React from 'react';
import { topcourses } from '../data/data';

const Topcourses = () => {
    return (
        <div>
            <h1 className='tchead'>Top Courses</h1>
            <div className='tcstructure'>
                {
                    topcourses.map((val)=>{
                        return(
                            <div className="tcbox"><img src={val.img} alt="" className='tcimg'/>
                            <p>{val.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Topcourses;