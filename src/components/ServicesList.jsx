import { Link } from 'react-router-dom';
import img1 from '../images/transfer.jpg';

export default function ServicesList() {
  return (
    <ul className="d-flex justify-content-around">
      <li>
        <Link to="/services/transfer">
          <img src={img1} style={{ width: 350 }} alt="image1" />
          <p style={{ width: 300 }} className="mt-2 link">
            Трансфер в/из аэропорта г.Берген, Трансфер Осло-Берген, Берген-Осло
          </p>
        </Link>
      </li>
    </ul>
  );
}
