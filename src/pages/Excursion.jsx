import Container from 'react-bootstrap/Container';
import ExcursionList from 'components/ExcursionList/ExcursionList';
import { Suspense } from 'react';

export default function Excursion() {
  return (
    <>
      <Container>
        <h2 className="p-4 text-center">Экскурсии</h2>

        <Suspense fallback={<div>Loading subpage...</div>}>
          <h3 className=" text-center my-5 px-5">
            Вы когда-нибудь бывали в сказке? Нет? А хотите? Тогда приезжайте к
            нам в Норвегию! А именно – в Берген. Город всемирного наследия.
            Город-ворота норвежских фьордов. Отсюда, из Бергена и начинаются все
            наши экскурсии в мир фантастической норвежской природы. Мы покажем
            вам настоящую Норвегию!!!
          </h3>
          <ExcursionList />
        </Suspense>
      </Container>
    </>
  );
}
