import { Button, Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';

import style from './questions-completed.module.scss';

interface Props {
  isOpen: boolean;
  obj: any;
  onClose: () => void;
}

const ModalQuestionsCopleted: React.FC<Props> = ({ isOpen, obj, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="full">
      <ModalOverlay />
      <ModalContent bgImage="/images/illustrations/11. HALAMAN EXIT.jpg" bgSize="cover">
        {/* <ModalHeader>Selamat anda berhasil menyelesaikan semua soal!</ModalHeader> */}
        <ModalBody className={style.body}>
          <Text fontSize={20} mb={5}>
            Selamat anda berhasil menyelesaikan semua soal!
          </Text>
          <Text fontSize={18} fontWeight={700} mb={3}>
            Hasil :
          </Text>
          <Text fontSize={18}>Jawaban Benar : {obj.numberOfCorrectAnswers}</Text>
          <Text fontSize={18}>Jawaban Salah : {obj.numberOfIncorrectAnswers}</Text>
          <Text fontSize={18}>
            Anda mendapat point : {obj.correctPoints} dari {obj.totalPoints}
          </Text>
          <Flex justifyContent="center" mt={8}>
            <Button onClick={onClose} size="lg" colorScheme="primary">
              Tutup
            </Button>
          </Flex>
        </ModalBody>
        {/* <ModalFooter justifyContent="center">
          <Button onClick={onClose} colorScheme="primary">
            Tutup
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default ModalQuestionsCopleted;
