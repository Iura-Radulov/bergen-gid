import { Link } from 'react-router-dom';
import img1 from '../images/17-century-farm/17-century-farm1.jpg';
import img2 from '../images/Private-tour/Private-tour1.jpg';
import img3 from '../images/waterfalls/waterfalls1.jpg';

export default function ExcursionList() {
  return (
    <ul className="d-block d-lg-flex justify-content-around">
      <li>
        <Link to="/excursion/farm">
          <img src={img1} style={{ width: 350 }} alt="image1" />
          <p style={{ width: 300 }} className="mt-2">
            Kjeåsen(Козлиный холм). Ферма 17-го века и немного хайкинга
          </p>
        </Link>
      </li>
      <li>
        <Link to="/excursion/private-tour">
          <img src={img2} style={{ width: 350 }} alt="image1" />
          <p className="mt-2">Индивидуальная экскурсия по интересам</p>
        </Link>
      </li>
      <li>
        <Link to="/excursion/waterfalls">
          <img src={img3} style={{ width: 350 }} alt="image1" />
          <p className="mt-2">Фьорды и водопады (Авторский)</p>
        </Link>
      </li>
    </ul>
  );
}
