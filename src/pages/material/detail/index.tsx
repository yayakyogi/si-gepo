import { Box, Button, Flex, IconButton, Image, Text } from '@chakra-ui/react';
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
import { useAtomValue } from 'jotai';
import { material } from '@state/atom';

import style from './style.module.scss';

const MaterialDetailPage: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [materialObj, setMaterialObj] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState<boolean>(false);
  const materi = useAtomValue(material);

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
      <Box overflow="scroll" py={2} px={6}>
        <Text color="white" fontWeight={700} fontSize={18} mb={3}>
          {step.title}
        </Text>
        <Text color="white" fontSize={16} textAlign="justify">
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
            <Flex alignItems="center" gap={2} mb={3}>
              <IconButton aria-label="button-back" variant="link" onClick={() => navigate('/material', { replace: true })}>
                <IconChevronLeft color="white" size={24} />
              </IconButton>

              <Text className={style.title}>{materialObj?.material?.title}</Text>
            </Flex>
            <ProgressBar currentValue={currentIndex + 1} maxValue={materialObj?.material?.subMaterial.length} />
          </Box>
          <Flex flex={1}>
            {renderStep()}
            <Image src={`/images/illustrations/MATERI ${id}.gif`} alt="tes" width="25%" height="150px" />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            position="sticky"
            bottom={0}
            mt={3}
            className={style.footerAction}
          >
            <Button size="sm" isDisabled={currentIndex < 1} onClick={() => setCurrentIndex(currentIndex - 1)}>
              <IconPlayerTrackPrevFilled size="20" />
            </Button>
            <Flex gap={3}>
              <Button
                size="sm"
                colorScheme="primary"
                leftIcon={<IconPlayerPlayFilled size="20" />}
                onClick={() => setIsModalVideoOpen(true)}
              >
                Lihat Video
              </Button>
              <Button
                size="sm"
                bgColor="#1ABC9C"
                color="white"
                isDisabled={currentIndex !== (materialObj?.material?.subMaterial.length || 0) - 1 || materi === Number(id)}
                leftIcon={<IconUserQuestion size="20" />}
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
              <IconPlayerTrackNextFilled size="20" />
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
