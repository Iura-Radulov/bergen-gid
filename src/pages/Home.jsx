// import Container from 'react-bootstrap/Container';
import fon from '../images/fon-4.jpg';

// import fon2 from 'images/aerial-view.webp';
// import ExcursionList from 'components/ExcursionList';
// import ServicesList from 'components/ServicesList';
import Button from 'react-bootstrap/Button';
import CenteredModal from 'utils/modal';
import { useState } from 'react';

export default function Home() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `
          linear-gradient(
      to right,
      rgba(47, 48, 58, 0.2),
      rgba(47, 48, 58, 0.2)
    ),
    url(${fon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        height: 'calc(100vh - 150px)',
        position: 'relative',
      }}
    >
      <h3 className="d-none d-md-block d-lg-fs-3 text-center lh-base text-white position-absolute top-50 start-50 translate-middle w-75">
        Вы когда-нибудь бывали в сказке? Нет? А хотите? Тогда приезжайте к нам в
        Норвегию! А именно – в Берген. Город всемирного наследия. Город-ворота
        норвежских фьордов. Отсюда, из Бергена и начинаются все наши экскурсии в
        мир фантастической норвежской природы.
      </h3>
      <p className="d-block d-md-none  fs-4 d-lg-fs-3 text-center text-white position-absolute top-50 start-50 translate-middle w-75">
        Вы когда-нибудь бывали в сказке? Нет? А хотите? Тогда приезжайте к нам в
        Норвегию! А именно – в Берген. Город всемирного наследия.
      </p>
      <div>
        <Button
          variant="primary"
          size="lg"
          active
          className="order-button position-absolute start-50 translate-middle"
          onClick={() => setModalShow(true)}
        >
          Заказать экскурсию
        </Button>
        <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

// {/* <Container className="bg-light px-0">
//   <h1
//     className="p-5 text-center text-black-50 fw-bold"
//     style={{ fontFamily: 'Apple Chancery', fontStyle: 'italic' }}
//   >
//     Индивидуальные экскурсии по Норвегии
//   </h1>

//   <h3 className="p-5 text-center">Экскурсии</h3>
//   <ExcursionList />
//   <h3 className="p-5 text-center">Услуги</h3>
//   <ServicesList />
// </Container> */}
