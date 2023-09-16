import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import ButtonBack from '@components/ui/button-back/button-back.component';
import Title from '@components/ui/title/title.component';
import materialJson from '@resources/material.json';
import { material } from '@state/atom';
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
        <ButtonBack link="/homepage" />
        <Title isCentered />
        <Flex gap={5} alignItems="center">
          <Image src="/images/illustrations/6B. KARAKTER SI GEPO.gif" h="40" />
          <Box w="full">
            <Text className={style.materialTitle} fontWeight={400} fontSize={24} mb={5}>
              Materi
            </Text>
            <Grid templateColumns="repeat(3, 2fr)" gap={10}>
              {map(materialJson, (menu, idx) => {
                return idx > materiNumber ? (
                  <Text>Disabled</Text>
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
        </Flex>
      </Box>
    </Flex>
  );
};

export default MaterialPage;
