import { Box, Flex, Text } from '@chakra-ui/react';
import ButtonBack from '@components/ui/button-back/button-back.component';
import React from 'react';

const RulePage: React.FC = () => {
  return (
    <Box
      padding="10px"
      ps={20}
      w="full"
      backgroundImage="/images/illustrations/3. HALAMAN REGISTRASI_.jpg"
      backgroundSize="cover"
      color="white"
    >
      <Box position="fixed" top={0} left={0} zIndex={0} w="full" h="full" bgColor="rgba(0,0,0,0.5)" />
      <Box position="absolute" top={0} left={0}>
        <ButtonBack link="/homepage" />
      </Box>
      <Flex direction="column" gap={3} zIndex={1} position="relative">
        <Text fontWeight={500} fontSize={20} mb={4}>
          Aturan Permainan Si-GEPO
        </Text>
        <Text>• LOGIN (ISI IDENTITAS)</Text>
        <Text>• BUKA MANUAL PETUNJUK</Text>
        <Text>• MULAI PERMAINAN DENGAN KARAKTER SI-GEPO</Text>
        <Text>• MULAI MATERI</Text>
        <Text>• BUKA DESKRIPSI MATERI</Text>
        <Text>• BUKA VIDEO MATERI</Text>
        <Text>• KERJAKAN SOAL SECARA BERURUTAN (WAJIB DIJAWAB)</Text>
        <Text>• TAMPILAN DENGAN SKOR & POP UP</Text>
        <Text>• KEMBALI KE MATERI SELANJUTNYA</Text>
      </Flex>
    </Box>
  );
};

export default RulePage;
