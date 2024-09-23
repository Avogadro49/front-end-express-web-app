/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/api";
import style from "./BootcampCourses.module.css";

const BootcampCourses = () => {
  const { bootcampId } = useParams();
  const [courses, setCourses] = useState([]);
  const [bootcampName, setBootcampName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await fetchData(`bootcamps/${bootcampId}/courses`);
        setCourses(data);

        const bootcampData = await fetchData(`bootcamps/${bootcampId}`);
        setBootcampName(bootcampData.name);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [bootcampId]);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.courses_container}>
      <h2 className={style.bootcamp_title}>{bootcampName}</h2>
      <ul className={style.courses_list}>
        {courses.map((course) => (
          <li key={course.id} className={[style.course_card]}>
            <h3 className={style.course_title}>{course.title}</h3>
            <p className={style.course_description}>{course.description}</p>
            <button className={style.course_button}>View Course</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BootcampCourses;
