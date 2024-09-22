// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import "./ListStyles.css";

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
    <div className="list-container">
      <h2 className="title">Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="list-item">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
