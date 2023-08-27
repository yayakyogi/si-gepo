import { Box, Flex, Image, Text } from '@chakra-ui/react';
import classNames from 'classnames';
import React from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import style from './header.module.scss';

interface Props {
  title: string;
  subtitle: string;
  backUrl?: string;
  forceBack?: boolean;
  sourcePhoto?: string;
  classname?: string;
}

const Header: React.FC<Props> = ({ title, subtitle, backUrl, forceBack, sourcePhoto, classname }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (forceBack) {
      navigate(backUrl || '/');
    } else {
      navigate(-1 || backUrl);
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={forceBack ? 5 : 30}
      className={classNames(style.header, classname)}
    >
      <Flex alignItems="center" gap={5}>
        {forceBack && <IconArrowLeft size={30} onClick={goBack} />}
        <Box>
          <Text fontSize="22px" fontWeight="medium">
            {title}
          </Text>
          <Text className={style.subtitle}>{subtitle}</Text>
        </Box>
      </Flex>
      {sourcePhoto && <Image src={sourcePhoto} w={16} borderRadius="lg" />}
    </Flex>
  );
};

Header.defaultProps = {
  backUrl: undefined,
  forceBack: false,
  sourcePhoto: '',
  classname: '',
};

export default Header;
