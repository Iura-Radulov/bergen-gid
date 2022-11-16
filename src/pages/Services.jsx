import { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import imgService from 'images/transfer.jpg';
import OrderExcursion from 'components/OrderExcursion';
import { geoIcon, walletIcon, groupIcon } from 'icons/svgIcon/svgIcons';

export default function Services() {
  return (
    <div>
      <Container>
        <h2 className="p-5 text-center">Услуги</h2>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <h2 className="text-center py-3">
            Трансфер из аэропорта Берген и между Осло-Берген
          </h2>
          <div className="text-center">
            <img src={imgService} style={{ width: 700 }} alt="image1" />
          </div>
          <div className="d-flex flex-column align-items-center py-5">
            <h4 className=" w-75 lh-base mb-4">
              Мы предлагаем не только экскурсии, но и трансфер между Бергеном и
              Осло. Но если вы думаете, что это просто долгая и скучная поездка
              между городами, то вы ошибаетесь.
            </h4>
            <h4 className=" w-75 lh-base mb-4">
              Это будет незабываемое путешествие по одной из красивейших дорог
              Европы, в котором вы сможете насладиться всей красотой норвежской
              природы, преодолеть горный перевал на высоте более 1000 метров над
              уровнем моря, а также проехать по самому длинному в мире
              автомобильному туннелю.
            </h4>
          </div>
          <ul className="excursion-atribute">
            <li className="text-center">
              {geoIcon}
              <h3 className="py-4">Место встречи</h3>
              <p className="mb-2">Аэропорт</p>
              <p className="mb-2">Осло</p>
              <p>Берген</p>
            </li>

            <li className="text-center">
              {walletIcon}
              <h3 className="py-4">Стоимость</h3>
              <p>Группа - 500 NOK</p>
            </li>
            <li className="text-center">
              {groupIcon}
              <h3 className="py-4">Количество</h3>
              <p>До 4 человек</p>
              <p>(2 взрослых и 2 детей либо 3 взрослых)</p>
            </li>
          </ul>
        </Suspense>
      </Container>
      <OrderExcursion />
    </div>
  );
}
