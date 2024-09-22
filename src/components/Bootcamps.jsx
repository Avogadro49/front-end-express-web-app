// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import "./ListStyles.css";

const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("bootcamps")
      .then((data) => {
        setBootcamps(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading bootcamps...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="list-container">
      <h2 className="title">Bootcamps</h2>
      <ul>
        {bootcamps.map((bootcamp) => (
          <li key={bootcamp.id} className="list-item">
            <h3>{bootcamp.name}</h3>
            <p>{bootcamp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bootcamps;
