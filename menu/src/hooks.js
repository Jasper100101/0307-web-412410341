import { useEffect, useState } from 'react';
import './hooks.css';
function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });
  const handleYearChange = (e) => {
    setCar({ ...car, year: e.target.value });
  };
  function changColor(newcolor) {
    setCar({ ...car, color: newcolor });
  }
  function changYear(newyear) {
    setCar({ ...car, year: newyear });
  }
  return (
    <>
      <h1>My {car.brand}</h1>{' '}
      <p>
        It is a {car.color} {car.model} from {car.year}.{' '}
      </p>{' '}
      <button onClick={() => changColor('green')}>changColor to green</button>{' '}
      <button onClick={() => changColor('blue')}>changColor to green</button>
      <br></br> <button onClick={() => changYear(1000)}>改年份</button>{' '}
      <input type='text' placeholder='輸入年份' onChange={handleYearChange} />
    </>
  );
}

function FavoriteColor({ color, setColor }) {
  return (
    <>
      <h1>My favorite color is {color}!</h1>{' '}
      <button type='button' onClick={() => setColor('blue')}>
        Blue
      </button>{' '}
      <button type='button' onClick={() => setColor('red')}>
        red
      </button>{' '}
      <button type='button' onClick={() => setColor('pink')}>
        Pink
      </button>{' '}
      <button type='button' onClick={() => setColor('green')}>
        Green
      </button>
      {/* <p>blue {bluecount}次</p> */}{' '}
    </>
  );
}

function Totalcolor({ array }) {
  return (
    <>
      <h2>All selected colors:</h2>{' '}
      {array.map((value, index) => {
        return (
          <span key={index} className={value}>
            {value}
          </span>
        );
      })}
    </>
  );
}

function App() {
  const [color, setColor] = useState('');
  const [colorarray, setColorarray] = useState([]);
  useEffect(() => {
    if (color) setColorarray((colorarray) => [...colorarray, color]);
  }, [color]);
  console.log(colorarray);
  return (
    <>
      <FavoriteColor color={color} setColor={setColor} /> <Car></Car>
      <Totalcolor array={colorarray}></Totalcolor>{' '}
    </>
  );
}

export default App;