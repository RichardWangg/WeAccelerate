import { useState } from "react";
import PropTypes from "prop-types";
import Details from "./Details";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { Link } from "react-router-dom";

import "./ListItem.css";

const ListItem = (props) => {
  const [details, setDetails] = useState(null);

  function handleLoadDetails() {
    setDetails(props);
  }

  return (
    <div className="card">
      <img src={props?.cover_art_url} alt={props?.name} />
      <button onClick={handleLoadDetails}>
        <b>See Details</b>
      </button>
      {details ? <Details {...details} /> : null}
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListItem;
