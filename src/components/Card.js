import React from 'react';

const Card = (props) => (
    <div>
        <img src={props.imageLink} alt='Headshot of commitee member' className='w-full h- bg-gray-400' />
        <p>{props.name}</p>
        <p>{props.role}</p>
        <p>{props.desc}</p>
    </div>
);

export default Card;