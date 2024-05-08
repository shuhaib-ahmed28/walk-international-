import React from 'react';
import { countryflag } from '../data/data';
// import Carousel from './Carousel';


const Featuredsection = () => {
    return (
        <div className='featured' >
            <div>
                <h1>Top Featured Universities</h1>
            </div>
            <div className="parentcontainer">
            {
                countryflag.map((value)=>{
                    return(
                       
                        <div className="flagcontent" >
                        <div className="flagcontainer">
                            <div className="circle">
                                <img className='flagImg' src={value.img} alt="" width='60px'/>
                            </div>
                        </div>
                            <h4 style={{display:'flex', justifyContent:'center'}} >{value.countryname}</h4>
                        </div>
                       
                    );
                })}
             </div>

           {/* <Carousel/> */}
        </div>
    )
        };
export default Featuredsection;