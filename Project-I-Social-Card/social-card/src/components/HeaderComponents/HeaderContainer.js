import React from 'react';
import './Header.css';
import Tittle from './HeaderTitle';
import Content from './HeaderContent';
import Thumbnail from './ImageThumbnail';


function HeaderContainer () {
    return (<div className= 'style'>
        <Thumbnail />
        <div className= 'header'>
        <Tittle />
        <Content /> 
        </div>
        
    </div>
    )
}

export default HeaderContainer