import { Button, Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import { material } from '@state/atom';
import { IconReload, IconX } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [resultLast, setResultLast] = useState<string>('');

  const handleClose = () => {
    setMateri((prev: any) => prev + 1);
    navigate('/material', { replace: true });
  };

  useEffect(() => {
    if (result.correctAnswer >= 1 && result.correctAnswer <= 2) {
      setResultLast('Tigkatkan');
    } else if (result.correctAnswer >= 3 && result.correctAnswer <= 5) {
      setResultLast('Hebat');
    } else if (result.correctAnswer >= 6 && result.correctAnswer <= 7) {
      setResultLast('Luar Biasa');
    }
  }, [result.correctAnswer]);

  return (
    <Modal isCentered isOpen={isOpen} onClose={handleClose} scrollBehavior="inside" size="full">
      <ModalOverlay />
      <ModalContent bgImage="/images/illustrations/11. HALAMAN EXIT.jpg" bgSize="cover">
        <ModalBody className={style.body}>
          <Text fontSize={20} mb={5}>
            Selamat anda berhasil menyelesaikan semua soal!
          </Text>
          <Text fontSize={18} fontWeight={700} mb={2}>
            Hasil :
          </Text>
          <Text fontSize={18}>Jawaban Benar : {result.correctAnswer}</Text>
          <Text fontSize={18}>Jawaban Salah : {result.inCorrectAnswer}</Text>
          <Text fontSize={18}>Anda mendapat point : {Math.floor(result.correctPoint)}</Text>
          <Text fontSize={18} fontWeight="bold" mt={2}>
            Hasil akhir : {resultLast}
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
