import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { telegramIcon, whatsappIcon, mailIcon } from 'icons/svgIcon/svgIcons';
import Nav from 'react-bootstrap/Nav';
import logo from 'images/logo_1.png';

export default function Footer() {
  return (
    <footer className="bg-secondary " style={{ height: 160 }}>
      <Container className="d-flex pt-4 justify-content-around">
        <div>
          <Link to="/" className="link-white fs-3 fst-italic">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="d-none d-md-flex flex-column">
          <NavLink className="link-white" to="/about">
            О себе
          </NavLink>
          <NavLink className="mt-2 link-white" to="/excursion">
            Экскурсии
          </NavLink>
          <NavLink className="mt-2 link-white" to="/services">
            Услуги
          </NavLink>
          <NavLink to="/contact" className="mt-2 link-white">
            Контакты
          </NavLink>
        </div>
        <div>
          <Nav.Link
            href="tel:+4796662700"
            className="ms-4 fs-5 pt-0 link-white"
          >
            {telegramIcon}
            <span className="d-none d-sm-inline-block mx-2">+4796662700</span>
          </Nav.Link>
          <Nav.Link
            href="tel:+4796662700"
            className="ms-4 fs-5 pt-0 link-white mt-2"
          >
            {whatsappIcon}
            <span className="d-none d-sm-inline-block mx-2">+4796662700</span>
          </Nav.Link>
          <Nav.Link
            href="mailto:vianorway.tour@gmail.com"
            className="ms-4 fs-5 mt-2 link-white d-none d-md-block"
          >
            {mailIcon} vianorway.tour@gmail.com
          </Nav.Link>
        </div>
      </Container>
    </footer>
  );
}
