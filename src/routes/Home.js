import Movie from "../components/Movie";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        movies.map((movie) => (
          <div>
            <Movie
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
