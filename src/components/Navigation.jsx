// import { Link, animateScroll as scroll } from 'react-scroll';
import fon from '../images/fon.jpg';
// import { Link } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { phoneIcon, mailIcon } from 'icons/svgIcon/svgIcons';

const styles = {
  header: {
    alignItems: 'center',
    height: 300,
    // borderBottom: '1px solid #2A363B',
    padding: 20,
    // backgroundColor: '#f2f2f2',
    backgroundImage: `linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ), url(${fon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#2A363B',
  },
};

export default function Navigation() {
  return (
    <header style={styles.header}>
      <Container fluid className="d-flex">
        <Col className="d-none d-md-block text-white pt-4 px-5">
          <Link to="/" className="text-white fs-1 fst-italic">
            Виталий Орлович
          </Link>
          <p className="fst-italic">Частный гид в Бергене</p>
        </Col>
        <Col>
          <Nav className="me-auto pt-4 fs-4 justify-content-end align-items-start">
            <NavLink className="text-white" to="about">
              О себе
            </NavLink>
            <NavLink className="ms-3 text-white" to="excursion">
              Экскурсии
            </NavLink>
            <NavLink className="ms-3 text-white" to="services">
              Услуги
            </NavLink>
            <NavLink to="contact" className="ms-3 text-white">
              Контакты
            </NavLink>
            <div>
              <Nav.Link
                href="tel:+4796662700"
                className="ms-4 pt-0 text-white "
              >
                {phoneIcon} +4796662700
              </Nav.Link>
              <Nav.Link
                href="mailto:vianorway.tour@gmail.com"
                className="ms-4 text-white d-none d-md-block"
              >
                {mailIcon} vianorway.tour@gmail.com
              </Nav.Link>
            </div>
          </Nav>
        </Col>
      </Container>
    </header>
  );
}
