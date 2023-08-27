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
  onSubmit: () => void;
}

const ModalConfirmation: React.FC<Props> = ({ isOpen, message, title, onSubmit, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{message}</Text>
        </ModalBody>
        <ModalFooter gap={5}>
          <Button variant="outline" w="full" color="#767676" onClick={onClose}>
            Batal
          </Button>
          <Button type="button" w="full" colorScheme="primary" onClick={onSubmit}>
            Ya
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirmation;
