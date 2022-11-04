import Container from 'react-bootstrap/Container';

import img1 from 'images/17-century-farm/17-century-farm1.jpg';
import img2 from 'images/17-century-farm/17-century-farm2.jpg';
import img3 from 'images/17-century-farm/17-century-farm3.jpg';
import img4 from 'images/17-century-farm/17-century-farm4.jpg';
import img5 from 'images/17-century-farm/17-century-farm5.jpg';
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
import OrderForm from 'components/OrderForm';

const imgArray = [img1, img2, img3, img4, img5];

export default function Farm() {
  return (
    <>
      <Container>
        <h2 className="text-center py-3">
          Козлиный холм(Kjeåsen). Ферма 17-го века и немного хайкинга
        </h2>
        <ControlledCarousel imgProp={imgArray} />
        <div className="d-flex flex-column align-items-center py-5">
          <h4 className=" w-75 lh-base mb-4">
            Мы все знаем, кто такие норвежские викинги и насколько круты они
            были. Но мало кто знает, что средневековые норвежские фермеры
            нисколько не отставали по крутости от викингов. И в этом вы сможете
            убедиться, посетив одну небольшую ферму, которая находится на краю
            практически отвесной скалы на высоте 550-ти метров над фьордом.
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            А при наличии минимальной физ.подготовки и отсутствии страха высоты,
            вы сможете сами, своими ногами, преодолеть весь путь, который
            норвежские фермеры преодолевали, чтобы добраться домой. Прогулка
            займёт каких-то 1,5 — 2 часа. Но она станет одной из самых
            увлекательных прогулок в вашей жизни. Если же вам лень и нехочется
            никуда идти, то мы доедем на автомобиле прямо до самой фермы и там я
            вам немного расскажу о её истории. А так же в этой поездке вас ждёт
            бонус - самый посещаемый и один из красивейших водопадов Норвегии
            Vøringsfossen.
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            Если же вам лень и нехочется никуда идти, то мы доедем на автомобиле
            прямо до самой фермы и там я вам немного расскажу о её истории. А
            так же в этой поездке вас ждёт бонус - самый посещаемый и один из
            красивейших водопадов Норвегии Vøringsfossen.
          </h4>
        </div>

        <ul className="excursion-atribute">
          <li className="text-center">
            {geoIcon}
            <h3 className="py-4">Место встречи</h3>
            <p>Ваш отель</p>
          </li>
          <li className="text-center">
            {timeIcon}
            <h3 className="py-4">Время</h3>
            <p>Продолжительность — 10-12 часов</p>
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
              <li className="mb-2">{checkIcon}Встреча у отеля</li>
              <li className="mb-2">
                {checkIcon} Персональный гид с автомобилем
              </li>
              <li className="mb-2">
                {checkIcon}Посещение горной фермы Kjeåsen
              </li>
              <li className="mb-2">
                {checkIcon}Посещение водопада Vøringsfossen
              </li>
              <li>{checkIcon}Возвращение в отель</li>
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
    </>
  );
}
