import { useContext, useState } from "react";
import { Link } from "react-router";
import { MovieContext } from "../context/Moviecontext";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const { movie, setMovie, setSelectedMovie } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchMovies(query,1);
  };

  const fetchMovies = async (searchQuery = query, pageNum = page) => {
    const url = `https://www.omdbapi.com/?apikey=2dd9dfd6&s=${searchQuery}&page=${pageNum}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data.Search);
        setTotalResults(parseInt(data.totalResults));
      } else {
        alert(data.Error);
        setMovie([]);
        setTotalResults(0);
      }
    } catch (error) {
      alert("Error fetching movie:", error);
    }
  };

  const totalPages = Math.ceil(totalResults / 10);

  const goToNextPage = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMovies(query, nextPage);
    }
  };

  const goToPrevPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchMovies(query, prevPage);
    }
  };

const handleMovieSelect = async (imdbID) => {
  const url = `https://www.omdbapi.com/?apikey=2dd9dfd6&i=${imdbID}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === "True") {
    setSelectedMovie(data);
  }
};


  return (
    <div>
      <h1 className="italic font-bold text-3xl ml-5 mt-4 mb-2 text-center text-blue-500 bg-cyan-200 pl-4 pt-1 pb-2 rounded-lg
      md:w-5/6 md:ml-16 md:text-center md:font-extrabold lg:w-2/3 lg:ml-56">Movie Search App</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter Movie Name" value={query} onChange={(e) => setQuery(e.target.value)}
            className="border py-1 font-bold text-gray-700 bg-slate-100 pl-10 ml-8 text-xl rounded-lg w-5/6
        md:w-5/6 md:ml-16 md:text-center lg:w-1/4 lg:ml-96" required />

          <div className="block lg:inline">
            <input type="submit" value="Search"
              className="border mt-2 px-4 py-0.5 bg-blue-200 text-gray-700 font-bold text-lg rounded-lg ml-40 md:w-36 md:font-extrabold md:text-xl 
        md:ml-80 lg:ml-5 lg:py-1" />
          </div>
        </div>
      </form>

      {movie && movie.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {movie.map((movieItem) => (
            <Link key={movieItem.imdbID} to="/moviePage" onClick={() => handleMovieSelect(movieItem.imdbID)}>
              <div className="border p-4 rounded-lg shadow-lg bg-white">
                <h2 className="text-xl font-extrabold text-gray-700 text-center"><span className="text-red-500">Movie Name: </span>{movieItem.Title}</h2>
                <p className="text-lg font-bold text-cyan-800 mt-1 mb-2 text-center">Year: {movieItem.Year}</p>
                <img className="mx-auto bg-cover w-48 h-72 object-cover" src={movieItem.Poster} alt={movieItem.Title} />
              </div>
            </Link>
          ))}
        </div>
      )}

      {movie && movie.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <button onClick={goToPrevPage} disabled={page === 1} className="bg-gray-300 px-4 py-2 rounded-md">Previous</button>
          <span className="font-bold text-lg">Page {page} of {totalPages}</span>
          <button onClick={goToNextPage} disabled={page === totalPages} className="bg-gray-300 px-4 py-2 rounded-md">Next</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
