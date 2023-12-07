/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Button, Flex, IconButton, Image } from '@chakra-ui/react';
import Title from '@components/ui/title/title.component';
import { IconInfoCircle, IconLogout, IconSettings } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalConfirmation from '@components/modal/confirmation/modal.component';
import ModalInfo from '@components/modal/info/info.component';

import style from './style.module.scss';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalConfimartion, setIsModalConfimartion] = useState<boolean>(false);
  const [isModalInfoRule, setIsModalInfoRule] = useState<boolean>(false);
  const [isModalInfoManualBook, setIsModalInfoManualBook] = useState<boolean>(false);

  return (
    <>
      <Flex w="full" direction="column" className={style.container}>
        <Box className={style.box}>
          <Flex h="full" direction="column" justifyContent="center" alignItems="center">
            <Title isCentered />
            <Image src="/images/illustrations/2. HALAMAN MULAI PERMAIANAN.gif" w="32" />
            <Button
              size="lg"
              borderRadius="50px"
              colorScheme="primary"
              className="font-chewy"
              mt={3}
              onClick={() => navigate('/material')}
            >
              Mulai Permainan
            </Button>
          </Flex>
          <IconButton aria-label="rule" className={style.buttonRule} onClick={() => navigate('/rule')}>
            <IconSettings size={35} />
          </IconButton>
          <IconButton aria-label="manual-book" className={style.buttonInfo} onClick={() => navigate('/manual-book')}>
            <IconInfoCircle size={35} />
          </IconButton>
          <IconButton aria-label="logout" className={style.buttonLogout} onClick={() => setIsModalConfimartion(true)}>
            <IconLogout size={35} />
          </IconButton>
        </Box>
      </Flex>

      <ModalConfirmation
        isOpen={isModalConfimartion}
        message="Anda yakin ingin keluar dari pemainan?"
        title="Warning!"
        onSubmit={() => navigate('/login', { replace: true })}
        onClose={() => setIsModalConfimartion(false)}
      />

      <ModalInfo isOpen={isModalInfoRule} title="Aturan Permainan" message="" onClose={() => setIsModalInfoRule(false)} />

      <ModalInfo
        isOpen={isModalInfoManualBook}
        title="Buku Petunjuk"
        message="Dalam Tahap Pengembangan"
        onClose={() => setIsModalInfoManualBook(false)}
      />
    </>
  );
};

export default HomePage;
