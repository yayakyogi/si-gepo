import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import ButtonBack from '@components/ui/button-back/button-back.component';
import Title from '@components/ui/title/title.component';
import materialJson from '@resources/material.json';
import { material } from '@state/atom';
import { IconLock, IconChecks } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { map } from 'lodash-es';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style.module.scss';

const MaterialPage: React.FC = () => {
  const navigate = useNavigate();

  const [materiNumber] = useAtom(material);

  return (
    <Flex w="full" direction="column" className={style.container}>
      <Box className={style.box}>
        <Flex alignItems="center" mt={2}>
          <ButtonBack link="/homepage" />
          <Box flex={1}>
            <Title isCentered />
          </Box>
        </Flex>
        <Flex direction="column" h="85%" gap={5} alignItems="center">
          <Box flex={1} w="full" mt={5}>
            <Text className={style.materialTitle} fontWeight={400} fontSize={24} mb={5}>
              Materi
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              {map(materialJson, (menu, idx) => {
                return idx !== materiNumber ? (
                  <Box key={idx} className={style.materialLevel}>
                    <Flex justifyContent="center" alignItems="center" h="full">
                      {idx < materiNumber ? <IconChecks size="36" /> : <IconLock size="36" />}
                    </Flex>
                  </Box>
                ) : (
                  <GridItem w="full" key={idx} onClick={() => navigate(`/material/${menu.id}`)}>
                    <Flex justifyContent="center" alignItems="start" gap={2} className={style.materialLevel}>
                      <Text color="white">{idx + 1}.</Text>
                      {menu.name}
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
          <Image src="/images/illustrations/6B. KARAKTER SI GEPO.gif" h="40" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default MaterialPage;
