// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../utils/api";
import style from "./ListStyles.module.css";

const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [errorCourses, setErrorCourses] = useState(null);

  const navigate = useNavigate();

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

  const handleCheckItOut = async (bootcampId) => {
    setLoadingCourses(true);
    setErrorCourses(null);

    try {
      const courses = await fetchData(`bootcamps/${bootcampId}/courses`);
      setSelectedCourses(courses);
      navigate(`/bootcamps/${bootcampId}/courses`);
    } catch (error) {
      setErrorCourses(error.message);
    } finally {
      setLoadingCourses(false);
    }
  };

  console.log(handleCheckItOut);

  if (loading) return <p>Loading bootcamps...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.list_container}>
      <h2 className={style.title}>Bootcamps</h2>
      <ul>
        {bootcamps.map((bootcamp) => (
          <li key={bootcamp.id} className={[style.list_item]}>
            <div>
              <h3>{bootcamp.name}</h3>
              <p>{bootcamp.description}</p>
              {/* <p>{bootcamp.country}</p> */}
              <button
                className={[style.list_button]}
                onClick={() => handleCheckItOut(bootcamp.id)}
              >
                Check It Out
              </button>
            </div>
            <div>
              <img
                src={`/images/bootcamp-images/${bootcamp.photo}`}
                className={[style.bootcamp_photo]}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bootcamps;
