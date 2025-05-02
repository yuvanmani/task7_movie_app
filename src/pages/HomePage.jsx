import { useContext, useState } from "react";
import { Link } from "react-router";
import { MovieContext } from "../context/Moviecontext";

const HomePage = () => {
  const [query, setQuery] = useState("");
const {movie, setMovie} = useContext(MovieContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `https://www.omdbapi.com/?apikey=2dd9dfd6&t=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
      } else {
        alert(data.Error);
        setMovie(null);
      }
    } catch (error) {
      alert("Error fetching movie:", error);
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

      {movie && (
        <div className="border w-4/6 ml-20 mt-10 mb-10 md:w-4/6 md:ml-28 lg:w-1/6">
          <Link to="/moviePage">
            <div>
              <h2 className="text-xl font-extrabold text-gray-700 ml-12 text-center"><span className="text-red-500">Movie Name : </span> {movie.Title}</h2>
              <p className="text-lg font-bold text-cyan-800 mt-1 mb-5 text-center">Year : {movie.Year}</p>
              <img className="ml-0 bg-cover md:ml-24 lg:ml-0" src={movie.Poster} alt={movie.Title} />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
