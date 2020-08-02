import React from 'react';

import NavBarMenuItem from './../NavBarMenuItem';

const NavBarMenu = ({ title, items }) => {
  return (
    <div>
      <div>{title}</div>
      <ul>
      {items.map(item => (
        <NavBarMenuItem key={item.link} {...item} />
      ))}
      </ul>
    </div>
  )
};

export default NavBarMenu;
