const[Popular,setPopular]= useState([]);

    useEffect(() =>{
fetchpopular();

  },[]);


  k_60dltzly





const fetchpopular = async ()=>{
    const data = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_12345678');
    const movies = await data.json();
console.log(movies);
    setPopular(movies.results);
      
};

<div className="popular-Movies">

{Popular.map((movie) =>{
    return <movie/>;
    
}
 )}
 
</div>
