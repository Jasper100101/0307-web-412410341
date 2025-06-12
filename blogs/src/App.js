import logo from './logo.svg';
import './App.css';
import Booklist from './singlebook';
import {booka,bookb,bookc} from './singlebook';

function App(){
  return(
    <div className='blogs'>
      <div className='section-title'>
        <h2>COLORS</h2>
      </div>
      <div className='blogs-center'>
        <Blog
          img={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEX/AAAZ4gk3AAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg=='
          }
          title={'紅色'}
          author={'This is red'}
        ></Blog>
          <Blog img={booka.img} title={booka.title} author={booka.author}></Blog>
          <Blog img={bookb.img} title={bookb.title} author={bookb.author}></Blog>
          <Blog img={bookc.img} title={bookc.title} author={bookc.author}></Blog>
      </div>
    </div>

  );
};
export default App;

const Blog=({img, title, author}) => {
  return(
    <article className='blog'>
      <img 
        src={img}
        alt="coffee"
        className='img blog-img'
        ></img>
      <div className='blog-content'>
          <h3>{title}</h3>
          <p>{author}</p>
      </div>
    </article>
  );
}