import { IconButton } from '@chakra-ui/react';
import { IconChevronLeft } from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonBack: React.FC<{ link: string }> = ({ link }) => {
  const navigate = useNavigate();

  return (
    <IconButton
      aria-label="button-back"
      position="absolute"
      zIndex={2}
      top={3}
      left={3}
      bgColor="#D9435E"
      borderRadius="full"
      onClick={() => navigate(link, { replace: true })}
    >
      <IconChevronLeft color="white" size={30} />
    </IconButton>
  );
};

export default ButtonBack;
