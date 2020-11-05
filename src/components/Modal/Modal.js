import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import * as constant from '../../constants';

const BasicModal = (props) => {
  const {
    buttonLabel,
    className,
    color,
    title,
    content,
    select,
    isOpen,
    toggle,
  } = props;

  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {content}
        </ModalBody>
        <ModalFooter>
          {select}
          <Button color="secondary" onClick={toggle}>{constant.CANCEL}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default BasicModal;