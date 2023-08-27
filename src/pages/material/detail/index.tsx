import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ModalVideo from '@components/modal/video/video.component';
import ProgressBar from '@components/progress-bar/progress-bar.component';
import materialJson from '@resources/material.json';
import {
  IconChevronLeft,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
  IconUserQuestion,
} from '@tabler/icons-react';
import { filter } from 'lodash-es';

import style from './style.module.scss';

const MaterialDetailPage: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [materialObj, setMaterialObj] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const materi = filter(materialJson, (val) => {
        return val.id.toString() === id;
      });

      setMaterialObj(materi[0]);
    }
  }, []);

  const renderStep = () => {
    const step = materialObj?.material?.subMaterial[currentIndex];

    return step ? (
      <Box flex={1} overflow="scroll" py={2}>
        <Text color="white" fontWeight={700} fontSize={18} mb={3}>
          {step.title}
        </Text>
        <Text color="white" fontSize={16}>
          {step.description}
        </Text>
      </Box>
    ) : null;
  };

  return (
    <>
      <Flex w="full" direction="column" className={style.container}>
        <Flex direction="column" className={style.box}>
          <Box className={style.header}>
            <Flex alignItems="center" gap={1} mb={3}>
              <IconButton aria-label="button-back" variant="link" onClick={() => navigate('/material', { replace: true })}>
                <IconChevronLeft color="white" size={28} />
              </IconButton>
              <Text className={style.title}>{materialObj?.material?.title}</Text>
            </Flex>
            <ProgressBar currentValue={currentIndex + 1} maxValue={materialObj?.material?.subMaterial.length} />
          </Box>
          {renderStep()}
          <Flex justifyContent="space-between" alignItems="center" mt={3}>
            <Button size="sm" isDisabled={currentIndex < 1} onClick={() => setCurrentIndex(currentIndex - 1)}>
              <IconPlayerTrackPrevFilled />
            </Button>
            <Flex gap={3}>
              <Button
                size="sm"
                colorScheme="primary"
                leftIcon={<IconPlayerPlayFilled />}
                onClick={() => setIsModalVideoOpen(true)}
              >
                Lihat Video
              </Button>
              <Button
                size="sm"
                bgColor="#1ABC9C"
                color="white"
                leftIcon={<IconUserQuestion />}
                onClick={() => navigate(`/material/${id}/quiz`)}
              >
                Soal
              </Button>
            </Flex>
            <Button
              size="sm"
              isDisabled={(materialObj?.material?.subMaterial.length || 0) - 1 === currentIndex}
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              <IconPlayerTrackNextFilled />
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <ModalVideo
        isOpen={isModalVideoOpen}
        title={materialObj?.material?.title}
        video={materialObj?.material?.video}
        onClose={() => setIsModalVideoOpen(false)}
      />
    </>
  );
};

export default MaterialDetailPage;
