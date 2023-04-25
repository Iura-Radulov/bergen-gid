import Container from 'react-bootstrap/Container';

import img1 from 'images/waterfalls/waterfalls1.jpg';
import img2 from 'images/waterfalls/waterfalls4.jpg';
import img3 from 'images/waterfalls/waterfalls3.jpg';
// import Button from 'react-bootstrap/Button';
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
import OrderExcursion from 'components/OrderExcursion';

const imgArray = [img1, img2, img3];

export default function Waterfalls() {
  return (
    <>
      <Container>
        <h2 className="text-center py-4">Фьорды и водопады (Авторский)</h2>
        <ControlledCarousel imgProp={imgArray} />
        <div className="d-flex flex-column align-items-center py-5">
          <h4 className=" w-75 lh-base mb-4">
            Норвегия знаменита не только своими фьордами. Ещё одно природное
            богатство этой страны — водопады. Из тридцати самых высоких
            водопадов мира, десять находятся именно здесь. А из пятнадцати самых
            высоких водопадов Европы — четырнадцать норвежских. Хотите увидеть
            несколько из них? Тогда поехали!
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            Два водопада высотой более пол километра, два водопада из списка
            самых посещаемых в Норвегии и ещё один с трагической историей.
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            Но и про фьорды не забываем. По дороге мы прокатимся по берегу 3-х
            фьордов, под одним проедем в тоннеле на глубине 260 метров, а ещё
            один пересечём на пароме. И всё это мы успеем за один день.
          </h4>
        </div>

        <ul className="excursion-atribute">
          <li className="text-center">
            {geoIcon}
            <h3 className="py-4">Программа</h3>
            <p className="mb-2">Встреча у отеля</p>
            <p className="mb-2">Посещение водопадов</p>
            <p className="mb-2">Посещение фьорд</p>
            <p>Возвращение в отель</p>
          </li>
          <li className="text-center">
            {timeIcon}
            <h3 className="py-4">Время</h3>
            <p>10-12 часов</p>
          </li>
          <li className="text-center">
            {walletIcon}
            <h3 className="py-4">Стоимость</h3>
            <p>Группа - 4900 NOK</p>
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
              <li className="mb-2">
                {checkIcon} Персональный гид с автомобилем
              </li>
              <li className="mb-2 ">
                {checkIcon}Посещение 5-ти водопадов: <br />
                Fossen bratte ,Steindalsfossen, <br />
                Tjørnadalsfossen ,Låtefossen ,Langfoss
              </li>
              <li className="mb-2">
                {checkIcon}Фьорды: Hardangerfjord, Eidfjord, <br />
                Bomlafjord (подводный туннель), <br />
                Bjornafjord (паром)
              </li>
            </ul>
          </li>
          <li className="text-center">
            {xIcon}
            <h3 className="py-4">В стоимость не входит</h3>
            <ul className="d-flex flex-column align-items-start">
              <li className="mb-2">{checkIcon}Питание</li>
              <li>{checkIcon}Сувениры</li>
            </ul>
          </li>
          <li className="text-center">
            {bagIcon}
            <h3 className="py-4">Взять с собой</h3>
            <ul className="d-flex flex-column align-items-start">
              <li>{checkIcon}Хорошее настроение</li>
            </ul>
          </li>
        </ul>
      </Container>
      <OrderExcursion />
    </>
  );
}
