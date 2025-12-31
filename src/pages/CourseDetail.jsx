import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../service/api";
import Container from "../layouts/Container";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${id}`).then((res) => setCourse(res.data));
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <Container>
      <div className="p-8">
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <p className="mt-2">{course.description}</p>
        <p className="mt-2">Duration: {course.duration}</p>
        <p className="text-green-600 mt-2">Fees: ₹{course.fee}</p>
      </div>
    </Container>
  );
}
