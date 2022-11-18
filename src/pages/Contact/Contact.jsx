import Container from 'react-bootstrap/Container';
import { geoIcon, phoneIconLarge, mailIconLarge } from 'icons/svgIcon/svgIcons';
import QuestionForm from 'components/QuestionForm';
import { Div, FormContainer } from './Contact.styled';

export default function Contacts() {
  return (
    <>
      <Container className="pt-4">
        <h2 className="py-5 text-center">Контакты</h2>
        <div className="my-5">
          {geoIcon} <span className="fs-4 ms-3">Берген, Норвегия</span>
        </div>
        <div className="my-5">
          {phoneIconLarge}{' '}
          <span className="fs-4 ms-3">+4796662700 (WhatsApp, Telegram)</span>
        </div>
        <div className="my-5 ">
          {mailIconLarge}{' '}
          <span className="fs-4 ms-3">vianorway.tour@gmail.com</span>
        </div>
      </Container>
      <Div>
        <h3 className="my-5 text-white">
          Если у вас возникли вопросы, отправьте нам и мы с вами свяжемся в
          ближайшее время
        </h3>
        <FormContainer>
          <QuestionForm />
        </FormContainer>
      </Div>
    </>
  );
}
