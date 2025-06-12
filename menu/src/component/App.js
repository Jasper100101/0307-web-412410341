import './App.css';
import menu from './data';
import Menulist from './Menu';
import Category_xx from './Category';
import { useState } from 'react';


function App() {
  const [newmenu, setMenu] = useState(menu);

  const categoryFilter = (choose) => {
    if (choose === 'all') {
      setMenu(menu);
    } else {
      setMenu(menu.filter((value) => value.category == choose));
    }
  };
  return (
    <div className='App'>
      <section className='menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>s
        </div>

        {/* filter buttons */}
        <Category_xx categoryFilter={categoryFilter} />

        {/* menu items */}
        <Menulist items={newmenu} />
      </section>
    </div>
  );
}

export default App;