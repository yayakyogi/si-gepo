import { Box, Flex, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import ButtonBack from '@components/ui/button-back/button-back.component';
import React from 'react';

const RulePage: React.FC = () => {
  return (
    <Box
      padding="10px"
      w="full"
      backgroundImage="/images/illustrations/3. HALAMAN REGISTRASI_.jpg"
      backgroundSize="cover"
      color="white"
    >
      <Box position="fixed" top={0} left={0} zIndex={0} w="full" h="full" bgColor="rgba(0,0,0,0.7)" />
      <Flex gap={3} zIndex={1}>
        <ButtonBack link="/homepage" />
        <Text fontWeight={500} fontSize={20} mb={4} zIndex={1}>
          Aturan Permainan Si-GEPO
        </Text>
      </Flex>
      <Flex direction="column" gap={3} px={5} position="relative" className="font-chewy">
        <OrderedList>
          <ListItem fontSize={16}>SETIAP MATERI TERDIRI DARI 7 ITEM PERTANYAAN YANG MEMPUNYAI INDIKATOR</ListItem>
          <UnorderedList>
            <ListItem>Pola interaksi pikiran, emosi dan perilaku</ListItem>
            <ListItem>Identifikasi core beliefs</ListItem>
            <ListItem>Identifikasi distorsi positif</ListItem>
            <ListItem>Identifikasi pikiran otomatis</ListItem>
            <ListItem>mengetahui insight</ListItem>
          </UnorderedList>
          <ListItem mt={3}>POIN JAWABAN MATERI</ListItem>
          <UnorderedList>
            <ListItem>80-100 jika benar lebih dari 6-7 soal (Luar Biasa)</ListItem>
            <ListItem>50-79 jika benar lebih dari 3-5 soal (Hebat)</ListItem>
            <ListItem>10-49 Jika benar dari 1-2 soal (Tingkatkan)</ListItem>
          </UnorderedList>
        </OrderedList>
      </Flex>
    </Box>
  );
};

export default RulePage;
