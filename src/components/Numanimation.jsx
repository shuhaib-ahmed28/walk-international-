import React, { useEffect, useState } from 'react';

const Numanimation = ({ finalValue }) => {
    const [Number, setNumber] = useState(0);
    useEffect(() => {
        const intervalid = setInterval(() => {
            if (Number < finalValue) {
                setNumber(Number => Number + 1);
            } else {
                clearInterval(intervalid);
            }
        }, 0.001)
        return () => clearInterval(intervalid)
    }, [Number, finalValue])

    return (
        <div>
            <span>{Number}+</span>
        </div>
    );
};

export default Numanimation;