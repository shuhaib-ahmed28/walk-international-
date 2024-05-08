import React from 'react';
import { FiUser } from "react-icons/fi";

const Btnwlogo = (props) => {
    return (
        <div>
            <button className='btnlogo'> <FiUser/> {props.btnlogo}</button>
        </div>
    );
};

export default Btnwlogo;