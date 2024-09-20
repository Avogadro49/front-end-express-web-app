import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

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
    <div>
      <h2>Bootcamps</h2>
      <ul>
        {bootcamps.map((bootcamp) => (
          <li key={bootcamp.id}>{bootcamp.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bootcamps;
