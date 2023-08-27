import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  isOpen: boolean;
  message: string;
  title: string;
  onClose: () => void;
}

const ModalInfo: React.FC<Props> = ({ isOpen, message, title, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{message}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Tutup</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalInfo;
