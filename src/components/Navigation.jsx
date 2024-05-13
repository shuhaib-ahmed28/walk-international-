import React from 'react';
import Button from './Button';
import App from '../App.css';
import Btnwlogo from './Btnwlogo';

const Navigation = () => {
    return (
        <div>
            <nav>
                <div className="brand"><h1>Walk International</h1></div>
                <div className="navwrapper">
                <div className="navLinks">
                    <ul>
                        <li>
                        
                            <select name="" id="" className='navselect'>
                                <option value="">Study Abroad</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                                <option value="Australia">Australia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Ireland">Ireland</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </li>
                        <li>Course Finder</li>
                        <li><select name="testprep" id="" className='navselect'>
                            <option value="">Test Prep</option>
                            <option value="IELTS">IELTS</option>
                            <option value="TOFEL">TOFEL</option>
                            <option value="PTE">PTE</option>
                            <option value="GMAT">GMAT</option>
                            <option value="GRE">GRE</option>
                            <option value="SAT">SAT</option>
                            </select></li>
                        <li>Services</li>
                    </ul>
                </div>
                <div style={{width:'0.5px',height:'50xpx',backgroundColor:'grey'}}></div>
                <div className="navButtons">
                    <Btnwlogo btnlogo='Sign in'/>
                    <Button btnname='Get Started'/>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;