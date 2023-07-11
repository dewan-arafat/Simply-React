import React from 'react';

const Header = (props) => {
    return (
        <div className='text-center text-3xl py-4 font-bold'>
            <h1>{props.title}</h1>
        </div>
    );
    
};

export default Header;