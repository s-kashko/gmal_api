
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import 'bootstrap/dist/css/bootstrap.min.css';

const MessageModal = (props) => {
  const {
    title,
    content,
    closeModal
  } = props;

  return (      
    <Modal isOpen={!!content} toggle={closeModal} className="modal-xl">
    <ModalHeader toggle={closeModal}>{title}</ModalHeader>
    <ModalBody>
        {ReactHtmlParser(content)}
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={closeModal}>Close</Button>
    </ModalFooter>
    </Modal>
  );
}

export default MessageModal;