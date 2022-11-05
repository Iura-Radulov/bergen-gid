import logo from 'images/logo_1.png';
// import fon from '../images/fon-3.jpg';
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
    height: 160,
    paddingBottom: 20,
    backgroundColor: '#00aeef',
    // backgroundImage: `
    // url(${fon})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    color: '#2A363B',
  },
};

const MenuLink = styled(NavLink)`
  &.active {
    color: #d1314c;
  }
`;

export default function Navigation() {
  return (
    <header style={styles.header}>
      <Container className="d-flex align-items-center">
        <Col className="d-flex justify-content-center">
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
          </Nav>
        </Col>
        <Col md="auto d-flex align-items-center">
          <Link to="/" className="">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </Col>
        <Col className="d-flex flex-column  align-items-end text-white pt-4 ">
          <Nav.Link href="tel:+4796662700" className="ms-4 pt-0 link-white">
            {phoneIcon} <p className="d-none d-md-inline fs-5">+4796662700</p>
          </Nav.Link>
          <Nav.Link
            href="mailto:vianorway.tour@gmail.com"
            className=" pt-3 link-white"
          >
            {mailIcon}
            <p className="d-none d-md-inline ms-3 fs-5">
              vianorway.tour@gmail.com
            </p>
          </Nav.Link>
        </Col>
      </Container>
    </header>
  );
}
