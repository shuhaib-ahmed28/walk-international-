import { useEffect ,useState} from 'react';
import Numanimation from './Numanimation';
import MarqueeImg from './MarqueeImg';
import Button from './Button';



const Herosection = (Props) => {
   
    
    return (
        <div className='herosection' style={{margin:0, padding:0}} >
            <h1 className='herointro'>Walking every step of the way with you to Global Success</h1>
            <div className="anime" >
            <h1><Numanimation finalValue={650}/></h1><h3>Universities</h3>
            <h1><Numanimation finalValue={8966}/></h1><h3>Programs</h3>
            <h1><Numanimation finalValue={8}/></h1><h3>Countries</h3>
            </div>   
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
                </select>
                <select name="" id="" placeholder="search country">
                    <option value="">Masters</option>
                    <option value="">Postgraduate Certificate</option>
                </select>
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
                <Button btnn='Search'/>
            </div>
            <div className="mar">
            <MarqueeImg/>
            </div>
           
        </div>
    );
};

export default Herosection;