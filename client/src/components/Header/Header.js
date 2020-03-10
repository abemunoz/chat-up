import React from 'react';
import online from '../../icons/online.png';
import close from '../../icons/close.png';

import './Header.css';

const Header = ({ room, users }) => (
  <div className="header">
    <div className="leftContainer">
      <h3>{room}</h3>
      <div class="break"></div>
      {
        users
          ? (
            <div className="usersContainer">
                {users.map(({name}) => (
                  <div key={name} className="user">
                    <img alt="online icon" src={online}/>
                    {name}
                  </div>
                ))}
            </div>
          )
          : null
      }
    </div>
    <div className="rightContainer">
      <a href="/"><img src={close} alt="close icon" /></a>
    </div>
  </div>
);

export default Header;
