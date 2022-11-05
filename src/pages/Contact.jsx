import Container from 'react-bootstrap/Container';
import { geoIcon, phoneIconLarge, mailIconLarge } from 'icons/svgIcon/svgIcons';

export default function Contacts() {
  return (
    <Container className="pt-4">
      <h3>Контакты</h3>
      <div className="my-5">
        {geoIcon} <span className="fs-4 ms-3">Берген, Норвегия</span>
      </div>
      <div className="my-5">
        {phoneIconLarge}{' '}
        <span className="fs-4 ms-3">+4796662700 (WhatsApp, Telegram)</span>
      </div>
      <div className="my-5 ">
        {mailIconLarge}{' '}
        <span className="fs-4 ms-3">vianorway.tour@gmail.com</span>
      </div>
    </Container>
  );
}
