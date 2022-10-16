import Container from 'react-bootstrap/Container';
import fon from '../images/Private-tour/Private-tour4.jpg';
import ExcursionList from 'components/ExcursionList';
import ServicesList from 'components/ServicesList';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div className="bg-success bg-opacity-25">
      <Container className="bg-light px-0">
        <h2 className="p-5 text-center">
          Индивидуальные экскурсии по Норвегии
        </h2>

        <div
          style={{
            backgroundImage: `linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ), url(${fon})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

            height: 700,
            position: 'relative',
          }}
        >
          <h3 className="p-4 text-center text-white position-absolute top-50 start-50 translate-middle w-75">
            Вы когда-нибудь бывали в сказке? Нет? А хотите? Тогда приезжайте к
            нам в Норвегию! А именно – в Берген. Город всемирного наследия.
            Город-ворота норвежских фьордов. Город, чья набережная знаменита на
            весь мир и находится под охраной ЮНЕСКО. Отсюда, из Бергена и
            начинаются все наши экскурсии в мир фантастической норвежской
            природы. Мы покажем вам настоящую Норвегию!!!
          </h3>
          <Button
            variant="primary"
            size="lg"
            active
            className="position-absolute start-50 translate-middle"
            style={{ bottom: 100 }}
          >
            Заказать экскурсию
          </Button>
        </div>
        <h3 className="p-5 text-center">Экскурсии</h3>
        <ExcursionList />
        <h3 className="p-5 text-center">Услуги</h3>
        <ServicesList />
      </Container>
    </div>
  );
}
