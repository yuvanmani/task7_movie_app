import { useContext } from "react"
import { MovieContext } from "../context/Moviecontext"


const MoviePage = () => {
  const { movie, setMovie } = useContext(MovieContext);

  return (
    <div>
      <h1 className="text-2xl font-bold italic bg-slate-200 mx-2 mt-2 py-1 text-center text-purple-800 rounded-lg">Movie Details</h1>
      <div className="md:ml-5 lg:ml-10">
        <h1 className="text-xl underline text-red-500  font-bold mx-2 mt-2 mb-1">Movie Title : <span className="font-semibold">{movie.Title}</span></h1>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Year : <span className="font-semibold">{movie.Year}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Rated : <span className="font-semibold">{movie.Rated}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Released : <span className="font-semibold">{movie.Released}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Runtime : <span className="font-semibold">{movie.Runtime}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Genre : <span className="font-semibold">{movie.Genre}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Director : <span className="font-semibold">{movie.Director}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Writer : <span className="font-semibold">{movie.Writer}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Actors : <span className="font-semibold">{movie.Actors}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Language : <span className="font-semibold">{movie.Language}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-4">Country : <span className="font-semibold">{movie.Country}</span></p>
        <img className="ml-3 mb-3" src={movie.Poster} alt={movie.Title} />
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Metascore : <span className="font-semibold">{movie.Metascore}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">IMDB Rating : <span className="font-semibold">{movie.imdbRating}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">IMDB Votes : <span className="font-semibold">{movie.imdbVotes}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Box Office Collection : <span className="font-semibold">{movie.BoxOffice}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">-----------------------------------------<span className="font-semibold"></span></p>
      </div>
    </div>
  )
}

export default MoviePage



/* <div className="border w-4/6 ml-20 mt-10 mb-10 md:w-4/6 md:ml-28 lg:w-1/6">
<h2 className="text-xl font-extrabold text-gray-700 ml-12 text-center"><span className="text-red-500">Movie Name : </span> {movie.Title}</h2>
<p className="text-lg font-bold text-cyan-800 mt-1 mb-5 text-center">Year : {movie.Year}</p>
<img className="ml-0 bg-cover md:ml-24 lg:ml-0" src={movie.Poster} alt={movie.Title} />
</div> */