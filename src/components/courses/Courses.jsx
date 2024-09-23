// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import style from "../bootcamps/ListStyles.module.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("courses")
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.list_container}>
      <h2 className={[style.title]}>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className={[style.list_item]}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className={[style.list_button]}>Check It Out</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
