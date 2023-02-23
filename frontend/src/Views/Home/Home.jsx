import React from "react";
import "./Home.css";
import PropTypes from "prop-types";
import WithLoading from "../../utils/WithLoading/WithLoading";

function Home({ setLoading }) {
  setLoading(false);

  return <div>home page</div>;
}

Home.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default WithLoading(Home);
