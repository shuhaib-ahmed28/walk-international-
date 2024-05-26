import React from 'react';
const Categories = ({ icon, title }) => {
    return (
        <div >
        
                <div className="tcbox">
                    <div className='imgdiv'>
                        <img src={icon} alt="" width='65px' height='65px' />
                    </div>
                    <div className='tcp'>
                        <p>{title}</p>
                    </div>
                </div>
          

        </div>

    );
};

export default Categories;