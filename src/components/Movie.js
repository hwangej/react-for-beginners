import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImgs, title, summary, genres }) {
  return (
    <div>
      <img src={coverImgs} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  coverImgs: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
