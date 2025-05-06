import { useContext } from "react"
import { MovieContext } from "../context/Moviecontext"
import { Link } from "react-router";

const MoviePage = () => {
  const { selectedMovie } = useContext(MovieContext);
  if (!selectedMovie) {
    return (
      <div className="text-center text-lg md:text-xl lg:text-2xl mt-10 text-red-500 font-bold">
        No movie selected. Please return to the <span className="underline text-blue-500"><Link to = "/">home page</Link></span> and select a movie.
      </div>
    );
  }
  console.log(selectedMovie)
  return (
    <div>
      <h1 className="text-2xl font-bold italic bg-slate-200 mx-2 mt-2 py-1 text-center text-purple-800 rounded-lg">Movie Details</h1>
      <div className="md:ml-5 lg:ml-10">
        <h1 className="text-xl underline text-red-500  font-bold mx-2 mt-2 mb-1">Movie Title : <span className="font-semibold">{selectedMovie.Title}</span></h1>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Year : <span className="font-semibold">{selectedMovie.Year}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Rated : <span className="font-semibold">{selectedMovie.Rated}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Released : <span className="font-semibold">{selectedMovie.Released}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Runtime : <span className="font-semibold">{selectedMovie.Runtime}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Genre : <span className="font-semibold">{selectedMovie.Genre}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Director : <span className="font-semibold">{selectedMovie.Director}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Writer : <span className="font-semibold">{selectedMovie.Writer}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Actors : <span className="font-semibold">{selectedMovie.Actors}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Language : <span className="font-semibold">{selectedMovie.Language}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-4">Country : <span className="font-semibold">{selectedMovie.Country}</span></p>
        <img className="ml-3 mb-3" src={selectedMovie.Poster} alt={selectedMovie.Title} />
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Metascore : <span className="font-semibold">{selectedMovie.Metascore}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">IMDB Rating : <span className="font-semibold">{selectedMovie.imdbRating}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">IMDB Votes : <span className="font-semibold">{selectedMovie.imdbVotes}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">Box Office Collection : <span className="font-semibold">{selectedMovie.BoxOffice}</span></p>
        <p className="text-lg text-gray-700  font-bold mx-2 mt-2 mb-1">-----------------------------------------<span className="font-semibold"></span></p>
      </div>
    </div>
  )
}

export default MoviePage


