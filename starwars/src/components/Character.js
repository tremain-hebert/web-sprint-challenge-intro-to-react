import React from 'react';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';

const Character = ({ name, status, species, gender, image }) => {
    return (
        <div className='charater-list'>
            <h1>{name}</h1>
            <h2><Badge color='info' pill>{status}</Badge></h2>
            <img src={image} alt={name}/>
            <ListGroup>
                <ListGroupItem color='info'>{species}</ListGroupItem>
                <ListGroupItem color='info'>{gender}</ListGroupItem>
            </ListGroup>
        </div>
    );
};
export default Character;
