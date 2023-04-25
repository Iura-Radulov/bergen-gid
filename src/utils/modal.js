import OrderForm from 'components/OrderForm';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Заказ экскурсии
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <OrderForm />
      </Modal.Body>
    </Modal>
  );
}
