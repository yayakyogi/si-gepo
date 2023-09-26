/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Flex } from '@chakra-ui/react';
import ButtonBack from '@components/ui/button-back/button-back.component';
import React from 'react';

const ManualBookPage: React.FC = () => {
  return (
    <Flex
      justifyContent="center"
      w="full"
      backgroundImage="/images/illustrations/3. HALAMAN REGISTRASI_.jpg"
      backgroundSize="cover"
    >
      <Box position="absolute" top={3} left={3}>
        <ButtonBack link="/homepage" />
      </Box>
      <iframe
        style={{ maxWidth: '600px', width: '100%' }}
        src="https://online.flipbuilder.com/gqsvx/tcpq/index.html"
        // seamless="seamless"
        // allowfullscreen="true"
      />
    </Flex>
  );
};

export default ManualBookPage;
