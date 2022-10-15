import Container from 'react-bootstrap/Container';
import gidPhoto from '../images/gid.jpg';

export default function About() {
  return (
    <Container>
      <img src={gidPhoto} className="w-25" alt="gidPhoto" />
    </Container>
  );
}
