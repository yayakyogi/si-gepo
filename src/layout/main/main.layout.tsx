import { Box } from '@chakra-ui/react';
import Header from '@components/ui/header/header.component';
import classNames from 'classnames';
import React from 'react';

import style from './main.module.scss';

interface Props {
  title?: string;
  subtitle?: string;
  backUrl?: string;
  forceBack?: boolean;
  sourcePhoto?: string;
  children: React.ReactNode;
  contentPadding?: number;
}

const MainLayout: React.FC<Props> = ({ title, subtitle, backUrl, forceBack, sourcePhoto, children, contentPadding }) => {
  return (
    <Box className={style.container}>
      {(title || backUrl) && (
        <Header
          title={title || ''}
          subtitle={subtitle || ''}
          backUrl={backUrl}
          forceBack={forceBack}
          sourcePhoto={sourcePhoto}
          classname={style.header}
        />
      )}
      <Box p={contentPadding} className={classNames(style.content, { [style.withHeader]: title || backUrl })}>
        {children}
      </Box>
    </Box>
  );
};

MainLayout.defaultProps = {
  title: '',
  subtitle: '',
  backUrl: undefined,
  forceBack: false,
  sourcePhoto: undefined,
  contentPadding: 5,
};

export default MainLayout;
