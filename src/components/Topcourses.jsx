import React, { useState } from 'react';
import { topcourses, finalcourses } from '../data/data';
import Categories from './Categories';


const Topcourses = () => {

    const [showmore, setshowmore] = useState(false);
    const categories = showmore ? [...topcourses, ...finalcourses] : topcourses;
    const toggleshowmore = () => {
        setshowmore(!showmore)
    }
    return (
        <div>
            <h1 className='tchead'>Top Courses</h1>

            <div className="tcpstr">
            {
                    categories.map((val, index) => (
                    <Categories key={index} icon={val.img} title={val.name} />
                ))
            }
           
           </div>
            <button  className='togglebtn'  onClick={toggleshowmore}>{showmore ? 'VIEW LESS ' : 'VIEW ALL '}  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.0001885070960270241 0.001999974250793457 16.00200843811035 6.374000549316406"><g clip-path="url(#footerMobileAccordation_svg__a)"><path fill="#391952" d="M15.313 1.796c.217-.138.519-.232.627-.43.112-.207.037-.517.04-.781.003-.395 0-.163 0-.583L7.988 2.525C5.316 1.68 2.677.847.005.005.005.594.014.527 0 1.089c-.004.21.055.332.24.449 2.528 1.585 5.22 3.249 7.748 4.838 2.388-1.501 4.94-3.073 7.325-4.58Z"></path></g></svg></button>
            {/* {
                    categories.map((val) => {
                        return (
                            <div>
                                <div className="tcbox">
                                    <div className='imgdiv'>
                                        <img src={val.img} alt="" width='65px' height='65px' />
                                    </div>
                                    <div className='tcp'>
                                        <p>{val.name}</p>
                                    </div>

                                </div>

                                <button className='togglebtn' onClick={toggleshowmore}>{showmore ? 'VIEW LESS' : 'VIEW MORE'} </button>
                            </div>

                        )
                    })
                } */}

        </div>
    );
};

export default Topcourses;