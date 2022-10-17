import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { telegramIcon, whatsappIcon, mailIcon } from 'icons/svgIcon/svgIcons';
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
  return (
    <footer className="bg-secondary " style={{ height: 200 }}>
      <Container className="d-flex pt-5 justify-content-around">
        <div>
          <Link to="/" className="text-white text-opacity-75 fs-3 fst-italic">
            Виталий Орлович
          </Link>
          <p className="fst-italic text-white text-opacity-75 mt-2">
            Частный гид
          </p>
          <p className="fst-italic text-white text-opacity-75 mt-2">
            Берген, Норвегия
          </p>
        </div>
        <div className="d-none d-md-flex flex-column">
          <NavLink className="text-white text-opacity-75" to="about">
            О себе
          </NavLink>
          <NavLink className="mt-2 text-white text-opacity-75" to="excursion">
            Экскурсии
          </NavLink>
          <NavLink className="mt-2 text-white text-opacity-75" to="services">
            Услуги
          </NavLink>
          <NavLink to="contact" className="mt-2 text-white text-opacity-75">
            Контакты
          </NavLink>
        </div>
        <div>
          <Nav.Link
            href="tel:+4796662700"
            className="ms-4 fs-4 pt-0 text-white text-opacity-75"
          >
            {telegramIcon} +4796662700
          </Nav.Link>
          <Nav.Link
            href="tel:+4796662700"
            className="ms-4 fs-4 pt-0 text-white text-opacity-75 mt-2"
          >
            {whatsappIcon} +4796662700
          </Nav.Link>
          <Nav.Link
            href="mailto:vianorway.tour@gmail.com"
            className="ms-4 fs-4 mt-2 text-white text-opacity-75 d-none d-md-block"
          >
            {mailIcon} vianorway.tour@gmail.com
          </Nav.Link>
        </div>
      </Container>
    </footer>
  );
}
