import React from 'react';

const Character = ({ name, status, species, gender, image }) => {
    return (
        <div className='charater-list'>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
        </div>
    );
};
export default Character;
