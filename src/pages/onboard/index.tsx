import { Button, Flex, Image, Text } from '@chakra-ui/react';
import Title from '@components/ui/title/title.component';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style.module.scss';

const OnBoardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex w="full" direction="column" justifyContent="center" alignItems="center" gap={3} className={style.container}>
      <Title />
      <Image src="/images/illustrations/1. HALAMAN LOGIN.gif" h="28" />
      <Button mb={3} onClick={() => navigate('/login')}>
        Login
      </Button>
      <Image src="/images/logo/UBHI TAG LINE LEFT.png" w="52" />
      <Text fontWeight={700} fontSize={12}>
        NOURMA OKTAVIARINI | AJAR DIRGANTORO
      </Text>
    </Flex>
  );
};

export default OnBoardPage;
