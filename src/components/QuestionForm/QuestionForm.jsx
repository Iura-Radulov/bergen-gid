import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';

export default function QuestionForm() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sghzn6v',
        'template_k1bdgva',
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
        <Form.Control type="text" name="question" placeholder="Ваш вопрос" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Задать вопрос
      </Button>
    </Form>
  );
}
