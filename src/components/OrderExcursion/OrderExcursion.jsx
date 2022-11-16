import OrderForm from 'components/OrderForm';
import { Container, Title, Div } from './OrderExcursion.styled';

export default function OrderExcursion() {
  return (
    <Container>
      <Title>Заказать экскурсию</Title>
      <Div>
        <OrderForm />
      </Div>
    </Container>
  );
}
