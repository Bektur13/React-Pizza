import React from 'react';
import { sidebarItems } from './const';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [active, setActive] = React.useState(0);
  return (
    <ul>
      {sidebarItems.map((item, index) => {
        return (
          <Link
            to={item.link}
            onClick={() => setActive(index)}
            className={`aside__box ${active === index ? 'is-active' : ''}`}>
            <span>{item.title}</span>
            {item.svg()}
          </Link>
        );
      })}
    </ul>
  );
};

export default Nav;
