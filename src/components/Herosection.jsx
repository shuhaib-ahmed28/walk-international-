import { useEffect, useState } from 'react';
import Numanimation from './Numanimation';
import MarqueeImg from './MarqueeImg';
import Button from './Button';
import { MdHeight } from 'react-icons/md';


const Herosection = (Props) => {
 const searchstyle={
    color:"white",
    backgroundColor:"#013a8b",
    width:"150px",
    height:"60px",
    marginLeft:"30px"

 }

    return (
        <div className='herosection' style={{ margin: 0, padding: 0 }} >
            <h1 className='herointro'>Walking every step of the way with <br /> you to Global Success</h1>
            <div className="animewrapper">
                <div className="anime" >
                     <h1><Numanimation finalValue={650} /></h1><h4 style={{ paddingLeft: '10px' }}>Universities</h4><div className='line'></div>
                    <h1><Numanimation finalValue={100} /></h1><h4 style={{ paddingLeft: '10px' }}>Programs</h4><div className='line'></div>
                    <h1><Numanimation finalValue={8} /></h1><h4 style={{ paddingLeft: '10px' }}>Countries</h4>
                </div>
                <h1>shuhauh</h1>
            </div>
            <div className='searchsection'>
            <div className='herosearch'>
                <select name="" id="">
                    <option value="">USA</option>
                    <option value="">Canada</option>
                    <option value="">UK</option>
                    <option value="">Australia</option>
                    <option value="">New Zealand</option>
                    <option value="">Ireland</option>
                    <option value="">France</option>
                    <option value="">Germany</option>
                </select><div style={{height:"90px",width:"1px",backgroundColor:"gray"}}></div>
                <select name="" id="" placeholder="search country">
                    <option value="">Masters</option>
                    <option value="">Postgraduate Certificate</option>
                </select><div style={{height:"90px",width:"1px",backgroundColor:"gray"}}></div>
                <select name="" id="">
                    <option value="">Aerospace Engineering </option>
                    <option value="">Architecture</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Automotive Engineering</option>
                    <option value="">Biomedical Engineering</option>
                    <option value="">Biotechnology</option>
                    <option value="">Business Analytics</option>
                    <option value="">Chemical Engineering</option>
                    <option value="">Civil engineering</option>
                    <option value="">Computer engineering</option>
                    <option value="">Computer Science </option>
                    <option value="">Construction management</option>
                    <option value="">Cyber security</option>
                    <option value="">Data Science</option>
                    <option value="">Electrical Engineering</option>
                    <option value="">Engineeering management</option>
                    <option value="">MBA</option>
                    <option value="">Management</option>
                    <option value="">LAW</option>
                    <option value="">Finance</option>
                </select>
                <Button btnn='Search' style={searchstyle}/>
            </div>
            </div>
            <div className="mar">
                <MarqueeImg />
            </div>

        </div>
    );
};

export default Herosection;