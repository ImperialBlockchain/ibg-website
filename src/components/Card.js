import React from 'react';

const Card = (props) => (
    <div>
        <img src={props.imageLink} alt='Headshot of commitee member' className='w-full bg-slate-500' />
        <b>{props.name}</b>
        <br />
        <em>{props.role}</em>
        <p>{props.desc}</p>
    </div>
);

export default Card;