import React, { useState } from 'react';
import Menu from './Menu';
import items from './data';

function App() {
  const allItem = items.map(item => {
    return <Menu key={item.id} {...item} />
  })
  const [returnedItem, setReturnedItem] = useState(allItem)
  const changeCategory = (category) => {
    if (category === 'all') {
      return setReturnedItem(allItem)
    }
    setReturnedItem(() => {
      const newItem = items.filter(item => item.category === category)
      return newItem.map(eachItem => {
        return <Menu key={eachItem.id} {...eachItem}/>
      })
    })
  }
  return <div className='menu section'>
    <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <br></br>
          <div className='btn-container'>
            <button className='filter-btn'onClick={() => changeCategory('all')}>All</button>
            <button className='filter-btn'onClick={() => changeCategory('breakfast')}>Breakfst</button>
            <button className='filter-btn'onClick={() => changeCategory('lunch')}>Lunch</button>
            <button className='filter-btn'onClick={() => changeCategory('shakes')}>Shakes</button>
          </div>
    </div>
  <section className='section-center'>
    {returnedItem}
  </section>
  </div>;
}

export default App;
