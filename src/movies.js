import React, { useEffect, useState } from 'react';
// import './App.css';

import { desktop } from "react-icons/fa";
import axios from 'axios';
const baseURL = "https://imdb-api.com/en/API/MostPopularMovies/k_260123r8";

function Movies() {

    const [Movie, setMovie] = useState([]); 

    React.useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
            console.log(response);
            setMovie(response.data.items);
        });
    }, []);
    // crew: "Sam Raimi (dir.), Benedict Cumberbatch, Elizabeth Olsen"
    // fullTitle: "Doctor Strange in the Multiverse of Madness (2022)"
    // id: "tt9419884"
    // imDbRating: "7.4"
    // imDbRatingCount: "156530"
    // image: "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg"
    // rank: "1"
    // rankUpDown: "0"
    // title: "Doctor Strange in the Multiverse of Madness"
    // year: "2022"
    return (
        <>
           

            <section id="sidebar" class="sidebar">
                <div class="sidebar-brand">
                    <h2><i class="fa fa-desktop"></i><span> ⭐CATEGORY</span></h2>
                </div>
                <div class="sidebar-menue">
                    <h3>Main</h3>
                    <ul>
                        <h1>🔥Favourite</h1>
                        <li><a href=""><i class="fa fa-users"></i><span style={{color: "blue"}}> ⭐New Release</span></a></li>
                        <li><a href=""><i class="fa fa-file"></i><span style={{color: "blue"}}> ⭐Watch Later</span></a></li>
                        <li><a href=""><i class="fa fa-file-pdf-o"></i><span style={{color: "blue"}}> ⭐Coming soon</span></a></li>
                        <li><a href=""><i class="fa fa-money"></i><span style={{color: "blue"}}> ⭐Recommended</span></a></li>
                        {/* <li><a href=""><i class="fa fa-user"></i><span>Account</span></a></li>
                    <li><a href=""><i class="fa fa-sign-out"></i><span>Logout</span></a></li> */}


                        <h2>👉Collections</h2>

                        <li><a href=""><i class="fa fa-desktop"></i><span style={{color: "#FF00FF"}}>🌟feel good</span></a></li>
                        <li><a href=""><i class="fa fa-desktop"></i><span style={{color: "#FF00FF"}}>🌟oscar film</span></a></li>
                        <li><a href=""><i class="fa fa-desktop"></i><span style={{color: "#FF00FF"}}>🌟chill out</span></a></li>
                        <li><a href=""><i class="fa fa-desktop"></i><span style={{color: "#FF00FF"}}>🌟classics</span></a></li>
                        <li><a href=""><i class="fa fa-desktop"></i><span style={{color: "#FF00FF"}}>🌟horrors</span></a></li>
                        <li><a href=""><i class="fa fa-desktop"></i><span style={{color: "#FF00FF"}}>🌟actions</span></a></li>
                        <li><a href=""><i class="fa fa-desktop"></i><span style={{color: "#FF00FF"}}>🌟comedy</span></a></li>

                    </ul>
                </div>
            </section>

            <section id="main-content">
                <header class="main-header">

                    <div class="header-left">
                        <input class="search-bar" type="text" placeholder="tv serial,movie,tv,actors,geners"></input>
                        <i class="fa fa-search"></i>
                    </div>

                    <div class="sub">
                        <button class="NEW RELEASE">➽New Release</button>

                    </div>
                </header>
           
            <div class="main-content-info container">

            {Movie && Movie[0] ?
                Movie.map((item, i) =>
                    <tr key={i}>
                        <td>
                <img src={ item.image} className="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg"></img>
                {/* <td>{imDbRating}</td> */}
               <td>{item.fulltitle}</td> 
               <td>{item.year}</td> 
                            </td>
                    </tr>

                ) : ""
            }


            
                {/* <img src="https://newresultbd.com/wp-content/uploads/2022/04/K.G.F-Chapter-2.jpg"></img>
                <img src="https://www.filmibeat.com/ph-big/2021/11/rrr_163661840110.jpg"></img>
                <img src="https://i.pinimg.com/736x/85/67/8b/85678b225ad6e04f9c34804797a9592e.jpg"></img>
                <img src="https://lupdatednewsreport.com/wp-content/uploads/2020/03/Captain-Marvel-movie-2019-.jpg"></img>
                <img src="https://m.fzmoviesnet.com/wp-content/uploads/2021/09/Fast-and-Furious-9-The-Fast-Saga-2021.jpg"></img>
                <img src="https://www.quirkybyte.com/wp-content/uploads/2022/01/pushpa.jpg"></img>
                <img src="https://somaliupdate.com/wp-content/uploads/2022/04/Download-Beast-Movie.jpg"></img>
                <img src="https://image.tmdb.org/t/p/original/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"></img>
                <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></img>
                <img src="https://newresultbd.com/wp-content/uploads/2022/04/K.G.F-Chapter-2.jpg"></img>
                <img src="https://newresultbd.com/wp-content/uploads/2022/04/K.G.F-Chapter-2.jpg"></img>
                <img src="https://newresultbd.com/wp-content/uploads/2022/04/K.G.F-Chapter-2.jpg"></img>
                <img src="https://newresultbd.com/wp-content/uploads/2022/04/K.G.F-Chapter-2.jpg"></img>
                <img src="https://newresultbd.com/wp-content/uploads/2022/04/K.G.F-Chapter-2.jpg"></img> */}

            </div>
            </section>
            {/* <button onClick={setMovie}>fetch movie</button> */}
        </>
    );
}


export default Movies;