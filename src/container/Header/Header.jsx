import React from 'react';
import './Header.css';

import {images} from '../../constants';


const Header = () => (
  <div className="app__header app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <h1 className="app__header-h1">The Key to Fine Dining</h1>
    <p className="p__opensans" style={{margin: '2rem 0'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum corrupti officia voluptas quibusdam consequuntur architecto fugit quia sapiente tempore voluptatem voluptate saepe est neque minus temporibus, quod eveniet laudantium doloribus.</p>
    <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>

  </div>
);

export default Header;
