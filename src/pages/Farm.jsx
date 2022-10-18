import Container from 'react-bootstrap/Container';
import img1 from 'images/17-century-farm/17-century-farm1.jpg';

export default function Farm() {
  return (
    <Container>
      <h2 className="text-center py-3">
        Козлиный холм(Kjeåsen). Ферма 17-го века и немного хайкинга
      </h2>
      <div className="d-flex justify-content-center">
        <h3 className="text-center py-3 w-75">
          Мы все знаем, кто такие норвежские викинги и насколько круты они были.
          Но мало кто знает, что средневековые норвежские фермеры нисколько не
          отставали по крутости от викингов.
        </h3>
      </div>

      <img src={img1} className="w-100" alt="farm" />
    </Container>
  );
}
