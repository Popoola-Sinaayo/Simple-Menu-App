import React from 'react';

const Menu = ({id, title, price, img, desc}) => {
  return <>
  <section className='menu-item'>
    <img className='photo' src={img} alt={title}></img>
    <div className='item-info'>
      <header>
      <h4>{title}</h4>
      <p className='price'>${price}</p>
      </header>
    <p className='item-text'>{desc}</p>
    </div>
  </section>
  </>;
};

export default Menu;
