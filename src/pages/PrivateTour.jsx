import Container from 'react-bootstrap/Container';

import img1 from 'images/Private-tour/Private-tour1.jpg';
import img2 from 'images/Private-tour/Private-tour2.jpg';
// import img3 from 'images/Private-tour/Private-tour3.jpg';
import img4 from 'images/Private-tour/Private-tour4.jpg';
// import img5 from 'images/Private-tour/Private-tour5.jpg';

import ControlledCarousel from 'utils/Carousel';

import {
  geoIcon,
  timeIcon,
  walletIcon,
  groupIcon,
  pathCheckIcon,
  xIcon,
  bagIcon,
  checkIcon,
} from 'icons/svgIcon/svgIcons';
import OrderForm from 'components/OrderForm';

const imgArray = [img1, img2, img4];

export default function PrivateTour() {
  return (
    <Container>
      <h2 className="text-center py-3">Индивидуальная экскурсия</h2>
      <ControlledCarousel imgProp={imgArray} />
      <div className="d-flex flex-column align-items-center py-5">
        <h4 className=" w-75 lh-base mb-4">
          Если вы собираетесь в Норвегию и хотите увидеть как можно больше о
          ней, но не знаете, что конкретно хотите увидеть, тогда это предложение
          для вас.
        </h4>
        <h4 className=" w-75 lh-base mb-4">
          Составлю индивидуальный маршрут, под ваши желания, интересы и
          возможности. Отвезу и покажу места, которые мало известны обычному
          туристу. Расскажу о Норвегии то, что вы не найдете в туристических
          справочниках.
        </h4>
      </div>

      <ul className="excursion-atribute">
        <li className="text-center">
          {geoIcon}
          <h3 className="py-4">Программа</h3>
          <p className="mb-2">Встреча у отеля</p>
          <p className="mb-2">Экскурсия по индивидуальной программе</p>
          <p>Возвращение в отель</p>
        </li>
        <li className="text-center">
          {timeIcon}
          <h3 className="py-4">Время</h3>
          <p>6-12 часов</p>
        </li>
        <li className="text-center">
          {walletIcon}
          <h3 className="py-4">Стоимость</h3>
          <p>Группа - 4500 NOK</p>
        </li>
        <li className="text-center">
          {groupIcon}
          <h3 className="py-4">Количество</h3>
          <p>До 4 человек</p>
          <p>(2 взрослых и 2 детей либо 3 взрослых)</p>
        </li>
      </ul>
      <ul className="excursion-atribute">
        <li className="text-center">
          {pathCheckIcon}
          <h3 className="py-4">В стоимость входит</h3>
          <ul className="d-flex flex-column align-items-start">
            <li className="mb-2">{checkIcon} Автомобиль с водителем</li>
            <li className="mb-2">{checkIcon}Топливо</li>
            <li className="mb-2">{checkIcon}Платные дороги</li>
            <li>{checkIcon}Паромные переправы</li>
          </ul>
        </li>
        <li className="text-center">
          {xIcon}
          <h3 className="py-4">В стоимость не входит</h3>
          <ul className="d-flex flex-column align-items-start">
            <li className="mb-2">{checkIcon}Питание</li>
            <li className="mb-2">{checkIcon}Сувениры</li>
            <li>{checkIcon}Ночёвка в отелях и кемпингах</li>
          </ul>
        </li>
        <li className="text-center">
          {bagIcon}
          <h3 className="py-4">Взять с собой</h3>
          <ul className="d-flex flex-column align-items-start">
            <li className="mb-2">
              {checkIcon} Подходящую для хайкинга одежду и обувь
            </li>
            <li>{checkIcon}Хорошее настроение</li>
          </ul>
        </li>
      </ul>
      <div className="d-flex flex-column align-items-center py-5">
        <h3 className="mb-2">Заказать экскурсию</h3>
        <div style={{ width: 300, marginTop: 20 }}>
          <OrderForm />
        </div>
      </div>
    </Container>
  );
}
