// import { Link, animateScroll as scroll } from 'react-scroll';
import fon from '../images/fon.jpg';
// import { Link } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { phoneIcon, mailIcon } from 'icons/svgIcon/svgIcons';

const styles = {
  header: {
    alignItems: 'center',
    height: 300,
    padding: 20,
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

const MenuLink = styled(NavLink)`
  &.active {
    color: #2196f3;
  }
`;

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
            <MenuLink className="link-white" to="about">
              О себе
            </MenuLink>
            <MenuLink className="ms-3 link-white" to="excursion">
              Экскурсии
            </MenuLink>
            <MenuLink className="ms-3 link-white" to="services">
              Услуги
            </MenuLink>
            <MenuLink to="contact" className="ms-3 link-white">
              Контакты
            </MenuLink>
            <div>
              <Nav.Link href="tel:+4796662700" className="ms-4 pt-0 link-white">
                {phoneIcon} +4796662700
              </Nav.Link>
              <Nav.Link
                href="mailto:vianorway.tour@gmail.com"
                className="ms-4 link-white d-none d-md-block"
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
