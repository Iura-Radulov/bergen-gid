import Container from 'react-bootstrap/Container';
import gidPhoto from '../images/gid.jpg';

export default function About() {
  return (
    <>
      <Container>
        <h1
          className="p-5 text-center text-black-50 fw-bold"
          style={{ fontStyle: 'italic' }}
        >
          Индивидуальные экскурсии по Норвегии
        </h1>
        <div className="py-5">
          <img src={gidPhoto} className="w-25" alt="gidPhoto" />
        </div>
      </Container>
    </>
  );
}
