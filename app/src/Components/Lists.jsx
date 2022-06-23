import React from 'react';

const Lists = (props) => {
    return (
        <div className='lists'>

            <img className='portret' src={props.img} />
            <h3>{props.name}</h3>
        </div>
    );
};

export default Lists;