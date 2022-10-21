import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function OrderForm() {
  return (
    <Form className="text-center">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ваше имя" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Ваш email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Ваш номер телефона" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Количество человек" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Предпологаемая дата поездки</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Я согласен" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Отправить заявку
      </Button>
    </Form>
  );
}
