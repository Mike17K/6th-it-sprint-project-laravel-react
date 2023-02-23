import React from "react";
import "./Home.css";
import PropTypes from "prop-types";
import WithLoading from "../../utils/WithLoading/WithLoading";
import { Link } from "react-router-dom";

function Home({ setLoading }) {
  setLoading(false);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/uploadData">uploadData</Link>
          </li>
          <li>
            <Link to="/eventSelectionPage">eventSelectionPage</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Home.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default WithLoading(Home);
