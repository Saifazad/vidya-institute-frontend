import { useEffect, useState } from "react";
import { api } from "../service/api";
import CourseCard from "../components/CourseCard";
import Container from "../layouts/Container";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then((res) => setCourses(res.data));
  }, []);

  return (
    <>
      <Container>
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </>
  );
}
