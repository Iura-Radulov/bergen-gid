import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';

export default function OrderForm() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sghzn6v',
        'template_k1bdgva5',
        e.target,
        'ZmDpEnzAfSc2cOtEl'
      )
      .then(resp => {
        console.log(resp);
        e.target.reset();
      })
      .catch(error => console.log(error));
  }
  return (
    <Form className="text-center" onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name="name" placeholder="Ваше имя" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" name="email" placeholder="Ваш email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="number"
          name="phoneNumber"
          placeholder="Ваш номер телефона"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="number"
          name="personNumber"
          placeholder="Количество человек"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Предпологаемая дата поездки</Form.Label>
        <Form.Control type="date" name="date" />
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
