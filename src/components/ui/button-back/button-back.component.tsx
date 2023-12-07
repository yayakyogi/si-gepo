import { IconButton } from '@chakra-ui/react';
import { IconChevronLeft } from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonBack: React.FC<{ link: string }> = ({ link }) => {
  const navigate = useNavigate();

  return (
    <IconButton
      aria-label="button-back"
      bgColor="#D9435E"
      borderRadius="full"
      size="sm"
      onClick={() => navigate(link, { replace: true })}
    >
      <IconChevronLeft color="white" />
    </IconButton>
  );
};

export default ButtonBack;
