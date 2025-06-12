import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <div className='back'>
      <Earth />
    </div>
  );
}

const Earth = () => {
  return (
    <div className="earth">
      <h2>hello world</h2>
      <div className="logo-container">
        <img
          className="logo"
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <p>this is my first react code</p>
    </div>
  );
};


export default App;
