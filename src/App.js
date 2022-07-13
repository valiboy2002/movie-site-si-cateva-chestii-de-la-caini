import {useEffect, useState} from 'react'; 
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//dc309080
const API_URL ='http://www.omdbapi.com?apikey=dc309080'

function App  ()  {
const[movies, setMovies]=useState([]);
const [searchTerm, setSearchTerm]=useState('');
const searchMovies= async (title)=> {
const response = await fetch(`${API_URL}&s=${title}`); 
const data= await response.json();

setMovies(data.Search);
}
 useEffect(()=>{
    searchMovies('Spiderman');
    },[]);
    return (
    <div className="app">
    <h1>MovieTonight?</h1>

<div className="search">
<input 
placeholder="Search movies..."
value={searchTerm}
onChange={(e)=>setSearchTerm(e.target.value)}
/>
<img 
src={SearchIcon}
alt="search"
onClick={()=>searchMovies(searchTerm)}
/>
</div>

{
    movies?.length > 0
    ?(
        <div className="container">
            {movies.map((movie)=>(<MovieCard movie={movie}/>))}
</div>
    ) :
    
    (
        <div className="empty">
            <h2>No movies found</h2>
        </div>
        
    )
}



    </div>
    );
}
export default App;
