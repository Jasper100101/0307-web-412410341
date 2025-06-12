const booka = {
    id:1,
    img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEUA/wA0XsCoAAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg==', 
    title:'綠色',
    author:'This is green'
};
const bookb = {
    id:2,
    img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEUAAP+KeNJXAAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg==',
    title:'藍色',
    author:'This is blue'
};
const bookc = {
    id:3,
    img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEX43jgrFE+9AAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg==', 
    title:'黃色',
    author:'This is yellow'
};

export {booka,bookb,bookc};

var data = [
    {   id:1,
        img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEUA/wA0XsCoAAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg==',
        title:'綠色',author:'This is green',
    },
    {   id:2,
        img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEUAAP+KeNJXAAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg==',
        title:'藍色',author:'This is blue',
    },
     {   id:3,
        img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEX43jgrFE+9AAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg==',
        title:'黃色',author:'This is yellow',
    }
];

function Booklist(){
    return(
        <section className="blogs-center">
        {
            data.map(function callfun(value,index){
                const {id,img,title,author}=value;
                return(
                <Blog key={id} img={img} wtitle={title} author={author}
                ></Blog>);
            })
        }
        </section>
    );
}

const Blog=({img,title,author})=>{

}
export default Booklist