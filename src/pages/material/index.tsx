import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import ButtonBack from '@components/ui/button-back/button-back.component';
import Title from '@components/ui/title/title.component';
import { material } from '@state/atom';
import { useAtom } from 'jotai';
import { map } from 'lodash-es';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { materials } from '@resources/resources';
import classNames from 'classnames';
import style from './style.module.scss';

const MaterialPage: React.FC = () => {
  const navigate = useNavigate();

  const [materiNumber] = useAtom(material);

  return (
    <Flex w="full" direction="column" className={style.container}>
      <Box className={style.box}>
        <Flex alignItems="center" mt={0}>
          <ButtonBack link="/homepage" />
          <Box flex={1}>
            <Title isCentered />
          </Box>
        </Flex>
        <Flex direction="column" gap={5} alignItems="center">
          <Box flex={1} w="500px" mt={3} mx="auto">
            <Text className={style.materialTitle} fontWeight={400} fontSize={24} mb={5}>
              Materi
            </Text>
            <Grid templateColumns="repeat(3, 160px)" gap={5}>
              {map(materials, (menu, idx) => {
                return idx !== materiNumber ? (
                  <Box key={idx} className={classNames(style.materialLevel, style.materialInactive)}>
                    <Flex justifyContent="center" alignItems="center" h="full">
                      {idx < materiNumber ? (
                        <Flex direction="column" justifyContent="center" alignItems="center" gap={2} w="full">
                          <Image src="/images/illustrations/check.gif" h="16" w="full" />
                          <Text>Completed</Text>
                        </Flex>
                      ) : (
                        <Flex direction="column" justifyContent="center" alignItems="center" gap={2} w="full">
                          <Image src="/images/illustrations/loading.gif" h="16" rounded="full" />
                          <Text>Locked</Text>
                        </Flex>
                      )}
                    </Flex>
                  </Box>
                ) : (
                  <GridItem w="full" key={idx} onClick={() => navigate(`/material/${menu.id}`)} position="relative">
                    <Flex
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      gap={2}
                      className={style.materialLevel}
                    >
                      <Image src="/images/illustrations/11. KOTAK MATERI.gif" h="16" w="16" mr={4} />
                      <Text>Open please...</Text>
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
          <Image src="/images/illustrations/action.gif" h="40" position="absolute" left="-6" bottom={0} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default MaterialPage;
