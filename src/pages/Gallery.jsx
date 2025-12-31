import Container from "../layouts/Container";

export default function Gallery() {
  return (
    <Container>
      <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-300 h-40"></div>
        <div className="bg-gray-300 h-40"></div>
        <div className="bg-gray-300 h-40"></div>
        <div className="bg-gray-300 h-40"></div>
      </div>
    </Container>
  );
}
