import { Flex } from '@chakra-ui/react';
import React from 'react';

import style from './progress-bar.module.scss';

const ProgressBar: React.FC<{ currentValue: number; maxValue: number }> = ({ currentValue, maxValue }) => {
  const renderBar = () => {
    const bar: any = [];

    for (let i = 1; i <= maxValue; i++) {
      if (i <= currentValue) {
        bar.push(<div className={style.bar} />);
      } else {
        bar.push(<div className={style.barInactive} />);
      }
    }

    return bar;
  };

  return (
    <Flex w="full" direction="row" gap={3} alignItems="center" mb="3">
      {renderBar()}
    </Flex>
  );
};

export default ProgressBar;
