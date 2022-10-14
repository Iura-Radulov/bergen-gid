// import { Link, animateScroll as scroll } from 'react-scroll';
// import upArrow from '../icons/up-arrow.png';
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { phoneIcon } from 'icons/svgIcon/svgIcons';

const styles = {
  header: {
    alignItems: 'center',
    // borderBottom: '1px solid #2A363B',
    padding: 20,
    backgroundColor: '#f2f2f2',
    color: '#2A363B',
  },
};

export default function Navigation() {
  return (
    <header style={styles.header}>
      <Container className="d-flex">
        <Col sm={6}>
          <Nav.Link href="/" style={{ fontSize: 30 }}>
            Виталий Орлович
          </Nav.Link>
          <p>Частный гид в Бергене</p>
        </Col>
        <Col sm={6}>
          <Nav className="me-auto" style={{ fontSize: 20 }}>
            <Nav.Link activeClass="active" href="about">
              О себе
            </Nav.Link>
            <Nav.Link activeClass="active" href="excursion">
              Экскурсии
            </Nav.Link>
            <Nav.Link href="contact">Контакты</Nav.Link>
            <Nav.Link href="tel:+4796662700">+4796662700 {phoneIcon}</Nav.Link>
            {/* <Button variant="primary">Написать сообщение</Button>{' '} */}
          </Nav>
        </Col>
      </Container>
    </header>
  );
}
