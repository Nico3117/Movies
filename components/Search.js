import React, {useState} from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const test = 2;

    const searchMovies = async (e) => { 
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=15ecfb6a33837672e969c55deb4a503f&language=en-US&query=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json(); 

            setMovies(data.results);
        } 
        catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form onSubmit={searchMovies}>
                <input 
                    type="text" 
                    className="rounded-md bg-gray-100 mt-5 p-2" 
                    placeholder="Entrez votre texte"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}></input>
                <button className="ml-2 bg-blue-600 text-white p-2 rounded-md" type="submit">
                    Rechercher
                </button>
            </form>
            
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5">
                {movies.filter(movie => movie.poster_path).map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
            </div>
    
        </>
    )
}