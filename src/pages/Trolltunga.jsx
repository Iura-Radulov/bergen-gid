import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import img1 from 'images/trolltunga/trolltunga-1.jpg';
import img2 from 'images/trolltunga/trolltunga-2.jpg';
import img3 from 'images/trolltunga/trolltunga-3.jpg';
import img4 from 'images/trolltunga/trolltunga-4.jpg';

// import Button from 'react-bootstrap/Button';
import ControlledCarousel from 'utils/Carousel';

import {
  timeIcon,
  walletIcon,
  groupIcon,
  pathCheckIcon,
  xIcon,
  bagIcon,
  checkIcon,
} from 'icons/svgIcon/svgIcons';

import OrderExcursion from 'components/OrderExcursion';
const imgArray = [img1, img2, img3, img4];

export default function Trolltunga() {
  return (
    <>
      <Container>
        <h2 className="text-center py-4">Язык Тролля (Trolltunga)</h2>
        <ControlledCarousel imgProp={imgArray} />
        <div className="d-flex flex-column align-items-center py-5">
          <h3 className="lh-base mb-4 ps-4">
            <strong>История</strong>
          </h3>
          <h4 className=" w-75 lh-base mb-4">
            В незапамятные времена Норвегия была населена не только людьми, но
            троллями. В горах над озером Рингедалсватнет, недалеко от городка
            Одда, жил огромный тролль. Этот тролль был известным экстремалом в
            своём районе. Он любил перепрыгивать со скалы на скалу, спускаться в
            глубокие пропасти, нырять с самой вершины горы в воды озера.
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            Тролль — существо сумеречного мира, и ему нельзя выходить на свет,
            так как окаменеет. Но наш экстремал решил проверить, кто быстрее он
            или солнце. И с первыми лучами солнца высунул из пещеры свой язык.
            Чуть-чуть. Он был быстр как молния. Но солнце было быстрее и тролль
            полностью окаменел.
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            Так появилось одно из самых красивых и знаменитых мест в Норвегии —
            <strong>Язык Тролля (Trolltunga)</strong>. Он находится на высоте
            700 метров над горным озером и 1100 метров над уровнем моря. Эта
            скала, как магнит притягивает путешественников со всего мира.
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            Это миф, легенда и никто не знает, сколько в этой легенде правды, но
            неоспоримым фактом является то, что Trolltunga — это самая известная
            достопримечательность Норвегии. И эту достопримечательность вы
            сможете увидеть своими глазами. А также пополнить свою коллекцию
            фотографий тем самым знаменитым фото вас, стоящим(ей) на краю Языка
            тролля.
          </h4>
          <h2 className="text-center py-4">
            <strong>Программа</strong>
          </h2>
          <h4 className="w-75 mb-4">
            <strong>!!!Перед заказом тура прочитать полностью!!!</strong>
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            Всё путешествие продлится 3 дня. Выезжаем мы как обычно из г.
            Бергена (По договорённости рассматриваем другие точки отправления).
          </h4>
          <h4 className="w-75 mb-4">
            <strong>День 1: Берген — Одда*</strong>
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            В первый день мы приедем в тот самый небольшой городок Одда, где
            спокойно и без спешки подготовимся к завтрашнему походу. Сложим вещи
            в рюкзаки, подготовим перекус и воду, которые понадобятся нам в
            пути. А также у нас ещё останется время погулять по берегу фьорда и
            насладиться окружающими пейзажами.
          </h4>
          <h4 className="w-75 mb-4">
            <strong>День 2: Поход к Языку Тролля (Trolltunga)</strong>
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            Весь поход — это примерно 29 км (туда-обратно). Занимает около 10–12
            часов. Поэтому к началу тропы нам надо приехать не позднее 7.00
            утра. А значит подъём примерно в 6.00 утра. Всю дорогу вас будет
            сопровождать наш гид, поэтому переживать о том, что вы заблудитесь и
            не дойдёте, нет ни одной причины.
          </h4>
          <h4 className="w-75 mb-4">
            <strong>День 3: Возвращение в г. Берген*</strong>
          </h4>
          <h4 className=" w-75 lh-base mb-4">
            На третий день мы выспимся и спокойно вернёмся в Берген. Но уже по
            другой дороге.
          </h4>
          <h5 className="w-75 mb-4">
            * Это путешествие совмещено с экскурсией{' '}
            <Link to="/waterfalls">«Фьорды и водопады»</Link>, которая будет
            разделена на два дня — первый и третий.
          </h5>
          <h4>
            <strong>Требования:</strong>
          </h4>
          <ul className="w-75 p-0">
            <li className="h4 mb-4">
              - Минимальная физ.подготовка. Возможность пройти 30 км по
              пересечённой местности.
            </li>
            <li className="h4 mb-4">
              - Наличие подходящей для похода одежды и обуви.
            </li>
            <li className="h4 mb-4">
              - Исполнение всех указаний гида, которые относятся к правилам
              поведения на маршруте и безопасности во время похода.
            </li>
          </ul>
          <h4>
            <strong>Сезон: 1июня — 30 сентября</strong>
          </h4>
          <h4 className=" w-75 mb-4">
            <strong>
              Заказ на путешествие принимается минимум за 2 недели до
              запланированной даты приезда.
            </strong>
          </h4>
        </div>

        <ul className="excursion-atribute">
          {/* <li className="text-center">
            {geoIcon}
            <h3 className="py-4">Программа</h3>
            <p className="mb-2">Встреча у отеля</p>
            <p className="mb-2">Посещение скалы Trolltunga (Язык тролля)</p>
            <p className="mb-2">Экскурсия "Фьорды и водопады"</p>
            <p>Возвращение в отель</p>
          </li> */}
          <li className="text-center">
            {timeIcon}
            <h3 className="py-4">Время</h3>
            <p>3 дня</p>
          </li>
          <li className="text-center">
            {walletIcon}
            <h3 className="py-4">Стоимость</h3>
            <p>Группа - 23600 NOK</p>
          </li>
          <li className="text-center">
            {groupIcon}
            <h3 className="py-4">Количество</h3>
            <p>До 7 человек</p>
          </li>
        </ul>
        <ul className="excursion-atribute">
          <li className="text-center">
            {pathCheckIcon}
            <h3 className="py-4">В стоимость входит</h3>
            <ul className="d-flex flex-column align-items-start">
              <li className="mb-2">{checkIcon} Встреча у отеля</li>
              <li className="mb-2">
                {checkIcon} Персональный гид с автомобилем
              </li>
              <li className="mb-2">
                {checkIcon}Посещение скалы Trolltunga (Язык тролля)
              </li>
              <li className="mb-2">{checkIcon}Экскурсия "Фьорды и водопады"</li>
              <li className="mb-2">{checkIcon} Возвращение в отель</li>
            </ul>
          </li>
          <li className="text-center">
            {xIcon}
            <h3 className="py-4">В стоимость не входит</h3>
            <ul className="d-flex flex-column align-items-start">
              <li className="mb-2">{checkIcon}Стоимость проживания</li>
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
        <div className="d-flex flex-column align-items-start py-5"></div>
      </Container>
      <OrderExcursion />
    </>
  );
}
