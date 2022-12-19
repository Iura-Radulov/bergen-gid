import { Link } from 'react-router-dom';
import img1 from 'images/17-century-farm/17-century-farm1.jpg';
import img2 from 'images/Private-tour/Private-tour1.jpg';
import img3 from 'images/waterfalls/waterfalls1.jpg';
import img4 from 'images/trolltunga/trolltunga-1.jpg';

import { Img, Label } from './ExcursionList.styled';

export default function ExcursionList() {
  return (
    <ul className="excursions d-flex flex-wrap justify-content-start pb-3">
      <li>
        <Link to="/trolltunga">
          <Img src={img4} alt="image1" />
          <Label>Язык Тролля (Trolltunga)</Label>
        </Link>
      </li>
      <li className="mx-3">
        <Link to="/farm">
          <Img src={img1} alt="image1" />
          <Label>
            Козлиный холм(Kjeåsen). Ферма 17-го века и немного хайкинга
          </Label>
        </Link>
      </li>
      <li>
        <Link to="/private-tour">
          <Img src={img2} alt="image1" />
          <Label>Индивидуальная экскурсия по интересам</Label>
        </Link>
      </li>
      <li>
        <Link to="/waterfalls">
          <Img src={img3} alt="image1" />
          <Label>Фьорды и водопады (Авторский)</Label>
        </Link>
      </li>
    </ul>
  );
}
