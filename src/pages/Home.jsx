import Container from 'react-bootstrap/Container';
import fon from '../images/Private-tour/Private-tour4.jpg';
import ExcursionList from 'components/ExcursionList';

export default function Home() {
  return (
    <div className="bg-success bg-opacity-25">
      <Container className="bg-light px-0">
        <h2 className="p-5 text-center">
          Индивидуальные экскурсии по Норвегии
        </h2>
        <div
          style={{
            backgroundImage: `url(${fon})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 600,
          }}
        ></div>
        <h3 className="p-5 text-center">Экскурсии</h3>
        <ExcursionList />
      </Container>
    </div>
  );
}
