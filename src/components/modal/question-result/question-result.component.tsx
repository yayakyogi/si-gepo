import { Button, Flex, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';

import style from './question-result.module.scss';

interface Props {
  isOpen: boolean;
  result: boolean;
  onClose: () => void;
}

const ModalQuestionsResult: React.FC<Props> = ({ isOpen, result, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="lg">
      <ModalOverlay />
      <ModalContent bgSize="cover">
        <ModalBody className={style.body}>
          <Flex direction="column" justifyContent="center" alignItems="center" gap={5}>
            <Text fontSize={20} className="font-chewy" textAlign="center">
              {result ? 'Yeayy!! jawaban kamu benar' : 'Oopss!! jawaban kamu masih salah, coba lebih baik lagi'}
            </Text>
            <Image
              src={`/images/illustrations/${result ? '10. MENJAWAB BENAR' : '9. MENJAWAB SALAH'}.gif`}
              alt="result-image"
              width={120}
            />
            <Button size="sm" colorScheme="primary" onClick={onClose}>
              Lanjutkan Pertanyaan
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalQuestionsResult;
