import { Box, Flex, Image } from '@chakra-ui/react';
import { map } from 'lodash-es';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './home.module.scss';

interface Props {
  children: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathArray = pathname.split('/');
  const pathCurrent = pathArray[1];

  const menus = [
    {
      key: 'home',
      image_active: 'ic_home.svg',
      image_normal: 'ic_home_normal.svg',
    },
    {
      key: 'order',
      image_active: 'ic_order.svg',
      image_normal: 'ic_order_normal.svg',
    },
    {
      key: 'profile',
      image_active: 'ic_profile.svg',
      image_normal: 'ic_profile_normal.svg',
    },
  ];

  return (
    <Flex w="full" direction="column">
      <Box flex={1}>{children}</Box>
      <Flex justifyContent="space-around" className={style.tabMenu}>
        {map(menus, (menu) => {
          return (
            <Flex key={menu.key} alignItems="center" justify="center" onClick={() => navigate(`/${menu.key}`)}>
              <Image src={`/images/icons/home/${pathCurrent === menu.key ? menu.image_active : menu.image_normal}`} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default HomeLayout;
