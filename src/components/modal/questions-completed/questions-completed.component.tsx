import { Button, Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import { material } from '@state/atom';
import { useAtom } from 'jotai';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconReload, IconX } from '@tabler/icons-react';

import style from './questions-completed.module.scss';

interface Props {
  isOpen: boolean;
  result: {
    correctAnswer: number;
    inCorrectAnswer: number;
    correctPoint: number;
    totalPoint: number;
  };
  onReset: () => void;
}

const ModalQuestionsCopleted: React.FC<Props> = ({ isOpen, result, onReset }) => {
  const navigate = useNavigate();
  const [, setMateri] = useAtom(material);

  const handleClose = () => {
    setMateri((prev: any) => prev + 1);
    navigate('/material', { replace: true });
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={handleClose} scrollBehavior="inside" size="full">
      <ModalOverlay />
      <ModalContent bgImage="/images/illustrations/11. HALAMAN EXIT.jpg" bgSize="cover">
        <ModalBody className={style.body}>
          <Text fontSize={20} mb={5}>
            Selamat anda berhasil menyelesaikan semua soal!
          </Text>
          <Text fontSize={18} fontWeight={700} mb={3}>
            Hasil :
          </Text>
          <Text fontSize={18}>Jawaban Benar : {result.correctAnswer}</Text>
          <Text fontSize={18}>Jawaban Salah : {result.inCorrectAnswer}</Text>
          <Text fontSize={18}>
            Anda mendapat point : {result.correctPoint} dari {result.totalPoint}
          </Text>
          <Flex justifyContent="center" gap={3} mt={8}>
            <Button leftIcon={<IconReload />} onClick={onReset}>
              Ulangi Soal
            </Button>
            <Button leftIcon={<IconX />} onClick={handleClose} colorScheme="primary">
              Tutup
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalQuestionsCopleted;
