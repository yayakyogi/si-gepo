import { Text } from '@chakra-ui/react';
import React from 'react';

import style from './title.module.scss';

const Title: React.FC<{ isCentered?: boolean }> = ({ isCentered }) => {
  return (
    <Text className={style.title} textAlign={isCentered ? 'center' : 'left'}>
      Si-GEPO
    </Text>
  );
};

Title.defaultProps = {
  isCentered: false,
};

export default Title;
