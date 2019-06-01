import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import Contents from './CardContent';

function CardContainer () {
    return (
        <div className= 'cardcontainer'>
          <Banner />
          <Contents />  
        </div>
        
    )
}

export default CardContainer