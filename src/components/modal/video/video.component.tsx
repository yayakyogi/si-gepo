import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';

import style from './video.module.scss';

interface Props {
  isOpen: boolean;
  video: any;
  title: string;
  onClose: () => void;
}

const ModalVideo: React.FC<Props> = ({ isOpen, video, title, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="full" motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent bgImage="/images/illustrations/10. HALAMAN VIDEO.png" bgSize="cover">
        <ModalHeader fontSize={14} color="white" textAlign="center">
          {title}
        </ModalHeader>
        <ModalCloseButton color="white" size="lg" />
        <ModalBody>
          <Flex justifyContent="center">
            <video controls className={style.video}>
              <source src={video} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
            </video>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalVideo;
